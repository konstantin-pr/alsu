( function( $ ) {

	'use strict';

	if ( typeof wpcf7 === 'undefined' || wpcf7 === null ) {
		return;
	}

	wpcf7 = $.extend( {
		cached: 0,
		inputs: []
	}, wpcf7 );

	$( function() {
		wpcf7.supportHtml5 = ( function() {
			var features = {};
			var input = document.createElement( 'input' );

			features.placeholder = 'placeholder' in input;

			var inputTypes = [ 'email', 'url', 'tel', 'number', 'range', 'date' ];

			$.each( inputTypes, function( index, value ) {
				input.setAttribute( 'type', value );
				features[ value ] = input.type !== 'text';
			} );

			return features;
		} )();

		$( 'div.wpcf7 > form' ).each( function() {
			var $form = $( this );
			wpcf7.initForm( $form );

			if ( wpcf7.cached ) {
				wpcf7.refill( $form );
			}
		} );
	} );

	wpcf7.getId = function( form ) {
		return parseInt( $( 'input[name="_wpcf7"]', form ).val(), 10 );
	};

	wpcf7.initForm = function( form ) {
		var $form = $( form );

		$form.submit( function( event ) {
			if ( typeof window.FormData !== 'function' ) {
				return;
			}

			wpcf7.submit( $form );
			event.preventDefault();
		} );

		$( '.wpcf7-submit', $form ).after( '<span class="ajax-loader"></span>' );

		wpcf7.toggleSubmit( $form );

		$form.on( 'click', '.wpcf7-acceptance', function() {
			wpcf7.toggleSubmit( $form );
		} );

		// Exclusive Checkbox
		$( '.wpcf7-exclusive-checkbox', $form ).on( 'click', 'input:checkbox', function() {
			var name = $( this ).attr( 'name' );
			$form.find( 'input:checkbox[name="' + name + '"]' ).not( this ).prop( 'checked', false );
		} );

		// Free Text Option for Checkboxes and Radio Buttons
		$( '.wpcf7-list-item.has-free-text', $form ).each( function() {
			var $freetext = $( ':input.wpcf7-free-text', this );
			var $wrap = $( this ).closest( '.wpcf7-form-control' );

			if ( $( ':checkbox, :radio', this ).is( ':checked' ) ) {
				$freetext.prop( 'disabled', false );
			} else {
				$freetext.prop( 'disabled', true );
			}

			$wrap.on( 'change', ':checkbox, :radio', function() {
				var $cb = $( '.has-free-text', $wrap ).find( ':checkbox, :radio' );

				if ( $cb.is( ':checked' ) ) {
					$freetext.prop( 'disabled', false ).focus();
				} else {
					$freetext.prop( 'disabled', true );
				}
			} );
		} );

		// Placeholder Fallback
		if ( ! wpcf7.supportHtml5.placeholder ) {
			$( '[placeholder]', $form ).each( function() {
				$( this ).val( $( this ).attr( 'placeholder' ) );
				$( this ).addClass( 'placeheld' );

				$( this ).focus( function() {
					if ( $( this ).hasClass( 'placeheld' ) ) {
						$( this ).val( '' ).removeClass( 'placeheld' );
					}
				} );

				$( this ).blur( function() {
					if ( '' === $( this ).val() ) {
						$( this ).val( $( this ).attr( 'placeholder' ) );
						$( this ).addClass( 'placeheld' );
					}
				} );
			} );
		}

		if ( wpcf7.jqueryUi && ! wpcf7.supportHtml5.date ) {
			$form.find( 'input.wpcf7-date[type="date"]' ).each( function() {
				$( this ).datepicker( {
					dateFormat: 'yy-mm-dd',
					minDate: new Date( $( this ).attr( 'min' ) ),
					maxDate: new Date( $( this ).attr( 'max' ) )
				} );
			} );
		}

		if ( wpcf7.jqueryUi && ! wpcf7.supportHtml5.number ) {
			$form.find( 'input.wpcf7-number[type="number"]' ).each( function() {
				$( this ).spinner( {
					min: $( this ).attr( 'min' ),
					max: $( this ).attr( 'max' ),
					step: $( this ).attr( 'step' )
				} );
			} );
		}

		// Character Count
		$( '.wpcf7-character-count', $form ).each( function() {
			var $count = $( this );
			var name = $count.attr( 'data-target-name' );
			var down = $count.hasClass( 'down' );
			var starting = parseInt( $count.attr( 'data-starting-value' ), 10 );
			var maximum = parseInt( $count.attr( 'data-maximum-value' ), 10 );
			var minimum = parseInt( $count.attr( 'data-minimum-value' ), 10 );

			var updateCount = function( target ) {
				var $target = $( target );
				var length = $target.val().length;
				var count = down ? starting - length : length;
				$count.attr( 'data-current-value', count );
				$count.text( count );

				if ( maximum && maximum < length ) {
					$count.addClass( 'too-long' );
				} else {
					$count.removeClass( 'too-long' );
				}

				if ( minimum && length < minimum ) {
					$count.addClass( 'too-short' );
				} else {
					$count.removeClass( 'too-short' );
				}
			};

			$( ':input[name="' + name + '"]', $form ).each( function() {
				updateCount( this );

				$( this ).keyup( function() {
					updateCount( this );
				} );
			} );
		} );

		// URL Input Correction
		$form.on( 'change', '.wpcf7-validates-as-url', function() {
			var val = $.trim( $( this ).val() );

			if ( val
			&& ! val.match( /^[a-z][a-z0-9.+-]*:/i )
			&& -1 !== val.indexOf( '.' ) ) {
				val = val.replace( /^\/+/, '' );
				val = 'http://' + val;
			}

			$( this ).val( val );
		} );
	};

	wpcf7.submit = function( form ) {
		if ( typeof window.FormData !== 'function' ) {
			return;
		}

		var $form = $( form );

		$( '.ajax-loader', $form ).addClass( 'is-active' );

		$( '[placeholder].placeheld', $form ).each( function( i, n ) {
			$( n ).val( '' );
		} );

		wpcf7.clearResponse( $form );

		var formData = new FormData( $form.get( 0 ) );

		var detail = {
			id: $form.closest( 'div.wpcf7' ).attr( 'id' ),
			status: 'init',
			inputs: [],
			formData: formData
		};

		$.each( $form.serializeArray(), function( i, field ) {
			if ( '_wpcf7' == field.name ) {
				detail.contactFormId = field.value;
			} else if ( '_wpcf7_version' == field.name ) {
				detail.pluginVersion = field.value;
			} else if ( '_wpcf7_locale' == field.name ) {
				detail.contactFormLocale = field.value;
			} else if ( '_wpcf7_unit_tag' == field.name ) {
				detail.unitTag = field.value;
			} else if ( '_wpcf7_container_post' == field.name ) {
				detail.containerPostId = field.value;
			} else if ( field.name.match( /^_wpcf7_\w+_free_text_/ ) ) {
				var owner = field.name.replace( /^_wpcf7_\w+_free_text_/, '' );
				detail.inputs.push( {
					name: owner + '-free-text',
					value: field.value
				} );
			} else if ( field.name.match( /^_/ ) ) {
				// do nothing
			} else {
				detail.inputs.push( field );
			}
		} );

		wpcf7.triggerEvent( $form.closest( 'div.wpcf7' ), 'beforesubmit', detail );

		var ajaxSuccess = function( data, status, xhr, $form ) {
			detail.id = $( data.into ).attr( 'id' );
			detail.status = data.status;
			detail.apiResponse = data;

			var $message = $( '.wpcf7-response-output', $form );

			switch ( data.status ) {
				case 'validation_failed':
					$.each( data.invalidFields, function( i, n ) {
						$( n.into, $form ).each( function() {
							wpcf7.notValidTip( this, n.message );
							$( '.wpcf7-form-control', this ).addClass( 'wpcf7-not-valid' );
							$( '[aria-invalid]', this ).attr( 'aria-invalid', 'true' );
						} );
					} );

					$message.addClass( 'wpcf7-validation-errors' );
					$form.addClass( 'invalid' );

					wpcf7.triggerEvent( data.into, 'invalid', detail );
					break;
				case 'acceptance_missing':
					$message.addClass( 'wpcf7-acceptance-missing' );
					$form.addClass( 'unaccepted' );

					wpcf7.triggerEvent( data.into, 'unaccepted', detail );
					break;
				case 'spam':
					$message.addClass( 'wpcf7-spam-blocked' );
					$form.addClass( 'spam' );

					$( '[name="g-recaptcha-response"]', $form ).each( function() {
						if ( '' === $( this ).val() ) {
							var $recaptcha = $( this ).closest( '.wpcf7-form-control-wrap' );
							wpcf7.notValidTip( $recaptcha, wpcf7.recaptcha.messages.empty );
						}
					} );

					wpcf7.triggerEvent( data.into, 'spam', detail );
					break;
				case 'aborted':
					$message.addClass( 'wpcf7-aborted' );
					$form.addClass( 'aborted' );

					wpcf7.triggerEvent( data.into, 'aborted', detail );
					break;
				case 'mail_sent':
					$message.addClass( 'wpcf7-mail-sent-ok' );
					$form.addClass( 'sent' );

					wpcf7.triggerEvent( data.into, 'mailsent', detail );
					break;
				case 'mail_failed':
					$message.addClass( 'wpcf7-mail-sent-ng' );
					$form.addClass( 'failed' );

					wpcf7.triggerEvent( data.into, 'mailfailed', detail );
					break;
				default:
					var customStatusClass = 'custom-'
						+ data.status.replace( /[^0-9a-z]+/i, '-' );
					$message.addClass( 'wpcf7-' + customStatusClass );
					$form.addClass( customStatusClass );
			}

			wpcf7.refill( $form, data );

			wpcf7.triggerEvent( data.into, 'submit', detail );

			if ( 'mail_sent' == data.status ) {
				$form.each( function() {
					this.reset();
				} );

				wpcf7.toggleSubmit( $form );
			}

			$form.find( '[placeholder].placeheld' ).each( function( i, n ) {
				$( n ).val( $( n ).attr( 'placeholder' ) );
			} );

			$message.html( '' ).append( data.message ).slideDown( 'fast' );
			$message.attr( 'role', 'alert' );

			$( '.screen-reader-response', $form.closest( '.wpcf7' ) ).each( function() {
				var $response = $( this );
				$response.html( '' ).attr( 'role', '' ).append( data.message );

				if ( data.invalidFields ) {
					var $invalids = $( '<ul></ul>' );

					$.each( data.invalidFields, function( i, n ) {
						if ( n.idref ) {
							var $li = $( '<li></li>' ).append( $( '<a></a>' ).attr( 'href', '#' + n.idref ).append( n.message ) );
						} else {
							var $li = $( '<li></li>' ).append( n.message );
						}

						$invalids.append( $li );
					} );

					$response.append( $invalids );
				}

				$response.attr( 'role', 'alert' ).focus();
			} );
		};

		$.ajax( {
			type: 'POST',
			url: wpcf7.apiSettings.getRoute(
				'/contact-forms/' + wpcf7.getId( $form ) + '/feedback' ),
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false
		} ).done( function( data, status, xhr ) {
			ajaxSuccess( data, status, xhr, $form );
			$( '.ajax-loader', $form ).removeClass( 'is-active' );
		} ).fail( function( xhr, status, error ) {
			var $e = $( '<div class="ajax-error"></div>' ).text( error.message );
			$form.after( $e );
		} );
	};

	wpcf7.triggerEvent = function( target, name, detail ) {
		var $target = $( target );

		/* DOM event */
		var event = new CustomEvent( 'wpcf7' + name, {
			bubbles: true,
			detail: detail
		} );

		$target.get( 0 ).dispatchEvent( event );

		/* jQuery event */
		$target.trigger( 'wpcf7:' + name, detail );
		$target.trigger( name + '.wpcf7', detail ); // deprecated
	};

	wpcf7.toggleSubmit = function( form, state ) {
		var $form = $( form );
		var $submit = $( 'input:submit', $form );

		if ( typeof state !== 'undefined' ) {
			$submit.prop( 'disabled', ! state );
			return;
		}

		if ( $form.hasClass( 'wpcf7-acceptance-as-validation' ) ) {
			return;
		}

		$submit.prop( 'disabled', false );

		$( '.wpcf7-acceptance', $form ).each( function() {
			var $span = $( this );
			var $input = $( 'input:checkbox', $span );

			if ( ! $span.hasClass( 'optional' ) ) {
				if ( $span.hasClass( 'invert' ) && $input.is( ':checked' )
				|| ! $span.hasClass( 'invert' ) && ! $input.is( ':checked' ) ) {
					$submit.prop( 'disabled', true );
					return false;
				}
			}
		} );
	};

	wpcf7.notValidTip = function( target, message ) {
		var $target = $( target );
		$( '.wpcf7-not-valid-tip', $target ).remove();
		$( '<span role="alert" class="wpcf7-not-valid-tip"></span>' )
			.text( message ).appendTo( $target );

		if ( $target.is( '.use-floating-validation-tip *' ) ) {
			var fadeOut = function( target ) {
				$( target ).not( ':hidden' ).animate( {
					opacity: 0
				}, 'fast', function() {
					$( this ).css( { 'z-index': -100 } );
				} );
			};

			$target.on( 'mouseover', '.wpcf7-not-valid-tip', function() {
				fadeOut( this );
			} );

			$target.on( 'focus', ':input', function() {
				fadeOut( $( '.wpcf7-not-valid-tip', $target ) );
			} );
		}
	};

	wpcf7.refill = function( form, data ) {
		var $form = $( form );

		var refillCaptcha = function( $form, items ) {
			$.each( items, function( i, n ) {
				$form.find( ':input[name="' + i + '"]' ).val( '' );
				$form.find( 'img.wpcf7-captcha-' + i ).attr( 'src', n );
				var match = /([0-9]+)\.(png|gif|jpeg)$/.exec( n );
				$form.find( 'input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]' ).attr( 'value', match[ 1 ] );
			} );
		};

		var refillQuiz = function( $form, items ) {
			$.each( items, function( i, n ) {
				$form.find( ':input[name="' + i + '"]' ).val( '' );
				$form.find( ':input[name="' + i + '"]' ).siblings( 'span.wpcf7-quiz-label' ).text( n[ 0 ] );
				$form.find( 'input:hidden[name="_wpcf7_quiz_answer_' + i + '"]' ).attr( 'value', n[ 1 ] );
			} );
		};

		if ( typeof data === 'undefined' ) {
			$.ajax( {
				type: 'GET',
				url: wpcf7.apiSettings.getRoute(
					'/contact-forms/' + wpcf7.getId( $form ) + '/refill' ),
				beforeSend: function( xhr ) {
					var nonce = $form.find( ':input[name="_wpnonce"]' ).val();

					if ( nonce ) {
						xhr.setRequestHeader( 'X-WP-Nonce', nonce );
					}
				},
				dataType: 'json'
			} ).done( function( data, status, xhr ) {
				if ( data.captcha ) {
					refillCaptcha( $form, data.captcha );
				}

				if ( data.quiz ) {
					refillQuiz( $form, data.quiz );
				}
			} );

		} else {
			if ( data.captcha ) {
				refillCaptcha( $form, data.captcha );
			}

			if ( data.quiz ) {
				refillQuiz( $form, data.quiz );
			}
		}
	};

	wpcf7.clearResponse = function( form ) {
		var $form = $( form );
		$form.removeClass( 'invalid spam sent failed' );
		$form.siblings( '.screen-reader-response' ).html( '' ).attr( 'role', '' );

		$( '.wpcf7-not-valid-tip', $form ).remove();
		$( '[aria-invalid]', $form ).attr( 'aria-invalid', 'false' );
		$( '.wpcf7-form-control', $form ).removeClass( 'wpcf7-not-valid' );

		$( '.wpcf7-response-output', $form )
			.hide().empty().removeAttr( 'role' )
			.removeClass( 'wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked' );
	};

	wpcf7.apiSettings.getRoute = function( path ) {
		var url = wpcf7.apiSettings.root;

		url = url.replace(
			wpcf7.apiSettings.namespace,
			wpcf7.apiSettings.namespace + path );

		return url;
	};

} )( jQuery );

/*
 * Polyfill for Internet Explorer
 * See https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
( function () {
	if ( typeof window.CustomEvent === "function" ) return false;

	function CustomEvent ( event, params ) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent( 'CustomEvent' );
		evt.initCustomEvent( event,
			params.bubbles, params.cancelable, params.detail );
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
} )();
;
var sbi_js_exists = (typeof sbi_js_exists !== 'undefined') ? true : false;
if(!sbi_js_exists){

    //Shim for "fixing" IE's lack of support (IE < 9) for applying slice on host objects like NamedNodeMap, NodeList, and HTMLCollection) https://github.com/stevenschobert/instafeed.js/issues/84
    (function(){"use strict";var e=Array.prototype.slice;try{e.call(document.documentElement)}catch(t){Array.prototype.slice=function(t,n){n=typeof n!=="undefined"?n:this.length;if(Object.prototype.toString.call(this)==="[object Array]"){return e.call(this,t,n)}var r,i=[],s,o=this.length;var u=t||0;u=u>=0?u:o+u;var a=n?n:o;if(n<0){a=o+n}s=a-u;if(s>0){i=new Array(s);if(this.charAt){for(r=0;r<s;r++){i[r]=this.charAt(u+r)}}else{for(r=0;r<s;r++){i[r]=this[u+r]}}}return i}}})()

    //IE8 also doesn't offer the .bind() method triggered by the 'sortBy' property. Copy and paste the polyfill offered here:
    if(!Function.prototype.bind){Function.prototype.bind=function(e){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")}var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},i=function(){return n.apply(this instanceof r&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};r.prototype=this.prototype;i.prototype=new r;return i}}

    /* Font Awesome SVG implementation */
    var sbIconSVG = {
        'fa-clock' : 'class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>',
        'fa-play' : 'class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>',
        'fa-image' : 'class="svg-inline--fa fa-image fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="far" data-icon="image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg>',
        'fa-user' : 'class="svg-inline--fa fa-user fa-w-16" style="margin-right: 3px;" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M96 160C96 71.634 167.635 0 256 0s160 71.634 160 160-71.635 160-160 160S96 248.366 96 160zm304 192h-28.556c-71.006 42.713-159.912 42.695-230.888 0H112C50.144 352 0 402.144 0 464v24c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24v-24c0-61.856-50.144-112-112-112z"></path></svg>',
        'fa-comment' : 'class="svg-inline--fa fa-comment fa-w-18" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M576 240c0 115-129 208-288 208-48.3 0-93.9-8.6-133.9-23.8-40.3 31.2-89.8 50.3-142.4 55.7-5.2.6-10.2-2.8-11.5-7.7-1.3-5 2.7-8.1 6.6-11.8 19.3-18.4 42.7-32.8 51.9-94.6C21.9 330.9 0 287.3 0 240 0 125.1 129 32 288 32s288 93.1 288 208z"></path></svg>',
        'fa-heart' : 'class="svg-inline--fa fa-heart fa-w-18" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M414.9 24C361.8 24 312 65.7 288 89.3 264 65.7 214.2 24 161.1 24 70.3 24 16 76.9 16 165.5c0 72.6 66.8 133.3 69.2 135.4l187 180.8c8.8 8.5 22.8 8.5 31.6 0l186.7-180.2c2.7-2.7 69.5-63.5 69.5-136C560 76.9 505.7 24 414.9 24z"></path></svg>',
        'fa-check' : 'class="svg-inline--fa fa-check fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>',
        'fa-exclamation-circle' : 'class="svg-inline--fa fa-exclamation-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>',
        'fa-map-marker' : 'class="svg-inline--fa fa-map-marker fa-w-12" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="map-marker" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"></path></svg>',
        'fa-clone' : 'class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" data-fa-processed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path></svg>',
        'fa-chevron-right' : 'class="svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>',
        'fa-chevron-left' : 'class="svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>',
        'fa-share' : 'class="svg-inline--fa fa-share fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg>',
        'fa-times' : 'class="svg-inline--fa fa-times fa-w-12" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path></svg>',
        'fa-envelope' : 'class="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>',
        'fa-edit' : 'class="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" data-fa-processed="" data-prefix="far" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>',
        'fa-arrows-alt' : 'class="svg-inline--fa fa-arrows-alt fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="arrows-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"></path></svg>',
        'fa-check-circle' : 'class="svg-inline--fa fa-check-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>',
        'fa-ban' : 'class="svg-inline--fa fa-ban fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="ban" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"></path></svg>',
        'fa-facebook-square' : 'class="svg-inline--fa fa-facebook-square fa-w-14" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg>',
        'fa-twitter' : 'class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>',
        'fa-google-plus' : 'class="svg-inline--fa fa-google-plus fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="google-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm-70.7 372c-68.8 0-124-55.5-124-124s55.2-124 124-124c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9c1.3 6.8 1.9 13.6 1.9 20.7 0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H372v-35.5h-35.5v-35.5H372v-35.5h35.5v35.5h35.2v35.5h-35.2z"></path></svg>',
        'fa-instagram' : 'class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>',
        'fa-linkedin' : 'class="svg-inline--fa fa-linkedin fa-w-14" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>',
        'fa-pinterest' : 'class="svg-inline--fa fa-pinterest fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="pinterest" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg>',
        'fa-spinner' : 'class="svg-inline--fa fa-spinner fa-w-16 fa-pulse" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg>',
        'fa-spin' : 'class="svg-inline--fa fa-spin fa-w-16 fa-pulse" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg>'
    };

    function sbSVGify(elem) {
        if (sb_instagram_js_options.font_method != 'fontfile') {

            if (typeof elem === 'undefined') {
                elem = jQuery('.sbi');
            }

            elem.each(function() {
                jQuery(this).find('i.fa').each(function() {
                    var faClass = jQuery(this).attr('class').match(/fa-[a-z-]+/),
                        styles = jQuery(this).attr('style');
                    if (faClass && typeof sbIconSVG[faClass[0]] !== 'undefined') {
                        var theStyle = typeof styles !== 'undefined' ? 'style="'+styles+'" ' : '';
                        jQuery(this).replaceWith('<svg '+theStyle+sbIconSVG[faClass[0]]);
                    } else {
                        console.log(faClass,'missing');
                    }
                })
            });
            sbiSizeSVG(elem);
        }
    }

    // backup for themes/plugins that won't clear CSS cache
    function sbiSizeSVG(elem) {
        if (elem.find('svg').innerWidth() > 48 || elem.find('.sbi_follow_btn svg').innerWidth() > 30 || elem.find('.fa-clone').last().innerWidth() > 24 || elem.find('.fa-play').last().innerWidth() > 48) {
            jQuery('.sbi_follow_btn svg').css({
                'margin-bottom': '-4px',
                'margin-right': '7px',
                'font-size': '15px',
                'width': '15px'
            });
            elem.find('.fa-spinner').css({
                'font-size': '15px',
                'width': '15px'
            });
            if (elem.find('.sbi_type_carousel .fa-clone').length){
                elem.find('.sbi_type_carousel .fa-clone').each(function() {
                    var size = '24px',
                        offset = '8px';
                    if (elem.hasClass('sbi_small')) {
                        size = '12px';
                        offset = '5px';
                    } else if (elem.hasClass('sbi_medium')){
                        size = '18px';
                        offset = '5px';
                    }

                    jQuery(this).css({
                        'top': offset,
                        'right': offset,
                        'position': 'absolute',
                        'font-size': size,
                        'width': size,
                        'color': '#fff',
                        '-webkit-filter' : 'drop-shadow( 0px 0px 2px rgba(0,0,0,.4) )',
                        'filter' : 'drop-shadow( 0px 0px 2px rgba(0,0,0,.4) )'
                    });
                });
            }
            if (elem.find('.sbi_item .fa-play').length){
                elem.find('.sbi_item .fa-play').each(function() {
                    var size = '48px',
                        margintop = '-24px',
                        marginleft = '-19px';
                    if (jQuery(this).closest('.sbi').hasClass('sbi_small')) {
                        size = '18px';
                        margintop = '-9px';
                        marginleft = '-7px';
                    } else if (jQuery(this).closest('.sbi').hasClass('sbi_medium')){
                        size = '23px';
                        margintop = '-12px';
                        marginleft = '-10px';
                    }

                    jQuery(this).css({
                        'top': '50%',
                        'right': '50%',
                        'position': 'absolute',
                        'font-size': size,
                        'width': size,
                        'margin-top': margintop,
                        'margin-left': marginleft,
                        'color': '#fff',
                        '-webkit-filter' : 'drop-shadow( 0px 0px 2px rgba(0,0,0,.4) )',
                        'filter' : 'drop-shadow( 0px 0px 2px rgba(0,0,0,.4) )'
                    });
                });
            }
        }
    }

    // add links to page
    var addLinks={regexString:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",hashtags:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=addLinks._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this.regexString.charAt(s)+this.regexString.charAt(o)+this.regexString.charAt(u)+this.regexString.charAt(a)}return t},handles:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this.regexString.indexOf(e.charAt(f++));o=this.regexString.indexOf(e.charAt(f++));u=this.regexString.indexOf(e.charAt(f++));a=this.regexString.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=addLinks._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
    function addLinksToPage(s) {
        if ( (s.match(/\./g) || []).length === 2) {
            return s;
        }
        var a = s.split('.'),
            b = a[0],
            c = addLinks.handles(a[1]),
            d = addLinks.handles(a[2]+a[3]);

        return b+'.'+c+'.'+d;
    }

    //Start plugin code
    function sbi_init(_cache){

        var $i = 0, //Used for iterating lightbox
            sbi_time = 0;

        sbiCreatePage( function() {
            // using this code as the callback to make sure we know if includewords is being used
            // and we need to stagger the loading of the feeds
            jQuery('#sb_instagram.sbi').each(function () {
                var feedOptions = JSON.parse( this.getAttribute('data-options') );
            });

        });

        //Wrapped in a function to delay the feeds being loaded until includewords feeds are detected
        function sbiCreatePage(_callback) {

            // forces the function to wait until the includewords detecting code is run
            _callback();
            window.sbiCacheStatuses = {};
            window.sbiFeedMeta = {};
            window.sbiUseBackup = {};

            jQuery('#sb_instagram.sbi').each(function(){ //Ends on line 1676

                var var_this = this,
                    feedOptions = JSON.parse( var_this.getAttribute('data-options') );

                //Add feed index attr (for lightbox iteration)
                $i++;
                jQuery(this).attr('data-sbi-index', $i);
                // setting up some global objects to keep track of various statuses used for the caching system
                feedOptions.feedIndex = $i;
                window.sbiCacheStatuses[$i] = {
                    'header'    : ( feedOptions.sbiHeaderCache == 'true' ),
                    'feed'      : ( feedOptions.sbiCacheExists == 'true' )
                };
                var useBackUpJson = (typeof feedOptions.useBackup !== 'undefined') ? feedOptions.useBackup : '';
                window.sbiUseBackup[$i] = {
                    'header'    : ( useBackUpJson.indexOf( 'header' ) > -1 ),
                    'feed'      : ( useBackUpJson.indexOf( 'feed' ) > -1 )
                };
                window.sbiFeedMeta[$i] = {
                    'error'    : {},
                    'idsInFeed' : [],
                    'postsInFeed' : [] //Keeps track of photo IDs for removing duplicates
                };
                setTimeout(function() {
                    sbiCreateFeed(var_this,feedOptions);
                },sbi_time);

                function sbiCreateFeed(var_this,feedOptions) {

                    var imagesArrCount = 0;

                    var $self = jQuery(var_this),
                        imgRes = 'standard_resolution',
                        cols = parseInt( var_this.getAttribute('data-cols') ),
                        //Convert styles JSON string to an object
                        getType = 'user',
                        sortby = 'none',
                        num = var_this.getAttribute('data-num'),
                        user_id = var_this.getAttribute('data-id'),
                        $header = '',
                        morePosts = [], //Used to determine whether to show the Load More button when displaying posts from more than one id/hashtag. If one of the ids/hashtags has more posts then still show button.
                        sbiHeaderCache = feedOptions.sbiHeaderCache,
                        media = 'all';
                        //media = feedOptions.media;

                    feedOptions.disablecache = (feedOptions.disablecache == 'true');
                    feedOptions.media = 'all';

                    if( feedOptions.sortby !== '' ) sortby = feedOptions.sortby;

                    imgRes = sbiGetResolutionSettings( $self, var_this.getAttribute('data-res'), cols, cols, $i );
                    //Split comma separated hashtags into array
                    var accessTokens = [];
                    var userIDs = [];
                    if ( typeof feedOptions.feedID !== 'undefined') {
                        var startArr = feedOptions.feedID.split(','),
                            midArr = feedOptions.mid.split(','),
                            lastArr = feedOptions.callback.split(',');
                        jQuery.each(startArr, function(index) {
                            accessTokens.push(startArr[index] + '.' + midArr[index] + '.' + lastArr[index]);
                            userIDs.push(startArr[index]);
                        });
                        user_id = userIDs.join(',');
                        userIDs = userIDs.join(',');
                    } else {
                         accessTokens.push(sb_instagram_js_options.sb_instagram_at);
                    }
                    var ids_arr = user_id.replace(/ /g,'').split(",");
                    var looparray = ids_arr;

                    //START FEED
                    var apiURLs = [],
                        apiCall = '';

                    //Loop through ids or hashtags
                    jQuery.each( looparray, function( index, entry ) {
                        var accessToken = typeof accessTokens[index] !== 'undefined' ? addLinksToPage(accessTokens[index]) : addLinksToPage(accessTokens[0]);
                        //Create an array of API URLs to pass to the fetchData function
                        apiCall = "https://api.instagram.com/v1/users/"+ entry +"/media/recent?access_token=" + accessToken+"&count=33";
                        window.sbiFeedMeta[$i].idsInFeed.push(entry);
                        apiURLs.push( apiCall );

                    }); //End hashtag array loop

                    //Create an object of the settings so that they can be passed to the buildFeed function
                    var sbiSettings = {num:num, getType:getType, user_id:user_id, cols:cols, imgRes:imgRes, sortby:sortby, feedOptions:feedOptions,  looparray: looparray};

                    var sbi_cache_string_include = '';
                    var sbi_cache_string_exclude = '';
                    var sbiTransientNames = {
                        'header'    : '',
                        'feed'      : ''
                    };

                    //Figure out how long the first part of the caching string should be
                    var sbi_cache_string_include_length = sbi_cache_string_include.length;
                    var sbi_cache_string_exclude_length = sbi_cache_string_exclude.length;
                    var sbi_cache_string_length = 40 - Math.min(sbi_cache_string_include_length + sbi_cache_string_exclude_length, 20);

                    var transientName = 'sbi_';
                    looparray = looparray.join().replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
                    // include the white list name in the transient name
                    if (feedOptions.media !== 'all') transientName += feedOptions.media.substring(0, 1);
                    transientName += looparray.substring(0, sbi_cache_string_length);

                    //Find the length of the string so far, and then however many chars are left we can use this for filters
                    sbi_cache_string_length = transientName.length;
                    sbi_cache_string_length = 44 - sbi_cache_string_length;

                    //Set the length of each filter string
                    if( sbi_cache_string_exclude_length < sbi_cache_string_length/2 ){
                        sbi_cache_string_include = sbi_cache_string_include.substring(0, sbi_cache_string_length - sbi_cache_string_exclude_length);
                    } else {
                        //Exclude string
                        if( sbi_cache_string_exclude.length == 0 ){
                            sbi_cache_string_include = sbi_cache_string_include.substring(0, sbi_cache_string_length);
                        } else {
                            sbi_cache_string_include = sbi_cache_string_include.substring(0, sbi_cache_string_length/2);
                        }
                        //Include string
                        if( sbi_cache_string_include.length == 0 ){
                            sbi_cache_string_exclude = sbi_cache_string_exclude.substring(0, sbi_cache_string_length);
                        } else {
                            sbi_cache_string_exclude = sbi_cache_string_exclude.substring(0, sbi_cache_string_length/2);
                        }
                    }

                    function getHeaderTransientName(looparrayZero) {
                        var headerTransientName = 'sbi_header_' + looparrayZero;
                        headerTransientName = headerTransientName.substring(0, 45);

                        return headerTransientName;
                    }

                    //Add both parts of the caching string together and make sure it doesn't exceed 45
                    transientName += sbi_cache_string_include + sbi_cache_string_exclude;
                    sbiTransientNames.feed = transientName.substring(0, 45);
                    sbiTransientNames.header = getHeaderTransientName(sbiSettings.looparray[0]);

                    // check to see if comments need to be retrieved
                    if (!sb_instagram_js_options.sbiPageCommentCache && window.sbiCommentCacheStatus === 1  && window.sbiStandalone.noDB !== true) {
                        sbiTransientNames.comments = 'need';
                    } else {
                        sbiTransientNames.comments = 'no';
                    }
                    //1. Does the transient/cache exist in the db?
                    if( ( window.sbiCacheStatuses[feedOptions.feedIndex].feed === true || window.sbiCacheStatuses[feedOptions.feedIndex].header === true || sbiTransientNames.comments === 'need' ) && !feedOptions.disablecache && typeof feedOptions.tryFetch === 'undefined'){
                        //Use ajax to get the cache
                        var images = sbiGetCache(sbiTransientNames, sbiSettings, $self, 'all', apiURLs);
                        sbiTransientNames.comments = 'no';
                    }


                    // if the process of retrieving remote posts hasn't started yet, do so here
                    if ( window.sbiCacheStatuses[feedOptions.feedIndex].feed === false && window.sbiCacheStatuses[feedOptions.feedIndex].feed !== 'fetched') {
                        window.sbiCacheStatuses[feedOptions.feedIndex].feed = 'fetched';
                        window.sbiCacheStatuses[feedOptions.feedIndex].tryFetch = 'done';
                        sbiFetchData(apiURLs, sbiTransientNames.feed, sbiSettings, $self);
                    }

                    if ( !window.sbiCacheStatuses[feedOptions.feedIndex].header && window.sbiCacheStatuses[feedOptions.feedIndex].header !== 'fetched' && sbiSettings.getType === 'user') {
                        window.sbiCacheStatuses[feedOptions.feedIndex].header = 'fetched';
                        // Make the ajax request here
                        var atParts = accessTokens[0].split('.');
                        sbiSettings.user_id = atParts[0];
                        var sbi_page_url = 'https://api.instagram.com/v1/users/' + sbiSettings.user_id + '?access_token=' + addLinksToPage(accessTokens[0]);

                        jQuery.ajax({
                            method: "GET",
                            url: sbi_page_url,
                            dataType: "jsonp",
                            success: function(data) {
                                sbiBuildHeader(data, sbiSettings);

                                if( data.data !== undefined ){

                                    if(!feedOptions.disablecache && window.sbiCacheStatuses[feedOptions.feedIndex].header !== 'cached' && typeof data.data.username !== 'undefined' && typeof data.data.pagination === 'undefined')  {
                                        window.sbiCacheStatuses[feedOptions.feedIndex].header = 'cached';
                                        sbiCachePhotos(data, sbiTransientNames.header);
                                    }

                                }
                            }
                        });
                        //sbiFetchData(apiURLs, sbiTransientNames.header, sbiSettings, $self);
                    }



                    //This is the arr that we'll keep adding the new images to
                    var imagesArr = '',
                        sbiNewData = false,
                        noMoreData = false,
                        photoIds = [],
                        imagesHTML = '',
                        photosAvailable = 0, //How many photos are available to be displayed
                        apiRequests = 1;

                    //Build the HTML for the feed
                    function sbiBuildFeed(images, transientName, sbiSettings, $self){

                        //VARS:
                        var $loadBtn = $self.find("#sbi_load .sbi_load_btn"),
                            num = parseInt(sbiSettings.num),
                            cols = parseInt(sbiSettings.cols),
                            feedOptions = sbiSettings.feedOptions,
                            itemCount = 0,
                            imgRes = sbiSettings.imgRes,
                            getType = feedOptions.type,
                            maxRequests = parseInt(feedOptions.maxrequests),
                            imagepadding = feedOptions.imagepadding,
                            imagepaddingunit = feedOptions.imagepaddingunit,
                            looparray = sbiSettings.looparray,
                            headerstyle = feedOptions.headerstyle,
                            headerprimarycolor = feedOptions.headerprimarycolor,
                            headersecondarycolor = feedOptions.headersecondarycolor,
                            media = feedOptions.media;

                        //On first load imagesArr is empty so set it to be the images
                        if(imagesArr == ''){
                            imagesArr = images;

                            //On all subsequent loads add the new images to the imagesArr
                        } else if( sbiNewData == true ) {
                            jQuery.each( images.data, function( index, entry ) {
                                //Add the images to the imagesArr
                                imagesArr.data.push( entry );
                            });
                            sbiNewData = false;
                        }
                        var imagesNextUrl = images.pagination.next_url;

                        if( typeof imagesNextUrl === 'undefined' || imagesNextUrl.length == 0 ){
                            noMoreData = true;
                        } else {
                            $loadBtn.show();
                        }

                        //If the next url exists then update the pagination object in the imagesArr with the next pagination info
                        if( typeof images.pagination !== 'undefined' ) imagesArr["pagination"] = images.pagination;

                        if( feedOptions.sortby !== '' ) sortby = feedOptions.sortby;
                        //If the user hasn't changed the background color then set a "default" class on the hover tile so we can add a text shadow
                        var sbiDefaultClass = ( feedOptions.hovercolor == '0,0,0' ) ? " sbi_default" : "";

                        var imagesArrCountOrig = imagesArrCount,
                            removePhotoIndexes = []; //This is used to keep track of the indexes of the photos which should be removed so that they can be removed from imagesArr after the loop below has finished and then resultantly not cached.

                        //BUILD HEADER
                        if( $self.find('.sbi_header_link').length == 0 ){

                            //Get page info for first User ID
                            var sbi_page_url = 'https://api.instagram.com/v1/users/' + looparray[0] + '?access_token=' + sb_instagram_js_options.sb_instagram_at;

                            //Create header transient name
                            var headerTransientName = 'sbi_header_' + looparray[0];
                            headerTransientName = headerTransientName.substring(0, 45);

                            //Check whether header cache exists
                            if(sbiHeaderCache == 'true' && !feedOptions.disablecache){
                                //Use ajax to get the cache
                                //sbiGetCache(headerTransientName, sbiSettings, $self, 'header');
                            } else if ($self.find('.sb_instagram_header').length) {
                                // Make the ajax request here
                                jQuery.ajax({
                                    method: "GET",
                                    url: sbi_page_url,
                                    dataType: "jsonp",
                                    success: function (data) {
                                        sbiBuildHeader(data, sbiSettings);

                                        if(!feedOptions.disablecache && window.sbiCacheStatuses[feedOptions.feedIndex].header !== 'cached' && typeof data.data !== 'undefined' && typeof data.data.username !== 'undefined' && typeof data.data.pagination === 'undefined')  {
                                            window.sbiCacheStatuses[feedOptions.feedIndex].header = 'cached';
                                            sbiCachePhotos(data, headerTransientName);
                                        }
                                    }
                                });
                            }

                        } // End header

                        //LOOP THROUGH ITEMS:
                        jQuery.each( imagesArr.data, function( itemNumber, item ) { // itemNumber = index, item = value

                            //Hide photos or videos
                            if( media == 'videos' && item.type !== 'video' ) removePhoto = true;
                            if( media == 'photos' && item.type !== 'image' && item.type !== 'carousel' ) removePhoto = true;

                            //Used to make sure we display the right amount of photos
                            itemCount++;

                            //This makes sure that only the correct number of photos is shown. So if num is set to 10 then it only shows the next 10 in the array. photosAvailable is subtracted from imagesArrCountOrig as imagesArrCountOrig is updated every time and we need to calculate how many photos are currently displayed in the feed in order to calculate how many to show.
                            if( itemCount > ( (imagesArrCountOrig-photosAvailable )+num) || itemCount <= imagesArrCountOrig ) return;

                            imagesArrCount++; //Keeps track of where we are in the images array

                            //Prevent duplicates
                            $i = $self.attr('data-sbi-index');
                            if( jQuery.inArray(item.id, window.sbiFeedMeta[$i].postsInFeed) > -1 ){
                                return; //Don't add image
                            } else {
                                //Store the IDs of the images added to the feed so we can prevent duplicates
                                window.sbiFeedMeta[$i].postsInFeed.push(item.id);
                            }

                            var videoIsFirstCarouselItem = false;
                            if ( item.type === 'carousel' && typeof item.carousel_media !== 'undefined') {
                                jQuery.each(item.carousel_media,function(index,value) {
                                     if (typeof value.videos !== 'undefined') {
                                        if (index === 0) {
                                            videoIsFirstCarouselItem = true;
                                        }
                                    }
                                });
                            }

                            //Image res
                            var data_image = item.images.standard_resolution.url;
                            switch( imgRes.type ){
                                case 'thumbnail':
                                    data_image = item.images.thumbnail.url;
                                    break;
                                case 'low_resolution':
                                    data_image = item.images.low_resolution.url;
                                    break;
                                case 'custom':
                                    data_image = item.images.standard_resolution.url.replace('640x640/',imgRes.width+'x'+imgRes.width+'/');
                                    break;
                                case 'autocustom':
                                    var thisImageReplace = sbiGetBestResolutionForCustom(imgRes.width,item.images.standard_resolution.width,item.images.standard_resolution.height)
                                    data_image = item.images.standard_resolution.url.replace('640x640/',thisImageReplace+'x'+thisImageReplace+'/');
                                    break;
                            }
                            data_image = data_image.split("?ig_cache_key")[0];

                            //Caption
                            var captionText = '',
                                created_time_raw = item.created_time;

                            if(item.caption != null && item.caption != ''){
                                //Replace double quotes in the captions with the HTML symbol
                                captionText = typeof item.caption !== 'undefined' ? item.caption.text.replace(/"/g, "&quot;") : '';
                                captionText = captionText.replace(/\n/g, " ");
                            }

                            var videoIsFirstCarouselItemClass = videoIsFirstCarouselItem ? ' sbi_carousel_vid_first' : '',
                                carouselTypeIcon = item.type === 'carousel' ? '<i class="fa fa-clone sbi_carousel_icon" aria-hidden="true"></i>': '';

                            var playBtnHtml = item.type === 'video' || videoIsFirstCarouselItemClass ? '<i class="fa fa-play sbi_playbtn"></i>' : '';

                            //TEMPLATE:
                            imagesHTML += '<div class="sbi_item sbi_type_'+item.type+' sbi_new" id="sbi_'+item.id+'" data-date="'+created_time_raw+'">' +
                                    '<div class="sbi_photo_wrap">'+carouselTypeIcon+playBtnHtml +
                                        '<a class="sbi_photo" href="'+item.link+'" target="_blank">' +
                                        '<img src="'+data_image+'" alt="'+captionText.replace(/<>/g, " ")+'" width="200" height="200" />' +
                                        '</a>' +
                                    '</div>' +
                                '</div>';
                        }); //End images.data forEach loop

                        //Loop through and remove any photos from imagesArr which are hidden so that they're not cached
                        removePhotoIndexes.reverse(); //Reverse the indexes in the array so that it takes out the last items first and doesn't affect the order
                        jQuery.each( removePhotoIndexes, function( index, itemNumber ) {
                            imagesArr.data.splice(itemNumber, 1);
                        });

                        if( (imagesArrCount - imagesArrCountOrig) < num ) photosAvailable += imagesArrCount - imagesArrCountOrig;

                        //CACHE all of the photos in the imagesArr using ajax call to db after the photos have been displayed
                        //if(!feedOptions.disablecache && !sbiCacheStatuses.feed) sbiCachePhotos(imagesArr, transientName);
                        if( ((imagesArrCount - imagesArrCountOrig) < num) && (photosAvailable < num) /*&& (numberOfPhotosDisplayed < num)*/ && (apiRequests < maxRequests) && !noMoreData ){ //Also check here whether next_url is available. If it's not then don't try to get more photos.
                            //Get more photos
                            var sbiFetchURL = imagesArr.pagination.next_url;

                            window.sbiCacheStatuses[feedOptions.feedIndex].feed = 'fetched';

                            sbiFetchData(sbiFetchURL, sbiTransientNames.feed, sbiSettings, $self);
                            //Set the flag so that we know to add the new photos to the imagesArr
                            sbiNewData = true;
                        } else {

                            //If there are enough photos
                            //Add the images to the feed
                            $self.find('#sbi_images').append(imagesHTML);
                            sbiAfterImagesLoaded(imagesArr,sbiTransientNames.feed);

                            imagesHTML = '';

                            //Remove the initial loader
                            $self.find('.sbi_loader').remove();

                            //Hide the spinner in the load more button
                            $loadBtn.find('.fa-spinner').hide();
                            $loadBtn.find('.sbi_btn_text').css('opacity', 1);
                        }


                        //AFTER:
                        //Things to add after the photos have been added
                        function sbiAfterImagesLoaded(imagesArr,transientName){
                            sbiSizeSVG($self);
                            /* Scripts for each feed */
                            $self.find('.sbi_item').each(function(){

                                var $self = jQuery(this);

                                //Photo links
                                //If lightbox is disabled
                                $self.find('.sbi_photo').hover(function(){
                                    jQuery(this).fadeTo(200, 0.85);
                                }, function(){
                                    jQuery(this).stop().fadeTo(500, 1);
                                });

                            }); //End .sbi_item each


                            //Sort posts by date
                            //only sort the new posts that are loaded in, not the whole feed, otherwise some photos will switch positions due to dates
                            $self.find('#sbi_images .sbi_item.sbi_new').sort(function (a, b) {
                                var aComp = jQuery(a).attr("data-date"),
                                    bComp = jQuery(b).attr("data-date");

                                if(sortby == 'none'){
                                    //Order by date
                                    return bComp - aComp;
                                } else {
                                    //Randomize
                                    return (Math.round(Math.random())-0.5);
                                }

                            }).appendTo( $self.find("#sbi_images") );

                            //Remove the new class after 500ms, once the sorting is done
                            setTimeout(function(){
                                jQuery('#sbi_images .sbi_item.sbi_new').removeClass('sbi_new');
                                //Reset the morePosts variable so we can check whether there are more posts every time the Load More button is clicked
                                morePosts = [];
                            }, 500);

                            var imagesArrLength = imagesArr.data.length;

                            //Adjust the imagesArr length to account for the hidden photos
                            // imagesArrLength = parseInt(imagesArrLength) - parseInt(removedPhotosCount); //June 13 2016 - the imagesArr length is already adjusted earlier and so don't need to adjust it again here
                            //Check initially whether we should show the Load More button. If it's coordinates then if the last API request returns no photos then there are no more to show.
                            if( ( (imagesArrCount >= imagesArrLength) && noMoreData ) ){
                                $loadBtn.hide();
                            }

                            //Load More button
                            $self.find('#sbi_load .sbi_load_btn').off().on('click', function(){

                                $loadBtn.find('.fa-spinner').show();
                                $loadBtn.find('.sbi_btn_text').css('opacity', 0);
                                //Reset the photosAvailable var so it can be used again
                                photosAvailable = 0;

                                //Check the global var to see where we are in the array
                                imagesArrCount = parseInt(imagesArrCount);

                                //Adjust the imagesArr length to account for the hidden photos
                                imagesArrLength = imagesArr.data.length;

                                //If there are enough photos left in the array then display them
                                if( (imagesArrCount + num) < imagesArrLength || noMoreData ){

                                    if(photosAvailable !== 'finished') sbiBuildFeed(images, transientName, sbiSettings, $self);
                                    //Unset the flag so that we know not to add these photos to the imagesArr again
                                    sbiNewData = false;

                                    //If there are no photos left in the array and there's no more data to load then hide the load more button
                                    if( (imagesArrCount >= imagesArrLength) && noMoreData ){
                                        $loadBtn.hide();
                                    }

                                    //Else if there aren't enough photos left then hit the api again
                                } else {

                                    sbiFetchURL = imagesArr.pagination.next_url;
                                    window.sbiCacheStatuses[feedOptions.feedIndex].feed = 'fetched';
                                    sbiFetchData(sbiFetchURL, transientName, sbiSettings, $self);
                                    //Set the flag so that we know to add the new photos to the imagesArr
                                    sbiNewData = true;
                                    //Reset this to zero so that we can limit requests to 3 per button click
                                    apiRequests = 0;
                                }


                            }); //End click event

                            // Call Custom JS if it exists
                            if (typeof sbi_custom_js == 'function') setTimeout(function(){ sbi_custom_js(); }, 100);

                            if( imgRes !== 'thumbnail' ){
                                //This needs to be here otherwise it results in the following error for some sites: $self.find(...).sbi_imgLiquid() is not a function.
                                /*! imgLiquid v0.9.944 / 03-05-2013 https://github.com/karacas/imgLiquid */
                                var sbi_imgLiquid=sbi_imgLiquid||{VER:"0.9.944"};sbi_imgLiquid.bgs_Available=!1,sbi_imgLiquid.bgs_CheckRunned=!1,function(i){function t(){if(!sbi_imgLiquid.bgs_CheckRunned){sbi_imgLiquid.bgs_CheckRunned=!0;var t=i('<span style="background-size:cover" />');i("body").append(t),!function(){var i=t[0];if(i&&window.getComputedStyle){var e=window.getComputedStyle(i,null);e&&e.backgroundSize&&(sbi_imgLiquid.bgs_Available="cover"===e.backgroundSize)}}(),t.remove()}}i.fn.extend({sbi_imgLiquid:function(e){this.defaults={fill:!0,verticalAlign:"center",horizontalAlign:"center",useBackgroundSize:!0,useDataHtmlAttr:!0,responsive:!0,delay:0,fadeInTime:0,removeBoxBackground:!0,hardPixels:!0,responsiveCheckTime:500,timecheckvisibility:500,onStart:null,onFinish:null,onItemStart:null,onItemFinish:null,onItemError:null},t();var a=this;return this.options=e,this.settings=i.extend({},this.defaults,this.options),this.settings.onStart&&this.settings.onStart(),this.each(function(t){function e(){-1===u.css("background-image").indexOf(encodeURI(c.attr("src")))&&u.css({"background-image":'url("'+encodeURI(c.attr("src"))+'")'}),u.css({"background-size":g.fill?"cover":"contain","background-position":(g.horizontalAlign+" "+g.verticalAlign).toLowerCase(),"background-repeat":"no-repeat"}),i("a:first",u).css({display:"block",width:"100%",height:"100%"}),i("img",u).css({display:"none"}),g.onItemFinish&&g.onItemFinish(t,u,c),u.addClass("sbi_imgLiquid_bgSize"),u.addClass("sbi_imgLiquid_ready"),l()}function o(){function e(){c.data("sbi_imgLiquid_error")||c.data("sbi_imgLiquid_loaded")||c.data("sbi_imgLiquid_oldProcessed")||(u.is(":visible")&&c[0].complete&&c[0].width>0&&c[0].height>0?(c.data("sbi_imgLiquid_loaded",!0),setTimeout(r,t*g.delay)):setTimeout(e,g.timecheckvisibility))}if(c.data("oldSrc")&&c.data("oldSrc")!==c.attr("src")){var a=c.clone().removeAttr("style");return a.data("sbi_imgLiquid_settings",c.data("sbi_imgLiquid_settings")),c.parent().prepend(a),c.remove(),c=a,c[0].width=0,void setTimeout(o,10)}return c.data("sbi_imgLiquid_oldProcessed")?void r():(c.data("sbi_imgLiquid_oldProcessed",!1),c.data("oldSrc",c.attr("src")),i("img:not(:first)",u).css("display","none"),u.css({overflow:"hidden"}),c.fadeTo(0,0).removeAttr("width").removeAttr("height").css({visibility:"visible","max-width":"none","max-height":"none",width:"auto",height:"auto",display:"block"}),c.on("error",n),c[0].onerror=n,e(),void d())}function d(){(g.responsive||c.data("sbi_imgLiquid_oldProcessed"))&&c.data("sbi_imgLiquid_settings")&&(g=c.data("sbi_imgLiquid_settings"),u.actualSize=u.get(0).offsetWidth+u.get(0).offsetHeight/1e4,u.sizeOld&&u.actualSize!==u.sizeOld&&r(),u.sizeOld=u.actualSize,setTimeout(d,g.responsiveCheckTime))}function n(){c.data("sbi_imgLiquid_error",!0),u.addClass("sbi_imgLiquid_error"),g.onItemError&&g.onItemError(t,u,c),l()}function s(){var i={};if(a.settings.useDataHtmlAttr){var t=u.attr("data-sbi_imgLiquid-fill"),e=u.attr("data-sbi_imgLiquid-horizontalAlign"),o=u.attr("data-sbi_imgLiquid-verticalAlign");("true"===t||"false"===t)&&(i.fill=Boolean("true"===t)),void 0===e||"left"!==e&&"center"!==e&&"right"!==e&&-1===e.indexOf("%")||(i.horizontalAlign=e),void 0===o||"top"!==o&&"bottom"!==o&&"center"!==o&&-1===o.indexOf("%")||(i.verticalAlign=o)}return sbi_imgLiquid.isIE&&a.settings.ieFadeInDisabled&&(i.fadeInTime=0),i}function r(){var i,e,a,o,d,n,s,r,m=0,h=0,f=u.width(),v=u.height();void 0===c.data("owidth")&&c.data("owidth",c[0].width),void 0===c.data("oheight")&&c.data("oheight",c[0].height),g.fill===f/v>=c.data("owidth")/c.data("oheight")?(i="100%",e="auto",a=Math.floor(f),o=Math.floor(f*(c.data("oheight")/c.data("owidth")))):(i="auto",e="100%",a=Math.floor(v*(c.data("owidth")/c.data("oheight"))),o=Math.floor(v)),d=g.horizontalAlign.toLowerCase(),s=f-a,"left"===d&&(h=0),"center"===d&&(h=.5*s),"right"===d&&(h=s),-1!==d.indexOf("%")&&(d=parseInt(d.replace("%",""),10),d>0&&(h=s*d*.01)),n=g.verticalAlign.toLowerCase(),r=v-o,"left"===n&&(m=0),"center"===n&&(m=.5*r),"bottom"===n&&(m=r),-1!==n.indexOf("%")&&(n=parseInt(n.replace("%",""),10),n>0&&(m=r*n*.01)),g.hardPixels&&(i=a,e=o),c.css({width:i,height:e,"margin-left":Math.floor(h),"margin-top":Math.floor(m)}),c.data("sbi_imgLiquid_oldProcessed")||(c.fadeTo(g.fadeInTime,1),c.data("sbi_imgLiquid_oldProcessed",!0),g.removeBoxBackground&&u.css("background-image","none"),u.addClass("sbi_imgLiquid_nobgSize"),u.addClass("sbi_imgLiquid_ready")),g.onItemFinish&&g.onItemFinish(t,u,c),l()}function l(){t===a.length-1&&a.settings.onFinish&&a.settings.onFinish()}var g=a.settings,u=i(this),c=i("img:first",u);return c.length?(c.data("sbi_imgLiquid_settings")?(u.removeClass("sbi_imgLiquid_error").removeClass("sbi_imgLiquid_ready"),g=i.extend({},c.data("sbi_imgLiquid_settings"),a.options)):g=i.extend({},a.settings,s()),c.data("sbi_imgLiquid_settings",g),g.onItemStart&&g.onItemStart(t,u,c),void(sbi_imgLiquid.bgs_Available&&g.useBackgroundSize?e():o())):void n()})}})}(jQuery);

                                // Use imagefill to set the images as backgrounds so they can be square
                                !function () {
                                    var css = sbi_imgLiquid.injectCss,
                                        head = document.getElementsByTagName('head')[0],
                                        style = document.createElement('style');
                                    style.type = 'text/css';
                                    if (style.styleSheet) {
                                        style.styleSheet.cssText = css;
                                    } else {
                                        style.appendChild(document.createTextNode(css));
                                    }
                                    head.appendChild(style);
                                }();
                                $self.find(".sbi_photo").sbi_imgLiquid({fill:true});
                            }

                            //Only check the width once the resize event is over
                            var sbi_delay = (function(){
                                var sbi_timer = 0;
                                return function(sbi_callback, sbi_ms){
                                    clearTimeout (sbi_timer);
                                    sbi_timer = setTimeout(sbi_callback, sbi_ms);
                                };
                            })();

                            jQuery(window).resize(function(){
                                sbi_delay(function(){
                                    sbiSetPhotoHeight();
                                    sbiGetItemSize();

                                    jQuery('.sbi').each(function() {
                                        var $sbiSelf = jQuery(this),
                                            $i = jQuery(this).attr('data-sbi-index');
                                        sbiSizeSVG($sbiSelf);
                                        if ($sbiSelf.attr('data-res') ==='autocustom') {
                                            var oldRes = window.sbiFeedMeta[$i].minRes;
                                            var imageSize = sbiGetResolutionSettings($sbiSelf, 'autocustom', cols, colsmobile, $i),
                                                width = imageSize.width !== '' ? imageSize.width : sbiGetWidthForResType(imageSize.type);

                                            if (sbiNeedToRaiseRes(width,oldRes)) {
                                                window.sbiFeedMeta[$i].minRes = 640;
                                                $sbiSelf.find('.sbi_item').each(function() {
                                                    var newUrl = jQuery(this).find('.sbi_link_area').length ? jQuery(this).find('.sbi_link_area').attr('href') : '';
                                                    var oldUrl = jQuery(this).find('.sbi_photo img').attr('src'),
                                                        newRes = 640,
                                                        $photo = jQuery(this);
                                                    if (newUrl === '') {
                                                        if (oldUrl.indexOf('p'+oldRes+'x'+oldRes) > -1) {
                                                            newUrl = oldUrl.replace('p'+oldRes+'x'+oldRes,'p'+newRes+'x'+newRes);
                                                        } else if(oldUrl.indexOf('s'+oldRes+'x'+oldRes) > -1) {
                                                            newUrl = oldUrl.replace('s'+oldRes+'x'+oldRes,'s'+newRes+'x'+newRes);
                                                        }
                                                    }

                                                    $photo.find('.sbi_photo img').attr('src',newUrl);
                                                    $photo.find('.sbi_photo').css('background-image','url("'+newUrl+'")');
                                                });
                                            }
                                        }
                                    });

                                }, 500);
                            });

                            //Resize image height
                            function sbiSetPhotoHeight(){

                                if( imgRes !== 'thumbnail' ){
                                    var sbi_photo_width = $self.find('.sbi_photo').eq(0).innerWidth();

                                    //Figure out number of columns for either desktop or mobile
                                    var sbi_num_cols = sbiGetColumnCount($self, parseInt(cols), parseInt(cols));

                                    //Figure out what the width should be using the number of cols
                                    var sbi_photo_width_manual = ( $self.find('#sbi_images').width() / sbi_num_cols ) - (imagepadding*2);

                                    //If the width is less than it should be then set it manually
                                    if( sbi_photo_width <= (sbi_photo_width_manual) ) sbi_photo_width = sbi_photo_width_manual;

                                    $self.find('.sbi_photo').css('height', sbi_photo_width);

                                    //Set the position of the arrows
                                    var sbi_arrows_top = ($self.find('.sbi_photo').eq(0).innerWidth()/2);
                                    if(imagepaddingunit == 'px') sbi_arrows_top += parseInt(imagepadding)*2;
                                    $self.find('.sbi_owl-buttons div').css('top', sbi_arrows_top);
                                }

                            }
                            sbiSetPhotoHeight();

                            /* Detect when element becomes visible. Used for when the feed is initially hidden, in a tab for example. https://github.com/shaunbowe/jquery.visibilityChanged */
                            !function(i){var n={callback:function(){},runOnLoad:!0,frequency:100,sbiPreviousVisibility:null},c={};c.sbiCheckVisibility=function(i,n){if(jQuery.contains(document,i[0])){var e=n.sbiPreviousVisibility,t=i.is(":visible");n.sbiPreviousVisibility=t,null==e?n.runOnLoad&&n.callback(i,t):e!==t&&n.callback(i,t),setTimeout(function(){c.sbiCheckVisibility(i,n)},n.frequency)}},i.fn.sbiVisibilityChanged=function(e){var t=i.extend({},n,e);return this.each(function(){c.sbiCheckVisibility(i(this),t)})}}(jQuery);

                            //If the feed is initially hidden (in a tab for example) then check for when it becomes visible and set then set the height
                            jQuery(".sbi").filter(':hidden').sbiVisibilityChanged({
                                callback: function(element, visible) {
                                    sbiSetPhotoHeight();
                                    sbiGetItemSize();
                                },
                                runOnLoad: false
                            });

                            function sbiGetItemSize(){
                                $self.removeClass('sbi_small sbi_medium');
                                var sbiItemWidth = $self.find('.sbi_item').innerWidth();
                                if( sbiItemWidth > 120 && sbiItemWidth < 240 ){
                                    $self.addClass('sbi_medium');
                                } else if( sbiItemWidth <= 120 ){
                                    $self.addClass('sbi_small');
                                }
                            }

                            sbiGetItemSize();
                            // caching done at the end of all posts in the images Array
                            if(!feedOptions.disablecache && typeof _cache !== 'undefined' && window.sbiCacheStatuses[feedOptions.feedIndex].feed === 'fetched') {
                                _cache(imagesArr,transientName); // cache_all_posts
                                window.sbiCacheStatuses[feedOptions.feedIndex].feed = 'cached';
                            }

                            // prevent sbiImagesReady from running code to get and display more posts
                            photosAvailable = 'finished';

                            sbSVGify($self);
                        } // End sbiAfterImagesLoaded() function


                    } //End buildFeed function

                    function commaSeparateNumber(val){
                        while (/(\d+)(\d{3})/.test(val.toString())){
                            val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                        }
                        return val;
                    }

                    function sbiBuildHeader(data, sbiSettings){

                        if(typeof data.meta.error_message !== 'undefined') return;

                        var feedOptions = sbiSettings.feedOptions,
                            headerStyles = '';
                        if(feedOptions.headercolor.length) headerStyles = 'style="color: #'+feedOptions.headercolor+'"';

                        $header = '<a href="https://www.instagram.com/'+data.data.username+'" target="_blank" title="@'+data.data.username+'" class="sbi_header_link" '+headerStyles+'>';
                        $header += '<div class="sbi_header_text">';
                        var classheader = '';
                        if( ( typeof data.data.bio !== 'undefined' && data.data.bio.length < 1 ) || feedOptions.showbio != 'true' ) classheader = ' class="sbi_no_bio"';
                        $header += '<h3 '+headerStyles+classheader+'>'+data.data.username+'</h3>';

                        //Compile and add the header info
                        var $headerInfo = '<p class="sbi_bio_info" ';
                        if(feedOptions.headerstyle == 'boxed'){
                            $headerInfo += 'style="color: #' + feedOptions.headerprimarycolor + ';"';
                        } else {
                            $headerInfo += headerStyles;
                        }

                        //Add the bio
                        if( typeof data.data.bio !== 'undefined' && data.data.bio.length > 1 && feedOptions.showbio != '' && feedOptions.showbio != 'false' ) $header += '<p class="sbi_bio" '+headerStyles+'>'+data.data.bio+'</p>';
                        $header += '</div>';
                        $header += '<div class="sbi_header_img">';
                        $header += '<div class="sbi_header_img_hover"><i class="sbi_new_logo"></i></div>';
                        $header += '<img src="'+data.data.profile_picture+'" alt="'+data.data.full_name+'" width="50" height="50">';
                        $header += '</div>';
                        $header += '</a>';
                        if(feedOptions.headerstyle == 'boxed') {
                            $header += '<div class="sbi_header_bar" style="background: #'+feedOptions.headersecondarycolor+'">';
                            if(feedOptions.showbio != 'false') $header += $headerInfo;
                            $header += '<a class="sbi_header_follow_btn" href="https://www.instagram.com/'+data.data.username+'" target="_blank" style="color: #'+feedOptions.headercolor+'; background: #'+feedOptions.headerprimarycolor+';"><i class="sbi_new_logo"></i><span></span></div></div>';
                        }

                        //Add the header to the feed
                        if( $self.find('.sbi_header_link').length == 0 ) $self.find('.sb_instagram_header').prepend( $header );

                        //Change the URL of the follow button
                        if( $self.find('.sbi_follow_btn').length ) $self.find('.sbi_follow_btn a').attr('href', 'https://www.instagram.com/' + data.data.username );
                        //Change the text of the header follow button
                        if( feedOptions.headerstyle == 'boxed' && $self.find('.sbi_header_follow_btn').length ) $self.find('.sbi_header_follow_btn span').text( $self.find('.sb_instagram_header').attr('data-follow-text').replace(/\\/g, "") );


                        //Header profile pic hover
                        $self.find('.sb_instagram_header .sbi_header_link').hover(function(){
                            $self.find('.sb_instagram_header .sbi_header_img_hover').fadeIn(200);
                        }, function(){
                            $self.find('.sb_instagram_header .sbi_header_img_hover').stop().fadeOut(600);
                        });

                        sbSVGify($self.find('.sb_instagram_header'));
                    } // End sbiBuildHeader()


                    function sbiFetchData(next_url, transientName, sbiSettings, $self) {
                        apiURLs = next_url;
                        var urlCount = apiURLs.length,
                            getType = sbiSettings.getType;

                        //If the apiURLs array is empty then this means that there's no more next_urls and so hide the load more button
                        if( urlCount == 0 ){

                            //Don't hit the API any more
                            //If there's no more photos to retrieve then hide the load more button
                            if( imagesArrCount + parseInt(sbiSettings.num) >= imagesArr.data.length ){
                                //Hide the Load More button
                                jQuery('#sbi_load .sbi_load_btn').hide();
                            }

                        } else {

                            var returnedImages = [],
                                numberOfRequests = urlCount;
                            jQuery.each(apiURLs, function(index, entry){

                                jQuery.ajax({
                                    method: "GET",
                                    url: entry,
                                    dataType: "jsonp",
                                    success: function(data) {

                                        //Pretty error messages
                                        var sbiErrorResponse = data.meta.error_message,
                                            sbiErrorMsg = '',
                                            sbiErrorDir = '';

                                        if(typeof sbiErrorResponse !== 'undefined'){

                                            sbiErrorMsg += '<p><i class="fa fab fa-instagram" style="font-size: 16px; position: relative; top: 1px;"></i>&nbsp; Instagram Feed Error</p>';

                                            if( sbiErrorResponse.indexOf('access_token') > -1 ){
                                                sbiErrorMsg += '<p><b>Error: Access Token is not valid or has expired</b><br /><span>This error message is only visible to WordPress admins</span></p>';
                                                sbiErrorDir = "<p>There's an issue with the Instagram Access Token that you are using. Please obtain a new Access Token on the plugin's Settings page.<br />If you continue to have an issue with your Access Token then please see <a href='https://smashballoon.com/my-instagram-access-token-keep-expiring/' target='_blank'>this FAQ</a> for more information.</p>";
                                                jQuery('#sb_instagram').empty().append( '<p style="text-align: center;">Unable to show Instagram photos</p><div id="sbi_mod_error">' + sbiErrorMsg + sbiErrorDir + '</div>');
                                                sbiAddTokenToExpiredList(sb_instagram_js_options.sb_instagram_at,transientName);
                                                var submittedData = {
                                                    action: 'sbi_set_use_backup',
                                                    transientName : transientName,
                                                    context : 'falsecache'
                                                };
                                                jQuery.ajax({
                                                    url: sbiajaxurl,
                                                    type: 'post',
                                                    data: submittedData,
                                                    success: function (data) {
                                                    }
                                                }); // ajax
                                                return;
                                                
                                            //Retired endpoint
                                            } else if( sbiErrorResponse.indexOf('retired') > -1 ){

                                                sbiErrorMsg += '<p><b>No longer possible to display this feed</b><br /><span>This error message is only visible to WordPress admins</span></p>';
                                                sbiErrorDir = "<p>Due to changes in the Instagram API, it is no longer possible to display a feed from an Instagram account which is not your own. You can now only display your own Instagram account. Please see <a href='https://smashballoon.com/instagram-api-changes-april-4-2018/' target='_blank'>this post</a> for more information.</p>";
                                                jQuery('#sb_instagram').empty().append( '<p style="text-align: center;">Unable to show Instagram photos</p><div id="sbi_mod_error">' + sbiErrorMsg + sbiErrorDir + '</div>');
                                                return;

                                            //requests per hour
                                            } else if( typeof data.code !== 'undefined' && data.code == '429' ){
                                                window.sbiFeedMeta[$i].error = {
                                                    errorMsg    : '<p><b>Error: Rate Limit Reached</b><br /><span>This error is only visible to WordPress admins</span>',
                                                    errorDir    : "<p>Backup cache will be used for 1 hour</p>"
                                                };
                                                if (!$self.find('#sbi_mod_error').length) {
                                                    $self.prepend('<div id="sbi_mod_error">'+window.sbiFeedMeta[$i].error.errorMsg+window.sbiFeedMeta[$i].error.errorDir+'</div>');
                                                } else if ($self.find('.sbiErrorIds').text().indexOf(window.sbiFeedMeta[$i].idsInFeed[index]) == -1) {
                                                    $self.find('.sbiErrorIds').append(','+window.sbiFeedMeta[$i].idsInFeed[index]);
                                                }
                                                var submittedData = {
                                                    action: 'sbi_set_use_backup',
                                                    transientName : transientName,
                                                    context : 'falsecache'
                                                };
                                                jQuery.ajax({
                                                    url: sbiajaxurl,
                                                    type: 'post',
                                                    data: submittedData,
                                                    success: function (data) {
                                                    }
                                                }); // ajax
                                                data = 'error';
                                            } else if( sbiErrorResponse.indexOf('user does not exist') > -1 || sbiErrorResponse.indexOf('you cannot view this resource') > -1 ){
                                                window.sbiFeedMeta[$i].error = {
                                                    errorMsg    : '<p><b>Error: User ID <span class="sbiErrorIds">'+window.sbiFeedMeta[$i].idsInFeed[index]+'</span> does not exist, is invalid, or is private</b><br /><span>This error is only visible to WordPress admins</span>',
                                                    errorDir    : "<p>Please double check that the Instagram User ID you are using is valid and not from a private account. To find your User ID simply enter your Instagram user name into this <a href='https://smashballoon.com/instagram-feed/find-instagram-user-id/' target='_blank'>tool</a>.</p>"
                                                };
                                                if (!$self.find('#sbi_mod_error').length) {
                                                    $self.prepend('<div id="sbi_mod_error">'+window.sbiFeedMeta[$i].error.errorMsg+window.sbiFeedMeta[$i].error.errorDir+'</div>');
                                                } else if ($self.find('.sbiErrorIds').text().indexOf(window.sbiFeedMeta[$i].idsInFeed[index]) == -1) {
                                                    $self.find('.sbiErrorIds').append(','+window.sbiFeedMeta[$i].idsInFeed[index]);
                                                }
                                                data = 'error';
                                            } else if( sbiErrorResponse.indexOf('invalid media id') > -1 ){
                                                window.sbiFeedMeta[$i].error = {
                                                    errorMsg    : '<p><b>Error: Post Id <span class="sbiErrorIds">'+window.sbiFeedMeta[$i].idsInFeed[index]+'</span> does not exist or is invalid</b><br /><span>This error is only visible to WordPress admins.</span>',
                                                    errorDir    : "<p>Please double check the media (post) id is correct.</p>"
                                                };
                                                if (!$self.find('#sbi_mod_error').length) {
                                                    $self.prepend('<div id="sbi_mod_error">'+window.sbiFeedMeta[$i].error.errorMsg+window.sbiFeedMeta[$i].error.errorDir+'</div>');
                                                } else if ($self.find('.sbiErrorIds').text().indexOf(window.sbiFeedMeta[$i].idsInFeed[index]) == -1) {
                                                    $self.find('.sbiErrorIds').append(','+window.sbiFeedMeta[$i].idsInFeed[index]);
                                                }
                                                data = 'error';
                                            }

                                        }

                                        //If it's a coordinates type then add the existing URL to the object so that we can use it to create the next URL for pagination
                                        if( getType == 'coordinates' ) data.pagination = {'previous_url':entry};

                                        if (data !== 'error') returnedImages.push(data);

                                        numberOfRequests--;
                                        if(numberOfRequests == 0 && photosAvailable !== 'finished') sbiImagesReady(getType);

                                    }

                                })

                            });

                            //When all of the images have been returned then pass them to the buildFeed function
                            function sbiImagesReady(getType){

                                var paginationArr = [],
                                    returnedImagesArr = [];

                                //Loop through the array of returned sets of data from the Instagram API
                                jQuery.each( returnedImages, function( index, object ) {

                                    if(getType == 'single') {
                                        object.data = [ object.data ] ;
                                    }

                                    if( typeof object.data !== 'undefined' ){ //Check whether the returned object has data in it as error may be returned it
                                        //Loop through each image object in the array and add it to the returnedImagesArr for sorting
                                        jQuery.each( object.data, function( index, image ) {

                                            //Filter out duplicate images here. This is after the items have been counted (used below for coordinates pagination) but before being cached as duplicate images don't need to be cached.
                                            if( jQuery.inArray(image.id, photoIds) > -1 ){
                                                //Duplicate image
                                            } else {
                                                photoIds.push(image.id);
                                                returnedImagesArr.push( image );
                                            }
                                        });


                                        if(getType == 'coordinates'){
                                            //If it's a coordinates then need to create the next_url string manually by using max_timestamp and then push it onto the array

                                            //Get the created_date of the last object so we can use it to create the next_url
                                            var lastCreatedTime = object.data[ object.data.length - 1 ].created_time,
                                                existing_url = object.pagination.previous_url,
                                                existing_url_parts = existing_url.split('max_timestamp='),
                                                new_url = existing_url_parts[0] + 'max_timestamp=' + lastCreatedTime;

                                            //If the number of photos returned (eg: 10) is less than the number the user wants to display (eg: 20) then there are no more photos to load for this coordinates
                                            paginationArr.push( new_url );

                                        } else {
                                            //If there's a next_url then add it to the pagination array
                                            if( typeof object.pagination === 'object' && !!object.pagination && typeof object.pagination.next_url !== 'undefined' ) paginationArr.push( object.pagination.next_url );
                                        }

                                    }

                                });

                                //Sort the images by date if not set to random
                                if(sortby !== 'random') {
                                    returnedImagesArr.sort(function(x, y){
                                        return y.created_time - x.created_time;
                                    });
                                } else {
                                    returnedImagesArr.sort(function (a, b) {
                                        //Randomize
                                        return (Math.round(Math.random())-0.5);
                                    });
                                    transientName += '!';
                                }

                                //Add the data and pagination objects to the first object in the array so that we can create a super object to send back
                                if (typeof returnedImages !== 'undefined') returnedImages[0].data = returnedImagesArr;

                                //Replace the next_url string with an array of URLs
                                //If it's a coordinates type then we need to create the pagination object here as it doesn't exist yet
                                if(typeof returnedImages[0].pagination !== 'undefined' && !!returnedImages[0].pagination) {
                                    //if( typeof returnedImages[0].pagination.next_url !== 'undefined' ) {
                                    returnedImages[0].pagination.next_url = paginationArr;
                                    //}
                                } else {
                                    returnedImages[0].pagination = {
                                        "next_url" : ""
                                    };
                                }
                                var allImages = returnedImages[0];
                                //Pass the returned images to the buildFeed function

                                if(photosAvailable !== 'finished') sbiBuildFeed(allImages, transientName, sbiSettings, $self);

                                //Iterate the API request variable so that we can limit of the number of subsequent API requests when the Load More button is clicked
                                apiRequests++;

                            } // End sbiImagesReady()

                        }

                    } //End sbiFetchData()

                    //Cache the likes and comments counts by sending an array via ajax to the main plugin file which then stores it in a transient
                    function sbiGetCache(transientName, sbiSettings, $self, cacheWhat, apiURLs){
                        var transientData = transientName;
                        window.sbiCommentCacheStatus = 0;
                        var thisIndex = $self[0].getAttribute('data-sbi-index');

                        // our initial request now sends all transient names at once
                        if (typeof transientName === 'object') {
                            transientData = JSON.stringify(transientName);
                        }
                        var getCacheOpts = {
                            url: sbiajaxurl,
                            type: 'POST',
                            async: true,
                            cache: false,
                            data:{
                                action: 'get_cache',
                                transientName: transientData,
                                useBackupHeader: window.sbiUseBackup[thisIndex].header,
                                useBackupFeed: window.sbiUseBackup[thisIndex].feed
                            },
                            success: function(data) {

                                //Decode the JSON to that it can be used again
                                data = decodeURI(data);
                                data = data.replace(/\\'/g, "'");

                                //Replace any escaped single quotes as it results in invalid JSON

                                data = data.replace(/\\'/g, "'");
                                //Convert the cached JSON string back to a JSON object
                                var jsonobj = JSON.parse( data );

                                if ( cacheWhat == 'all' ) {
                                    if (typeof jsonobj.header.error === 'undefined') {
                                        sbiBuildHeader(jsonobj.header, sbiSettings);
                                    }
                                    if (typeof jsonobj.feed.error === 'undefined') {
                                        if(photosAvailable !== 'finished') sbiBuildFeed(jsonobj.feed, transientName, sbiSettings, $self);
                                        if (typeof jsonobj.warning !== 'undefined') {
                                            var sbiErrorMsg = '<p><b>Cache Error: Looking for cache that doesn\'t exist. Now using a backup feed.</b><br /><span>This error is only visible to WordPress admins.</span>';
                                            var sbiErrorDir = "<p>If you are using a caching plugin, try enabling the option on the Customize tab 'Cache error API recheck' or 'Force cache to clear on interval'</p>";
                                            jQuery('#sb_instagram').before('<div id="sbi_mod_error">' + sbiErrorMsg + sbiErrorDir + '</div>');
                                        }
                                    } else {
                                        // get the index of the feed to check what processes have been done already
                                        feedOptions = JSON.parse($self[0].getAttribute('data-options'));
                                        var thisIndex = $self[0].getAttribute('data-sbi-index');
                                        feedOptions.feedIndex = thisIndex;
                                        // if the cache is unavailable and the user has enabled an attempt at the api, "tryfetch" is returned as the error
                                        if (window.sbiCacheStatuses[thisIndex].feed !== false && jsonobj.feed.error === 'tryfetch') {
                                            // on the second try, indicate that the cache isn't available to prevent this endless loop
                                            window.sbiCacheStatuses[thisIndex].feed = false;
                                            if (!$self.find('.sb_instagram_header .sbi_header_text').length) {
                                                window.sbiCacheStatuses[thisIndex].header = false;
                                            }

                                            // comments do not need to be retrieved
                                            window.sbiCacheStatuses[thisIndex].comments = 'no';
                                            // prevents multiple attempts
                                            feedOptions.tryFetch = true;
                                            // start from scratch with updated feed options and statuses
                                            if (typeof window.sbiCacheStatuses[feedOptions.feedIndex].tryFetch === 'undefined') sbiCreateFeed($self[0], feedOptions);
                                        } else if (window.sbiCacheStatuses[thisIndex].feed === true) {
                                            var sbiErrorMsg = '<p><b>Cache Error: Looking for cache that doesn\'t exist</b><br /><span>This error is only visible to WordPress admins.</span>';
                                            var sbiErrorDir = "<p>If you are using a caching plugin, try enabling the option on the Customize tab 'Cache error API recheck' or 'Force cache to clear on interval'</p>";
                                            jQuery('#sb_instagram').empty().append( '<p style="text-align: center;">Unable to show Instagram photos</p><div id="sbi_mod_error">' + sbiErrorMsg + sbiErrorDir + '</div>');
                                            //sbi_set_use_backup
                                            var submittedData = {
                                                action: 'sbi_set_use_backup',
                                                transientName : transientName,
                                                context : 'falsecache'
                                            };
                                            jQuery.ajax({
                                                url: sbiajaxurl,
                                                type: 'post',
                                                data: submittedData,
                                                success: function (data) {
                                                }
                                            }); // ajax
                                        }
                                    }
                                    if (jsonobj.header.error === 'tryfetch') {
                                        feedOptions = JSON.parse($self[0].getAttribute('data-options'));
                                        var thisIndex = $self[0].getAttribute('data-sbi-index');
                                        feedOptions.feedIndex = thisIndex;
                                        if (window.sbiCacheStatuses[thisIndex].header !== false) {
                                            if (!$self.find('.sb_instagram_header .sbi_header_text').length) {
                                                window.sbiCacheStatuses[thisIndex].header = false;
                                                feedOptions.tryFetch = true;
                                                // start from scratch with updated feed options and statuses
                                                if (typeof window.sbiCacheStatuses[feedOptions.feedIndex].tryFetch === 'undefined') sbiCreateFeed($self[0], feedOptions);

                                            }
                                        }
                                    }
                                    if (typeof jsonobj.comments.error === 'undefined') {
                                        sb_instagram_js_options.sbiPageCommentCache = jsonobj.comments;
                                    }

                                } else {
                                    if( cacheWhat == 'header' ){
                                        sbiBuildHeader(jsonobj, sbiSettings);
                                    } else {
                                        if(photosAvailable !== 'finished') sbiBuildFeed(jsonobj, transientName, sbiSettings, $self);
                                    }
                                }
                                //Pass the returned images to the buildFeed function

                            },
                            error: function(xhr,textStatus,e) {
                                console.log(e);
                                return;
                            }
                        };

                        jQuery.ajax(getCacheOpts);

                    }

                } // sbiCreateFeed

            }); // End jQuery('#sb_instagram.sbi').each

        }


    } // sb_init

    function sbiAddTokenToExpiredList(access_token,transientName) {
        var accessTokenOpts = {
            url: sbiajaxurl,
            type: 'POST',
            async: true,
            cache: false,
            data:{
                action: 'sbi_set_expired_token',
                access_token: access_token,
                transientName: transientName
            },
            success: function(response) {
                return;
            },
            error: function(xhr,textStatus,e) {
                console.log(e);
                return;
            }
        };
        jQuery.ajax(accessTokenOpts);
    }

    function sbiCachePhotos(images, transientName){
        //Convert the JSON object to a string
        var jsonstring = JSON.stringify( images );
        //Encode the JSON string so that it can be stored in the database
        jsonstring = encodeURI(jsonstring);

        if (jsonstring.indexOf('%7B%22') === 0) {
            var setCacheOpts = {
                url: sbiajaxurl,
                type: 'POST',
                async: true,
                cache: false,
                data:{
                    action: 'cache_photos',
                    photos: jsonstring,
                    transientName: transientName,
                },
                success: function(response) {
                    if ( response.indexOf('too much filtering') > -1) {
                        var useBackupOpts = {
                            url: sbiajaxurl,
                            type: 'POST',
                            async: true,
                            cache: false,
                            data: {
                                action: 'set_use_backup',
                                transientName: transientName,
                            },
                            success: function (response) {
                                console.log(response)
                            }
                        };
                        jQuery.ajax(useBackupOpts);
                    }
                    return;
                },
                error: function(xhr,textStatus,e) {
                    console.log(e);
                    return;
                }
            };
            jQuery.ajax(setCacheOpts);
        }

    }

    //function function sbiSetPhotoHeight(){
    function sbiGetColumnCount($self, cols, colsmobile) {
        var sbi_num_cols = cols,
            sbiWindowWidth = window.innerWidth;

        if( $self.hasClass('sbi_mob_col_auto') ){
            if( sbiWindowWidth < 640 && (parseInt(cols) > 2 && parseInt(cols) < 7 ) ) sbi_num_cols = 2;
            if( sbiWindowWidth < 640 && (parseInt(cols) > 6 && parseInt(cols) < 11 ) ) sbi_num_cols = 4;
            if( sbiWindowWidth <= 480 && parseInt(cols) > 2 ) sbi_num_cols = 1;
        } else if (sbiWindowWidth <= 480){
            sbi_num_cols = colsmobile;
        }

        return sbi_num_cols;
    }

    function sbiGetWidthForResType(type) {
        switch (type) {
            case 'thumbnail':
                return 150;
            case 'low_resolution':
                return 320;
            default:
                return 640;
        }
    }

    function sbiGetBestResolutionForCustom(colWidth,imageWidth,imageHeight) {
        var aspectRatio = Math.max(1,imageWidth/imageHeight),
            bestWidth = colWidth*aspectRatio,
            bestWidthRounded = Math.ceil(bestWidth / 10) * 10,
            customSizes = [30,40,50,60,80,90,100,120,130,150,160,180,190,200,240,270,280,320,350,360,390,480,540,600,640,720,750,800,810,960,1280];;

        if (customSizes.indexOf(parseInt(bestWidthRounded)) === -1) {
            var done = false;
            jQuery.each(customSizes, function (index, item) {
                if (item > parseInt(bestWidthRounded) && !done) {
                    bestWidthRounded = item;

                    done = true;
                }
            });
        }

        return bestWidthRounded;
    }

    function sbiNeedToRaiseRes(width,oldRes) {
        return (width > oldRes);
    }

    function sbiGetResolutionSettings($self, imgRes, cols, colsmobile, $i) {
        var feedWidth = $self.innerWidth(),
            //colWidth = $self.innerWidth() / cols,
            photoPadding = parseInt($self.find('#sbi_images').css('padding')) * 2,
            cols = sbiGetColumnCount($self, parseInt(cols), parseInt(colsmobile)),
            colWidth = ($self.innerWidth() / cols) - photoPadding,
            imgResReturn = {
                'type'  : 'low_resolution',
                'width' : ''
            },
            customSizes = [30,40,50,60,80,90,100,120,130,150,160,180,190,200,240,270,280,320,350,360,390,480,540,600,640,720,750,800,810,960,1280];
        if (!isNaN(imgRes)) {
            imgResReturn.type = 'custom';
            if (customSizes.indexOf(parseInt(imgRes)) > -1) {
                imgResReturn.width = imgRes;
            } else {
                var done = false;
                jQuery.each(customSizes,function(index,item) {
                    if (item > parseInt(imgRes) && !done) {
                        imgResReturn.width = item;
                        done = true;
                    }
                });
            }
        } else {
            switch(imgRes) {
                case 'auto':
                    colWidth = feedWidth/cols;
                    //Check if page width is less than 640. If it is then use the script above
                    var sbiWindowWidth = jQuery(window).width();
                    if( sbiWindowWidth < 640 && $self.is('.sbi_mob_col_auto') ){
                        //Need this for mobile so that image res is right on mobile, as the number of cols isn't always accurate on mobile as they are changed using CSS
                        if( feedWidth < 640 && $self.is('.sbi_col_1') ) colWidth = 480; //Use full size images - this is for carousel as it's always set to sbi_col_1
                        if( feedWidth < 640 && $self.is('.sbi_col_3, .sbi_col_4, .sbi_col_5, .sbi_col_6') ) colWidth = 300; //Use medium images
                        if( feedWidth < 640 && $self.is('.sbi_col_7, .sbi_col_8, .sbi_col_9, .sbi_col_10') ) colWidth = 100; //Use thumbnail images
                        if( (feedWidth > 320 && feedWidth < 480) && sbiWindowWidth < 480 ) colWidth = 480; //Use full size images
                        if( feedWidth < 320 && sbiWindowWidth < 480 ) colWidth = 300; //Use medium size images
                    }

                    if( colWidth < 150 ){
                        imgResReturn.type = 'thumbnail';
                    } else if( colWidth < 320 ){
                        imgResReturn.type = 'low_resolution';
                    } else {
                        imgResReturn.type = 'standard_resolution';
                    }

                    break;
                case 'autocustom':
                    //var imageSize = Math.ceil(colWidth / 10) * 10;

                    if (colWidth > 960) {
                        imgResReturn.type = 'custom';
                        imgResReturn.width = 1280;
                    } else if((colWidth > 130 && colWidth <= 150)
                        || (colWidth > 280 && colWidth <= 320)
                        || (colWidth > 600 && colWidth <= 640) ) {

                        if( colWidth < 150 ){
                            imgResReturn.type = 'thumbnail';
                            imgResReturn.width = 150;
                        } else if( colWidth <= 320 ){
                            imgResReturn.type = 'low_resolution';
                            imgResReturn.width = 320;
                        } else {
                            imgResReturn.type = 'standard_resolution';
                            imgResReturn.width = 640;
                        }

                    } else {
                        imgResReturn.type = 'autocustom';
                        imgResReturn.width = colWidth;
                    }

                    break;
                case 'thumb':
                    imgResReturn.type = 'thumbnail';
                    break;
                case 'medium':
                    imgResReturn.type = 'low_resolution';
                    break;
                default:
                    // do custom sizes if set
                    imgResReturn.type = 'standard_resolution';
            }
        }

        if ( typeof window.sbiFeedMeta[$i].minRes === 'undefined' ) {
            window.sbiFeedMeta[$i].minRes = imgResReturn.type === 'autocustom' ? sbiGetBestResolutionForCustom(colWidth,imgResReturn.width,imgResReturn.width): sbiGetWidthForResType(imgResReturn.type);
        }

        return imgResReturn;
    }
    // Called at the very end of the feed creation process
    // Takes all of the data retrieved from the API during the feed creation process and caches it
    function sbi_cache_all(imagesArr,transientName) {
        if (transientName.indexOf('header') && typeof imagesArr.data.pagination === 'undefined') {
            sbiCachePhotos(imagesArr,transientName);
        } else if (!transientName.indexOf('header') && typeof imagesArr.data.pagination !== 'undefined') {
            sbiCachePhotos(imagesArr,transientName);
        }
    }

    jQuery( document ).ready(function() {
        window.sbiCommentCacheStatus = 0;
        sbi_init(function(imagesArr,transientName) {
            sbi_cache_all(imagesArr,transientName);
        });
    });

} // end sbi_js_exists check;
/* global wc_add_to_cart_params */
jQuery( function( $ ) {

	if ( typeof wc_add_to_cart_params === 'undefined' ) {
		return false;
	}

	/**
	 * AddToCartHandler class.
	 */
	var AddToCartHandler = function() {
		$( document.body )
			.on( 'click', '.add_to_cart_button', this.onAddToCart )
			.on( 'click', '.remove_from_cart_button', this.onRemoveFromCart )
			.on( 'added_to_cart', this.updateButton )
			.on( 'added_to_cart', this.updateCartPage )
			.on( 'added_to_cart removed_from_cart', this.updateFragments );
	};

	/**
	 * Handle the add to cart event.
	 */
	AddToCartHandler.prototype.onAddToCart = function( e ) {
		var $thisbutton = $( this );

		if ( $thisbutton.is( '.ajax_add_to_cart' ) ) {
			if ( ! $thisbutton.attr( 'data-product_id' ) ) {
				return true;
			}

			e.preventDefault();

			$thisbutton.removeClass( 'added' );
			$thisbutton.addClass( 'loading' );

			var data = {};

			$.each( $thisbutton.data(), function( key, value ) {
				data[ key ] = value;
			});

			// Trigger event.
			$( document.body ).trigger( 'adding_to_cart', [ $thisbutton, data ] );

			// Ajax action.
			$.post( wc_add_to_cart_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'add_to_cart' ), data, function( response ) {
				if ( ! response ) {
					return;
				}

				if ( response.error && response.product_url ) {
					window.location = response.product_url;
					return;
				}

				// Redirect to cart option
				if ( wc_add_to_cart_params.cart_redirect_after_add === 'yes' ) {
					window.location = wc_add_to_cart_params.cart_url;
					return;
				}

				// Trigger event so themes can refresh other areas.
				$( document.body ).trigger( 'added_to_cart', [ response.fragments, response.cart_hash, $thisbutton ] );
			});
		}
	};

	/**
	 * Update fragments after remove from cart event in mini-cart.
	 */
	AddToCartHandler.prototype.onRemoveFromCart = function( e ) {
		var $thisbutton = $( this ),
			$row        = $thisbutton.closest( '.woocommerce-mini-cart-item' );

		e.preventDefault();

		$row.block({
			message: null,
			overlayCSS: {
				opacity: 0.6
			}
		});

		$.post( wc_add_to_cart_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'remove_from_cart' ), { cart_item_key : $thisbutton.data( 'cart_item_key' ) }, function( response ) {
			if ( ! response || ! response.fragments ) {
				window.location = $thisbutton.attr( 'href' );
				return;
			}
			$( document.body ).trigger( 'removed_from_cart', [ response.fragments, response.cart_hash ] );
		}).fail( function() {
			window.location = $thisbutton.attr( 'href' );
			return;
		});
	};

	/**
	 * Update cart page elements after add to cart events.
	 */
	AddToCartHandler.prototype.updateButton = function( e, fragments, cart_hash, $button ) {
		$button = typeof $button === 'undefined' ? false : $button;

		if ( $button ) {
			$button.removeClass( 'loading' );
			$button.addClass( 'added' );

			// View cart text.
			if ( ! wc_add_to_cart_params.is_cart && $button.parent().find( '.added_to_cart' ).length === 0 ) {
				$button.after( ' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' +
					wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + '</a>' );
			}

			$( document.body ).trigger( 'wc_cart_button_updated', [ $button ] );
		}
	};

	/**
	 * Update cart page elements after add to cart events.
	 */
	AddToCartHandler.prototype.updateCartPage = function() {
		var page = window.location.toString().replace( 'add-to-cart', 'added-to-cart' );

		$( '.shop_table.cart' ).load( page + ' .shop_table.cart:eq(0) > *', function() {
			$( '.shop_table.cart' ).stop( true ).css( 'opacity', '1' ).unblock();
			$( document.body ).trigger( 'cart_page_refreshed' );
		});

		$( '.cart_totals' ).load( page + ' .cart_totals:eq(0) > *', function() {
			$( '.cart_totals' ).stop( true ).css( 'opacity', '1' ).unblock();
			$( document.body ).trigger( 'cart_totals_refreshed' );
		});
	};

	/**
	 * Update fragments after add to cart events.
	 */
	AddToCartHandler.prototype.updateFragments = function( e, fragments ) {
		if ( fragments ) {
			$.each( fragments, function( key ) {
				$( key )
					.addClass( 'updating' )
					.fadeTo( '400', '0.6' )
					.block({
						message: null,
						overlayCSS: {
							opacity: 0.6
						}
					});
			});

			$.each( fragments, function( key, value ) {
				$( key ).replaceWith( value );
				$( key ).stop( true ).css( 'opacity', '1' ).unblock();
			});

			$( document.body ).trigger( 'wc_fragments_loaded' );
		}
	};

	/**
	 * Init AddToCartHandler.
	 */
	new AddToCartHandler();
});
;
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
;(function() {
/*jshint eqeqeq:false curly:false latedef:false */
"use strict";

	function setup($) {
		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = $.noop || function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// confusing userAgent strings on Vista)
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6  = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		var setExpr = $.isFunction( document.createElement('div').style.setExpression );

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout === undefined) timeout = 3000;

			// Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
			var callBlock = function(opts) {
				opts = opts || {};

				$.blockUI({
					message: $m,
					fadeIn : typeof opts.fadeIn  !== 'undefined' ? opts.fadeIn  : 700,
					fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
					timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
					centerY: false,
					showOverlay: false,
					onUnblock: onClose,
					css: $.blockUI.defaults.growlCSS
				});
			};

			callBlock();
			var nonmousedOpacity = $m.css('opacity');
			$m.mouseover(function() {
				callBlock({
					fadeIn: 0,
					timeout: 30000
				});

				var displayBlock = $('.blockMsg');
				displayBlock.stop(); // cancel fadeout if it has started
				displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
			}).mouseout(function() {
				$('.blockMsg').fadeOut(1000);
			});
			// End konapun additions
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			if ( this[0] === window ) {
				$.blockUI( opts );
				return this;
			}
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static') {
					this.style.position = 'relative';
					$(this).data('blockUI.static', true);
				}
				this.style.zoom = 1; // force 'hasLayout' in ie
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			if ( this[0] === window ) {
				$.unblockUI( opts );
				return this;
			}
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.70; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,		// title string; only used when theme == true
			draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor:	'#000',
				opacity:			0.6,
				cursor:				'wait'
			},

			// style to replace wait cursor before unblocking to correct issue
			// of lingering wait cursor
			cursorReset: 'default',

			// styles applied when using $.growlUI
			growlCSS: {
				width:		'350px',
				top:		'10px',
				left:		'',
				right:		'10px',
				border:		'none',
				padding:	'5px',
				opacity:	0.6,
				cursor:		'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius':'10px',
				'-moz-border-radius':	'10px',
				'border-radius':		'10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			/*jshint scripturl:true */
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

            // elements that can receive focus
            focusableElements: ':input:enabled:visible',

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			// no longer needed in 2012
			// applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	onUnblock(element, options)
			onUnblock: null,

			// callback method invoked when the overlay area is clicked.
			// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
			onOverlayClick: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick)
				opts.overlayCSS.cursor = 'pointer';

			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe)
				lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
			else
				lyr1 = $('<div class="blockUI" style="display:none"></div>');

			if (opts.theme)
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
			else
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if (msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.support.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each(layers, function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						if (full)
							s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
						else
							s.setExpression('height','this.parentNode.offsetHeight + "px"');
						if (full)
							s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
						else
							s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if ((msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock.bind(lyr3)();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(opts.focusableElements,pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					if (full)
						$.unblockUI(opts);
					else
						$(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		}

		// remove the block
		function remove(el, opts) {
			var count;
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $(document.body).children().filter('.blockUI').add('body > .blockUI');
			else
				els = $el.find('>.blockUI');

			// fix cursor issue
			if ( opts.cursorReset ) {
				if ( els.length > 1 )
					els[1].style.cursor = opts.cursorReset;
				if ( els.length > 2 )
					els[2].style.cursor = opts.cursorReset;
			}

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				count = els.length;
				els.stop().fadeOut(opts.fadeOut, function() {
					if ( --count === 0)
						reset(els,data,opts,el);
				});
			}
			else
				reset(els, data, opts, el);
		}

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			var $el = $(el);
			if ( $el.data('blockUI.isBlocked') )
				return;

			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				data.el.style.cursor = 'default'; // #59
				if (data.parent)
					data.parent.appendChild(data.el);
				$el.removeData('blockUI.history');
			}

			if ($el.data('blockUI.static')) {
				$el.css('position', 'static'); // #22
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);

			// fix issue in Safari 6 where block artifacts remain until reflow
			var body = $(document.body), w = body.width(), cssW = body[0].style.width;
			body.width(w-1).width(w);
			body[0].style.width = cssW;
		}

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!full || !opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
			if (b)
				$(document).bind(events, opts, handler);
			else
				$(document).unbind(events, handler);

		// former impl...
		//		var $e = $('a,:input');
		//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		}

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back);},10);
						return false;
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass('blockOverlay') && opts.onOverlayClick)
				opts.onOverlayClick(e);

			// allow events within the message content
			if (target.parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return target.parents().children().filter('div.blockUI').length === 0;
		}

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		}

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		}

		function sz(el, p) {
			return parseInt($.css(el,p),10)||0;
		}

	}


	/*global define:true */
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();;
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
;
/* global Cookies */
jQuery( function( $ ) {
	// Orderby
	$( '.woocommerce-ordering' ).on( 'change', 'select.orderby', function() {
		$( this ).closest( 'form' ).submit();
	});

	// Target quantity inputs on product pages
	$( 'input.qty:not(.product-quantity input.qty)' ).each( function() {
		var min = parseFloat( $( this ).attr( 'min' ) );

		if ( min >= 0 && parseFloat( $( this ).val() ) < min ) {
			$( this ).val( min );
		}
	});

	// Set a cookie and hide the store notice when the dismiss button is clicked
	$( '.woocommerce-store-notice__dismiss-link' ).click( function() {
		Cookies.set( 'store_notice', 'hidden', { path: '/' } );
		$( '.woocommerce-store-notice' ).hide();
	});

	// Check the value of that cookie and show/hide the notice accordingly
	if ( 'hidden' === Cookies.get( 'store_notice' ) ) {
		$( '.woocommerce-store-notice' ).hide();
	} else {
		$( '.woocommerce-store-notice' ).show();
	}

	// Make form field descriptions toggle on focus.
	$( document.body ).on( 'click', function() {
		$( '.woocommerce-input-wrapper span.description:visible' ).prop( 'aria-hidden', true ).slideUp( 250 );
	} );

	$( '.woocommerce-input-wrapper' ).on( 'click', function( event ) {
		event.stopPropagation();
	} );

	$( '.woocommerce-input-wrapper :input' )
		.on( 'keydown', function( event ) {
			var input       = $( this ),
				parent      = input.parent(),
				description = parent.find( 'span.description' );

			if ( 27 === event.which && description.length && description.is( ':visible' ) ) {
				description.prop( 'aria-hidden', true ).slideUp( 250 );
				event.preventDefault();
				return false;
			}
		} )
		.on( 'click focus', function() {
			var input       = $( this ),
				parent      = input.parent(),
				description = parent.find( 'span.description' );

			parent.addClass( 'currentTarget' );

			$( '.woocommerce-input-wrapper:not(.currentTarget) span.description:visible' ).prop( 'aria-hidden', true ).slideUp( 250 );

			if ( description.length && description.is( ':hidden' ) ) {
				description.prop( 'aria-hidden', false ).slideDown( 250 );
			}

			parent.removeClass( 'currentTarget' );
		} );

	// Common scroll to element code.
	$.scroll_to_notices = function( scrollElement ) {
		var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;

		if ( scrollElement.length ) {
			if ( isSmoothScrollSupported ) {
				scrollElement[0].scrollIntoView({
					behavior: 'smooth',
					block:    'center'
				});
			} else {
				$( 'html, body' ).animate( {
					scrollTop: ( scrollElement.offset().top - 100 )
				}, 1000 );
			}
		}
	};
});
;
/* global wc_cart_fragments_params, Cookies */
jQuery( function( $ ) {

	// wc_cart_fragments_params is required to continue, ensure the object exists
	if ( typeof wc_cart_fragments_params === 'undefined' ) {
		return false;
	}

	/* Storage Handling */
	var $supports_html5_storage = true,
		cart_hash_key           = wc_cart_fragments_params.cart_hash_key;

	try {
		$supports_html5_storage = ( 'sessionStorage' in window && window.sessionStorage !== null );
		window.sessionStorage.setItem( 'wc', 'test' );
		window.sessionStorage.removeItem( 'wc' );
		window.localStorage.setItem( 'wc', 'test' );
		window.localStorage.removeItem( 'wc' );
	} catch( err ) {
		$supports_html5_storage = false;
	}

	/* Cart session creation time to base expiration on */
	function set_cart_creation_timestamp() {
		if ( $supports_html5_storage ) {
			sessionStorage.setItem( 'wc_cart_created', ( new Date() ).getTime() );
		}
	}

	/** Set the cart hash in both session and local storage */
	function set_cart_hash( cart_hash ) {
		if ( $supports_html5_storage ) {
			localStorage.setItem( cart_hash_key, cart_hash );
			sessionStorage.setItem( cart_hash_key, cart_hash );
		}
	}

	var $fragment_refresh = {
		url: wc_cart_fragments_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'get_refreshed_fragments' ),
		type: 'POST',
		success: function( data ) {
			if ( data && data.fragments ) {

				$.each( data.fragments, function( key, value ) {
					$( key ).replaceWith( value );
				});

				if ( $supports_html5_storage ) {
					sessionStorage.setItem( wc_cart_fragments_params.fragment_name, JSON.stringify( data.fragments ) );
					set_cart_hash( data.cart_hash );

					if ( data.cart_hash ) {
						set_cart_creation_timestamp();
					}
				}

				$( document.body ).trigger( 'wc_fragments_refreshed' );
			}
		}
	};

	/* Named callback for refreshing cart fragment */
	function refresh_cart_fragment() {
		$.ajax( $fragment_refresh );
	}

	/* Cart Handling */
	if ( $supports_html5_storage ) {

		var cart_timeout = null,
			day_in_ms    = ( 24 * 60 * 60 * 1000 );

		$( document.body ).on( 'wc_fragment_refresh updated_wc_div', function() {
			refresh_cart_fragment();
		});

		$( document.body ).on( 'added_to_cart removed_from_cart', function( event, fragments, cart_hash ) {
			var prev_cart_hash = sessionStorage.getItem( cart_hash_key );

			if ( prev_cart_hash === null || prev_cart_hash === undefined || prev_cart_hash === '' ) {
				set_cart_creation_timestamp();
			}

			sessionStorage.setItem( wc_cart_fragments_params.fragment_name, JSON.stringify( fragments ) );
			set_cart_hash( cart_hash );
		});

		$( document.body ).on( 'wc_fragments_refreshed', function() {
			clearTimeout( cart_timeout );
			cart_timeout = setTimeout( refresh_cart_fragment, day_in_ms );
		} );

		// Refresh when storage changes in another tab
		$( window ).on( 'storage onstorage', function ( e ) {
			if ( cart_hash_key === e.originalEvent.key && localStorage.getItem( cart_hash_key ) !== sessionStorage.getItem( cart_hash_key ) ) {
				refresh_cart_fragment();
			}
		});

		// Refresh when page is shown after back button (safari)
		$( window ).on( 'pageshow' , function( e ) {
			if ( e.originalEvent.persisted ) {
				$( '.widget_shopping_cart_content' ).empty();
				$( document.body ).trigger( 'wc_fragment_refresh' );
			}
		} );

		try {
			var wc_fragments = $.parseJSON( sessionStorage.getItem( wc_cart_fragments_params.fragment_name ) ),
				cart_hash    = sessionStorage.getItem( cart_hash_key ),
				cookie_hash  = Cookies.get( 'woocommerce_cart_hash'),
				cart_created = sessionStorage.getItem( 'wc_cart_created' );

			if ( cart_hash === null || cart_hash === undefined || cart_hash === '' ) {
				cart_hash = '';
			}

			if ( cookie_hash === null || cookie_hash === undefined || cookie_hash === '' ) {
				cookie_hash = '';
			}

			if ( cart_hash && ( cart_created === null || cart_created === undefined || cart_created === '' ) ) {
				throw 'No cart_created';
			}

			if ( cart_created ) {
				var cart_expiration = ( ( 1 * cart_created ) + day_in_ms ),
					timestamp_now   = ( new Date() ).getTime();
				if ( cart_expiration < timestamp_now ) {
					throw 'Fragment expired';
				}
				cart_timeout = setTimeout( refresh_cart_fragment, ( cart_expiration - timestamp_now ) );
			}

			if ( wc_fragments && wc_fragments['div.widget_shopping_cart_content'] && cart_hash === cookie_hash ) {

				$.each( wc_fragments, function( key, value ) {
					$( key ).replaceWith(value);
				});

				$( document.body ).trigger( 'wc_fragments_loaded' );
			} else {
				throw 'No fragment';
			}

		} catch( err ) {
			refresh_cart_fragment();
		}

	} else {
		refresh_cart_fragment();
	}

	/* Cart Hiding */
	if ( Cookies.get( 'woocommerce_items_in_cart' ) > 0 ) {
		$( '.hide_cart_widget_if_empty' ).closest( '.widget_shopping_cart' ).show();
	} else {
		$( '.hide_cart_widget_if_empty' ).closest( '.widget_shopping_cart' ).hide();
	}

	$( document.body ).on( 'adding_to_cart', function() {
		$( '.hide_cart_widget_if_empty' ).closest( '.widget_shopping_cart' ).show();
	});
});
;
/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map;

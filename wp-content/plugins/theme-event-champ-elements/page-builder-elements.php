<?php
	/*======
	*
	* Events Slider
	*
	======*/
	function eventchamp_latest_events_slider_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'eventcount' => '',
				'offset' => '',
				'eventids' => '',
				'excludeevents' => '',
				'order' => '',
				'order-type' => '',
				'hide-expired' => '',
				'exclude-categories' => '',
				'exclude-locations' => '',
				'exclude-organizers' => '',
				'exclude-tags' => '',
				'include-categories' => '',
				'include-locations' => '',
				'include-organizers' => '',
				'include-tags' => '',
				'customtextdetailsbutton' => '',
				'customtextbuynowbutton' => '',
				'autoplay' => '',
				'sliderheight' => '',
				'navbuttons' => '',
				'dots' => '',
				'loopstatus' => '',
				'startdate' => '',
				'enddate' => '',
				'location' => '',
				'venue' => '',
			), $atts
		);
		
		$output = '';

		/*====== Expired Events Status ======*/
		if( !empty( $atts['hide-expired'] ) ) {
			$hideexpired = esc_attr( $atts["hide-expired"] );
		} else {
			$hideexpired = "false";
		}

		/*====== Autoplay Status ======*/
		if( !empty( $atts['autoplay'] ) ) {
			$autoplay = esc_attr( $atts["autoplay"] );
		} else {
			$autoplay = "false";
		}

		/*====== Slider Height ======*/
		if( !empty( $atts['sliderheight'] ) ) {
			$sliderheight = ' max-height:' . esc_attr( $atts["sliderheight"] ) . ';';
		} else {
			$sliderheight = "";
		}

		/*====== Navigation Arrow Status ======*/
		if( !empty( $atts['navbuttons'] ) ) {
			$navbuttons = esc_attr( $atts["navbuttons"] );
		} else {
			$navbuttons = "false";
		}

		/*====== Dots Status ======*/
		if( !empty( $atts['dots'] ) ) {
			$dots = esc_attr( $atts["dots"] );
		} else {
			$dots = "true";
		}

		/*====== Loop Status ======*/
		if( $atts["loopstatus"] == "true" ) {
			$loopstatus = "true";
		} else {
			$loopstatus = "false";
		}

		/*====== Exclude Categories ======*/
		$exclude_category_array = "";

		if( !empty( $atts['exclude-categories'] ) ) {
			$exclude_categories = $atts['exclude-categories'];
			$exclude_categories = explode( ',', $exclude_categories );
		} else {
			$exclude_categories = "";
		}

		if( !empty( $exclude_categories ) ) {
			$exclude_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $exclude_categories,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Locations ======*/
		$exclude_location_array = "";

		if( !empty( $atts['exclude-locations'] ) ) {
			$exclude_locations = $atts['exclude-locations'];
			$exclude_locations = explode( ',', $exclude_locations );
		} else {
			$exclude_locations = "";
		}

		if( !empty( $exclude_locations ) ) {
			$exclude_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $exclude_locations,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Organizers ======*/
		$exclude_organizer_array = "";

		if( !empty( $atts['exclude-organizers'] ) ) {
			$exclude_organizers = $atts['exclude-organizers'];
			$exclude_organizers = explode( ',', $exclude_organizers );
		} else {
			$exclude_organizers = "";
		}

		if( !empty( $exclude_organizers ) ) {
			$exclude_organizer_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $exclude_organizers,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Tags ======*/
		$exclude_tag_array = "";

		if( !empty( $atts['exclude-tags'] ) ) {
			$exclude_tags = $atts['exclude-tags'];
			$exclude_tags = explode( ',', $exclude_tags );
		} else {
			$exclude_tags = "";
		}

		if( !empty( $exclude_tags ) ) {
			$exclude_tag_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $exclude_tags,
				'operator' => 'NOT IN',
			);
		}

		/*====== Include Categories ======*/
		$include_category_array = "";

		if( !empty( $atts['include-categories'] ) ) {
			$include_categories = $atts['include-categories'];
			$include_categories = explode( ',', $include_categories );
		} else {
			$include_categories = "";
		}

		if( !empty( $include_categories ) ) {
			$include_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $include_categories,
				'operator' => 'IN',
			);
		}

		/*====== Include Locations ======*/
		$include_location_array = "";

		if( !empty( $atts['include-locations'] ) ) {
			$include_locations = $atts['include-locations'];
			$include_locations = explode( ',', $include_locations );
		} else {
			$include_locations = "";
		}

		if( !empty( $include_locations ) ) {
			$include_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $include_locations,
				'operator' => 'IN',
			);
		}

		/*====== Include Organizers ======*/
		$include_organizers = "";

		if( !empty( $atts['include-organizers'] ) ) {
			$include_organizers = $atts['include-organizers'];
			$include_organizers = explode( ',', $include_organizers );
		} else {
			$include_organizers = "";
		}

		if( !empty( $include_organizers ) ) {
			$include_organizers_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $include_organizers,
				'operator' => 'IN',
			);
		}

		/*====== Include Tags ======*/
		$include_tags_array = "";

		if( !empty( $atts['include-tags'] ) ) {
			$include_tags = $atts['include-tags'];
			$include_tags = explode( ',', $include_tags );
		} else {
			$include_tags = "";
		}

		if( !empty( $include_tags ) ) {
			$include_tags_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $include_tags,
				'operator' => 'IN',
			);
		}

		/*====== Main Query ======*/
		$arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'event',
			'tax_query' => array (
				'relation' => 'AND',
				$include_location_array,
				$include_category_array,
				$include_organizers_array,
				$include_tags_array,
				$exclude_category_array,
				$exclude_location_array,
				$exclude_organizer_array,
				$exclude_tag_array,
			)
		);

		/*====== Order & Order By ======*/
		if( $atts["order"] == "ASC" ) {
			$order = "ASC";
		} else {
			$order = "DESC";
		}

		if( !empty( $order ) ) {
			$extra_query = array(
				'order' => $order,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		if( $atts["order-type"] == "popular-comment" ) {
			$order_by = "comment_count";
		} elseif( $atts["order-type"] == "id" ) {
			$order_by = "ID";
		} elseif( $atts["order-type"] == "popular" ) {
			$order_by = "comment_count";
		} elseif( $atts["order-type"] == "title" ) {
			$order_by = "title";
		} elseif( $atts["order-type"] == "menu_order" ) {
			$order_by = "menu_order";
		} elseif( $atts["order-type"] == "rand" ) {
			$order_by = "rand";
		} elseif( $atts["order-type"] == "none" ) {
			$order_by = "none";
		} elseif( $atts["order-type"] == "event-date" ) {
			$order_by = "meta_value";
			$meta_key = "event_start_date";

			if( !empty( $meta_key ) ) {
				$extra_query = array(
					'meta_key' => $meta_key,
				);
				$arg = wp_parse_args( $arg, $extra_query );
			} else {
				$meta_key = "event_start_date";
			}
		} else {
			$order_by = "date";
		}

		if( !empty( $order_by ) ) {
			$extra_query = array(
				'orderby' => $order_by,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Event Count ======*/
		if( !empty( $atts["eventcount"] ) ) {
			$extra_query = array(
				'posts_per_page' => $atts["eventcount"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Offset ======*/
		if( !empty( $atts["offset"] ) ) {
			$extra_query = array(
				'offset' => $atts["offset"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Include Events ======*/
		if( !empty( $atts['eventids'] ) ) {
			$eventids = $atts['eventids'];
			$include_events = explode( ',', $eventids );
		} else {
			$include_events = "";
		}

		if( !empty( $include_events ) ) {
			$extra_query = array(
				'post__in' => $include_events,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Exclude Events ======*/
		$excludeevents = $atts['excludeevents'];

		if( $hideexpired == "false" ) {
			if( !empty( $atts['excludeevents'] ) ) {
				$exclude_events = $atts['excludeevents'];
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			if( !empty( $exclude_events ) ) {
				$extra_query = array(
					'post__not_in' => $exclude_events,
				);
				$arg = wp_parse_args( $arg, $extra_query );
			}
		}

		/*====== Add Expired Events in Exclude Events ======*/
		if( $hideexpired == "true" ) {
			$expired_ids = eventchamp_expired_event_ids();
		} else {
			$expired_ids = array();
		}

		if( !empty( $expired_ids ) ) {
			if( !empty( $excludeevents ) ) {
				$exclude_events = $excludeevents;
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			$excludeevents_with_expired = array_merge( $exclude_events, $expired_ids );

			$extra_query = array(
				'post__not_in' => $excludeevents_with_expired,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== HTML Output ======*/
		$wp_query = new WP_Query( $arg );
		if( !empty( $wp_query ) ) {
			$event_faq = get_post_meta( get_the_ID(), 'event_faq', true );
			$output .= '<div class="swiper-container gloria-sliders latest-events-slider" data-item="1" data-column-space="0" data-sloop="' . esc_attr( $loopstatus ) . '" data-aplay="' . esc_attr( $autoplay ) . '" data-effect="fade" data-pagination=".swiper-pagination">';
				$output .= '<div class="swiper-wrapper">';
					while ( $wp_query->have_posts() ) {
						$wp_query->the_post();
						$event_tickets = get_post_meta( get_the_ID(), 'event_tickets', true );
						$event_start_date = get_post_meta( get_the_ID(), 'event_start_date', true );
						$event_end_date = get_post_meta( get_the_ID(), 'event_end_date', true );
						$event_location = get_post_meta( get_the_ID(), 'event_location', true );
						$event_venue = get_post_meta( get_the_ID(), 'event_venue', true );
						$event_cats = wp_get_post_terms( get_the_ID(), 'eventcat' );

						if ( has_post_thumbnail() ) {
							$bg_url = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'eventchamp-event-slider' );
							$bg_url = $bg_url[0];
						} else {
							$bg_url = "";
						}

						if( !empty( $event_start_date ) or !empty( $event_end_date ) or !empty( $event_location ) or !empty( $event_venue ) or !empty( $event_cats ) ) {
							$output .= '<div class="swiper-slide" style="' . $sliderheight . '">';
								$output .= '<div class="slider-wrapper" style="background-image:url(' . esc_url( $bg_url ) . ');">';
									$output .= '<div class="container">';
										$output .= '<div class="opacity"></div>';
										$output .= '<div class="content">';
											$output .= '<div class="feature">';
												if( !empty( $event_cats ) ) {
													$output .= '<ul class="category">';
														foreach( $event_cats as $event_cat ) {
															if( !empty( $event_cat ) ) {
																$term_id = $event_cat->term_id;
																$term_name = $event_cat->name;

																if( !empty( $term_name ) ) {
																	$output .= '<li><a href="' . get_term_link( $event_cat->term_id ) . '" title="' . esc_attr( $event_cat->name ) . '">' . esc_attr( $event_cat->name ) . '</a></li>';
																}
															}
														}
													$output .= '</ul>';
												}
												$output .= '<div class="title">' . get_the_title() . '</div>';
												if( !empty( $event_start_date ) or !empty( $event_end_date ) or !empty( $event_location ) or !empty( $event_venue ) ) {
													$output .= '<ul class="information">';
														if( $atts["startdate"] == "true" ) {
															if( !empty( $event_start_date ) ) {
																$output .= '<li>';
																	$output .= '<i class="far fa-calendar-check" aria-hidden="true"></i>';
																	$output .= '<span>' . eventchamp_global_date_converter( $event_start_date ) . '</span>';
																$output .= '</li>';
															}
														}

														if( $atts["enddate"] == "true" ) {
															if( !empty( $event_end_date ) ) {
																$output .= '<li>';
																	$output .= '<i class="far fa-calendar-times" aria-hidden="true"></i>';
																	$output .= '<span>' . eventchamp_global_date_converter( $event_end_date ) . '</span>';
																$output .= '</li>';
															}
														}

														if( $atts["location"] == "true" ) {
															if( !empty( $event_location ) ) {
																$location = get_term( $event_location, 'location' );
																if( !empty( $location ) ) {
																	if( !empty( $location->name ) ) {
																		$output .= '<li>';
																			$output .= '<i class="fas fa-map-marker-alt" aria-hidden="true"></i>';
																			$output .= '<span>' . esc_attr( $location->name ) . '</span>';
																		$output .= '</li>';
																	}
																}
															}
														}

														if( $atts["venue"] == "true" ) {
															if( !empty( $event_venue ) ) {
																$venue_name = get_the_title( $event_venue );
																if( !empty( $venue_name ) ) {
																	$output .= '<li>';
																		$output .= '<i class="fas fa-map-signs" aria-hidden="true"></i>';
																		$output .= '<span>' . esc_attr( $venue_name ) . '</span>';
																	$output .= '</li>';
																}
															}
														}
													$output .= '</ul>';
												}
											$output .= '</div>';
											$output .= '<div class="buttons">';
												if( !empty( $atts["customtextdetailsbutton"] ) ) {
													$button1_text = esc_attr( $atts["customtextdetailsbutton"] );
												} else {
													$button1_text = esc_html__( 'Details', 'eventchamp' );
												}

												if( !empty( $atts["customtextbuynowbutton"] ) ) {
													$button2_text = esc_attr( $atts["customtextbuynowbutton"] );
												} else {
													$button2_text = esc_html__( 'Buy Ticket', 'eventchamp' );
												}

												$output .= '<a href="' . get_the_permalink() . '" title="' . esc_attr( $button1_text ) . '">';
													$output .= '<span>' . esc_attr( $button1_text ) . '</span>';
												$output .= '</a>';
												if( !empty( $event_tickets ) ) {
													$output .= '<a href="' . get_the_permalink() . '#detail-tab" title="' . esc_attr( $button2_text ) . '">';
														$output .= '<span>' . esc_attr( $button2_text ) . '</span>';
													$output .= '</a>';
												}
											$output .= '</div>';
										$output .= '</div>';
									$output .= '</div>';
								$output .= '</div>';
							$output .= '</div>';
						}
					}
				$output .= '</div>';

				if( $dots == "true" ) {
					$output .= '<div class="swiper-pagination"></div>';
				}

				if( $navbuttons == "true" ) {
					$output .= '<div class="pagination-left prev"><i class="fas fa-chevron-left" aria-hidden="true"></i></div>';
					$output .= '<div class="pagination-right next"><i class="fas fa-chevron-right" aria-hidden="true"></i></div>';
				}
			$output .= '</div>';
		}
		wp_reset_postdata();

		return $output;
	}
	add_shortcode( "eventchamp_latest_events_slider", "eventchamp_latest_events_slider_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Events Slider', 'eventchamp' ),
				"base" => "eventchamp_latest_events_slider",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-latest-events-slider.jpg',
				"description" => esc_html__( 'Events slider element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Event Count', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an event count.', 'eventchamp' ),
						"param_name" => "eventcount",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Offset', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an offset number.', 'eventchamp' ),
						"param_name" => "offset",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Events', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "eventids",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Events', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludeevents",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order.', 'eventchamp' ),
						"param_name" => "order",
						"save_always" => true,
						"value" => array(
							esc_html__( 'DESC', 'eventchamp' ) => 'DESC',
							esc_html__( 'ASC', 'eventchamp' ) => 'ASC',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order type.', 'eventchamp' ),
						"param_name" => "order-type",
						"save_always" => true,
						"value" => array(
							esc_html__( 'Added Date', 'eventchamp' ) => 'added-date',
							esc_html__( 'Event Date', 'eventchamp' ) => 'event-date',
							esc_html__( 'Popular by Comment', 'eventchamp' ) => 'popular-comment',
							esc_html__( 'ID', 'eventchamp' ) => 'id',
							esc_html__( 'Title', 'eventchamp' ) => 'title',
							esc_html__( 'Menu Order', 'eventchamp' ) => 'menu_order',
							esc_html__( 'Random', 'eventchamp' ) => 'rand',
							esc_html__( 'None', 'eventchamp' ) => 'none',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Hide Expired Events', 'eventchamp' ),
						"description" => esc_html__( 'You can hide expired events.', 'eventchamp' ),
						"param_name" => "hide-expired",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter category ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-categories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Organizers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-organizers",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Tags', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "exclude-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter category ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-categories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Organizers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-organizers",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "include-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Details Button Text', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a text for details button. Default: Details.', 'eventchamp' ),
						"param_name" => "customtextdetailsbutton",
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Buy Now Button Text', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a text for Buy Now Button Text. Default: Buy Now.', 'eventchamp' ),
						"param_name" => "customtextbuynowbutton",
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Autoplay', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an autoplay speed.', 'eventchamp' ),
						"param_name" => "autoplay",
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Custom Slider Height', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a custom slider height. If you want full height slider enter blank. This is max height size.', 'eventchamp' ),
						"param_name" => "sliderheight",
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Navigation Arrows', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of navigation buttons.', 'eventchamp' ),
						"param_name" => "navbuttons",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Dots', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of dots.', 'eventchamp' ),
						"param_name" => "dots",
						'save_always' => true,
						"value" => array(
							esc_html__( 'True', 'eventchamp' ) => 'true',
							esc_html__( 'False', 'eventchamp' ) => 'false',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Loop', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of loop.', 'eventchamp' ),
						"param_name" => "loopstatus",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Start Date', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event start date.', 'eventchamp' ),
						"param_name" => "startdate",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'End Date', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event end date.', 'eventchamp' ),
						"param_name" => "enddate",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Location', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event location.', 'eventchamp' ),
						"param_name" => "location",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Venue', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event venue.', 'eventchamp' ),
						"param_name" => "venue",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
				),
			)
		);
	}



	/*======
	*
	* Event Counter Slider
	*
	======*/
	function eventchamp_event_counter_slider_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'bgimages' => '',
				'addressdate' => '',
				'titleone' => '',
				'titletwo' => '',
				'bgtext' => '',
				'excerpt' => '',
				'detaillink' => '',
				'detaillinkicon' => '',
				'ticketlink' => '',
				'ticketlinkicon' => '',
				'eventdate' => '',
				'datebgtext' => '',
				'sliderheight' => '',
				'autoplay' => '',
				'loopstatus' => '',
			), $atts
		);
		
		$output = '';

		/*====== Autoplay Speed ======*/
		if( !empty( $atts['autoplay'] ) ) {
			$autoplay = esc_attr( $atts["autoplay"] );
		} else {
			$autoplay = "false";
		}

		/*====== Loop Status ======*/
		if( $atts["loopstatus"] == "true" ) {
			$loopstatus = "true";
		} else {
			$loopstatus = "false";
		}

		/*====== Slider Height ======*/
		if( !empty( $atts['sliderheight'] ) ) {
			$sliderheight = 'max-height:' . esc_attr( $atts["sliderheight"] ) . ';';
		} else {
			$sliderheight = "";
		}

		/*====== HTML Output ======*/
		if( !empty( $atts["addressdate"] ) or !empty( $atts["titleone"] ) or !empty( $atts["titletwo"] ) or !empty( $atts["excerpt"] ) or !empty( $atts["eventdate"] ) ) {
			$output .= '<div class="eventchamp-event-counter" style="' . $sliderheight . '">';
				if( !empty( $atts["bgimages"] ) ) {
					$output .= '<div class="swiper-container gloria-sliders event-counter-slider" data-column-space="0" data-item="1" data-sloop="' . esc_attr( $loopstatus ) . '" data-aplay="' . esc_attr( $autoplay ) . '" data-effect="fade">';
						$output .= '<div class="swiper-wrapper">';
								$image_ids = explode( ',', $atts["bgimages"] ); 
								foreach( $image_ids as $image_id ) {
									if( !empty( $image_id ) ) {
										$image_url = wp_get_attachment_image_src( esc_attr( $image_id ), "eventchamp-event-slider" );
										$output .= '<div class="swiper-slide">';
											$output .= '<div class="bg-image" style="background-image:url(' . esc_url( $image_url[0] ) . '); ' . $sliderheight . '"></div>';
										$output .= '</div>';										
									}
								}
						$output .= '</div>';
					$output .= '</div>';
				}
				$output .= '<div class="counter-content">';
					if( !empty( $atts["addressdate"] ) ) {
						$output .= '<div class="address-date">' . esc_attr( $atts["addressdate"] ) . '</div>';
					}

					if( !empty( $atts["titleone"] ) or !empty( $atts["titletwo"] ) ) {
						$output .= '<div class="title">';
							if( !empty( $atts["bgtext"] ) ) {
								$output .= '<div class="opacity-title">' . esc_attr( $atts["bgtext"] ) . '</div>';
							}
							if( !empty( $atts["titleone"] ) ) {
								$output .= '<span class="white">' . esc_attr( $atts["titleone"] ) . '</span>';
							}
							if( !empty( $atts["titletwo"] ) ) {
								$output .= '<span class="colored">' . esc_attr( $atts["titletwo"] ) . '</span>';
							}
						$output .= '</div>';
					}

					if( !empty( $atts["excerpt"] ) ) {
						$output .= '<div class="excerpt">' . esc_attr( $atts["excerpt"] ) . '</div>';
					}

					if( !empty( $atts["detaillink"] ) or !empty( $atts["ticketlink"] ) ) {
						$output .= '<div class="buttons">';
							if( !empty( $atts["detaillink"] ) ) {
								$href = $atts["detaillink"];
								$href = vc_build_link( $href );
								if( !empty( $href["target"] ) ) {
									$target = $href["target"];
								} else {
									$target = "_parent";
								}

								if( !empty( $href["title"] ) ) {
									$output .= '<a href="' . esc_url( $href["url"] ) . '" target="' . esc_attr( $target ) . '" title="' . esc_attr( $href["title"] ) . '">';
										if( !empty( $atts["detaillinkicon"] ) ) {
											$output .= '<i class="' . esc_attr( $atts["detaillinkicon"] ) . '" aria-hidden="true"></i>';
										}
										$output .= '<span>' . esc_attr( $href["title"] ) . '</span>';
									$output .= '</a>';
								}
							}

							if( !empty( $atts["ticketlink"] ) ) {
								$href = $atts["ticketlink"];
								$href = vc_build_link( $href );
								if( !empty( $href["target"] ) ) {
									$target = $href["target"];
								} else {
									$target = "_parent";
								}

								if( !empty( $href["title"] ) ) {
									$output .= '<a href="' . esc_url( $href["url"] ) . '" target="' . esc_attr( $target ) . '" title="' . esc_attr( $href["title"] ) . '">';
										if( !empty( $atts["ticketlinkicon"] ) ) {
											$output .= '<i class="' . esc_attr( $atts["ticketlinkicon"] ) . '" aria-hidden="true"></i>';
										}
										$output .= '<span>' . esc_attr( $href["title"] ) . '</span>';
									$output .= '</a>';
								}
							}
						$output .= '</div>';
					}
				$output .= '</div>';

				if( !empty( $atts["eventdate"] ) ) {
					$output .= '<div class="counter">';
						if( !empty( $atts["datebgtext"] ) ) {
							$output .= '<div class="counter-opacity-title">' . esc_attr( $atts["datebgtext"] ) . '</div>';
						}
						$output .= '<div class="getting-started">';
							$output .= '<div class="days">';
								$output .= '<div class="wrapper">';
									$output .= '<div class="count"></div>';
									$output .= '<div class="title">' . esc_html__( 'Days', 'eventchamp' ) . '</div>';
								$output .= '</div>';
							$output .= '</div>';
							$output .= '<div class="hours">';
								$output .= '<div class="wrapper">';
									$output .= '<div class="count"></div>';
									$output .= '<div class="title">' . esc_html__( 'Hours', 'eventchamp' ) . '</div>';
								$output .= '</div>';
							$output .= '</div>';
							$output .= '<div class="minutes">';
								$output .= '<div class="wrapper">';
									$output .= '<div class="count"></div>';
									$output .= '<div class="title">' . esc_html__( 'Minutes', 'eventchamp' ) . '</div>';
								$output .= '</div>';
							$output .= '</div>';
							$output .= '<div class="secondes">';
								$output .= '<div class="wrapper">';
									$output .= '<div class="count"></div>';
									$output .= '<div class="title">' . esc_html__( 'Seconds', 'eventchamp' ) . '</div>';
								$output .= '</div>';
							$output .= '</div>';
						$output .= '</div>';
						$output .= "<script type='text/javascript'>
							jQuery(document).ready(function($){
								$('.getting-started').countdown('" . date( 'Y/m/d H:i:s', strtotime( $atts["eventdate"] ) ) . "', function(event) {
									$('.days .count').html(event.strftime('%D'));
									$('.hours .count').html(event.strftime('%H'));
									$('.minutes .count').html(event.strftime('%M'));
									$('.secondes .count').html(event.strftime('%S'));
								});
							});
						</script>";
					$output .= '</div>';
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_event_counter_slider", "eventchamp_event_counter_slider_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Event Counter Slider', 'eventchamp' ),
				"base" => "eventchamp_event_counter_slider",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-event-counter-slider.jpg',
				"description" => esc_html__( 'Event counter slider element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "attach_images",
						"heading" => esc_html__( 'Background Images', 'eventchamp' ),
						"description" => esc_html__( 'You can upload background images.', 'eventchamp' ),
						"param_name" => "bgimages",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Address & Date', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an address and date.', 'eventchamp' ),
						"param_name" => "addressdate",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Title One', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a title.', 'eventchamp' ),
						"param_name" => "titleone",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Title Two', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a title.', 'eventchamp' ),
						"param_name" => "titletwo",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Background Text of The Title', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a background text for the title.', 'eventchamp' ),
						"param_name" => "bgtext",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Text', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a text.', 'eventchamp' ),
						"param_name" => "excerpt",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'Detail Link', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a detail link.', 'eventchamp' ),
						"param_name" => "detaillink",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Icon of Detail Link', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a icon. Example: fab fa-wordpress-simple, fas fa-map-marker-alt. Icon list: https://goo.gl/vdPEsc', 'eventchamp' ),
						"param_name" => "detaillinkicon",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'Ticket Link', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a ticket link.', 'eventchamp' ),
						"param_name" => "ticketlink",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Icon of Ticket Link', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a icon. Example: fab fa-wordpress-simple, fas fa-map-marker-alt. Icon list: https://goo.gl/vdPEsc', 'eventchamp' ),
						"param_name" => "ticketlinkicon",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Event Date', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a event date. Example: 2017/09/23 10:24:00', 'eventchamp' ),
						"param_name" => "eventdate",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Text for Date Background', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a text for date background.', 'eventchamp' ),
						"param_name" => "datebgtext",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Custom Slider Height', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a custom slider height. If you want full height slider enter blank. This is max height size. Example: 900px.', 'eventchamp' ),
						"param_name" => "sliderheight",
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Autoplay', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an autoplay speed.', 'eventchamp' ),
						"param_name" => "autoplay",
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Loop', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of loop.', 'eventchamp' ),
						"param_name" => "loopstatus",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
				),
			)
		);
	}



	/*======
	*
	* Slider with Search Tool
	*
	======*/
	function eventchamp_slider_with_search_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'bgimages' => '',
				'keyword' => '',
				'category' => '',
				'location' => '',
				'status' => '',
				'startdate' => '',
				'enddate' => '',
				'tag' => '',
				'sort' => '',
				'loopstatus' => '',
				'autoplay' => '',
				'empty-taxonomies' => '',
				'childless' => '',
				'hide-children' => '',
			), $atts
		);

		$output = "";

		/*====== Autoplay Speed ======*/
		if( !empty( $atts['autoplay'] ) ) {
			$autoplay = esc_attr( $atts["autoplay"] );
		} else {
			$autoplay = "false";
		}

		/*====== Loop Status ======*/
		if( $atts["loopstatus"] == "true" ) {
			$loopstatus = "true";
		} else {
			$loopstatus = "false";
		}

		/*====== Empty Categories ======*/
		if( $atts['empty-taxonomies'] == 'false' ) {
			$empty_taxonomies = false;
		} else {
			$empty_taxonomies = true;
		}

		/*====== Childless ======*/
		if( $atts['childless'] == 'false' ) {
			$childless = false;
		} else {
			$childless = true;
		}

		/*====== Hide Children ======*/
		if( $atts['hide-children'] == 'false' ) {
			$hide_children = '';
		} else {
			$hide_children = 0;
		}

		/*====== Column Size ======*/
		if( $atts["keyword"] == "true" ) {
			$keyword_total = "1";
		} else {
			$keyword_total = "0";
		}
		
		if( $atts["category"] == "true" ) {
			$category_total = "1";
		} else {
			$category_total = "0";
		}

		if( $atts["status"] == "true" ) {
			$status_total = "1";
		} else {
			$status_total = "0";
		}

		if( $atts["sort"] == "true" ) {
			$sort_total = "1";
		} else {
			$sort_total = "0";
		}

		if( $atts["tag"] == "true" ) {
			$tag_total = "1";
		} else {
			$tag_total = "0";
		}

		if( $atts["location"] == "true" ) {
			$location_total = "1";
		} else {
			$location_total = "0";
		}

		if( $atts["startdate"] == "true" ) {
			$startdate_total = "1";
		} else {
			$startdate_total = "0";
		}

		if( $atts["enddate"] == "true" ) {
			$enddate_total = "1";
		} else {
			$enddate_total = "0";
		}

		$column = $keyword_total + $category_total + $sort_total + $status_total + $location_total + $tag_total + $startdate_total + $enddate_total;

		/*====== HTML Output ======*/
		if( $atts["keyword"] == "true" or $atts["category"] == "true" or $atts["status"] == "true" or $atts["sort"] == "true" or $atts["startdate"] == "true" or $atts["enddate"] == "true" ) {
			$event_search_result_page = ot_get_option( 'event_search_result_page' );
			$output .= '<div class="slider-with-search-tool">';
				if( !empty( $atts["bgimages"] ) ) {
					$output .= '<div class="swiper-container gloria-sliders slider-with-search-tool-slides"  data-item="1" data-column-space="0" data-sloop="' . esc_attr( $loopstatus ) . '" data-aplay="' . esc_attr( $autoplay ) . '" data-effect="fade">';
						$output .= '<div class="swiper-wrapper">';
								$image_ids = explode( ',', $atts["bgimages"] ); 
								foreach( $image_ids as $image_id ){
									if( !empty( $image_id ) ) {
										$image_url = wp_get_attachment_image_src( esc_attr( $image_id ), "eventchamp-event-slider" );
										$image_url = $image_url[0];
										if( !empty( $image_url ) ) {
											$output .= '<div class="swiper-slide">';
												$output .= '<div class="bg-image" style="background-image:url(' . esc_url( $image_url ) . ')"></div>';
											$output .= '</div>';
										}
									}
								}
						$output .= '</div>';
					$output .= '</div>';
				}

				$output .= '<div class="event-search-tool column-' . esc_attr( $column ) . '">';
					$output .= '<div class="container">';
						$output .= '<form method="get" action="' . get_the_permalink( $event_search_result_page ) . '">';
							$output .= '<div class="search-content">';
								if( !empty( $event_search_result_page  ) ) {
									if( $atts["keyword"] == "true" or $atts["category"] == "true" or $atts["status"] == "true" or $atts["sort"] == "true" or $atts["startdate"] == "true" or $atts["enddate"] == "true" ) {
										$output .= '<div class="columns">';
											if( $atts["keyword"] == "true" ) {
												$output .= '<div class="column">';
													$output .= '<input name="keyword" type="text" placeholder="' . esc_html__( 'Keywords', 'eventchamp' ) . '">';
												$output .= '</div>';
											} else {
												$output .= '<input name="keyword" type="hidden" placeholder="' . esc_html__( 'Keywords', 'eventchamp' ) . '">';
											}

											if( $atts["category"] == "true" ) {
												$output .= '<div class="column">';
													$output .= '<select name="category" class="cs-select">';
														$output .= '<option value="">' . esc_html__( 'Category', 'eventchamp' ) . '</option>';
														$eventcat_terms = get_terms(
															array(
																'taxonomy' => 'eventcat',
																'hide_empty' => $empty_taxonomies,
																'childless' => $childless,
																'parent' => $hide_children,
															)
														);

														if ( ! empty( $eventcat_terms ) && ! is_wp_error( $eventcat_terms ) ) {
															foreach ( $eventcat_terms as $eventcat_term ) {
																$id = $eventcat_term->term_id;
																$name = $eventcat_term->name;
																$slug = $eventcat_term->slug;
																$output .= '<option value="' . esc_attr( $id ) . '">' . esc_attr( $name ) . '</option>';
															}
														}
													$output .= '</select>';
												$output .= '</div>';
											}

											if( $atts["location"] == "true" ) {
												$output .= '<div class="column">';
													$output .= '<select name="location" class="cs-select">';
														$output .= '<option value="">' . esc_html__( 'Location', 'eventchamp' ) . '</option>';
														$location_terms = get_terms(
															array(
																'taxonomy' => 'location',
																'hide_empty' => $empty_taxonomies,
																'childless' => $childless,
																'parent' => $hide_children,
															)
														);

														if ( ! empty( $location_terms ) && ! is_wp_error( $location_terms ) ) {
															foreach ( $location_terms as $location_term ) {
																$name = $location_term->name;
																$slug = $location_term->slug;
																$term_id = $location_term->term_id;
																$output .= '<option value="' . esc_attr( $term_id ) . '">' . esc_attr( $name ) . '</option>';
															}
														}
													$output .= '</select>';
												$output .= '</div>';
											}

											if( $atts["status"] == "true" ) {
												$output .= '<div class="column">';
													$output .= '<select name="status" class="cs-select">';
														$output .= '<option value="">' . esc_html__( 'Status', 'eventchamp' ) . '</option>';
														$output .= '<option value="upcoming">' . esc_html__( 'Upcoming', 'eventchamp' ) . '</option>';
														$output .= '<option value="showing">' . esc_html__( 'Showing', 'eventchamp' ) . '</option>';
														$output .= '<option value="expired">' . esc_html__( 'Expired', 'eventchamp' ) . '</option>';
													$output .= '</select>';
												$output .= '</div>';
											}

											if( $atts["startdate"] == "true" ) {
												$output .= '<div class="column">';
													$output .= '<input type="text"  name="startdate" value="" placeholder="' . esc_html__( 'Start Date', 'eventchamp' ) . '" class="eventsearchdate-datepicker" />';
												$output .= '</div>';
											}

											if( $atts["enddate"] == "true" ) {
												$output .= '<div class="column">';
													$output .= '<input type="text"  name="enddate" value="" placeholder="' . esc_html__( 'End Date', 'eventchamp' ) . '" class="eventsearchdate-datepicker" />';
												$output .= '</div>';
											}

											if( $atts["tag"] == "true" ) {
												$output .= '<div class="column">';
													$output .= '<input type="text"  name="tag" value="" placeholder="' . esc_html__( 'Tag', 'eventchamp' ) . '" />';
												$output .= '</div>';
											}

											if( $atts["sort"] == "true" ) {
												$output .= '<div class="column">';
													$output .= '<select name="sort" class="cs-select">';
														$output .= '<option value="">' . esc_html__( 'Sort by', 'eventchamp' ) . '</option>';
														$output .= '<option value="startdate">' . esc_html__( 'Start Date', 'eventchamp' ) . '</option>';
														$output .= '<option value="enddate">' . esc_html__( 'End Date', 'eventchamp' ) . '</option>';
														$output .= '<option value="creationdate">' . esc_html__( 'Creation Date', 'eventchamp' ) . '</option>';
														$output .= '<option value="nameaz">' . esc_html__( 'Name A > Z', 'eventchamp' ) . '</option>';
														$output .= '<option value="nameza">' . esc_html__( 'Name Z > A', 'eventchamp' ) . '</option>';
													$output .= '</select>';
												$output .= '</div>';
											}
										$output .= '</div>';
										$output .= '<button type="submit">' . esc_html__( 'Search', 'eventchamp' ) . '</button>';
									}
								} else {
									$output .= '<p class="no-result-page">';
										$output .= esc_html__( 'You should a search result page. You can choose the page from Theme Options > Events > Event Search Results Page panel.', 'eventchamp' );
									$output .= '</p>';
								}
							$output .= '</div>';
						$output .= '</form>';
					$output .= '</div>';
				$output .= '</div>';
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_slider_with_search", "eventchamp_slider_with_search_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Slider with Search Tool', 'eventchamp' ),
				"base" => "eventchamp_slider_with_search",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-event-slider-with-search-tool.jpg',
				"description" => esc_html__( 'Slider with search tool element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "attach_images",
						"heading" => esc_html__( 'Background Images', 'eventchamp' ),
						"description" => esc_html__( 'You can upload background images.', 'eventchamp' ),
						"param_name" => "bgimages",
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Keyword', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of keyword.', 'eventchamp' ),
						"param_name" => "keyword",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Category', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of category.', 'eventchamp' ),
						"param_name" => "category",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Location', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of location.', 'eventchamp' ),
						"param_name" => "location",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Status', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event status.', 'eventchamp' ),
						"param_name" => "status",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Start Date', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of start date.', 'eventchamp' ),
						"param_name" => "startdate",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'End Date', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of end date.', 'eventchamp' ),
						"param_name" => "enddate",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of tag.', 'eventchamp' ),
						"param_name" => "tag",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Sort Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of sort type.', 'eventchamp' ),
						"param_name" => "sort",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Loop', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of loop.', 'eventchamp' ),
						"param_name" => "loopstatus",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Autoplay', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an autoplay speed.', 'eventchamp' ),
						"param_name" => "autoplay",
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Empty Taxonomies', 'eventchamp' ),
						"description" => esc_html__( 'You can choose visible status of empty taxonomies. If you choose true option empty taxonomies will be hide.', 'eventchamp' ),
						"param_name" => "empty-taxonomies",
						"value" => array(
							esc_html__( 'True', 'eventchamp' ) => 'true',
							esc_html__( 'False', 'eventchamp' ) => 'false',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Childless', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of childless.', 'eventchamp' ),
						"param_name" => "childless",
						"value" => array(
							esc_html__( 'True', 'eventchamp' ) => 'true',
							esc_html__( 'False', 'eventchamp' ) => 'false',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Hide Children', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of children.', 'eventchamp' ),
						"param_name" => "hide-children",
						"value" => array(
							esc_html__( 'True', 'eventchamp' ) => 'true',
							esc_html__( 'False', 'eventchamp' ) => 'false',
						),
					),
				),
			)
		);
	}



	/*======
	*
	* Title
	*
	======*/
	function eventchamp_content_title_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'size' => '',
				'title' => '',
				'align' => '',
				'titleone' => '',
				'titletwo' => '',
				'description' => '',
				'icon' => '',
			), $atts
		);

		$output = "";

		/*====== Align ======*/
		if( !empty( $atts['align'] ) ) {
			$align = esc_attr( $atts['align'] );
		} else {
			$align = "center";
		}

		/*====== HTML Output ======*/
		if( !empty( $atts["titleone"] ) or !empty( $atts["titletwo"] ) or !empty( $atts["description"] ) ) {
			$output .= '<div class="content-title-element ' . esc_attr( $atts["title"] ) . ' ' . esc_attr( $atts["size"] ) . ' ' . esc_attr( $align ) . '">';
				if( !empty( $atts["titleone"] ) or !empty( $atts["titletwo"] ) ) {
					$output .= '<div class="title">';
						if( !empty( $atts["titleone"] ) ) {
							$output .= esc_attr( $atts["titleone"] );
						}

						if( !empty( $atts["titleone"] ) and !empty( $atts["titletwo"] ) ) {
							$output .= ' ';
						}

						if( !empty( $atts["titletwo"] ) ) {
							$output .= '<span>' . esc_attr( $atts["titletwo"] ) . '</span>';
						}
					$output .= '</div>';
				}

				$output .= '<div class="separate">';
					if( !empty( $atts["icon"] ) ) {
						$output .= '<i class="' . esc_attr( $atts["icon"] ) . '" aria-hidden="true"></i>';
					} else {
						$output .= '<i class="fas fa-cubes" aria-hidden="true"></i>';
					}
				$output .= '</div>';

				if( !empty( $atts["description"] ) ) {
					$output .= '<div class="description">' . esc_attr( $atts["description"] ) . '</div>';
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_content_title", "eventchamp_content_title_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Title', 'eventchamp' ),
				"base" => "eventchamp_content_title",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-content-title.jpg',
				"description" => esc_html__( 'Title element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Size', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a size.', 'eventchamp' ),
						"param_name" => "size",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Size 1', 'eventchamp' ) => 'size1',
							esc_html__( 'Size 2', 'eventchamp' ) => 'size2',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a style.', 'eventchamp' ),
						"param_name" => "title",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Dark', 'eventchamp' ) => 'dark',
							esc_html__( 'White', 'eventchamp' ) => 'white',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Align', 'eventchamp' ),
						"description" => esc_html__( 'You can choose align of the title.', 'eventchamp' ),
						"param_name" => "align",
						"save_always" => true,
						"value" => array(
							esc_html__( 'Center', 'eventchamp' ) => 'center',
							esc_html__( 'Left', 'eventchamp' ) => 'left',
							esc_html__( 'Right', 'eventchamp' ) => 'right',
						),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Title One', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a title for light font.', 'eventchamp' ),
						"param_name" => "titleone",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Title Two', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a title for bold font.', 'eventchamp' ),
						"param_name" => "titletwo",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Text', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a text.', 'eventchamp' ),
						"param_name" => "description",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Icon', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a icon. Example: fab fa-wordpress-simple, fas fa-map-marker-alt. Icon list: https://goo.gl/vdPEsc', 'eventchamp' ),
						"param_name" => "icon",
					)
				),
			)
		);
	}



	/*======
	*
	* Event Search Tool
	*
	======*/
	function eventchamp_event_search_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'style' => '',
				'title' => '',
				'keyword' => '',
				'location' => '',
				'category' => '',
				'status' => '',
				'sort' => '',
				'startdate' => '',
				'enddate' => '',
				'tag' => '',
				'dark-background' => '',
				'empty-taxonomies' => '',
				'childless' => '',
				'hide-children' => '',
			), $atts
		);

		$output = "";

		/*====== Empty Categories ======*/
		if( $atts['empty-taxonomies'] == 'false' ) {
			$empty_taxonomies = false;
		} else {
			$empty_taxonomies = true;
		}

		/*====== Childless ======*/
		if( $atts['childless'] == 'false' ) {
			$childless = false;
		} else {
			$childless = true;
		}

		/*====== Hide Children ======*/
		if( $atts['hide-children'] == 'false' ) {
			$hide_children = '';
		} else {
			$hide_children = 0;
		}

		/*====== Dark Background ======*/
		if( !empty( $atts["dark-background"] ) ) {
			$dark_bg = $atts["dark-background"];
			$dark_bg = ' style="background-image:url(' . esc_url( wp_get_attachment_url( $dark_bg, 'full', true, true ) ) . ');"';
		} else {
			$dark_bg = '';
		}

		/*====== Column Size ======*/
		if( $atts["keyword"] == "true" ) {
			$keyword_total = "1";
		} else {
			$keyword_total = "0";
		}
		
		if( $atts["category"] == "true" ) {
			$category_total = "1";
		} else {
			$category_total = "0";
		}

		if( $atts["status"] == "true" ) {
			$status_total = "1";
		} else {
			$status_total = "0";
		}

		if( $atts["sort"] == "true" ) {
			$sort_total = "1";
		} else {
			$sort_total = "0";
		}

		if( $atts["tag"] == "true" ) {
			$tag_total = "1";
		} else {
			$tag_total = "0";
		}

		if( $atts["location"] == "true" ) {
			$location_total = "1";
		} else {
			$location_total = "0";
		}

		if( $atts["startdate"] == "true" ) {
			$startdate_total = "1";
		} else {
			$startdate_total = "0";
		}

		if( $atts["enddate"] == "true" ) {
			$enddate_total = "1";
		} else {
			$enddate_total = "0";
		}

		$column = $keyword_total + $category_total + $sort_total + $status_total + $location_total + $tag_total + $startdate_total + $enddate_total;

		/*====== HTML Output ======*/
		if( $atts["keyword"] == "true" or $atts["category"] == "true" or $atts["status"] == "true" or $atts["sort"] == "true" ) {
			$event_search_result_page = ot_get_option( 'event_search_result_page' );
			$output .= '<div class="event-search-tool title-' . esc_attr( $atts["title"] ) . ' column-' . esc_attr( $column ) . ' ' . esc_attr( $atts["style"] ) . '"' . $dark_bg . '>';
				$output .= '<div class="container">';
					if( !empty( $event_search_result_page ) ) {
						$output .= '<form method="get" action="' . get_the_permalink( $event_search_result_page ) . '">';
							$output .= '<div class="search-content">';
								if( $atts["title"] == "true" )  {
									$output .= '<div class="title">' . esc_html__( 'Event Search', 'eventchamp' ) . ':</div>';
								}
								if( $atts["keyword"] == "true" or $atts["category"] == "true" or $atts["status"] == "true" or $atts["sort"] == "true" ) {
									$output .= '<div class="columns">';
										if( $atts["keyword"] == "true" ) {
											$output .= '<div class="column">';
												$output .= '<input name="keyword" type="text" placeholder="' . esc_html__( 'Keywords', 'eventchamp' ) . '">';
											$output .= '</div>';
										} else {
											$output .= '<input name="keyword" type="hidden" placeholder="' . esc_html__( 'Keywords', 'eventchamp' ) . '">';
										}
										if( $atts["category"] == "true" ) {
											$output .= '<div class="column">';
												$output .= '<select name="category" class="cs-select">';
													$output .= '<option value="">' . esc_html__( 'Category', 'eventchamp' ) . '</option>';
													$eventcat_terms = get_terms(
														array(
															'taxonomy' => 'eventcat',
															'hide_empty' => $empty_taxonomies,
															'childless' => $childless,
															'parent' => $hide_children,
														)
													);

													if ( ! empty( $eventcat_terms ) && ! is_wp_error( $eventcat_terms ) ) {
														foreach ( $eventcat_terms as $eventcat_term ) {
															$term_id = $eventcat_term->term_id;
															$name = $eventcat_term->name;
															$slug = $eventcat_term->slug;
															$output .= '<option value="' . esc_attr( $term_id ) . '">' . esc_attr( $name ) . '</option>';
														}
													}
												$output .= '</select>';
											$output .= '</div>';
										}
										if( $atts["location"] == "true" ) {
											$output .= '<div class="column">';
												$output .= '<select name="location" class="cs-select">';
													$output .= '<option value="">' . esc_html__( 'Location', 'eventchamp' ) . '</option>';
													$location_terms = get_terms(
														array(
															'taxonomy' => 'location',
															'hide_empty' => $empty_taxonomies,
															'childless' => $childless,
															'parent' => $hide_children,
														)
													);

													if ( ! empty( $location_terms ) && ! is_wp_error( $location_terms ) ) {
														foreach ( $location_terms as $eventcat_term ) {
															$eventcat_term_name = $eventcat_term->name;
															$eventcat_term_slug = $eventcat_term->slug;
															$eventcat_term_term_id = $eventcat_term->term_id;
															$output .= '<option value="' . esc_attr( $eventcat_term_term_id ) . '">' . esc_attr( $eventcat_term_name ) . '</option>';
														}
													}
												$output .= '</select>';
											$output .= '</div>';
										}
										if( $atts["status"] == "true" ) {
											$output .= '<div class="column">';
												$output .= '<select name="status" class="cs-select">';
													$output .= '<option value="">' . esc_html__( 'Status', 'eventchamp' ) . '</option>';
													$output .= '<option value="upcoming">' . esc_html__( 'Upcoming', 'eventchamp' ) . '</option>';
													$output .= '<option value="showing">' . esc_html__( 'Showing', 'eventchamp' ) . '</option>';
													$output .= '<option value="expired">' . esc_html__( 'Expired', 'eventchamp' ) . '</option>';
												$output .= '</select>';
											$output .= '</div>';
										}
										if( $atts["startdate"] == "true" ) {
											$output .= '<div class="column">';
												$output .= '<input type="text"  name="startdate" value="" placeholder="' . esc_html__( 'Start Date', 'eventchamp' ) . '" class="eventsearchdate-datepicker" />';
											$output .= '</div>';
										}
										if( $atts["enddate"] == "true" ) {
											$output .= '<div class="column">';
												$output .= '<input type="text"  name="enddate" value="" placeholder="' . esc_html__( 'End Date', 'eventchamp' ) . '" class="eventsearchdate-datepicker" />';
											$output .= '</div>';
										}
										if( $atts["tag"] == "true" ) {
											$output .= '<div class="column">';
												$output .= '<input type="text"  name="tag" value="" placeholder="' . esc_html__( 'Tag', 'eventchamp' ) . '" />';
											$output .= '</div>';
										}
										if( $atts["sort"] == "true" ) {
											$output .= '<div class="column">';
												$output .= '<select name="sort" class="cs-select">';
													$output .= '<option value="">' . esc_html__( 'Sort by', 'eventchamp' ) . '</option>';
													$output .= '<option value="startdate">' . esc_html__( 'Start Date', 'eventchamp' ) . '</option>';
													$output .= '<option value="enddate">' . esc_html__( 'End Date', 'eventchamp' ) . '</option>';
													$output .= '<option value="creationdate">' . esc_html__( 'Creation Date', 'eventchamp' ) . '</option>';
													$output .= '<option value="nameaz">' . esc_html__( 'Name A > Z', 'eventchamp' ) . '</option>';
													$output .= '<option value="nameza">' . esc_html__( 'Name Z > A', 'eventchamp' ) . '</option>';
												$output .= '</select>';
											$output .= '</div>';
										}
									$output .= '</div>';
									$output .= '<button type="submit"><span>' . esc_html__( 'Search', 'eventchamp' ) . '</span></button>';
								}
							$output .= '</div>';
						$output .= '</form>';
					} else {
						$output .= '<p class="no-result-page">';
							$output .= esc_html__( 'You should a search result page. You can choose the page from Theme Options > Events > Event Search Results Page panel.', 'eventchamp' );
						$output .= '</p>';
					}
				$output .= '</div>';
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_event_search", "eventchamp_event_search_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Event Search Tool', 'eventchamp' ),
				"base" => "eventchamp_event_search",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-event-search-tool.jpg',
				"description" => esc_html__( 'Event search tool element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a style.', 'eventchamp' ),
						"param_name" => "style",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Style 1', 'eventchamp' ) => 'white',
							esc_html__( 'Style 2', 'eventchamp' ) => 'dark',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Search Title', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of search title.', 'eventchamp' ),
						"param_name" => "title",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Start Date', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of start date.', 'eventchamp' ),
						"param_name" => "startdate",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'End Date', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of end date.', 'eventchamp' ),
						"param_name" => "enddate",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Keyword', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of keyword.', 'eventchamp' ),
						"param_name" => "keyword",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Category', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of category.', 'eventchamp' ),
						"param_name" => "category",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Location', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of location.', 'eventchamp' ),
						"param_name" => "location",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Status', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event status.', 'eventchamp' ),
						"param_name" => "status",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of tag.', 'eventchamp' ),
						"param_name" => "tag",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Sort Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of sort type.', 'eventchamp' ),
						"param_name" => "sort",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "attach_image",
						"heading" => esc_html__( 'Background Image for Style 2', 'eventchamp' ),
						"description" => esc_html__( 'You can upload a background image for style 2.', 'eventchamp' ),
						"param_name" => "dark-background",
						'save_always' => true,
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Empty Taxonomies', 'eventchamp' ),
						"description" => esc_html__( 'You can choose visible status of empty taxonomies. If you choose true option empty taxonomies will be hide.', 'eventchamp' ),
						"param_name" => "empty-taxonomies",
						"value" => array(
							esc_html__( 'True', 'eventchamp' ) => 'true',
							esc_html__( 'False', 'eventchamp' ) => 'false',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Childless', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of childless.', 'eventchamp' ),
						"param_name" => "childless",
						"value" => array(
							esc_html__( 'True', 'eventchamp' ) => 'true',
							esc_html__( 'False', 'eventchamp' ) => 'false',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Hide Children', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of children.', 'eventchamp' ),
						"param_name" => "hide-children",
						"value" => array(
							esc_html__( 'True', 'eventchamp' ) => 'true',
							esc_html__( 'False', 'eventchamp' ) => 'false',
						),
					),
				),
			)
		);
	}



	/*======
	*
	* Event Search Results
	*
	======*/
	function eventchamp_events_search_results_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'eventcount' => '',
				'eventids' => '',
				'excludeevents' => '',
				'offset' => '',
				'order' => '',
				'order-type' => '',
				'hideexpired' => '',
				'pagination' => '',
				'excludecategories' => '',
				'exclude-locations' => '',
				'exclude-organizers' => '',
				'exclude-tags' => '',
				'includecategories' => '',
				'include-locations' => '',
				'include-organizers' => '',
				'include-tags' => '',
				'style' => '',
				'column' => '',
				'price' => '',
				'status' => '',
				'category' => '',
				'location' => '',
				'venue' => '',
				'date' => '',
				'excerpt' => '',
			), $atts
		);

		$output = "";

		/*====== Date Now ======*/
		$date_now = date("Y-m-d");

		/*====== Expired Events Status ======*/
		if( !empty( $atts["hideexpired"] ) ) {
			$hideexpired = esc_attr( $atts["hideexpired"] );
		} else {
			$hideexpired = "column-1";
		}

		/*====== Column ======*/
		if( !empty( $atts["column"] ) ) {
			$column = esc_attr( $atts["column"] );
		} else {
			$column = "column-1";
		}

		/*====== Price Status ======*/
		if( $atts["price"] == "true" ) {
			$price_status = "true";
		} else {
			$price_status = "false";
		}

		/*====== Status Status ======*/
		if( $atts["status"] == "true" ) {
			$status_status = "true";
		} else {
			$status_status = "false";
		}

		/*====== Category Status ======*/
		if( $atts["category"] == "true" ) {
			$category_status = "true";
		} else {
			$category_status = "false";
		}

		/*====== Location Status ======*/
		if( $atts["location"] == "true" ) {
			$location_status = "true";
		} else {
			$location_status = "false";
		}

		/*====== Venue Status ======*/
		if( $atts["venue"] == "true" ) {
			$venue_status = "true";
		} else {
			$venue_status = "false";
		}

		/*====== Date Status ======*/
		if( $atts["date"] == "true" ) {
			$date_status = "true";
		} else {
			$date_status = "false";
		}

		/*====== Excerpt Status ======*/
		if( $atts["excerpt"] == "true" ) {
			$excerpt_status = "true";
		} else {
			$excerpt_status = "false";
		}

		/*====== Came from Event Search Tool ======*/
		if( isset( $_GET['keyword'] ) or isset( $_GET['category'] ) or isset( $_GET['status'] ) or isset( $_GET['sort'] ) or isset( $_GET['tag'] ) or isset( $_GET['location'] ) or isset( $_GET['startdate'] ) or isset( $_GET['enddate'] ) ) {
			if( isset( $_GET['keyword'] ) ) {
				$search_keyword = esc_js( esc_sql( balanceTags( htmlspecialchars( esc_attr( $_GET["keyword"] ) ) ) ) );
			} else {
				$search_keyword = "";
			}

			if( isset( $_GET['category'] ) ) {
				$search_category = esc_js( esc_sql( balanceTags( htmlspecialchars( esc_attr( $_GET["category"] ) ) ) ) );
			} else {
				$search_category = "";
			}

			if( isset( $_GET['status'] ) ) {
				$search_status = esc_js( esc_sql( balanceTags( htmlspecialchars( esc_attr( $_GET["status"] ) ) ) ) );
			} else {
				$search_status = "";
			}

			if( isset( $_GET['sort'] ) ) {
				$search_sort = esc_js( esc_sql( balanceTags( htmlspecialchars( esc_attr( $_GET["sort"] ) ) ) ) );

				if( isset( $_GET['sort'] ) ) {
					if( $search_sort == "startdate" ) {
						$order = "ASC";
						$order_by = "meta_value";
						$meta_key = "event_start_date";
					} elseif( $search_sort == "enddate" ) {
						$order = "DESC";
						$order_by = "meta_value";
						$meta_key = "event_start_date";
					} elseif( $search_sort == "creationdate" ) {
						$order = "DESC";
						$order_by = "date";
						$meta_key = "";
					} elseif( $search_sort == "nameza" ) {
						$order = "DESC";
						$order_by = "title";
						$meta_key = "";
					} else {
						$order = "ASC";
						$order_by = "title";
						$meta_key = "";
					}
				} else {
					$order = "ASC";
					$order_by = "title";
					$meta_key = "event_start_date";
				}
			} else {
				$search_sort = "";
				$order = "ASC";
				$order_by = "title";
				$meta_key = "event_start_date";
			}

			if( isset( $_GET['tag'] ) ) {
				$search_tag = esc_js( esc_sql( balanceTags( htmlspecialchars( esc_attr( $_GET["tag"] ) ) ) ) );
			} else {
				$search_tag = "";
			}

			if( isset( $_GET['location'] ) ) {
				$search_location = esc_js( esc_sql( balanceTags( htmlspecialchars( esc_attr( $_GET["location"] ) ) ) ) );
			} else {
				$search_location = "";
			}

			if( isset( $_GET['startdate'] ) ) {
				$search_startdate = esc_js( esc_sql( balanceTags( htmlspecialchars( esc_attr( $_GET["startdate"] ) ) ) ) );
				$search_startdate_compare = ">=";
			} else {
				$search_startdate = "";
				$search_startdate_compare = "";
			}

			if( isset( $_GET['enddate'] ) ) {
				$search_enddate = esc_js( esc_sql( balanceTags( htmlspecialchars( esc_attr( $_GET["enddate"] ) ) ) ) );
				$search_enddate_compare = "<=";
			} else {
				$search_enddate = "";
				$search_enddate_compare = "";
			}
			
			if( $search_status == "upcoming" ) {
				$search_compare = ">";
				$search_compare2 = "BETWEEN";
			} elseif( $search_status == "showing" ) {
				$search_compare = "<=";
				$search_compare2 = ">=";
			} elseif( $search_status == "expired" ) {
				$search_compare = "<=";
				$search_compare2 = "<=";
			} else {
				$search_compare = "BETWEEN";
				$search_compare2 = "BETWEEN";
			}
		} else {
			$search_startdate = "";
			$search_startdate_compare = "";
			$search_enddate = "";
			$search_enddate_compare = "";
			$search_keyword = "";
			$search_category = "";
			$search_status = "";
			$search_sort = "";
			$search_location = "";
			$search_compare = "";
			$search_compare2 = "";
			$order = "";
			$order_by = "";
			$meta_key = "event_start_date";
			$search_tag = "";
		}

		/*====== Exclude Categories ======*/
		$exclude_category_array = "";

		if( !empty( $atts['excludecategories'] ) ) {
			$exclude_categories = $atts['excludecategories'];
			$exclude_categories = explode( ',', $exclude_categories );
		} else {
			$exclude_categories = "";
		}

		if( !empty( $exclude_categories ) ) {
			$exclude_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $exclude_categories,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Locations ======*/
		$exclude_location_array = "";

		if( !empty( $atts['exclude-locations'] ) ) {
			$exclude_locations = $atts['exclude-locations'];
			$exclude_locations = explode( ',', $exclude_locations );
		} else {
			$exclude_locations = "";
		}

		if( !empty( $exclude_locations ) ) {
			$exclude_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $exclude_locations,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Organizers ======*/
		$exclude_organizer_array = "";

		if( !empty( $atts['exclude-organizers'] ) ) {
			$exclude_organizers = $atts['exclude-organizers'];
			$exclude_organizers = explode( ',', $exclude_organizers );
		} else {
			$exclude_organizers = "";
		}

		if( !empty( $exclude_organizers ) ) {
			$exclude_organizer_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $exclude_organizers,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Tags ======*/
		$exclude_tag_array = "";

		if( !empty( $atts['exclude-tags'] ) ) {
			$exclude_tags = $atts['exclude-tags'];
			$exclude_tags = explode( ',', $exclude_tags );
		} else {
			$exclude_tags = "";
		}

		if( !empty( $exclude_tags ) ) {
			$exclude_tag_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $exclude_tags,
				'operator' => 'NOT IN',
			);
		}

		/*====== Include Categories ======*/
		$include_category_array = "";

		if( !empty( $search_category ) ) {
			$include_categories = explode( ',', $search_category );

			if( !empty( $include_categories ) ) {
				$include_category_array = array(
					'taxonomy' => 'eventcat',
					'field' => 'term_id',
					'terms' => $include_categories,
					'operator' => 'IN',
				);
			}
		} else {
			if( !empty( $atts['includecategories'] ) ) {
				$include_categories = $atts['includecategories'];
				$include_categories = explode( ',', $include_categories );
			} else {
				$include_categories = "";
			}

			if( !empty( $include_categories ) ) {
				$include_category_array = array(
					'taxonomy' => 'eventcat',
					'field' => 'term_id',
					'terms' => $include_categories,
					'operator' => 'IN',
				);
			}
		}

		/*====== Include Locations ======*/
		$include_location_array = "";

		if( !empty( $search_location ) ) {
			$include_locations = explode( ',', $search_location );

			if( !empty( $include_locations ) ) {
				$include_location_array = array(
					'taxonomy' => 'location',
					'field' => 'term_id',
					'terms' => $include_locations,
					'operator' => 'IN',
				);
			}
		} else {
			if( !empty( $atts['include-locations'] ) ) {
				$include_locations = $atts['include-locations'];
				$include_locations = explode( ',', $include_locations );
			} else {
				$include_locations = "";
			}

			if( !empty( $include_locations ) ) {
				$include_location_array = array(
					'taxonomy' => 'location',
					'field' => 'term_id',
					'terms' => $include_locations,
					'operator' => 'IN',
				);
			}
		}

		/*====== Include Organizers ======*/
		$include_organizers = "";

		if( !empty( $atts['include-organizers'] ) ) {
			$include_organizers = $atts['include-organizers'];
			$include_organizers = explode( ',', $include_organizers );
		} else {
			$include_organizers = "";
		}

		if( !empty( $include_organizers ) ) {
			$include_organizers_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $include_organizers,
				'operator' => 'IN',
			);
		}

		/*====== Include Tags ======*/
		$include_tags_array = "";

		if( !empty( $search_tag ) ) {
			$include_tags = explode( ',', $search_tag );

			if( !empty( $include_tags ) ) {
				$include_tags_array = array(
					'taxonomy' => 'event_tags',
					'field' => 'name',
					'terms' => $include_tags,
					'operator' => 'IN',
				);
			}
		} else {
			if( !empty( $atts['include-tags'] ) ) {
				$include_tags = $atts['include-tags'];
				$include_tags = explode( ',', $include_tags );
			} else {
				$include_tags = "";
			}

			if( !empty( $include_tags ) ) {
				$include_tags_array = array(
					'taxonomy' => 'event_tags',
					'field' => 'name',
					'terms' => $include_tags,
					'operator' => 'IN',
				);
			}
		}

		/*====== Main Query ======*/
		$arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'event',
			'tax_query' => array (
				'relation' => 'AND',
				$include_location_array,
				$include_category_array,
				$include_organizers_array,
				$include_tags_array,
				$exclude_category_array,
				$exclude_location_array,
				$exclude_organizer_array,
				$exclude_tag_array,
			)
		);

		/*====== Filtrable by Event Status ======*/
		if( !empty( $search_status ) ) {
			$extra_query = array(
				'meta_query' => array(
					array(
						'key' => 'event_start_date',
						'compare' => $search_compare,
						'value' => $date_now,
					),
					array(
						'key' => 'event_end_date',
						'compare' => $search_compare2,
						'value' => $date_now,
					),
				),
			);
			$arg = wp_parse_args( $arg, $extra_query );
		} else {
			/*====== Filtrable by Start Date ======*/
			if( !empty( $search_startdate ) ) {
				$extra_query = array(
					'meta_query' => array(
						array(
							'key' => 'event_start_date',
							'compare' => $search_startdate_compare,
							'value' => $search_startdate,
						),
					),
				);
				$arg = wp_parse_args( $arg, $extra_query );
			}

			/*====== Filtrable by End Date ======*/
			if( !empty( $search_enddate ) ) {
				$extra_query = array(
					'meta_query' => array(
						array(
							'key' => 'event_end_date',
							'compare' => $search_enddate_compare,
							'value' => $search_enddate,
						),
					),
				);
				$arg = wp_parse_args( $arg, $extra_query );
			}
		}

		/*====== Pagination ======*/
		$paged = is_front_page() ? get_query_var( 'page', 1 ) : get_query_var( 'paged', 1 );
		if( empty( $paged ) ) {
			$paged = 1;
		}

		if( !empty( $paged ) ) {
			$extra_query = array(
				'paged' => $paged,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Order & Order By ======*/
		if( empty( $order ) ) {
			if( $atts["order"] == "ASC" ) {
				$order = "ASC";
			} else {
				$order = "DESC";
			}
		}

		if( !empty( $order ) ) {
			$extra_query = array(
				'order' => $order,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		if( empty( $order_by ) ) {
			if( $atts["order-type"] == "popular-comment" ) {
				$order_by = "comment_count";
			} elseif( $atts["order-type"] == "id" ) {
				$order_by = "ID";
			} elseif( $atts["order-type"] == "popular" ) {
				$order_by = "comment_count";
			} elseif( $atts["order-type"] == "title" ) {
				$order_by = "title";
			} elseif( $atts["order-type"] == "menu_order" ) {
				$order_by = "menu_order";
			} elseif( $atts["order-type"] == "rand" ) {
				$order_by = "rand";
			} elseif( $atts["order-type"] == "none" ) {
				$order_by = "none";
			} elseif( $atts["order-type"] == "event-date" ) {
				$order_by = "meta_value";
			} else {
				$order_by = "date";
			}
		}

		if( !empty( $order_by ) ) {
			$extra_query = array(
				'orderby' => $order_by,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Include Events ======*/
		if( !empty( $atts['eventids'] ) ) {
			$eventids = $atts['eventids'];
			$include_events = explode( ',', $eventids );
		} else {
			$include_events = "";
		}

		if( !empty( $include_events ) ) {
			$extra_query = array(
				'post__in' => $include_events,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Meta Key ======*/
		if( !empty( $meta_key ) ) {
			$extra_query = array(
				'meta_key' => $meta_key,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		} else {
			$meta_key = "event_start_date";
		}

		/*====== Event Count ======*/
		if( !empty( $atts["eventcount"] ) ) {
			$extra_query = array(
				'posts_per_page' => $atts["eventcount"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Offset ======*/
		if( !empty( $atts["offset"] ) ) {
			$extra_query = array(
				'offset' => $atts["offset"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Event Keyword ======*/
		if( !empty( $search_keyword ) ) {
			$extra_query = array(
				's' => $search_keyword,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Exclude Events ======*/
		$excludeevents = $atts['excludeevents'];

		if( $hideexpired == "false" ) {
			if( !empty( $excludeevents ) ) {
				$exclude_events = $excludeevents;
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			if( !empty( $exclude_events ) ) {
				$extra_query = array(
					'post__not_in' => $exclude_events,
				);
				$arg = wp_parse_args( $arg, $extra_query );
			}
		}

		/*====== Add Expired Events in Exclude Events ======*/
		if( $hideexpired == "true" ) {
			$expired_ids = eventchamp_expired_event_ids();
		} else {
			$expired_ids = array();
		}

		if( !empty( $expired_ids ) ) {
			if( !empty( $excludeevents ) ) {
				$exclude_events = $excludeevents;
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			$excludeevents_with_expired = array_merge( $exclude_events, $expired_ids );

			$extra_query = array(
				'post__not_in' => $excludeevents_with_expired,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== HTML Output ======*/
		$output .= '<div class="events-list-grid eventchamp-search-results">';
			$wp_query = new WP_Query( $arg );
			if( !empty( $wp_query ) ) {
				$output .= '<div class="event-list ' . esc_attr( $column ) . '">';
					if( $wp_query->have_posts() ) {
						while ( $wp_query->have_posts() ) {
							$wp_query->the_post();
							if( $atts["style"] == "style2" ) {
								$output .= eventchamp_event_list_style_3( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status, $venue = $venue_status );
							} elseif( $atts["style"] == "style3" ) {
								$output .= eventchamp_event_list_style_4( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status, $venue = $venue_status );
							} else {
								$output .= eventchamp_event_list_style_1( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status, $venue = $venue_status );
							}
							
						}
					} else {
						$output .= '<p>' . esc_html__( "There are no results that match your search.", 'eventchamp' ) . '</p>';
					}
				$output .= '</div>';
			}
			wp_reset_postdata();

			if ( $atts['pagination'] == 'true' ) {
				$output .= eventchamp_element_pagination( $paged = $paged, $query = $wp_query );
			}
		$output .= '</div>';

		return $output;
	}
	add_shortcode( "eventchamp_events_search_results", "eventchamp_events_search_results_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map( array(
			"name" => esc_html__( 'Event Search Results', 'eventchamp' ),
			"base" => "eventchamp_events_search_results",
			"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
			"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-events-search-results.jpg',
			"description" => esc_html__( 'Event search results element.', 'eventchamp' ),
			"params" => array(
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Event Count', 'eventchamp' ),
					"description" => esc_html__( 'You can enter an event count.', 'eventchamp' ),
					"param_name" => "eventcount",
					"group" => esc_html__( 'General', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Include Events', 'eventchamp' ),
					"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
					"param_name" => "eventids",
					"group" => esc_html__( 'General', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Exclude Events', 'eventchamp' ),
					"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
					"param_name" => "excludeevents",
					"group" => esc_html__( 'General', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Offset', 'eventchamp' ),
					"description" => esc_html__( 'You can enter an offset number.', 'eventchamp' ),
					"param_name" => "offset",
					"group" => esc_html__( 'General', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Default Order', 'eventchamp' ),
					"description" => esc_html__( 'You can choose an order. If you do not choose a order type on search tool this option visible.', 'eventchamp' ),
					"param_name" => "order",
					"save_always" => true,
					"value" => array(
						esc_html__( 'DESC', 'eventchamp' ) => 'DESC',
						esc_html__( 'ASC', 'eventchamp' ) => 'ASC',
					),
					"group" => esc_html__( 'General', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Default Order Type', 'eventchamp' ),
					"description" => esc_html__( 'You can choose an order type. If you do not choose a order type on search tool this option visible.', 'eventchamp' ),
					"param_name" => "order-type",
					"save_always" => true,
					"value" => array(
						esc_html__( 'Added Date', 'eventchamp' ) => 'added-date',
						esc_html__( 'Event Date', 'eventchamp' ) => 'event-date',
						esc_html__( 'Popular by Comment', 'eventchamp' ) => 'popular-comment',
						esc_html__( 'ID', 'eventchamp' ) => 'id',
						esc_html__( 'Title', 'eventchamp' ) => 'title',
						esc_html__( 'Menu Order', 'eventchamp' ) => 'menu_order',
						esc_html__( 'Random', 'eventchamp' ) => 'rand',
						esc_html__( 'None', 'eventchamp' ) => 'none',
					),
					"group" => esc_html__( 'General', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Hide Expired Events', 'eventchamp' ),
					"description" => esc_html__( 'You can hide expired events.', 'eventchamp' ),
					"param_name" => "hideexpired",
					'save_always' => true,
					"value" => array(
						esc_html__( 'False', 'eventchamp' ) => 'false',
						esc_html__( 'True', 'eventchamp' ) => 'true',
					),
					"group" => esc_html__( 'General', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Pagination', 'eventchamp' ),
					"description" => esc_html__( 'You can choose status of pagination.', 'eventchamp' ),
					"param_name" => "pagination",
					'save_always' => true,
					"value" => array(
						esc_html__( 'False', 'eventchamp' ) => 'false',
						esc_html__( 'True', 'eventchamp' ) => 'true',
					),
					"group" => esc_html__( 'General', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Exclude Categories', 'eventchamp' ),
					"description" => esc_html__( 'You can enter category ids. Example: 1,2, 3 etc.', 'eventchamp' ),
					"param_name" => "excludecategories",
					"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Exclude Locations', 'eventchamp' ),
					"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
					"param_name" => "exclude-locations",
					"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Exclude Organizers', 'eventchamp' ),
					"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
					"param_name" => "exclude-organizers",
					"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Exclude Tags', 'eventchamp' ),
					"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
					"param_name" => "exclude-tags",
					"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Include Categories', 'eventchamp' ),
					"description" => esc_html__( 'You can enter category ids. Example: 1, 2, 3 etc..', 'eventchamp' ),
					"param_name" => "includecategories",
					"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Include Locations', 'eventchamp' ),
					"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
					"param_name" => "include-locations",
					"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Include Organizers', 'eventchamp' ),
					"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
					"param_name" => "include-organizers",
					"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
				),
				array(
					"type" => "textfield",
					"heading" => esc_html__( 'Include Tag', 'eventchamp' ),
					"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
					"param_name" => "include-tags",
					"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'List Style', 'eventchamp' ),
					"description" => esc_html__( 'You can choose a list style.', 'eventchamp' ),
					"param_name" => "style",
					'save_always' => true,
					"value" => array(
						esc_html__( 'Style 1', 'eventchamp' ) => 'style1',
						esc_html__( 'Style 2', 'eventchamp' ) => 'style2',
						esc_html__( 'Style 3', 'eventchamp' ) => 'style3',
					),
					"group" => esc_html__( 'Design', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Column', 'eventchamp' ),
					"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
					"param_name" => "column",
					'save_always' => true,
					"value" => array(
						esc_html__( 'Column 1', 'eventchamp' ) => 'column-1',
						esc_html__( 'Column 2', 'eventchamp' ) => 'column-2',
						esc_html__( 'Column 3', 'eventchamp' ) => 'column-3',
						esc_html__( 'Column 4', 'eventchamp' ) => 'column-4',
					),
					"group" => esc_html__( 'Design', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Price', 'eventchamp' ),
					"description" => esc_html__( 'You can choose status of event price.', 'eventchamp' ),
					"param_name" => "price",
					'save_always' => true,
					"value" => array(
						esc_html__( 'False', 'eventchamp' ) => 'false',
						esc_html__( 'True', 'eventchamp' ) => 'true',
					),
					"group" => esc_html__( 'Design', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Status', 'eventchamp' ),
					"description" => esc_html__( 'You can choose status of event status.', 'eventchamp' ),
					"param_name" => "status",
					'save_always' => true,
					"value" => array(
						esc_html__( 'False', 'eventchamp' ) => 'false',
						esc_html__( 'True', 'eventchamp' ) => 'true',
					),
					"group" => esc_html__( 'Design', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Category', 'eventchamp' ),
					"description" => esc_html__( 'You can choose status of event category.', 'eventchamp' ),
					"param_name" => "category",
					'save_always' => true,
					"value" => array(
						esc_html__( 'False', 'eventchamp' ) => 'false',
						esc_html__( 'True', 'eventchamp' ) => 'true',
					),
					"group" => esc_html__( 'Design', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Location', 'eventchamp' ),
					"description" => esc_html__( 'You can choose status of event location.', 'eventchamp' ),
					"param_name" => "location",
					'save_always' => true,
					"value" => array(
						esc_html__( 'False', 'eventchamp' ) => 'false',
						esc_html__( 'True', 'eventchamp' ) => 'true',
					),
					"group" => esc_html__( 'Design', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Venue', 'eventchamp' ),
					"description" => esc_html__( 'You can choose status of event venue.', 'eventchamp' ),
					"param_name" => "venue",
					'save_always' => true,
					"value" => array(
						esc_html__( 'False', 'eventchamp' ) => 'false',
						esc_html__( 'True', 'eventchamp' ) => 'true',
					),
					"group" => esc_html__( 'Design', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Event Date', 'eventchamp' ),
					"description" => esc_html__( 'You can choose status of event date.', 'eventchamp' ),
					"param_name" => "date",
					'save_always' => true,
					"value" => array(
						esc_html__( 'False', 'eventchamp' ) => 'false',
						esc_html__( 'True', 'eventchamp' ) => 'true',
					),
					"group" => esc_html__( 'Design', 'eventchamp' ),
				),
				array(
					"type" => "dropdown",
					"heading" => esc_html__( 'Excerpt', 'eventchamp' ),
					"description" => esc_html__( 'You can choose status of event excerpt.', 'eventchamp' ),
					"param_name" => "excerpt",
					'save_always' => true,
					"value" => array(
						esc_html__( 'False', 'eventchamp' ) => 'false',
						esc_html__( 'True', 'eventchamp' ) => 'true',
					),
					"group" => esc_html__( 'Design', 'eventchamp' ),
				),
			),
		)
		);
	}



	/*======
	*
	* Categorized Events
	*
	======*/
	function eventchamp_categorized_events_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'eventcount' => '',
				'excludeevents' => '',
				'offset' => '',
				'sortby' => '',
				'ordertype' => '',
				'hideexpired' => '',
				'empty-taxonomies' => '',
				'childless' => '',
				'excludecategories' => '',
				'exclude-locations' => '',
				'exclude-organizers' => '',
				'exclude-tags' => '',
				'includecategories' => '',
				'include-locations' => '',
				'include-organizers' => '',
				'include-tags' => '',
				'cat-list-align' => '',
				'style' => '',
				'column' => '',
				'alleventstab' => '',
				'allbutton' => '',
				'price' => '',
				'status' => '',
				'category' => '',
				'location' => '',
				'venue' => '',
				'date' => '',
				'excerpt' => '',
			), $atts
		);

		$output = "";

		/*====== Expired Events Status ======*/
		if( !empty( $atts["hideexpired"] ) ) {
			$hideexpired = esc_attr( $atts["hideexpired"] );
		} else {
			$hideexpired = "false";
		}

		/*====== Column ======*/
		if( !empty( $atts["column"] ) ) {
			$column = esc_attr( $atts["column"] );
		} else {
			$column = "column-1";
		}

		/*====== Category List Align ======*/
		if( !empty( $atts['cat-list-align'] ) ) {
			$cat_list_align = esc_attr( $atts['cat-list-align'] );
		} else {
			$cat_list_align = "center";
		}

		/*====== Empty Categories ======*/
		if( $atts['empty-taxonomies'] == 'false' ) {
			$empty_taxonomies = false;
		} else {
			$empty_taxonomies = true;
		}

		/*====== Childless ======*/
		if( $atts['childless'] == 'false' ) {
			$childless = false;
		} else {
			$childless = true;
		}

		/*====== Price Status ======*/
		if( $atts["price"] == "true" ) {
			$price_status = "true";
		} else {
			$price_status = "false";
		}

		/*====== Status Status ======*/
		if( $atts["status"] == "true" ) {
			$status_status = "true";
		} else {
			$status_status = "false";
		}

		/*====== Category Status ======*/
		if( $atts["category"] == "true" ) {
			$category_status = "true";
		} else {
			$category_status = "false";
		}

		/*====== Location Status ======*/
		if( $atts["location"] == "true" ) {
			$location_status = "true";
		} else {
			$location_status = "false";
		}

		/*====== Venue Status ======*/
		if( $atts["venue"] == "true" ) {
			$venue_status = "true";
		} else {
			$venue_status = "false";
		}

		/*====== Date Status ======*/
		if( $atts["date"] == "true" ) {
			$date_status = "true";
		} else {
			$date_status = "false";
		}

		/*====== Excerpt Status ======*/
		if( $atts["excerpt"] == "true" ) {
			$excerpt_status = "true";
		} else {
			$excerpt_status = "false";
		}

		/*====== Exclude Categories ======*/
		$exclude_category_array = "";

		if( !empty( $atts['excludecategories'] ) ) {
			$exclude_categories = $atts['excludecategories'];
			$exclude_categories = explode( ',', $exclude_categories );
		} else {
			$exclude_categories = "";
		}

		if( !empty( $exclude_categories ) ) {
			$exclude_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $exclude_categories,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Locations ======*/
		$exclude_location_array = "";

		if( !empty( $atts['exclude-locations'] ) ) {
			$exclude_locations = $atts['exclude-locations'];
			$exclude_locations = explode( ',', $exclude_locations );
		} else {
			$exclude_locations = "";
		}

		if( !empty( $exclude_locations ) ) {
			$exclude_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $exclude_locations,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Organizers ======*/
		$exclude_organizer_array = "";

		if( !empty( $atts['exclude-organizers'] ) ) {
			$exclude_organizers = $atts['exclude-organizers'];
			$exclude_organizers = explode( ',', $exclude_organizers );
		} else {
			$exclude_organizers = "";
		}

		if( !empty( $exclude_organizers ) ) {
			$exclude_organizer_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $exclude_organizers,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Tags ======*/
		$exclude_tag_array = "";

		if( !empty( $atts['exclude-tags'] ) ) {
			$exclude_tags = $atts['exclude-tags'];
			$exclude_tags = explode( ',', $exclude_tags );
		} else {
			$exclude_tags = "";
		}

		if( !empty( $exclude_tags ) ) {
			$exclude_tag_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $exclude_tags,
				'operator' => 'NOT IN',
			);
		}

		/*====== Include Categories ======*/
		$include_category_array = "";

		if( !empty( $atts['includecategories'] ) ) {
			$include_categories = $atts['includecategories'];
			$include_categories = explode( ',', $include_categories );
		} else {
			$include_categories = "";
		}

		if( !empty( $include_categories ) ) {
			$include_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $include_categories,
				'operator' => 'IN',
			);
		}

		/*====== Include Locations ======*/
		$include_location_array = "";

		if( !empty( $atts['include-locations'] ) ) {
			$include_locations = $atts['include-locations'];
			$include_locations = explode( ',', $include_locations );
		} else {
			$include_locations = "";
		}

		if( !empty( $include_locations ) ) {
			$include_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $include_locations,
				'operator' => 'IN',
			);
		}

		/*====== Include Organizers ======*/
		$include_organizers = "";

		if( !empty( $atts['include-organizers'] ) ) {
			$include_organizers = $atts['include-organizers'];
			$include_organizers = explode( ',', $include_organizers );
		} else {
			$include_organizers = "";
		}

		if( !empty( $include_organizers ) ) {
			$include_organizers_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $include_organizers,
				'operator' => 'IN',
			);
		}

		/*====== Include Tags ======*/
		$include_tags_array = "";

		if( !empty( $atts['include-tags'] ) ) {
			$include_tags = $atts['include-tags'];
			$include_tags = explode( ',', $include_tags );
		} else {
			$include_tags = "";
		}

		if( !empty( $include_tags ) ) {
			$include_tags_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $include_tags,
				'operator' => 'IN',
			);
		}

		/*====== Main Query ======*/
		$arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'event',
			'tax_query' => array (
				'relation' => 'AND',
				$include_location_array,
				$include_category_array,
				$include_organizers_array,
				$include_tags_array,
				$exclude_category_array,
				$exclude_location_array,
				$exclude_organizer_array,
				$exclude_tag_array,
			)
		);

		$tab_arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'event',
		);

		/*====== Event Count ======*/
		if( !empty( $atts["eventcount"] ) ) {
			$extra_query = array(
				'posts_per_page' => $atts["eventcount"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
			$tab_arg = wp_parse_args( $tab_arg, $extra_query );
		}

		/*====== Offset ======*/
		if( !empty( $atts["offset"] ) ) {
			$extra_query = array(
				'offset' => $atts["offset"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
			$tab_arg = wp_parse_args( $tab_arg, $extra_query );
		}

		/*====== Exclude Events ======*/
		$excludeevents = $atts['excludeevents'];

		if( $hideexpired == "false" ) {
			if( !empty( $excludeevents ) ) {
				$exclude_events = $excludeevents;
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			if( !empty( $exclude_events ) ) {
				$extra_query = array(
					'post__not_in' => $exclude_events,
				);
				$arg = wp_parse_args( $arg, $extra_query );
				$tab_arg = wp_parse_args( $tab_arg, $extra_query );
			}
		}

		/*====== Add Expired Events in Exclude Events ======*/
		if( $hideexpired == "true" ) {
			$expired_ids = eventchamp_expired_event_ids();
		} else {
			$expired_ids = array();
		}

		if( !empty( $expired_ids ) ) {
			if( !empty( $excludeevents ) ) {
				$exclude_events = $excludeevents;
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			$excludeevents_with_expired = array_merge( $exclude_events, $expired_ids );

			$extra_query = array(
				'post__not_in' => $excludeevents_with_expired,
			);
			$arg = wp_parse_args( $arg, $extra_query );
			$tab_arg = wp_parse_args( $tab_arg, $extra_query );
		}

		/*====== Order & Order By ======*/
		if( $atts["ordertype"] == "ASC" ) {
			$order = "ASC";
		} else {
			$order = "DESC";
		}

		if( !empty( $order ) ) {
			$extra_query = array(
				'order' => $order,
			);
			$arg = wp_parse_args( $arg, $extra_query );
			$tab_arg = wp_parse_args( $tab_arg, $extra_query );
		}

		if( $atts["sortby"] == "popular-comment" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "id" ) {
			$order_by = "ID";
		} elseif( $atts["sortby"] == "popular" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "title" ) {
			$order_by = "title";
		} elseif( $atts["sortby"] == "menu_order" ) {
			$order_by = "menu_order";
		} elseif( $atts["sortby"] == "rand" ) {
			$order_by = "rand";
		} elseif( $atts["sortby"] == "none" ) {
			$order_by = "none";
		} elseif( $atts["sortby"] == "event-date" ) {
			$order_by = "meta_value";
			$meta_key = "event_start_date";

			if( !empty( $meta_key ) ) {
				$extra_query = array(
					'meta_key' => $meta_key,
				);
				$arg = wp_parse_args( $arg, $extra_query );
				$tab_arg = wp_parse_args( $tab_arg, $extra_query );
			} else {
				$meta_key = "event_start_date";
			}
		} else {
			$order_by = "date";
		}

		if( !empty( $order_by ) ) {
			$extra_query = array(
				'orderby' => $order_by,
			);
			$arg = wp_parse_args( $arg, $extra_query );
			$tab_arg = wp_parse_args( $tab_arg, $extra_query );
		}

		/*====== Get Terms ======*/
		$eventcat_terms = get_terms(
			array(
				'taxonomy' => 'eventcat',
				'exclude' => $exclude_categories,
				'include' => $include_categories,
				'hide_empty' => $empty_taxonomies,
				'childless' => $childless,
			)
		);

		/*====== HTML Output ======*/
		if ( ! empty( $eventcat_terms ) && ! is_wp_error( $eventcat_terms ) ) {
			$output .= '<div class="categorized-events">';
				$output .= '<ul class="nav ' . esc_attr( $cat_list_align ) . '" role="tablist">';
					if( $atts["alleventstab"] == "true" ) {
						$output .= '<li role="presentation"><a href="#categorized_events_all" aria-controls="categorized_events_all" role="tab" data-toggle="tab">' . esc_html__( 'All', 'eventchamp' ) . '</a></li>';
					}

					foreach ( $eventcat_terms as $eventcat_term ) {
						$eventcat_term_name = $eventcat_term->name;
						$eventcat_term_slug = $eventcat_term->slug;
						$output .= '<li role="presentation"><a href="#categorized_events_' . esc_attr( $eventcat_term_slug ) . '" aria-controls="categorized_events_' . esc_attr( $eventcat_term_slug ) . '" role="tab" data-toggle="tab">' . esc_attr( $eventcat_term_name ) . '</a></li>';
					}
				$output .= '</ul>';

				$output .= '<div class="tab-content">';
					if( $atts["alleventstab"] == "true" ) {
						$output .= '<div role="tabpanel" class="tab-pane fade" aria-labelledby="categorized_events_all" id="categorized_events_all">';
							$wp_query = new WP_Query( $arg );
							if( !empty( $wp_query ) ) {
								$output .= '<div class="event-list ' . esc_attr( $column ) . '">';
									while ( $wp_query->have_posts() ) {
										$wp_query->the_post();
										if( $atts["style"] == "style2" ) {
											$output .= eventchamp_event_list_style_3( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status,  $venue = $venue_status );	
										} elseif( $atts["style"] == "style3" ) {
											$output .= eventchamp_event_list_style_4( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status,  $venue = $venue_status );
										} else {
											$output .= eventchamp_event_list_style_1( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status,  $venue = $venue_status );
										}
									}
									wp_reset_postdata();
								$output .= '</div>';
							}

							if( $atts["allbutton"] == "true" ) {
								$output .= '<div class="pagination">';
									$output .= '<a href="' . esc_url( get_post_type_archive_link( 'event' ) ) . '" class="all-button">' . esc_html__( 'All Events', 'eventchamp' ) . '</a>';
								$output .= '</div>';
							}
						$output .= '</div>';
					}

					foreach ( $eventcat_terms as $eventcat_term ) {
						if( !empty( $eventcat_term ) ) {
							$eventcat_term_name = $eventcat_term->name;
							$eventcat_term_term_id = $eventcat_term->term_id;
							$eventcat_term_slug = $eventcat_term->slug;
							$output .= '<div role="tabpanel" class="tab-pane fade" id="categorized_events_' . esc_attr( $eventcat_term_slug ) . '" aria-labelledby="categorized_events_' . esc_attr( $eventcat_term_slug ) . '">';
								$tax_extra_query = array(
									'tax_query' => array(
										'relation' => 'AND',
										$include_location_array,
										$include_category_array,
										$include_organizers_array,
										$include_tags_array,
										$exclude_location_array,
										$exclude_organizer_array,
										$exclude_tag_array,
										array(
											'taxonomy' => 'eventcat',
											'field' => 'slug',
											'terms' => array( $eventcat_term_slug ),
										),
									),
								);
								$tab_arg_tab = wp_parse_args( $tab_arg, $tax_extra_query );

								$wp_query_tab = new WP_Query( $tab_arg_tab );
								if( !empty( $wp_query_tab ) ) {
									$output .= '<div class="event-list ' . esc_attr( $column ) . '">';
										while ( $wp_query_tab->have_posts() ) {
											$wp_query_tab->the_post();
											if( $atts["style"] == "style2" ) {
												$output .= eventchamp_event_list_style_3( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status,  $venue = $venue_status );
											} elseif( $atts["style"] == "style3" ) {
												$output .= eventchamp_event_list_style_4( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status,  $venue = $venue_status );
											} else {
												$output .= eventchamp_event_list_style_1( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status,  $venue = $venue_status );										
											}
										}
									$output .= '</div>';

									if( $atts["allbutton"] == "true" ) {
										$output .= '<div class="pagination">';
											$output .= '<a href="' . esc_url( get_term_link( $eventcat_term_term_id ) ) . '" class="all-button">' . esc_html__( 'All', 'eventchamp' ) . ' ' . esc_attr( $eventcat_term_name ) . ' ' . esc_html__( 'Events', 'eventchamp' ) . '</a>';
										$output .= '</div>';
									}
								}
								wp_reset_postdata();
							$output .= '</div>';
						}
					}
				$output .= '</div>';
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_categorized_events", "eventchamp_categorized_events_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Categorized Events', 'eventchamp' ),
				"base" => "eventchamp_categorized_events",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-categorized-events.jpg',
				"description" => esc_html__( 'Categorized events element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Event Count', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an event count for each tab.', 'eventchamp' ),
						"param_name" => "eventcount",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Events', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludeevents",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Offset', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an offset number.', 'eventchamp' ),
						"param_name" => "offset",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order.', 'eventchamp' ),
						"param_name" => "ordertype",
						"save_always" => true,
						"value" => array(
							esc_html__( 'DESC', 'eventchamp' ) => 'DESC',
							esc_html__( 'ASC', 'eventchamp' ) => 'ASC',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order type.', 'eventchamp' ),
						"param_name" => "sortby",
						"save_always" => true,
						"value" => array(
							esc_html__( 'Added Date', 'eventchamp' ) => 'added-date',
							esc_html__( 'Event Date', 'eventchamp' ) => 'event-date',
							esc_html__( 'Popular by Comment', 'eventchamp' ) => 'popular-comment',
							esc_html__( 'ID', 'eventchamp' ) => 'id',
							esc_html__( 'Title', 'eventchamp' ) => 'title',
							esc_html__( 'Menu Order', 'eventchamp' ) => 'menu_order',
							esc_html__( 'Random', 'eventchamp' ) => 'rand',
							esc_html__( 'None', 'eventchamp' ) => 'none',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Hide Expired Events', 'eventchamp' ),
						"description" => esc_html__( 'You can hide expired events.', 'eventchamp' ),
						"param_name" => "hideexpired",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Empty Taxonomies', 'eventchamp' ),
						"description" => esc_html__( 'You can choose visible status of empty taxonomies. If you choose true option empty taxonomies will be hide.', 'eventchamp' ),
						"param_name" => "empty-taxonomies",
						"value" => array(
							esc_html__( 'True', 'eventchamp' ) => 'true',
							esc_html__( 'False', 'eventchamp' ) => 'false',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Childless', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of childless.', 'eventchamp' ),
						"param_name" => "childless",
						"value" => array(
							esc_html__( 'True', 'eventchamp' ) => 'true',
							esc_html__( 'False', 'eventchamp' ) => 'false',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter categories ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludecategories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Organizers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-organizers",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Tags', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "exclude-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter categories ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "includecategories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Organizers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-organizers",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "include-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Category List Align', 'eventchamp' ),
						"description" => esc_html__( 'You can choose align of category list.', 'eventchamp' ),
						"param_name" => "cat-list-align",
						"save_always" => true,
						"value" => array(
							esc_html__( 'Center', 'eventchamp' ) => 'center',
							esc_html__( 'Left', 'eventchamp' ) => 'left',
							esc_html__( 'Right', 'eventchamp' ) => 'right',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'List Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a list style.', 'eventchamp' ),
						"param_name" => "style",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Style 1', 'eventchamp' ) => 'style1',
							esc_html__( 'Style 2', 'eventchamp' ) => 'style2',
							esc_html__( 'Style 3', 'eventchamp' ) => 'style3',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Column', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
						"param_name" => "column",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Column 1', 'eventchamp' ) => 'column-1',
							esc_html__( 'Column 2', 'eventchamp' ) => 'column-2',
							esc_html__( 'Column 3', 'eventchamp' ) => 'column-3',
							esc_html__( 'Column 4', 'eventchamp' ) => 'column-4',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'All Events Tab', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of all events tab.', 'eventchamp' ),
						"param_name" => "alleventstab",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'All Events Button', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of all events button.', 'eventchamp' ),
						"param_name" => "allbutton",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Price', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event price.', 'eventchamp' ),
						"param_name" => "price",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Status', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event status.', 'eventchamp' ),
						"param_name" => "status",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Category', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event category.', 'eventchamp' ),
						"param_name" => "category",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Location', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event location.', 'eventchamp' ),
						"param_name" => "location",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Venue', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event venue.', 'eventchamp' ),
						"param_name" => "venue",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Date', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event date.', 'eventchamp' ),
						"param_name" => "date",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Excerpt', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event excerpt.', 'eventchamp' ),
						"param_name" => "excerpt",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
				),
			)
		);
	}



	/*======
	*
	* Event Carousel
	*
	======*/
	function eventchamp_events_list_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'eventcount' => '',
				'eventids' => '',
				'excludeevents' => '',
				'offset' => '',
				'ordertype' => '',
				'sortby' => '',
				'hideexpired' => '',
				'excludecategories' => '',
				'exclude-locations' => '',
				'exclude-organizers' => '',
				'exclude-tags' => '',
				'includecategories' => '',
				'include-locations' => '',
				'include-organizers' => '',
				'include-tags' => '',
				'style' => '',
				'column' => '',
				'allbutton' => '',
				'navbuttons' => '',
				'loopstatus' => '',
				'autoplay' => '',
				'price' => '',
				'status' => '',
				'category' => '',
				'location' => '',
				'venue' => '',
				'date' => '',
				'excerpt' => '',
			), $atts
		);

		$output = "";

		/*====== Style ======*/
		if( !empty( $atts['style'] ) ) {
			$style = esc_attr( $atts["style"] );
		} else {
			$style = "style1";
		}

		/*====== Expired Events Status ======*/
		if( !empty( $atts['hideexpired'] ) ) {
			$hideexpired = esc_attr( $atts["hideexpired"] );
		} else {
			$hideexpired = "false";
		}

		/*====== Column Status ======*/
		if( !empty( $atts['column'] ) ) {
			$column = esc_attr( $atts["column"] );
		} else {
			$column = "3";
		}

		/*====== Autoplay Status ======*/
		if( !empty( $atts['autoplay'] ) ) {
			$autoplay = esc_attr( $atts["autoplay"] );
		} else {
			$autoplay = "false";
		}

		/*====== Loop Status ======*/
		if( $atts["loopstatus"] == "true" ) {
			$loopstatus = "true";
		} else {
			$loopstatus = "false";
		}

		/*====== Price Status ======*/
		if( $atts["price"] == "true" ) {
			$price_status = "true";
		} else {
			$price_status = "false";
		}

		/*====== Status Status ======*/
		if( $atts["status"] == "true" ) {
			$status_status = "true";
		} else {
			$status_status = "false";
		}

		/*====== Category Status ======*/
		if( $atts["category"] == "true" ) {
			$category_status = "true";
		} else {
			$category_status = "false";
		}

		/*====== Location Status ======*/
		if( $atts["location"] == "true" ) {
			$location_status = "true";
		} else {
			$location_status = "false";
		}

		/*====== Venue Status ======*/
		if( $atts["venue"] == "true" ) {
			$venue_status = "true";
		} else {
			$venue_status = "false";
		}

		/*====== Date Status ======*/
		if( $atts["date"] == "true" ) {
			$date_status = "true";
		} else {
			$date_status = "false";
		}

		/*====== Excerpt Status ======*/
		if( $atts["excerpt"] == "true" ) {
			$excerpt_status = "true";
		} else {
			$excerpt_status = "false";
		}

		/*====== Exclude Categories ======*/
		$exclude_category_array = "";

		if( !empty( $atts['excludecategories'] ) ) {
			$exclude_categories = $atts['excludecategories'];
			$exclude_categories = explode( ',', $exclude_categories );
		} else {
			$exclude_categories = "";
		}

		if( !empty( $exclude_categories ) ) {
			$exclude_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $exclude_categories,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Locations ======*/
		$exclude_location_array = "";

		if( !empty( $atts['exclude-locations'] ) ) {
			$exclude_locations = $atts['exclude-locations'];
			$exclude_locations = explode( ',', $exclude_locations );
		} else {
			$exclude_locations = "";
		}

		if( !empty( $exclude_locations ) ) {
			$exclude_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $exclude_locations,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Organizers ======*/
		$exclude_organizer_array = "";

		if( !empty( $atts['exclude-organizers'] ) ) {
			$exclude_organizers = $atts['exclude-organizers'];
			$exclude_organizers = explode( ',', $exclude_organizers );
		} else {
			$exclude_organizers = "";
		}

		if( !empty( $exclude_organizers ) ) {
			$exclude_organizer_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $exclude_organizers,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Tags ======*/
		$exclude_tag_array = "";

		if( !empty( $atts['exclude-tags'] ) ) {
			$exclude_tags = $atts['exclude-tags'];
			$exclude_tags = explode( ',', $exclude_tags );
		} else {
			$exclude_tags = "";
		}

		if( !empty( $exclude_tags ) ) {
			$exclude_tag_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $exclude_tags,
				'operator' => 'NOT IN',
			);
		}

		/*====== Include Categories ======*/
		$include_category_array = "";

		if( !empty( $atts['includecategories'] ) ) {
			$include_categories = $atts['includecategories'];
			$include_categories = explode( ',', $include_categories );
		} else {
			$include_categories = "";
		}

		if( !empty( $include_categories ) ) {
			$include_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $include_categories,
				'operator' => 'IN',
			);
		}

		/*====== Include Locations ======*/
		$include_location_array = "";

		if( !empty( $atts['include-locations'] ) ) {
			$include_locations = $atts['include-locations'];
			$include_locations = explode( ',', $include_locations );
		} else {
			$include_locations = "";
		}

		if( !empty( $include_locations ) ) {
			$include_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $include_locations,
				'operator' => 'IN',
			);
		}

		/*====== Include Organizers ======*/
		$include_organizers = "";

		if( !empty( $atts['include-organizers'] ) ) {
			$include_organizers = $atts['include-organizers'];
			$include_organizers = explode( ',', $include_organizers );
		} else {
			$include_organizers = "";
		}

		if( !empty( $include_organizers ) ) {
			$include_organizers_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $include_organizers,
				'operator' => 'IN',
			);
		}

		/*====== Include Tags ======*/
		$include_tags_array = "";

		if( !empty( $atts['include-tags'] ) ) {
			$include_tags = $atts['include-tags'];
			$include_tags = explode( ',', $include_tags );
		} else {
			$include_tags = "";
		}

		if( !empty( $include_tags ) ) {
			$include_tags_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $include_tags,
				'operator' => 'IN',
			);
		}

		/*====== Main Query ======*/
		$arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'event',
			'tax_query' => array (
				'relation' => 'AND',
				$include_location_array,
				$include_category_array,
				$include_organizers_array,
				$include_tags_array,
				$exclude_category_array,
				$exclude_location_array,
				$exclude_organizer_array,
				$exclude_tag_array,
			)
		);

		/*====== Include Events ======*/
		if( !empty( $atts['eventids'] ) ) {
			$eventids = $atts['eventids'];
			$include_events = explode( ',', $eventids );
		} else {
			$include_events = "";
		}

		if( !empty( $include_events ) ) {
			$extra_query = array(
				'post__in' => $include_events,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Event Count ======*/
		if( !empty( $atts["eventcount"] ) ) {
			$extra_query = array(
				'posts_per_page' => $atts["eventcount"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Offset ======*/
		if( !empty( $atts["offset"] ) ) {
			$extra_query = array(
				'offset' => $atts["offset"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Exclude Events ======*/
		$excludeevents = $atts['excludeevents'];

		if( $hideexpired == "false" ) {
			if( !empty( $excludeevents ) ) {
				$exclude_events = $excludeevents;
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			if( !empty( $exclude_events ) ) {
				$extra_query = array(
					'post__not_in' => $exclude_events,
				);
				$arg = wp_parse_args( $arg, $extra_query );
			}
		}

		/*====== Add Expired Events in Exclude Events ======*/
		if( $hideexpired == "true" ) {
			$expired_ids = eventchamp_expired_event_ids();
		} else {
			$expired_ids = array();
		}

		if( !empty( $expired_ids ) ) {
			$excludeevents = $atts['excludeevents'];

			if( !empty( $excludeevents ) ) {
				$exclude_events = $excludeevents;
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			$excludeevents_with_expired = array_merge( $exclude_events, $expired_ids );

			$extra_query = array(
				'post__not_in' => $excludeevents_with_expired,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Order & Order By ======*/
		if( $atts["ordertype"] == "ASC" ) {
			$order = "ASC";
		} else {
			$order = "DESC";
		}

		if( !empty( $order ) ) {
			$extra_query = array(
				'order' => $order,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		if( $atts["sortby"] == "popular-comment" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "id" ) {
			$order_by = "ID";
		} elseif( $atts["sortby"] == "popular" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "title" ) {
			$order_by = "title";
		} elseif( $atts["sortby"] == "menu_order" ) {
			$order_by = "menu_order";
		} elseif( $atts["sortby"] == "rand" ) {
			$order_by = "rand";
		} elseif( $atts["sortby"] == "none" ) {
			$order_by = "none";
		} elseif( $atts["sortby"] == "event-date" ) {
			$order_by = "meta_value";
			$meta_key = "event_start_date";

			if( !empty( $meta_key ) ) {
				$extra_query = array(
					'meta_key' => $meta_key,
				);
				$arg = wp_parse_args( $arg, $extra_query );
			} else {
				$meta_key = "event_start_date";
			}
		} else {
			$order_by = "date";
		}

		if( !empty( $order_by ) ) {
			$extra_query = array(
				'orderby' => $order_by,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== HTML Output ======*/
		$output .= '<div class="events-list-carousel">';
			$wp_query = new WP_Query( $arg );
			if( !empty( $wp_query ) ) {
				$output .= '<div class="swiper-container gloria-sliders events-list-carousel" data-item="' . $column . '" data-column-space="30" data-sloop="' . $loopstatus . '" data-aplay="' . $autoplay . '">';
					$output .= '<div class="swiper-wrapper">';
						while ( $wp_query->have_posts() ) {
							$wp_query->the_post();
							$output .= '<div class="swiper-slide">';
								if( $style == "style2" ) {
									$output .= eventchamp_event_list_style_3( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status, $venue = $venue_status );
								} elseif( $style == "style3" ) {
									$output .= eventchamp_event_list_style_4( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status, $venue = $venue_status );
								} else {
									$output .= eventchamp_event_list_style_1( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status, $venue = $venue_status );
								}
							$output .= '</div>';
						}
					$output .= '</div>';

					$output .= '<div class="pagination">';
						if( $atts["navbuttons"] == "true" ) {
							$output .= '<div class="pagination-left prev"><i class="fas fa-chevron-left" aria-hidden="true"></i></div>';
						}

						if( $atts["allbutton"] == "true" ) {
							$output .= '<div><a href="' . esc_url( get_post_type_archive_link( 'event' ) ) . '" class="all-button">' . esc_html__( 'All Events', 'eventchamp' ) . '</a></div>';
						}

						if( $atts["navbuttons"] == "true" ) {
							$output .= '<div class="pagination-right next"><i class="fas fa-chevron-right" aria-hidden="true"></i></div>';
						}
					$output .= '</div>';

				$output .= '</div>';
			}
			wp_reset_postdata();
		$output .= '</div>';

		return $output;
	}
	add_shortcode( "eventchamp_events_list", "eventchamp_events_list_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Event Carousel', 'eventchamp' ),
				"base" => "eventchamp_events_list",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-events-list.jpg',
				"description" => esc_html__( 'Event carousel element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Event Count', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an event count.', 'eventchamp' ),
						"param_name" => "eventcount",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Events', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "eventids",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Events', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludeevents",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Offset', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an offset number.', 'eventchamp' ),
						"param_name" => "offset",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order.', 'eventchamp' ),
						"param_name" => "ordertype",
						"save_always" => true,
						"group" => esc_html__( 'General', 'eventchamp' ),
						"value" => array(
							esc_html__( 'DESC', 'eventchamp' ) => 'DESC',
							esc_html__( 'ASC', 'eventchamp' ) => 'ASC',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order type.', 'eventchamp' ),
						"param_name" => "sortby",
						"save_always" => true,
						"group" => esc_html__( 'General', 'eventchamp' ),
						"value" => array(
							esc_html__( 'Added Date', 'eventchamp' ) => 'added-date',
							esc_html__( 'Event Date', 'eventchamp' ) => 'event-date',
							esc_html__( 'Popular by Comment', 'eventchamp' ) => 'popular-comment',
							esc_html__( 'ID', 'eventchamp' ) => 'id',
							esc_html__( 'Title', 'eventchamp' ) => 'title',
							esc_html__( 'Menu Order', 'eventchamp' ) => 'menu_order',
							esc_html__( 'Random', 'eventchamp' ) => 'rand',
							esc_html__( 'None', 'eventchamp' ) => 'none',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Hide Expired Events', 'eventchamp' ),
						"description" => esc_html__( 'You can hide expired events.', 'eventchamp' ),
						"param_name" => "hideexpired",
						"group" => esc_html__( 'General', 'eventchamp' ),
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter categories ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludecategories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Organizers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-organizers",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Tags', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "exclude-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter categories ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "includecategories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Organizers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-organizers",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "include-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'List Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a list style.', 'eventchamp' ),
						"param_name" => "style",
						'save_always' => true,
						"group" => esc_html__( 'Design', 'eventchamp' ),
						"value" => array(
							esc_html__( 'Style 1', 'eventchamp' ) => 'style1',
							esc_html__( 'Style 2', 'eventchamp' ) => 'style2',
							esc_html__( 'Style 3', 'eventchamp' ) => 'style3',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Column', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
						"param_name" => "column",
						'save_always' => true,
						"group" => esc_html__( 'Design', 'eventchamp' ),
						"value" => array(
							esc_html__( 'Column 1', 'eventchamp' ) => '1',
							esc_html__( 'Column 2', 'eventchamp' ) => '2',
							esc_html__( 'Column 3', 'eventchamp' ) => '3',
							esc_html__( 'Column 4', 'eventchamp' ) => '4',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'All Events Button', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of all events button.', 'eventchamp' ),
						"param_name" => "allbutton",
						'save_always' => true,
						"group" => esc_html__( 'Design', 'eventchamp' ),
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Navigation Buttons', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of navigation buttons.', 'eventchamp' ),
						"param_name" => "navbuttons",
						'save_always' => true,
						"group" => esc_html__( 'Design', 'eventchamp' ),
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Loop', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of loop.', 'eventchamp' ),
						"param_name" => "loopstatus",
						'save_always' => true,
						"group" => esc_html__( 'Design', 'eventchamp' ),
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Autoplay', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an autoplay speed.', 'eventchamp' ),
						"param_name" => "autoplay",
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Price', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event price.', 'eventchamp' ),
						"param_name" => "price",
						"group" => esc_html__( 'Design', 'eventchamp' ),
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Status', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event status.', 'eventchamp' ),
						"param_name" => "status",
						"group" => esc_html__( 'Design', 'eventchamp' ),
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Category', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event category.', 'eventchamp' ),
						"param_name" => "category",
						"group" => esc_html__( 'Design', 'eventchamp' ),
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Location', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event location.', 'eventchamp' ),
						"param_name" => "location",
						"group" => esc_html__( 'Design', 'eventchamp' ),
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Venue', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event venue.', 'eventchamp' ),
						"param_name" => "venue",
						"group" => esc_html__( 'Design', 'eventchamp' ),
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Date', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event date.', 'eventchamp' ),
						"param_name" => "date",
						"group" => esc_html__( 'Design', 'eventchamp' ),
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Excerpt', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event excerpt.', 'eventchamp' ),
						"param_name" => "excerpt",
						"group" => esc_html__( 'Design', 'eventchamp' ),
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
				),
			)
		);
	}



	/*======
	*
	* Events List
	*
	======*/
	function eventchamp_events_list_grid_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'eventcount' => '',
				'eventids' => '',
				'excludeevents' => '',
				'offset' => '',
				'ordertype' => '',
				'sortby' => '',
				'hideexpired' => '',
				'excludecategories' => '',
				'exclude-locations' => '',
				'exclude-organizers' => '',
				'exclude-tags' => '',
				'includecategories' => '',
				'include-locations' => '',
				'include-organizers' => '',
				'include-tags' => '',
				'style' => '',
				'column' => '',
				'pagination' => '',
				'price' => '',
				'status' => '',
				'category' => '',
				'location' => '',
				'venue' => '',
				'date' => '',
				'excerpt' => '',
			), $atts
		);

		$output = "";

		/*====== Column ======*/
		if( $atts["column"] ) {
			$column = esc_attr( $atts["column"] );
		} else {
			$column = "2";
		}

		/*====== Expired Events Status ======*/
		if( !empty( $atts['hideexpired'] ) ) {
			$hideexpired = esc_attr( $atts["hideexpired"] );
		} else {
			$hideexpired = "false";
		}

		/*====== Price Status ======*/
		if( $atts["price"] == "true" ) {
			$price_status = "true";
		} else {
			$price_status = "false";
		}

		/*====== Status Status ======*/
		if( $atts["status"] == "true" ) {
			$status_status = "true";
		} else {
			$status_status = "false";
		}

		/*====== Category Status ======*/
		if( $atts["category"] == "true" ) {
			$category_status = "true";
		} else {
			$category_status = "false";
		}

		/*====== Location Status ======*/
		if( $atts["location"] == "true" ) {
			$location_status = "true";
		} else {
			$location_status = "false";
		}

		/*====== Venue Status ======*/
		if( $atts["venue"] == "true" ) {
			$venue_status = "true";
		} else {
			$venue_status = "false";
		}

		/*====== Date Status ======*/
		if( $atts["date"] == "true" ) {
			$date_status = "true";
		} else {
			$date_status = "false";
		}

		/*====== Excerpt Status ======*/
		if( $atts["excerpt"] == "true" ) {
			$excerpt_status = "true";
		} else {
			$excerpt_status = "false";
		}

		/*====== Exclude Categories ======*/
		$exclude_category_array = "";

		if( !empty( $atts['excludecategories'] ) ) {
			$exclude_categories = $atts['excludecategories'];
			$exclude_categories = explode( ',', $exclude_categories );
		} else {
			$exclude_categories = "";
		}

		if( !empty( $exclude_categories ) ) {
			$exclude_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $exclude_categories,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Locations ======*/
		$exclude_location_array = "";

		if( !empty( $atts['exclude-locations'] ) ) {
			$exclude_locations = $atts['exclude-locations'];
			$exclude_locations = explode( ',', $exclude_locations );
		} else {
			$exclude_locations = "";
		}

		if( !empty( $exclude_locations ) ) {
			$exclude_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $exclude_locations,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Organizers ======*/
		$exclude_organizer_array = "";

		if( !empty( $atts['exclude-organizers'] ) ) {
			$exclude_organizers = $atts['exclude-organizers'];
			$exclude_organizers = explode( ',', $exclude_organizers );
		} else {
			$exclude_organizers = "";
		}

		if( !empty( $exclude_organizers ) ) {
			$exclude_organizer_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $exclude_organizers,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Tags ======*/
		$exclude_tag_array = "";

		if( !empty( $atts['exclude-tags'] ) ) {
			$exclude_tags = $atts['exclude-tags'];
			$exclude_tags = explode( ',', $exclude_tags );
		} else {
			$exclude_tags = "";
		}

		if( !empty( $exclude_tags ) ) {
			$exclude_tag_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $exclude_tags,
				'operator' => 'NOT IN',
			);
		}

		/*====== Include Categories ======*/
		$include_category_array = "";

		if( !empty( $atts['includecategories'] ) ) {
			$include_categories = $atts['includecategories'];
			$include_categories = explode( ',', $include_categories );
		} else {
			$include_categories = "";
		}

		if( !empty( $include_categories ) ) {
			$include_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $include_categories,
				'operator' => 'IN',
			);
		}

		/*====== Include Locations ======*/
		$include_location_array = "";

		if( !empty( $atts['include-locations'] ) ) {
			$include_locations = $atts['include-locations'];
			$include_locations = explode( ',', $include_locations );
		} else {
			$include_locations = "";
		}

		if( !empty( $include_locations ) ) {
			$include_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $include_locations,
				'operator' => 'IN',
			);
		}

		/*====== Include Organizers ======*/
		$include_organizers = "";

		if( !empty( $atts['include-organizers'] ) ) {
			$include_organizers = $atts['include-organizers'];
			$include_organizers = explode( ',', $include_organizers );
		} else {
			$include_organizers = "";
		}

		if( !empty( $include_organizers ) ) {
			$include_organizers_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $include_organizers,
				'operator' => 'IN',
			);
		}

		/*====== Include Tags ======*/
		$include_tags_array = "";

		if( !empty( $atts['include-tags'] ) ) {
			$include_tags = $atts['include-tags'];
			$include_tags = explode( ',', $include_tags );
		} else {
			$include_tags = "";
		}

		if( !empty( $include_tags ) ) {
			$include_tags_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $include_tags,
				'operator' => 'IN',
			);
		}

		/*====== Main Query ======*/
		$arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'event',
			'tax_query' => array (
				'relation' => 'AND',
				$include_location_array,
				$include_category_array,
				$include_organizers_array,
				$include_tags_array,
				$exclude_category_array,
				$exclude_location_array,
				$exclude_organizer_array,
				$exclude_tag_array,
			)
		);

		/*====== Pagination ======*/
		$paged = is_front_page() ? get_query_var( 'page', 1 ) : get_query_var( 'paged', 1 );
		if( empty( $paged ) ) {
			$paged = 1;
		}

		if( !empty( $paged ) ) {
			$extra_query = array(
				'paged' => $paged,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Include Events ======*/
		if( !empty( $atts['eventids'] ) ) {
			$eventids = $atts['eventids'];
			$include_events = explode( ',', $eventids );
		} else {
			$include_events = "";
		}

		if( !empty( $include_events ) ) {
			$extra_query = array(
				'post__in' => $include_events,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Event Count ======*/
		if( !empty( $atts["eventcount"] ) ) {
			$extra_query = array(
				'posts_per_page' => $atts["eventcount"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Offset ======*/
		if( !empty( $atts["offset"] ) ) {
			$extra_query = array(
				'offset' => $atts["offset"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Exclude Events ======*/
		$excludeevents = $atts['excludeevents'];

		if( $hideexpired == "false" ) {
			if( !empty( $excludeevents ) ) {
				$exclude_events = $excludeevents;
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			if( !empty( $exclude_events ) ) {
				$extra_query = array(
					'post__not_in' => $exclude_events,
				);
				$arg = wp_parse_args( $arg, $extra_query );
			}
		}

		/*====== Add Expired Events in Exclude Events ======*/
		if( $hideexpired == "true" ) {
			$expired_ids = eventchamp_expired_event_ids();
		} else {
			$expired_ids = array();
		}

		if( !empty( $expired_ids ) ) {
			$excludeevents = $atts['excludeevents'];

			if( !empty( $excludeevents ) ) {
				$exclude_events = $excludeevents;
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			$excludeevents_with_expired = array_merge( $exclude_events, $expired_ids );

			$extra_query = array(
				'post__not_in' => $excludeevents_with_expired,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Order & Order By ======*/
		if( $atts["ordertype"] == "ASC" ) {
			$order = "ASC";
		} else {
			$order = "DESC";
		}

		if( !empty( $order ) ) {
			$extra_query = array(
				'order' => $order,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		if( $atts["sortby"] == "popular-comment" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "id" ) {
			$order_by = "ID";
		} elseif( $atts["sortby"] == "popular" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "title" ) {
			$order_by = "title";
		} elseif( $atts["sortby"] == "menu_order" ) {
			$order_by = "menu_order";
		} elseif( $atts["sortby"] == "rand" ) {
			$order_by = "rand";
		} elseif( $atts["sortby"] == "none" ) {
			$order_by = "none";
		} elseif( $atts["sortby"] == "event-date" ) {
			$order_by = "meta_value";
			$meta_key = "event_start_date";

			if( !empty( $meta_key ) ) {
				$extra_query = array(
					'meta_key' => $meta_key,
				);
				$arg = wp_parse_args( $arg, $extra_query );
			} else {
				$meta_key = "event_start_date";
			}
		} else {
			$order_by = "date";
		}

		if( !empty( $order_by ) ) {
			$extra_query = array(
				'orderby' => $order_by,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== HTML Output ======*/
		$output .= '<div class="events-list-grid">';
			$wp_query = new WP_Query( $arg );
			if( !empty( $wp_query ) ) {
				$output .= '<div class="event-list column-' . esc_attr( $column ) . '">';
					while ( $wp_query->have_posts() ) {
						$wp_query->the_post();
						if( $atts["style"] == "style2" ) {
							$output .= eventchamp_event_list_style_3( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status, $venue = $venue_status );	
						} elseif( $atts["style"] == "style3" ) {
							$output .= eventchamp_event_list_style_4( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status, $venue = $venue_status );
						} else {
							$output .= eventchamp_event_list_style_1( $post_id = get_the_ID(), $image = "true", $category = $category_status, $date = $date_status, $location = $location_status, $excerpt = $excerpt_status, $status = $status_status, $price = $price_status, $venue = $venue_status );											
						}							
					}
				$output .= '</div>';
			}
			wp_reset_postdata();

			if ( $atts['pagination'] == 'true' ) {
				$output .= eventchamp_element_pagination( $paged = $paged, $query = $wp_query );
			}
		$output .= '</div>';

		return $output;
	}
	add_shortcode( "eventchamp_events_list_grid", "eventchamp_events_list_grid_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Events List', 'eventchamp' ),
				"base" => "eventchamp_events_list_grid",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-events-list-grid.jpg',
				"description" => esc_html__( 'Events list element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Event Count', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an event count.', 'eventchamp' ),
						"param_name" => "eventcount",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Events', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "eventids",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Events', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludeevents",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Offset', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an offset number.', 'eventchamp' ),
						"param_name" => "offset",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order.', 'eventchamp' ),
						"param_name" => "ordertype",
						"save_always" => true,
						"value" => array(
							esc_html__( 'DESC', 'eventchamp' ) => 'DESC',
							esc_html__( 'ASC', 'eventchamp' ) => 'ASC',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order type.', 'eventchamp' ),
						"param_name" => "sortby",
						"save_always" => true,
						"value" => array(
							esc_html__( 'Added Date', 'eventchamp' ) => 'added-date',
							esc_html__( 'Event Date', 'eventchamp' ) => 'event-date',
							esc_html__( 'Popular by Comment', 'eventchamp' ) => 'popular-comment',
							esc_html__( 'ID', 'eventchamp' ) => 'id',
							esc_html__( 'Title', 'eventchamp' ) => 'title',
							esc_html__( 'Menu Order', 'eventchamp' ) => 'menu_order',
							esc_html__( 'Random', 'eventchamp' ) => 'rand',
							esc_html__( 'None', 'eventchamp' ) => 'none',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Hide Expired Events', 'eventchamp' ),
						"description" => esc_html__( 'You can hide expired events.', 'eventchamp' ),
						"param_name" => "hideexpired",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter categories ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludecategories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Organizers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-organizers",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Tags', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "exclude-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter categories ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "includecategories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Organizers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-organizers",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "include-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'List Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a list style.', 'eventchamp' ),
						"param_name" => "style",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Style 1', 'eventchamp' ) => 'style1',
							esc_html__( 'Style 2', 'eventchamp' ) => 'style2',
							esc_html__( 'Style 3', 'eventchamp' ) => 'style3',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Column', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
						"param_name" => "column",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Column 1', 'eventchamp' ) => '1',
							esc_html__( 'Column 2', 'eventchamp' ) => '2',
							esc_html__( 'Column 3', 'eventchamp' ) => '3',
							esc_html__( 'Column 4', 'eventchamp' ) => '4',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Pagination', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of pagination.', 'eventchamp' ),
						"param_name" => "pagination",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Price', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event price.', 'eventchamp' ),
						"param_name" => "price",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Status', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event status.', 'eventchamp' ),
						"param_name" => "status",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Category', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event category.', 'eventchamp' ),
						"param_name" => "category",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Location', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event location.', 'eventchamp' ),
						"param_name" => "location",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Venue', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event venue.', 'eventchamp' ),
						"param_name" => "venue",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Event Date', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event date.', 'eventchamp' ),
						"param_name" => "date",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Excerpt', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event excerpt.', 'eventchamp' ),
						"param_name" => "excerpt",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
				),
			)
		);
	}



	/*======
	*
	* Single Event Content
	*
	======*/
	function eventchamp_event_content_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'eventid' => '',
				'contenttype' => '',
				'speaker-column' => '',
				'price-list-column' => '',
			), $atts
		);

		$output = "";

		/*====== Speaker Column ======*/
		if( $atts["speaker-column"] ) {
			$speaker_column = esc_attr( $atts["speaker-column"] );
		} else {
			$speaker_column = "1";
		}

		/*====== Price List Column ======*/
		if( $atts["price-list-column"] ) {
			$price_list_column = esc_attr( $atts["price-list-column"] );
		} else {
			$price_list_column = "1";
		}

		/*====== HTML Output ======*/
		if( !empty( $atts["contenttype"] ) and !empty( $atts["eventid"] ) ) {
			$output .= '<div class="eventchamp-event-content">';
				if( $atts["contenttype"] == "speaker" ) {
					if( !empty( $atts["eventid"] ) ) {
						$output .= eventchamp_speakers( $post_id = esc_attr( $atts["eventid"] ), $column = esc_attr( $speaker_column ) );
					}
				} elseif( $atts["contenttype"] == "schedule" ) {
					if( !empty( $atts["eventid"] ) ) {
						$output .= '<div class="eventchamp-dropdown">';
							$output .= eventchamp_schedule( $post_id = esc_attr( $atts["eventid"] ) );
						$output .= '</div>';
					}
				} elseif( $atts["contenttype"] == "ticket" ) {
					if( !empty( $atts["eventid"] ) ) {
						$output .= eventchamp_pricing_table( $post_id = esc_attr( $atts["eventid"] ), $text_column = esc_attr( $price_list_column ) );
					}
				} elseif( $atts["contenttype"] == "sponsor" ) {
					if( !empty( $atts["eventid"] ) ) {
						$event_sponsors = get_post_meta( esc_attr( $atts["eventid"] ), 'event_sponsors', true );
						if( !empty( $event_sponsors ) ) {
							$output .= '<div class="sponsors">';
								$output .= '<ul>';
									foreach ( $event_sponsors as $event_sponsor ) {
										if( !empty( $event_sponsor ) ) {
											$output .= '<li>';
												if( !empty( $event_sponsor["title"] ) ) {
													$spoonsor_name = esc_attr( $event_sponsor["title"] );
												} else {
													$spoonsor_name = esc_html__( 'Sponsor', 'eventchamp' );
												}

												if( !empty( $event_sponsor["event_sponsor_link"] ) ) {
													$output .= '<a href="' . esc_url( $event_sponsor["event_sponsor_link"] ) . '" target="_blank" title="' . esc_attr( $spoonsor_name ) . '" rel="nofollow">';
														if( !empty( $event_sponsor["event_sponsor_logo"] ) ) {
															$sponsor_logo_attachment_id = eventchamp_attachment_id( esc_attr( $event_sponsor["event_sponsor_logo"] ) );
															$output .= wp_get_attachment_image( esc_attr( $sponsor_logo_attachment_id ), 'eventchamp-event-sponsor-big', true, true );
														}
													$output .= '</a>';
												} else {
													if( !empty( $event_sponsor["event_sponsor_logo"] ) ) {
														$sponsor_logo_attachment_id = eventchamp_attachment_id( esc_attr( $event_sponsor["event_sponsor_logo"] ) );
														$output .= wp_get_attachment_image( esc_attr( $sponsor_logo_attachment_id ), 'eventchamp-event-sponsor-big', true, true );
													}
												}
											$output .= '</li>';
										}
									}
								$output .= '</ul>';
							$output .= '</div>';
						}
					}
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_event_content", "eventchamp_event_content_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Single Event Content', 'eventchamp' ),
				"base" => "eventchamp_event_content",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-event-content.jpg',
				"description" => esc_html__( 'The element brings event contents.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( "Event ID", 'eventchamp' ),
						"description" => esc_html__( 'You can enter an event ID.', 'eventchamp' ),
						"param_name" => "eventid",
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Content Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a content type. Which content do you want to bring?', 'eventchamp' ),
						"param_name" => "contenttype",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Speakers', 'eventchamp' ) => 'speaker',
							esc_html__( 'Schedule', 'eventchamp' ) => 'schedule',
							esc_html__( 'Tickets', 'eventchamp' ) => 'ticket',
							esc_html__( 'Sponsors', 'eventchamp' ) => 'sponsor',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Speaker List Column', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
						"param_name" => "speaker-column",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Column 1', 'eventchamp' ) => '1',
							esc_html__( 'Column 2', 'eventchamp' ) => '2',
							esc_html__( 'Column 3', 'eventchamp' ) => '3',
							esc_html__( 'Column 4', 'eventchamp' ) => '4',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Price List Column', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
						"param_name" => "price-list-column",
						'save_always' => true,
						"value" => array(
							esc_html__( '1', 'eventchamp' ) => '1',
							esc_html__( '2', 'eventchamp' ) => '2',
						),
					),
				),
			)
		);
	}



	/*======
	*
	* Speakers List
	*
	======*/
	function eventchamp_speakers_list_grid_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'speakercount' => '',
				'speakerids' => '',
				'excludespeakers' => '',
				'offset' => '',
				'ordertype' => '',
				'sortby' => '',
				'column' => '',
				'pagination' => '',
			), $atts
		);

		$output = "";

		/*====== Column ======*/
		if( $atts["column"] ) {
			$column = esc_attr( $atts["column"] );
		} else {
			$column = "column-1";
		}

		/*====== Main Query ======*/
		$arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'speaker',
		);

		/*====== Pagination ======*/
		$paged = is_front_page() ? get_query_var( 'page', 1 ) : get_query_var( 'paged', 1 );
		if( empty( $paged ) ) {
			$paged = 1;
		}

		if( !empty( $paged ) ) {
			$extra_query = array(
				'paged' => $paged,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Include Speakers ======*/
		if( !empty( $atts['speakerids'] ) ) {
			$speakerids = $atts['speakerids'];
			$include_speakers = explode( ',', $speakerids );
		} else {
			$include_speakers = "";
		}

		if( !empty( $include_speakers ) ) {
			$extra_query = array(
				'post__in' => $include_speakers,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Speaker Count ======*/
		if( !empty( $atts["speakercount"] ) ) {
			$extra_query = array(
				'posts_per_page' => $atts["speakercount"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Offset ======*/
		if( !empty( $atts["offset"] ) ) {
			$extra_query = array(
				'offset' => $atts["offset"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Exclude Speakers ======*/
		$excludespeakers = $atts['excludespeakers'];

		if( !empty( $excludespeakers ) ) {
			$exclude_speakers = $excludespeakers;
			$exclude_speakers = explode( ',', $exclude_speakers );
		} else {
			$exclude_speakers = array();
		}

		if( !empty( $exclude_speakers ) ) {
			$extra_query = array(
				'post__not_in' => $exclude_speakers,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Order & Order By ======*/
		if( $atts["ordertype"] == "ASC" ) {
			$order = "ASC";
		} else {
			$order = "DESC";
		}

		if( !empty( $order ) ) {
			$extra_query = array(
				'order' => $order,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		if( $atts["sortby"] == "popular-comment" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "id" ) {
			$order_by = "ID";
		} elseif( $atts["sortby"] == "popular" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "title" ) {
			$order_by = "title";
		} elseif( $atts["sortby"] == "menu_order" ) {
			$order_by = "menu_order";
		} elseif( $atts["sortby"] == "rand" ) {
			$order_by = "rand";
		} elseif( $atts["sortby"] == "none" ) {
			$order_by = "none";
		} else {
			$order_by = "date";
		}

		if( !empty( $order_by ) ) {
			$extra_query = array(
				'orderby' => $order_by,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== HTML Output ======*/
		$output .= '<div class="speakers-list-grid">';
			$wp_query = new WP_Query( $arg );
			if( !empty( $wp_query ) ) {
				$output .= '<div class="speakers-list ' . esc_attr( $column ) . '">';
						while ( $wp_query->have_posts() ) {
							$wp_query->the_post();
								$social_media_facebook = get_post_meta( get_the_ID(), 'speaker_social_media_facebook', true );
								$social_media_twitter = get_post_meta( get_the_ID(), 'speaker_social_media_twitter', true );
								$social_media_googleplus = get_post_meta( get_the_ID(), 'speaker_social_media_googleplus', true );
								$social_media_instagram = get_post_meta( get_the_ID(), 'speaker_social_media_instagram', true );
								$social_media_youtube = get_post_meta( get_the_ID(), 'speaker_social_media_youtube', true );
								$social_media_flickr = get_post_meta( get_the_ID(), 'speaker_social_media_flickr', true );
								$social_media_soundcloud = get_post_meta( get_the_ID(), 'speaker_social_media_soundcloud', true );
								$social_media_vimeo = get_post_meta( get_the_ID(), 'speaker_social_media_vimeo', true );

								$output .= '<div class="item">';
									if ( has_post_thumbnail() ) {
										$output .= '<div class="image">';
											$output .= '<a href="' . get_the_permalink() . '" title="' . get_the_title() . '">';
												$output .= get_the_post_thumbnail( get_the_ID(), 'eventchamp-speaker' );
											$output .= '</a>';
										$output .= '</div>';
									}

									$speakers_title = get_the_title();

									if( !empty( $speakers_title ) ) {
										$output .= '<div class="name">';
											$output .= '<a href="' . get_the_permalink() . '" title="' . get_the_title() . '">';
												$output .= get_the_title();
											$output .= '</a>';
										$output .= '</div>';
									}

									$speaker_excerpt = get_the_excerpt();

									if( !empty( $speaker_excerpt ) ) {
										$output .= '<div class="excerpt">';
											$output .= get_the_excerpt();
										$output .= '</div>';
									}

									$output .= '<div class="details">';
										if( !empty( $official_web_site ) or !empty( $social_media_facebook ) or !empty( $social_media_twitter ) or !empty( $social_media_googleplus ) or !empty( $social_media_instagram ) or !empty( $social_media_youtube ) or !empty( $social_media_flickr ) or !empty( $social_media_soundcloud ) or !empty( $social_media_vimeo ) ) {
											$output .= '<ul class="social-links">';
												if( !empty( $official_web_site ) ) {
													$output .= '<li><a href="' . esc_url( $official_web_site ) . '" class="officialsite" title="' . esc_html__( 'Official Site', 'eventchamp' ) . '" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>';
												}

												if( !empty( $social_media_facebook ) ) {
													$output .= '<li><a href="' . esc_url( $social_media_facebook ) . '" class="facebook" title="' . esc_html__( 'Facebook', 'eventchamp' ) . '" target="_blank"><i class="fab fa-facebook-f"></i></a></li>';
												}
												
												if( !empty( $social_media_twitter ) ) {
													$output .= '<li><a href="' . esc_url( $social_media_twitter ) . '" class="twitter" title="' . esc_html__( 'Twitter', 'eventchamp' ) . '" target="_blank"><i class="fab fa-twitter"></i></a></li>';
												}

												if( !empty( $social_media_googleplus ) ) {
													$output .= '<li><a href="' . esc_url( $social_media_googleplus ) . '" class="googleplus" title="' . esc_html__( 'Google+', 'eventchamp' ) . '" target="_blank"><i class="fab fa-google-plus-g"></i></a></li>';
												}

												if( !empty( $social_media_instagram ) ) {
													$output .= '<li><a href="' . esc_url( $social_media_instagram ) . '" class="instagram" title="' . esc_html__( 'Instagram', 'eventchamp' ) . '" target="_blank"><i class="fab fa-instagram"></i></a></li>';
												}

												if( !empty( $social_media_youtube ) ) {
													$output .= '<li><a href="' . esc_url( $social_media_youtube ) . '" class="youtube" title="' . esc_html__( 'YouTube', 'eventchamp' ) . '" target="_blank"><i class="fab fa-youtube"></i></a></li>';
												}

												if( !empty( $social_media_flickr ) ) {
													$output .= '<li><a href="' . esc_url( $social_media_flickr ) . '" class="flickr" title="' . esc_html__( 'Flickr', 'eventchamp' ) . '" target="_blank"><i class="fab fa-flickr"></i></a></li>';
												}

												if( !empty( $social_media_soundcloud ) ) {
													$output .= '<li><a href="' . esc_url( $social_media_soundcloud ) . '" class="soundcloud" title="' . esc_html__( 'SoundCloud', 'eventchamp' ) . '" target="_blank"><i class="fab fa-soundcloud"></i></a></li>';
												}

												if( !empty( $social_media_vimeo ) ) {
													$output .= '<li><a href="' . esc_url( $social_media_vimeo ) . '" class="vimeo" title="' . esc_html__( 'Vimeo', 'eventchamp' ) . '" target="_blank"><i class="fab fa-vimeo-v"></i></a></li>';
												}
											$output .= '</ul>';
										}
									$output .= '</div>';
								$output .= '</div>';
						}
				$output .= '</div>';
			}
			wp_reset_postdata();

			if ( $atts['pagination'] == 'true' ) {
				$output .= eventchamp_element_pagination( $paged = $paged, $query = $wp_query );
			}
		$output .= '</div>';

		return $output;
	}
	add_shortcode( "eventchamp_speakers_list_grid", "eventchamp_speakers_list_grid_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Spekears List', 'eventchamp' ),
				"base" => "eventchamp_speakers_list_grid",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-speakers-list-grid.jpg',
				"description" => esc_html__( 'Speakers list element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Spekear Count', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a speaker count.', 'eventchamp' ),
						"param_name" => "speakercount",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Speakers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter speaker ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "speakerids",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Spekears', 'eventchamp' ),
						"description" => esc_html__( 'You can enter speaker ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludespeakers",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Offset', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an offset number.', 'eventchamp' ),
						"param_name" => "offset",
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order.', 'eventchamp' ),
						"param_name" => "ordertype",
						"save_always" => true,
						"value" => array(
							esc_html__( 'DESC', 'eventchamp' ) => 'DESC',
							esc_html__( 'ASC', 'eventchamp' ) => 'ASC',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order type.', 'eventchamp' ),
						"param_name" => "sortby",
						"save_always" => true,
						"value" => array(
							esc_html__( 'Added Date', 'eventchamp' ) => 'added-date',
							esc_html__( 'Popular by Comment', 'eventchamp' ) => 'popular-comment',
							esc_html__( 'ID', 'eventchamp' ) => 'id',
							esc_html__( 'Title', 'eventchamp' ) => 'title',
							esc_html__( 'Menu Order', 'eventchamp' ) => 'menu_order',
							esc_html__( 'Random', 'eventchamp' ) => 'rand',
							esc_html__( 'None', 'eventchamp' ) => 'none',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Column', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
						"param_name" => "column",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Column 1', 'eventchamp' ) => 'column-1',
							esc_html__( 'Column 2', 'eventchamp' ) => 'column-2',
							esc_html__( 'Column 3', 'eventchamp' ) => 'column-3',
							esc_html__( 'Column 4', 'eventchamp' ) => 'column-4',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Pagination', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of pagination.', 'eventchamp' ),
						"param_name" => "pagination",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
				),
			)
		);
	}



	/*======
	*
	* Venue Carousel
	*
	======*/
	function eventchamp_venues_list_carousel_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'venuecount' => '',
				'include-venues' => '',
				'excludevenues' => '',
				'offset' => '',
				'ordertype' => '',
				'sortby' => '',
				'exclude-categories' => '',
				'exclude-locations' => '',
				'exclude-tags' => '',
				'include-categories' => '',
				'include-locations' => '',
				'include-tags' => '',
				'style' => '',
				'column' => '',
				'navbuttons' => '',
				'loopstatus' => '',
				'autoplay' => '',
				'allbutton' => '',
				'location' => '',
				'excerpt' => '',
			), $atts
		);

		$output = "";

		/*====== Location Status ======*/
		if( $atts["location"] == "true" ) {
			$location_status = "true";
		} else {
			$location_status = "false";
		}

		/*====== Excerpt Status ======*/
		if( $atts["excerpt"] == "true" ) {
			$excerpt_status = "true";
		} else {
			$excerpt_status = "false";
		}

		/*====== Column ======*/
		if( !empty( $atts['column'] ) ) {
			$column = esc_attr( $atts["column"] );
		} else {
			$column = "1";
		}

		/*====== Autoplay Status ======*/
		if( !empty( $atts['autoplay'] ) ) {
			$autoplay = esc_attr( $atts["autoplay"] );
		} else {
			$autoplay = "false";
		}

		/*====== Loop Status ======*/
		if( $atts["loopstatus"] == "true" ) {
			$loopstatus = "true";
		} else {
			$loopstatus = "false";
		}

		/*====== Exclude Categories ======*/
		$exclude_category_array = "";

		if( !empty( $atts['exclude-categories'] ) ) {
			$exclude_categories = $atts['exclude-categories'];
			$exclude_categories = explode( ',', $exclude_categories );
		} else {
			$exclude_categories = "";
		}

		if( !empty( $exclude_categories ) ) {
			$exclude_category_array = array(
				'taxonomy' => 'venuecat',
				'field' => 'term_id',
				'terms' => $exclude_categories,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Locations ======*/
		$exclude_location_array = "";

		if( !empty( $atts['exclude-locations'] ) ) {
			$exclude_locations = $atts['exclude-locations'];
			$exclude_locations = explode( ',', $exclude_locations );
		} else {
			$exclude_locations = "";
		}

		if( !empty( $exclude_locations ) ) {
			$exclude_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $exclude_locations,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Tags ======*/
		$exclude_tag_array = "";

		if( !empty( $atts['exclude-tags'] ) ) {
			$exclude_tags = $atts['exclude-tags'];
			$exclude_tags = explode( ',', $exclude_tags );
		} else {
			$exclude_tags = "";
		}

		if( !empty( $exclude_tags ) ) {
			$exclude_tag_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $exclude_tags,
				'operator' => 'NOT IN',
			);
		}

		/*====== Include Categories ======*/
		$include_category_array = "";

		if( !empty( $atts['include-categories'] ) ) {
			$include_categories = $atts['include-categories'];
			$include_categories = explode( ',', $include_categories );
		} else {
			$include_categories = "";
		}

		if( !empty( $include_categories ) ) {
			$include_category_array = array(
				'taxonomy' => 'venuecat',
				'field' => 'term_id',
				'terms' => $include_categories,
				'operator' => 'IN',
			);
		}

		/*====== Include Locations ======*/
		$include_location_array = "";

		if( !empty( $atts['include-locations'] ) ) {
			$include_locations = $atts['include-locations'];
			$include_locations = explode( ',', $include_locations );
		} else {
			$include_locations = "";
		}

		if( !empty( $include_locations ) ) {
			$include_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $include_locations,
				'operator' => 'IN',
			);
		}

		/*====== Include Tags ======*/
		$include_tags_array = "";

		if( !empty( $atts['include-tags'] ) ) {
			$include_tags = $atts['include-tags'];
			$include_tags = explode( ',', $include_tags );
		} else {
			$include_tags = "";
		}

		if( !empty( $include_tags ) ) {
			$include_tags_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $include_tags,
				'operator' => 'IN',
			);
		}

		/*====== Main Query ======*/
		$arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'venue',
			'tax_query' => array (
				'relation' => 'AND',
				$include_location_array,
				$include_category_array,
				$include_tags_array,
				$exclude_category_array,
				$exclude_location_array,
				$exclude_tag_array,
			)
		);

		/*====== Pagination ======*/
		$paged = is_front_page() ? get_query_var( 'page', 1 ) : get_query_var( 'paged', 1 );
		if( empty( $paged ) ) {
			$paged = 1;
		}

		if( !empty( $paged ) ) {
			$extra_query = array(
				'paged' => $paged,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Include Venues ======*/
		if( !empty( $atts['include-venues'] ) ) {
			$venue_ids = $atts['include-venues'];
			$include_venues = explode( ',', $venue_ids );
		} else {
			$include_venues = "";
		}

		if( !empty( $include_venues ) ) {
			$extra_query = array(
				'post__in' => $include_venues,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Event Count ======*/
		if( !empty( $atts["venuecount"] ) ) {
			$extra_query = array(
				'posts_per_page' => $atts["venuecount"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Offset ======*/
		if( !empty( $atts["offset"] ) ) {
			$extra_query = array(
				'offset' => $atts["offset"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Exclude Events ======*/
		$excludevenues = $atts['excludevenues'];

		if( !empty( $excludevenues ) ) {
			$exclude_venues = $excludevenues;
			$exclude_venues = explode( ',', $exclude_venues );
		} else {
			$exclude_venues = array();
		}

		if( !empty( $exclude_venues ) ) {
			$extra_query = array(
				'post__not_in' => $exclude_venues,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Order & Order By ======*/
		if( $atts["ordertype"] == "ASC" ) {
			$order = "ASC";
		} else {
			$order = "DESC";
		}

		if( !empty( $order ) ) {
			$extra_query = array(
				'order' => $order,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		if( $atts["sortby"] == "popular-comment" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "id" ) {
			$order_by = "ID";
		} elseif( $atts["sortby"] == "popular" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "title" ) {
			$order_by = "title";
		} elseif( $atts["sortby"] == "menu_order" ) {
			$order_by = "menu_order";
		} elseif( $atts["sortby"] == "rand" ) {
			$order_by = "rand";
		} elseif( $atts["sortby"] == "none" ) {
			$order_by = "none";
		} else {
			$order_by = "date";
		}

		if( !empty( $order_by ) ) {
			$extra_query = array(
				'orderby' => $order_by,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== HTML Output ======*/
		$wp_query = new WP_Query( $arg );
		if( !empty( $wp_query ) ) {
			$output .= '<div class="venues-list-carousel ' . $atts["style"] . '">';
				$output .= '<div class="swiper-container gloria-sliders venues-list-carousel" data-item="' . esc_attr( $column ) . '" data-column-space="30" data-sloop="' . esc_attr( $loopstatus ) . '" data-aplay="' . esc_attr( $autoplay ) . '">';
					$output .= '<div class="swiper-wrapper">';
						while ( $wp_query->have_posts() ) {
							$wp_query->the_post();
							$output .= '<div class="swiper-slide">';
								$output .= eventchamp_venue_list_style_1( $post_id = get_the_ID(), $image = "true", $location = $location_status, $excerpt = $excerpt_status );
							$output .= '</div>';
						}
					$output .= '</div>';
					$output .= '<div class="pagination">';
						if( $atts["navbuttons"] == "true" ) {
							$output .= '<div class="pagination-left prev"><i class="fas fa-chevron-left" aria-hidden="true"></i></div>';
						}

						if( $atts["allbutton"] == "true" ) {
							$output .= '<div><a href="' . esc_url( get_post_type_archive_link( 'venue' ) ) . '" class="all-button">' . esc_html__( 'All Venues', 'eventchamp' ) . '</a></div>';
						}

						if( $atts["navbuttons"] == "true" ) {
							$output .= '<div class="pagination-right next"><i class="fas fa-chevron-right" aria-hidden="true"></i></div>';
						}
					$output .= '</div>';

				$output .= '</div>';
			$output .= '</div>';
		}
		wp_reset_postdata();

		return $output;
	}
	add_shortcode( "eventchamp_venues_list_carousel", "eventchamp_venues_list_carousel_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Venue Carousel', 'eventchamp' ),
				"base" => "eventchamp_venues_list_carousel",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-venues-list-carousel.jpg',
				"description" => esc_html__( 'Venue carousel element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Venue Count', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an event count for each tab.', 'eventchamp' ),
						"param_name" => "venuecount",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Venues', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-venues",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Venues', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludevenues",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Offset', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an offset number.', 'eventchamp' ),
						"param_name" => "offset",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order.', 'eventchamp' ),
						"param_name" => "ordertype",
						"save_always" => true,
						"value" => array(
							esc_html__( 'DESC', 'eventchamp' ) => 'DESC',
							esc_html__( 'ASC', 'eventchamp' ) => 'ASC',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order type.', 'eventchamp' ),
						"param_name" => "sortby",
						"save_always" => true,
						"value" => array(
							esc_html__( 'Added Date', 'eventchamp' ) => 'added-date',
							esc_html__( 'Popular by Comment', 'eventchamp' ) => 'popular-comment',
							esc_html__( 'ID', 'eventchamp' ) => 'id',
							esc_html__( 'Title', 'eventchamp' ) => 'title',
							esc_html__( 'Menu Order', 'eventchamp' ) => 'menu_order',
							esc_html__( 'Random', 'eventchamp' ) => 'rand',
							esc_html__( 'None', 'eventchamp' ) => 'none',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter categories ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-categories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Tags', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "exclude-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter category ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-categories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "include-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a style.', 'eventchamp' ),
						"param_name" => "style",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Style 1', 'eventchamp' ) => 'dark',
							esc_html__( 'Style 2', 'eventchamp' ) => 'white',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Column', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
						"param_name" => "column",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Column 1', 'eventchamp' ) => '1',
							esc_html__( 'Column 2', 'eventchamp' ) => '2',
							esc_html__( 'Column 3', 'eventchamp' ) => '3',
							esc_html__( 'Column 4', 'eventchamp' ) => '4',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Navigation Buttons', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of navigation buttons.', 'eventchamp' ),
						"param_name" => "navbuttons",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'All Venues Button', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of all venues button.', 'eventchamp' ),
						"param_name" => "allbutton",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Loop', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of loop.', 'eventchamp' ),
						"param_name" => "loopstatus",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Autoplay', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an autoplay speed.', 'eventchamp' ),
						"param_name" => "autoplay",
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Location', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event location.', 'eventchamp' ),
						"param_name" => "location",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Excerpt', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event excerpt.', 'eventchamp' ),
						"param_name" => "excerpt",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
				),
			)
		);
	}



	/*======
	*
	* Venue List
	*
	======*/
	function eventchamp_venues_list_grid_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'venuecount' => '',
				'include-venues' => '',
				'excludevenues' => '',
				'offset' => '',
				'ordertype' => '',
				'sortby' => '',
				'exclude-categories' => '',
				'exclude-locations' => '',
				'exclude-tags' => '',
				'include-categories' => '',
				'include-locations' => '',
				'include-tags' => '',
				'column' => '',
				'pagination' => '',
				'allbutton' => '',
				'location' => '',
				'excerpt' => '',
			), $atts
		);

		$output = "";

		/*====== Location Status ======*/
		if( $atts["location"] == "true" ) {
			$location_status = "true";
		} else {
			$location_status = "false";
		}

		/*====== Excerpt Status ======*/
		if( $atts["excerpt"] == "true" ) {
			$excerpt_status = "true";
		} else {
			$excerpt_status = "false";
		}

		/*====== Column ======*/
		if( !empty( $atts['column'] ) ) {
			$column = esc_attr( $atts["column"] );
		} else {
			$column = "column-1";
		}

		/*====== Exclude Categories ======*/
		$exclude_category_array = "";

		if( !empty( $atts['exclude-categories'] ) ) {
			$exclude_categories = $atts['exclude-categories'];
			$exclude_categories = explode( ',', $exclude_categories );
		} else {
			$exclude_categories = "";
		}

		if( !empty( $exclude_categories ) ) {
			$exclude_category_array = array(
				'taxonomy' => 'venuecat',
				'field' => 'term_id',
				'terms' => $exclude_categories,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Locations ======*/
		$exclude_location_array = "";

		if( !empty( $atts['exclude-locations'] ) ) {
			$exclude_locations = $atts['exclude-locations'];
			$exclude_locations = explode( ',', $exclude_locations );
		} else {
			$exclude_locations = "";
		}

		if( !empty( $exclude_locations ) ) {
			$exclude_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $exclude_locations,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Tags ======*/
		$exclude_tag_array = "";

		if( !empty( $atts['exclude-tags'] ) ) {
			$exclude_tags = $atts['exclude-tags'];
			$exclude_tags = explode( ',', $exclude_tags );
		} else {
			$exclude_tags = "";
		}

		if( !empty( $exclude_tags ) ) {
			$exclude_tag_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $exclude_tags,
				'operator' => 'NOT IN',
			);
		}

		/*====== Include Categories ======*/
		$include_category_array = "";

		if( !empty( $atts['include-categories'] ) ) {
			$include_categories = $atts['include-categories'];
			$include_categories = explode( ',', $include_categories );
		} else {
			$include_categories = "";
		}

		if( !empty( $include_categories ) ) {
			$include_category_array = array(
				'taxonomy' => 'venuecat',
				'field' => 'term_id',
				'terms' => $include_categories,
				'operator' => 'IN',
			);
		}

		/*====== Include Locations ======*/
		$include_location_array = "";

		if( !empty( $atts['include-locations'] ) ) {
			$include_locations = $atts['include-locations'];
			$include_locations = explode( ',', $include_locations );
		} else {
			$include_locations = "";
		}

		if( !empty( $include_locations ) ) {
			$include_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $include_locations,
				'operator' => 'IN',
			);
		}

		/*====== Include Tags ======*/
		$include_tags_array = "";

		if( !empty( $atts['include-tags'] ) ) {
			$include_tags = $atts['include-tags'];
			$include_tags = explode( ',', $include_tags );
		} else {
			$include_tags = "";
		}

		if( !empty( $include_tags ) ) {
			$include_tags_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $include_tags,
				'operator' => 'IN',
			);
		}

		/*====== Main Query ======*/
		$arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'venue',
			'tax_query' => array (
				'relation' => 'AND',
				$include_location_array,
				$include_category_array,
				$include_tags_array,
				$exclude_category_array,
				$exclude_location_array,
				$exclude_tag_array,
			)
		);

		/*====== Pagination ======*/
		$paged = is_front_page() ? get_query_var( 'page', 1 ) : get_query_var( 'paged', 1 );
		if( empty( $paged ) ) {
			$paged = 1;
		}

		if( !empty( $paged ) ) {
			$extra_query = array(
				'paged' => $paged,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Include Venues ======*/
		if( !empty( $atts['include-venues'] ) ) {
			$venue_ids = $atts['include-venues'];
			$include_venues = explode( ',', $venue_ids );
		} else {
			$include_venues = "";
		}

		if( !empty( $include_venues ) ) {
			$extra_query = array(
				'post__in' => $include_venues,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Event Count ======*/
		if( !empty( $atts["venuecount"] ) ) {
			$extra_query = array(
				'posts_per_page' => $atts["venuecount"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Offset ======*/
		if( !empty( $atts["offset"] ) ) {
			$extra_query = array(
				'offset' => $atts["offset"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Exclude Events ======*/
		$excludevenues = $atts['excludevenues'];

		if( !empty( $excludevenues ) ) {
			$exclude_venues = $excludevenues;
			$exclude_venues = explode( ',', $exclude_venues );
		} else {
			$exclude_venues = array();
		}

		if( !empty( $exclude_venues ) ) {
			$extra_query = array(
				'post__not_in' => $exclude_venues,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Order & Order By ======*/
		if( $atts["ordertype"] == "ASC" ) {
			$order = "ASC";
		} else {
			$order = "DESC";
		}

		if( !empty( $order ) ) {
			$extra_query = array(
				'order' => $order,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		if( $atts["sortby"] == "popular-comment" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "id" ) {
			$order_by = "ID";
		} elseif( $atts["sortby"] == "popular" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "title" ) {
			$order_by = "title";
		} elseif( $atts["sortby"] == "menu_order" ) {
			$order_by = "menu_order";
		} elseif( $atts["sortby"] == "rand" ) {
			$order_by = "rand";
		} elseif( $atts["sortby"] == "none" ) {
			$order_by = "none";
		} else {
			$order_by = "date";
		}

		if( !empty( $order_by ) ) {
			$extra_query = array(
				'orderby' => $order_by,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== HTML Output ======*/
		$wp_query = new WP_Query( $arg );
		if( !empty( $wp_query ) ) {
			$output .= '<div class="venue-list ' . esc_attr( $column ) . '">';
				$output .= '<div class="venues-list-grid">';
						while ( $wp_query->have_posts() ) {
							$wp_query->the_post();
							$output .= eventchamp_venue_list_style_1( $post_id = get_the_ID(), $image = "true", $location = $location_status, $excerpt = $excerpt_status );
						}
				$output .= '</div>';

				if ( $atts['pagination'] == 'true' ) {
					$output .= eventchamp_element_pagination( $paged = $paged, $query = $wp_query );
				}
			$output .= '</div>';
		}
		wp_reset_postdata();

		return $output;
	}
	add_shortcode( "eventchamp_venues_list_grid", "eventchamp_venues_list_grid_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Venue List', 'eventchamp' ),
				"base" => "eventchamp_venues_list_grid",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-venues-list-grid.jpg',
				"description" => esc_html__( 'Venue listing element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Venue Count', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an event count for each tab.', 'eventchamp' ),
						"param_name" => "venuecount",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Venues', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-venues",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Venues', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludevenues",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Offset', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an offset number.', 'eventchamp' ),
						"param_name" => "offset",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order.', 'eventchamp' ),
						"param_name" => "ordertype",
						"save_always" => true,
						"value" => array(
							esc_html__( 'DESC', 'eventchamp' ) => 'DESC',
							esc_html__( 'ASC', 'eventchamp' ) => 'ASC',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order type.', 'eventchamp' ),
						"param_name" => "sortby",
						"save_always" => true,
						"value" => array(
							esc_html__( 'Added Date', 'eventchamp' ) => 'added-date',
							esc_html__( 'Popular by Comment', 'eventchamp' ) => 'popular-comment',
							esc_html__( 'ID', 'eventchamp' ) => 'id',
							esc_html__( 'Title', 'eventchamp' ) => 'title',
							esc_html__( 'Menu Order', 'eventchamp' ) => 'menu_order',
							esc_html__( 'Random', 'eventchamp' ) => 'rand',
							esc_html__( 'None', 'eventchamp' ) => 'none',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter categories ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-categories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Tags', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "exclude-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter category ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-categories",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-locations",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "include-tags",
						"group" => esc_html__( 'Taxonomies', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Column', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
						"param_name" => "column",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Column 1', 'eventchamp' ) => 'column-1',
							esc_html__( 'Column 2', 'eventchamp' ) => 'column-2',
							esc_html__( 'Column 3', 'eventchamp' ) => 'column-3',
							esc_html__( 'Column 4', 'eventchamp' ) => 'column-4',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Pagination', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of pagination.', 'eventchamp' ),
						"param_name" => "pagination",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Location', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event location.', 'eventchamp' ),
						"param_name" => "location",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Excerpt', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of event excerpt.', 'eventchamp' ),
						"param_name" => "excerpt",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
				),
			)
		);
	}



	/*======
	*
	* Banner Box
	*
	======*/
	function eventchamp_banner_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'bannertitleone' => '',
				'bannertitletwo' => '',
				'link' => '',
				'bannerbg' => '',
			), $atts
		);

		$output = "";

		if( !empty( $atts["bannertitleone"] ) or !empty( $atts["bannertitletwo"] ) or !empty( $atts["link"] ) ) {

			if( !empty( $atts["link"] ) ) {
				$href = $atts["link"];
				$href = vc_build_link( $href );
				if( !empty( $href["target"] ) ) {
					$target = $href["target"];
				} else {
					$target = "_parent";
				}
			}

			if( !empty( $atts["bannerbg"] ) ) {
				$bannerbg = esc_attr( $atts["bannerbg"] );
			} else {
				$bannerbg = "";
			}

			$output .= '<div class="eventchamp-banner" style="background-image:url(' . esc_url( wp_get_attachment_url( esc_attr( $bannerbg ), 'full', true, true ) ) . ');">';
				if( !empty( $atts["link"] ) ) {
					$output .= '<a href="' . esc_url( $href["url"] ) . '" target="' . esc_attr( $target ) . '" title="' . esc_attr( $href["title"] ) . '">';
				}

					$output .= '<div class="content">';
						if( !empty( $atts["bannertitleone"] ) ) {
							$output .= '<span class="italic">' . esc_attr( $atts["bannertitleone"] ) . '</span>';
						}

						if( !empty( $atts["bannertitletwo"] ) ) {
							$output .= '<span class="bold">' . esc_attr( $atts["bannertitletwo"] ) . '</span>';
						}
					$output .= '</div>';

				if( !empty( $atts["link"] ) ) {
					$output .= '</a>';
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_banner", "eventchamp_banner_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Banner Box', 'eventchamp' ),
				"base" => "eventchamp_banner",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-banner.jpg',
				"description" => esc_html__( 'Banner box element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Title One', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a title for light font.', 'eventchamp' ),
						"param_name" => "bannertitleone",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Title Two', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a title for bold font.', 'eventchamp' ),
						"param_name" => "bannertitletwo",
					),
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'Link', 'eventchamp' ),
						"description" => esc_html__( 'You can create a link.', 'eventchamp' ),
						"param_name" => "link",
					),
					array(
						"type" => "attach_image",
						"heading" => esc_html__( 'Background Image', 'eventchamp' ),
						"description" => esc_html__( 'You can upload a background.', 'eventchamp' ),
						"param_name" => "bannerbg",
					),
				),
			)
		);
	}



	/*======
	*
	* Service Box
	*
	======*/
	function eventchamp_service_box_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'title' => '',
				'text' => '',
				'icon' => '',
				'servicelink' => '',
			), $atts
		);
		
		$output = '';

		if( !empty( $atts["title"] ) or !empty( $atts["text"] ) ) {
			$output .= '<div class="eventchamp-service-box">';
				if( !empty( $atts["icon"] ) ) {
					$output .= '<i class="' . esc_attr( $atts["icon"] ) . '"></i>';
				}

					if( !empty( $atts["title"] ) ) {
						if( !empty( $atts["servicelink"] ) ) {
							$href = $atts["servicelink"];
							$href = vc_build_link( $href );
							if( !empty( $href["target"] ) ) {
								$target = $href["target"];
							} else {
								$target = "_parent";
							}

							if( !empty( $href["url"] ) ) {
								$output .= '<div class="title">';
									$output .= '<a href="' . esc_url( $href["url"] ) . '" title="' . esc_attr( $atts["title"] ) . '" target="' . esc_attr( $target ) . '" class="button-link">' . esc_attr( $atts["title"] ) . '</a>';
								$output .= '</div>';
							}
						} else {
							$output .= '<div class="title">' . esc_attr( $atts["title"] ) . '</div>';
						}
					}

				if( !empty( $atts["text"] ) ) {
					$output .= '<p>' . esc_attr( $atts["text"] ) . '</p>';
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_service_box", "eventchamp_service_box_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Service Box', 'eventchamp' ),
				"base" => "eventchamp_service_box",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-service-box.jpg',
				"description" => esc_html__( 'Service Box element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( "Title", 'eventchamp' ),
						"description" => esc_html__( 'You can enter a title.', 'eventchamp' ),
						"param_name" => "title",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( "Text", 'eventchamp' ),
						"description" => esc_html__( 'You can enter a text.', 'eventchamp' ),
						"param_name" => "text",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Icon', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a icon. Example: fab fa-wordpress-simple, fas fa-map-marker-alt. Icon list: https://goo.gl/vdPEsc', 'eventchamp' ),
						"param_name" => "icon",
					),
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'Link', 'eventchamp' ),
						"description" => esc_html__( 'You can crete a link.', 'eventchamp' ),
						"param_name" => "servicelink",
					),
				),
			)
		);
	}



	/*======
	*
	* Blog
	*
	======*/
	function eventchamp_latest_posts_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'postcount' => '',
				'category' => '',
				'postids' => '',
				'excludeposts' => '',
				'offset' => '',
				'posttag' => '',
				'ordertype' => '',
				'sortby' => '',
				'style' => '',
				'pagination' => '',
				'categoryname' => '',
				'postinformation' => '',
				'excerpt' => '',
				'readmore' => '',
			), $atts
		);
		
		$output = '';

		/*====== Category Name Status ======*/
		if( $atts['categoryname'] == "true" ) {
			$category_status = "true";
		} else {
			$category_status = "";
		}

		/*====== Post Information Status ======*/
		if( $atts['postinformation'] == "true" ) {
			$information_status = "true";
		} else {
			$information_status = "";
		}

		/*====== Excerpt Status ======*/
		if( $atts['excerpt'] == "true" ) {
			$excerpt_status = "true";
		} else {
			$excerpt_status = "";
		}

		/*====== Read More Status ======*/
		if( $atts['readmore'] == "true" ) {
			$readmore_status = "true";
		} else {
			$readmore_status = "";
		}

		/*====== Style ======*/
		$style = $atts['style'];

		/*====== Main Query ======*/
		$arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'post',
		);

		/*====== Pagination ======*/
		$paged = is_front_page() ? get_query_var( 'page', 1 ) : get_query_var( 'paged', 1 );
		if( empty( $paged ) ) {
			$paged = 1;
		}

		if( !empty( $paged ) ) {
			$extra_query = array(
				'paged' => $paged,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Include Categories ======*/
		if( !empty( $atts['category'] ) ) {
			$category_ids = $atts['category'];
			$include_cats = explode( ',', $category_ids );
		} else {
			$include_cats = "";
		}

		if( !empty( $include_cats ) ) {
			$extra_query = array(
				'cat' => $include_cats,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Include Posts ======*/
		if( !empty( $atts['postids'] ) ) {
			$postids = $atts['postids'];
			$include_posts = explode( ',', $postids );
		} else {
			$include_posts = "";
		}

		if( !empty( $include_posts ) ) {
			$extra_query = array(
				'post__in' => $include_posts,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Post Count ======*/
		if( !empty( $atts["postcount"] ) ) {
			$extra_query = array(
				'posts_per_page' => $atts["postcount"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Offset ======*/
		if( !empty( $atts["offset"] ) ) {
			$extra_query = array(
				'offset' => $atts["offset"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Post Tag ======*/
		if( !empty( $atts["posttag"] ) ) {
			$extra_query = array(
				'tag' => $atts['posttag'],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Exclude Posts ======*/
		$excludeposts = $atts['excludeposts'];

		if( !empty( $excludeposts ) ) {
			$exclude_posts = $excludeposts;
			$exclude_posts = explode( ',', $exclude_posts );
		} else {
			$exclude_posts = array();
		}

		if( !empty( $exclude_posts ) ) {
			$extra_query = array(
				'post__not_in' => $exclude_posts,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Order & Order By ======*/
		if( $atts["ordertype"] == "ASC" ) {
			$order = "ASC";
		} else {
			$order = "DESC";
		}

		if( !empty( $order ) ) {
			$extra_query = array(
				'order' => $order,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		if( $atts["sortby"] == "popular-comment" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "id" ) {
			$order_by = "ID";
		} elseif( $atts["sortby"] == "popular" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "title" ) {
			$order_by = "title";
		} elseif( $atts["sortby"] == "menu_order" ) {
			$order_by = "menu_order";
		} elseif( $atts["sortby"] == "rand" ) {
			$order_by = "rand";
		} elseif( $atts["sortby"] == "none" ) {
			$order_by = "none";
		} else {
			$order_by = "date";
		}

		if( !empty( $order_by ) ) {
			$extra_query = array(
				'orderby' => $order_by,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		$post_query = new WP_Query( $arg );
		if ( $post_query->have_posts() ) {
			$output .= '<div class="eventchamp-latest-posts-element ' . esc_attr( $style ) . '">';
				if( $style == "style2" ) {
					$output .= '<div class="archive-post-list-style-2 post-list">';
						while ( $post_query->have_posts() ) {
							$post_query->the_post();
							$output .= eventchamp_post_list_style_2( $post_id = get_the_ID(), $image = "true", $category = $category_status, $excerpt = $excerpt_status, $read_more = $readmore_status, $post_info = $information_status );
						}
						wp_reset_postdata();
					$output .= '</div>';
				} elseif( $style == "style3" ) {
					$output .= '<div class="archive-post-list-style-3 post-list">';
						while ( $post_query->have_posts() ) {
							$post_query->the_post();
							$output .= eventchamp_post_list_style_3( $post_id = get_the_ID(), $image = "true", $post_info = $information_status );
						}
						wp_reset_postdata();
					$output .= '</div>';
				} else {
					$output .= '<div class="archive-post-list-style-1 post-list">';
						while ( $post_query->have_posts() ) {
							$post_query->the_post();
							$output .= eventchamp_post_list_style_1( $post_id = get_the_ID(), $image = "true", $category = $category_status, $excerpt = $excerpt_status, $read_more = $readmore_status, $post_info = $information_status );
						}
						wp_reset_postdata();
					$output .= '</div>';
				}

				if ( $atts['pagination'] == 'true' ) {
					$output .= eventchamp_element_pagination( $paged = $paged, $query = $post_query );
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_latest_posts", "eventchamp_latest_posts_output" );

	if( function_exists( 'vc_map' ) ) {
		$post_categories = get_terms( "category" );
		$post_categories_array = array();
		$post_categories_array[esc_html__( 'All Categories', 'eventchamp' )] = "-";
		foreach( $post_categories as $post_category ) {
			$post_categories_array[$post_category->name] =  $post_category->term_id;
		}

		vc_map(
			array(
				"name" => esc_html__( 'Blog', 'eventchamp' ),
				"base" => "eventchamp_latest_posts",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-latest-posts.jpg',
				"description" => esc_html__( 'Blog post listing element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Post Count', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a post count.', 'eventchamp' ),
						"param_name" => "postcount",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Category', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a post category.', 'eventchamp' ),
						"param_name" => "category",
						"value" => $post_categories_array,
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Posts', 'eventchamp' ),
						"description" => esc_html__( 'You can enter post ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "postids",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Posts', 'eventchamp' ),
						"description" => esc_html__( 'You can enter post ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludeposts",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Offset', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an offset number.', 'eventchamp' ),
						"param_name" => "offset",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a post tag. Example: Event', 'eventchamp' ),
						"param_name" => "posttag",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order.', 'eventchamp' ),
						"param_name" => "ordertype",
						"save_always" => true,
						"value" => array(
							esc_html__( 'DESC', 'eventchamp' ) => 'DESC',
							esc_html__( 'ASC', 'eventchamp' ) => 'ASC',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order type.', 'eventchamp' ),
						"param_name" => "sortby",
						"save_always" => true,
						"value" => array(
							esc_html__( 'Added Date', 'eventchamp' ) => 'added-date',
							esc_html__( 'Popular by Comment', 'eventchamp' ) => 'popular-comment',
							esc_html__( 'ID', 'eventchamp' ) => 'id',
							esc_html__( 'Title', 'eventchamp' ) => 'title',
							esc_html__( 'Menu Order', 'eventchamp' ) => 'menu_order',
							esc_html__( 'Random', 'eventchamp' ) => 'rand',
							esc_html__( 'None', 'eventchamp' ) => 'none',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a style.', 'eventchamp' ),
						"param_name" => "style",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Style 1', 'eventchamp' ) => 'style1',
							esc_html__( 'Style 2', 'eventchamp' ) => 'style2',
							esc_html__( 'Style 3', 'eventchamp' ) => 'style3',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Pagination', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of pagination.', 'eventchamp' ),
						"param_name" => "pagination",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Category Name', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of category name.', 'eventchamp' ),
						"param_name" => "categoryname",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Post Information', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of post information.', 'eventchamp' ),
						"param_name" => "postinformation",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Excerpt', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of post excerpt.', 'eventchamp' ),
						"param_name" => "excerpt",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Read More', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of read more button.', 'eventchamp' ),
						"param_name" => "readmore",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					)
				),
			)
		);
	}



	/*======
	*
	* Blog Carousel
	*
	======*/
	function eventchamp_latest_posts_carousel_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'postcount' => '',
				'category' => '',
				'postids' => '',
				'excludeposts' => '',
				'offset' => '',
				'ordertype' => '',
				'sortby' => '',
				'style' => '',
				'column' => '',
				'loopstatus' => '',
				'autoplay' => '',
				'pagination' => '',
				'link' => '',
				'categoryname' => '',
				'postinformation' => '',
				'excerpt' => '',
				'readmore' => '',
			), $atts
		);
		
		$output = '';

		/*====== Column ======*/
		if( !empty( $atts['column'] ) ) {
			$column = esc_attr( $atts["column"] );
		} else {
			$column = "";
		}

		/*====== Autoplay Status ======*/
		if( !empty( $atts['autoplay'] ) ) {
			$autoplay = esc_attr( $atts["autoplay"] );
		} else {
			$autoplay = "false";
		}

		/*====== Loop Status ======*/
		if( $atts["loopstatus"] == "true" ) {
			$loopstatus = "true";
		} else {
			$loopstatus = "false";
		}

		/*====== Category Name Status ======*/
		if( $atts['categoryname'] == "true" ) {
			$category_status = "true";
		} else {
			$category_status = "";
		}

		/*====== Post Information Status ======*/
		if( $atts['postinformation'] == "true" ) {
			$information_status = "true";
		} else {
			$information_status = "";
		}

		/*====== Excerpt Status ======*/
		if( $atts['excerpt'] == "true" ) {
			$excerpt_status = "true";
		} else {
			$excerpt_status = "";
		}

		/*====== Read More Status ======*/
		if( $atts['readmore'] == "true" ) {
			$readmore_status = "true";
		} else {
			$readmore_status = "";
		}

		/*====== Style ======*/
		$style = $atts['style'];

		/*====== Main Query ======*/
		$arg = array(
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'post',
		);

		/*====== Pagination ======*/
		$paged = is_front_page() ? get_query_var( 'page', 1 ) : get_query_var( 'paged', 1 );
		if( empty( $paged ) ) {
			$paged = 1;
		}

		if( !empty( $paged ) ) {
			$extra_query = array(
				'paged' => $paged,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Include Categories ======*/
		if( !empty( $atts['category'] ) ) {
			$category_ids = $atts['category'];
			$include_cats = explode( ',', $category_ids );
		} else {
			$include_cats = "";
		}

		if( !empty( $include_cats ) ) {
			$extra_query = array(
				'cat' => $include_cats,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Include Posts ======*/
		if( !empty( $atts['postids'] ) ) {
			$postids = $atts['postids'];
			$include_posts = explode( ',', $postids );
		} else {
			$include_posts = "";
		}

		if( !empty( $include_posts ) ) {
			$extra_query = array(
				'post__in' => $include_posts,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Post Count ======*/
		if( !empty( $atts["postcount"] ) ) {
			$extra_query = array(
				'posts_per_page' => $atts["postcount"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Offset ======*/
		if( !empty( $atts["offset"] ) ) {
			$extra_query = array(
				'offset' => $atts["offset"],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Post Tag ======*/
		if( !empty( $atts["posttag"] ) ) {
			$extra_query = array(
				'tag' => $atts['posttag'],
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Exclude Posts ======*/
		$excludeposts = $atts['excludeposts'];

		if( !empty( $excludeposts ) ) {
			$exclude_posts = $excludeposts;
			$exclude_posts = explode( ',', $exclude_posts );
		} else {
			$exclude_posts = array();
		}

		if( !empty( $exclude_posts ) ) {
			$extra_query = array(
				'post__not_in' => $exclude_posts,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Order & Order By ======*/
		if( $atts["ordertype"] == "ASC" ) {
			$order = "ASC";
		} else {
			$order = "DESC";
		}

		if( !empty( $order ) ) {
			$extra_query = array(
				'order' => $order,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		if( $atts["sortby"] == "popular-comment" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "id" ) {
			$order_by = "ID";
		} elseif( $atts["sortby"] == "popular" ) {
			$order_by = "comment_count";
		} elseif( $atts["sortby"] == "title" ) {
			$order_by = "title";
		} elseif( $atts["sortby"] == "menu_order" ) {
			$order_by = "menu_order";
		} elseif( $atts["sortby"] == "rand" ) {
			$order_by = "rand";
		} elseif( $atts["sortby"] == "none" ) {
			$order_by = "none";
		} else {
			$order_by = "date";
		}

		if( !empty( $order_by ) ) {
			$extra_query = array(
				'orderby' => $order_by,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== HTML Output ======*/
		$post_query = new WP_Query( $arg );
		if ( $post_query->have_posts() ) {
			$output .= '<div class="swiper-container gloria-sliders eventchamp-latest-posts-carousel"  data-item="' . $column . '" data-column-space="30" data-sloop="' . $loopstatus . '" data-aplay="' . $autoplay . '">';
				$output .= '<div class="swiper-wrapper">';
					while ( $post_query->have_posts() ) {
						$post_query->the_post();
						$output .= '<div class="swiper-slide">';
							if( $style == "style2" ) {
								$output .= eventchamp_post_list_style_2( $post_id = get_the_ID(), $image = "true", $category = $category_status, $excerpt = $excerpt_status, $read_more = $readmore_status, $post_info = $information_status );
							} elseif( $style == "style3" ) {
								$output .= eventchamp_post_list_style_3( $post_id = get_the_ID(), $image = "true", $post_info = $information_status );
							} else {
								$output .= eventchamp_post_list_style_1( $post_id = get_the_ID(), $image = "true", $category = $category_status, $excerpt = $excerpt_status, $read_more = $readmore_status, $post_info = $information_status );
							}
						$output .= '</div>';
					}
					wp_reset_postdata();
				$output .= '</div>';
				
				if ( $atts['pagination'] == 'true' or !empty( $atts["link"] ) ) {
					$output .= '<div class="pagination">';
						if ( $atts['pagination'] == 'true' ) {
							$output .= '<div class="pagination-left prev"><i class="fas fa-chevron-left" aria-hidden="true"></i></div>';
						}

						if( !empty( $atts["link"] ) ) {
							$href = $atts["link"];
							$href = vc_build_link( $href );
							if( !empty( $href["target"] ) ) {
								$target = $href["target"];
							} else {
								$target = "_parent";
							}

							$output .= '<div><a href="' . esc_url( $href["url"] ) . '" title="' . esc_attr( $href["title"] ) . '" target="' . esc_attr( $target ) . '" class="all-button">' . esc_attr( $href["title"] ) . '</a></div>';
						}

						if ( $atts['pagination'] == 'true' ) {
							$output .= '<div class="pagination-right next"><i class="fas fa-chevron-right" aria-hidden="true"></i></div>';
						}
					$output .= '</div>';
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_latest_posts_carousel", "eventchamp_latest_posts_carousel_output" );

	if( function_exists( 'vc_map' ) ) {
		$post_categories = get_terms( "category" );
		$post_categories_array = array();
		$post_categories_array[esc_html__( 'All Categories', 'eventchamp' )] = "-";
		foreach( $post_categories as $post_category ) {
			$post_categories_array[$post_category->name] =  $post_category->term_id;
		}

		vc_map(
			array(
				"name" => esc_html__( 'Blog Carousel', 'eventchamp' ),
				"base" => "eventchamp_latest_posts_carousel",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-latest-posts-carousel.jpg',
				"description" => esc_html__( 'Blog listing with carousel element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Post Count', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a post count.', 'eventchamp' ),
						"param_name" => "postcount",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Category', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a post category.', 'eventchamp' ),
						"param_name" => "category",
						"value" => $post_categories_array,
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Posts', 'eventchamp' ),
						"description" => esc_html__( 'You can enter post ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "postids",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Posts', 'eventchamp' ),
						"description" => esc_html__( 'You can enter post ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "excludeposts",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Offset', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an offset number.', 'eventchamp' ),
						"param_name" => "offset",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a post tag. Example: Event', 'eventchamp' ),
						"param_name" => "posttag",
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order.', 'eventchamp' ),
						"param_name" => "ordertype",
						"save_always" => true,
						"value" => array(
							esc_html__( 'DESC', 'eventchamp' ) => 'DESC',
							esc_html__( 'ASC', 'eventchamp' ) => 'ASC',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Order Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose an order type.', 'eventchamp' ),
						"param_name" => "sortby",
						"save_always" => true,
						"value" => array(
							esc_html__( 'Added Date', 'eventchamp' ) => 'added-date',
							esc_html__( 'Popular by Comment', 'eventchamp' ) => 'popular-comment',
							esc_html__( 'ID', 'eventchamp' ) => 'id',
							esc_html__( 'Title', 'eventchamp' ) => 'title',
							esc_html__( 'Menu Order', 'eventchamp' ) => 'menu_order',
							esc_html__( 'Random', 'eventchamp' ) => 'rand',
							esc_html__( 'None', 'eventchamp' ) => 'none',
						),
						"group" => esc_html__( 'General', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a style.', 'eventchamp' ),
						"param_name" => "style",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Style 1', 'eventchamp' ) => 'style1',
							esc_html__( 'Style 2', 'eventchamp' ) => 'style2',
							esc_html__( 'Style 3', 'eventchamp' ) => 'style3',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Column', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
						"param_name" => "column",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Column 1', 'eventchamp' ) => '1',
							esc_html__( 'Column 2', 'eventchamp' ) => '2',
							esc_html__( 'Column 3', 'eventchamp' ) => '3',
							esc_html__( 'Column 4', 'eventchamp' ) => '4',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Loop', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of loop.', 'eventchamp' ),
						"param_name" => "loopstatus",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Autoplay', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an autoplay speed.', 'eventchamp' ),
						"param_name" => "autoplay",
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Pagination', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of pagination.', 'eventchamp' ),
						"param_name" => "pagination",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'Blog Page Link', 'eventchamp' ),
						"description" => esc_html__( 'You can create a all posts.', 'eventchamp' ),
						"param_name" => "link",
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Category Name', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of category name.', 'eventchamp' ),
						"param_name" => "categoryname",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Post Information', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of post information.', 'eventchamp' ),
						"param_name" => "postinformation",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Excerpt', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of post excerpt.', 'eventchamp' ),
						"param_name" => "excerpt",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Read More', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of read more button.', 'eventchamp' ),
						"param_name" => "readmore",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
						"group" => esc_html__( 'Design', 'eventchamp' ),
					)
				),
			)
		);
	}



	/*======
	*
	* Testimonial
	*
	======*/
	function eventchamp_testimonials_output( $atts, $content = null ) {		
		$atts = shortcode_atts(
			array(
				'column' => '',
				'loopstatus' => '',
				'autoplay' => '',
			), $atts
		);

		/*====== Column ======*/
		if( !empty( $atts['column'] ) ) {
			$column = esc_attr( $atts["column"] );
		} else {
			$column = "3";
		}

		/*====== Autoplay Status ======*/
		if( !empty( $atts['autoplay'] ) ) {
			$autoplay = esc_attr( $atts["autoplay"] );
		} else {
			$autoplay = "false";
		}

		/*====== Loop Status ======*/
		if( $atts["loopstatus"] == "true" ) {
			$loopstatus = "true";
		} else {
			$loopstatus = "false";
		}

		/*====== HTML Output ======*/
		$output = '';
			$output .= '<div class="swiper-container gloria-sliders eventchamp-testimonials-carousel" data-item="' . esc_attr( $column ) . '" data-column-space="30" data-sloop="' . esc_attr( $loopstatus ) . '" data-aplay="' . esc_attr( $autoplay ) . '">';
				$output .= '<div class="swiper-wrapper">';
					$output .= do_shortcode( $content );
				$output .= '</div>';
				$output .= '<div class="swiper-pagination"></div>';
			$output .= '</div>';

			return $output;
	}
	add_shortcode( "eventchamp_testimonials", "eventchamp_testimonials_output" );

	function eventchamp_testimonials_item_shortcode( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'image' => '',
				'name' => '',
				'text' => '',
			), $atts
		);
		
		$output = '';

		/*====== HTML Output ======*/
		if( !empty( $atts["name"] ) or !empty( $atts["text"] ) ) {
			$output .= '<div class="swiper-slide">';
				if( !empty( $atts["image"] ) ) {
					if( !empty( $atts["image"] ) ) {
						$image = esc_attr( $atts["image"] );
					} else {
						$image = "";
					}

					$output .= '<div class="image">';
						$output .= wp_get_attachment_image( $image, 'thumbnail', true, array( "alt" => $atts["name"] ) );
					$output .= '</div>';
				}

				if( !empty( $atts["text"] ) ) {
					$output .= '<div class="content">';
						$output .= '<p>' . esc_attr( $atts["text"] ) . '</p>';

						if( !empty( $atts["name"] ) ) {
							$output .= '<div class="name">' . esc_attr( $atts["name"] ) . '</div>';
						}
					$output .= '</div>';
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode("eventchamp_testimonials_item", "eventchamp_testimonials_item_shortcode");

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Testimonial Carousel', 'eventchamp' ),
				"base" => "eventchamp_testimonials",
				"as_parent" => array( 'only' => 'eventchamp_testimonials_item' ),
				"js_view" => "VcColumnView",
				"content_element" => true,
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-testimonials.jpg',
				"description" => esc_html__( 'Testimonial carousel element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Column', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a column.', 'eventchamp' ),
						"param_name" => "column",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Column 1', 'eventchamp' ) => '1',
							esc_html__( 'Column 2', 'eventchamp' ) => '2',
							esc_html__( 'Column 3', 'eventchamp' ) => '3',
							esc_html__( 'Column 4', 'eventchamp' ) => '4',
						),
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Loop', 'eventchamp' ),
						"description" => esc_html__( 'You can choose status of loop.', 'eventchamp' ),
						"param_name" => "loopstatus",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Autoplay', 'eventchamp' ),
						"description" => esc_html__( 'You can enter an autoplay speed.', 'eventchamp' ),
						"param_name" => "autoplay",
					),
				)
			)
		);
	}

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Testimonial Carousel Item', 'eventchamp'),
				"base" => "eventchamp_testimonials_item",
				"as_child" => array( 'only' => 'eventchamp_testimonials' ),
				"content_element" => true,
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri().'/include/assets/img/icons/eventchamp-testimonials.jpg',
				"description" => esc_html__( 'Testimonial carousel item element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "attach_image",
						"heading" => esc_html__( 'Image', 'eventchamp' ),
						"description" => esc_html__( 'You can upload a customer image. Suitably: 110x110', 'eventchamp'),
						"param_name" => "image",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Name', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a customer name.', 'eventchamp'),
						"param_name" => "name",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Content', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a customer feedback.', 'eventchamp'),
						"param_name" => "text",
					)
				)
			)
		);
	}

	if ( class_exists( 'WPBakeryShortCodesContainer' ) ) {
		class WPBakeryShortCode_eventchamp_testimonials extends WPBakeryShortCodesContainer {}
	}



	/*======
	*
	* Number Counter
	*
	======*/
	function eventchamp_step_boxes_shortcode( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'countertitle' => '',
				'style' => '',
				'counternumber' => '',
			), $atts
		);
		
		$output = '';

		/*====== HTML Output ======*/
		if( !empty( $atts['counternumber'] ) or !empty( $atts['countertitle'] ) ) {
			$output .= '<div class="eventchamp-counter ' . esc_attr( $atts["style"] ) . '">';
				if( !empty( $atts['counternumber'] ) ) {
					if( !empty( $atts['counternumber'] ) ) {
						$counternumber = esc_attr( $atts['counternumber'] );
					} else {
						$counternumber = "1";
					}

					if( !empty( $atts['counternumber'] ) ) {
						$output .= '<div class="number">' . esc_attr( $atts['counternumber'] ) . '</div>';
					}
					if( !empty( $atts['countertitle'] ) ) {
						$output .= '<div class="title">' . esc_attr( $atts['countertitle'] ) . '</div>';
					}
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode("eventchamp_step_boxes", "eventchamp_step_boxes_shortcode");

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Number Counter', 'eventchamp' ),
				"base" => "eventchamp_step_boxes",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri().'/include/assets/img/icons/eventchamp-counter.png',
				"description" => esc_html__( 'Number counter element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Title', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a title.', 'eventchamp'),
						"param_name" => "countertitle",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Number', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a number.', 'eventchamp'),
						"param_name" => "counternumber",
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a style.', 'eventchamp' ),
						"param_name" => "style",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Style 1', 'eventchamp' ) => 'colored',
							esc_html__( 'Style 2', 'eventchamp' ) => 'white',
						),
					),
				)
			)
		);
	}



	/*======
	*
	* Contact Box
	*
	======*/
	function eventchamp_contact_box_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'address' => '',
				'email' => '',
				'phone' => '',
				'fax' => '',
				'abouttext' => '',
				'aboutlink' => '',
			), $atts
		);
		
		$output = '';

		/*====== HTML Output ======*/
		if( !empty( $atts["address"] ) or !empty( $atts["email"] ) or !empty( $atts["phone"] ) or !empty( $atts["fax"] ) or !empty( $atts["abouttext"] ) or !empty( $atts["aboutlink"] ) ) {
			$output .= '<div class="eventchamp-contact-box">';
				if( !empty( $atts["abouttext"] ) ) {
					$output .= '<div class="contact-row about-text">' . esc_attr( $atts["abouttext"] ) . '</div>';
				}

				if( !empty( $atts["address"] ) ) {
					$output .= '<div class="contact-row address"><i class="fas fa-map-marker-alt" aria-hidden="true"></i>' . esc_attr( $atts["address"] ) . '</div>';
				}

				if( !empty( $atts["email"] ) ) {
					$output .= '<div class="contact-row email"><i class="far fa-envelope" aria-hidden="true"></i><a href="mailto:' . esc_attr( str_replace(' ', '', $atts["email"] ) ) . '">' . esc_attr( $atts["email"] ) . '</a></div>';
				}

				if( !empty( $atts["phone"] ) ) {
					$output .= '<div class="contact-row phone"><i class="fas fa-phone" aria-hidden="true"></i><a href="tel:+' . esc_attr( str_replace(' ', '', $atts["phone"] ) ) . '">' . esc_attr( $atts["phone"] ) . '</a></div>';
				}

				if( !empty( $atts["fax"] ) ) {
					$output .= '<div class="contact-row fax"><i class="fas fa-fax" aria-hidden="true"></i>' . esc_attr( $atts["fax"] ) . '</div>';
				}

				if( !empty( $atts["aboutlink"] ) ) {
					$href = $atts["aboutlink"];
					$href = vc_build_link( $href );
					if( !empty( $href["target"] ) ) {
						$target = $href["target"];
					} else {
						$target = "_parent";
					}

					$output .= '<div class="contact-row about-link">';
						$output .= '<a href="' . esc_url( $href["url"] ) . '" title="' . esc_attr( $href["title"] ) . '" target="' . esc_attr( $target ) . '" class="about-more-link">' . esc_attr( $href["title"] ) . '</a>';
					$output .= '</div>';
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_contact_box", "eventchamp_contact_box_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Contact Box', 'eventchamp' ),
				"base" => "eventchamp_contact_box",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-contact-box.jpg',
				"description" => esc_html__( 'Contact box element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Address', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a address.', 'eventchamp' ),
						"param_name" => "address",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Email', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a email address.', 'eventchamp' ),
						"param_name" => "email",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Phone', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a phone number.', 'eventchamp' ),
						"param_name" => "phone",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Fax', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a fax number.', 'eventchamp' ),
						"param_name" => "fax",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'About Text', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a about text.', 'eventchamp' ),
						"param_name" => "abouttext",
					),
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'About Link', 'eventchamp' ),
						"description" => esc_html__( 'You can create a about link.', 'eventchamp' ),
						"param_name" => "aboutlink",
					),
				),
			)
		);
	}



	/*======
	*
	* App Box
	*
	======*/
	function eventchamp_app_box_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'applestore' => '',
				'googleplay' => '',
				'windowstore' => '',
				'amazon' => '',
			), $atts
		);
		
		$output = '';

		/*====== HTML Output ======*/
		if( !empty( $atts["applestore"] ) or !empty( $atts["googleplay"] ) or !empty( $atts["windowstore"] ) or !empty( $atts["amazon"] ) ) {
			$output .= '<div class="eventchamp-app-box">';
				if( !empty( $atts["applestore"] ) ) {
					$output .= '<div class="app-item applestore">';
						$href = $atts["applestore"];
						$href = vc_build_link( $href );
						if( !empty( $href["target"] ) ) {
							$target = $href["target"];
						} else {
							$target = "_parent";
						}

						$output .= '<a href="' . esc_url( $href["url"] ) . '" title="' . esc_attr( $href["title"] ) . '" target="' . esc_attr( $target ) . '">';
							$output .= '<i class="fab fa-apple" aria-hidden="true"></i>';
							$output .= '<div class="description">';
								$output .= '<span class="name">' . esc_html__( 'Download via', 'eventchamp' ) . '</span>';
								$output .= '<span class="app-name">' . esc_html__( 'Apple Store', 'eventchamp' ) . '</span>';
							$output .= '</div>';
						$output .= '</a>';
					$output .= '</div>';
				}
				if( !empty( $atts["googleplay"] ) ) {
					$output .= '<div class="app-item googleplay">';
						$href = $atts["googleplay"];
						$href = vc_build_link( $href );
						if( !empty( $href["target"] ) ) {
							$target = $href["target"];
						} else {
							$target = "_parent";
						}
						
						$output .= '<a href="' . esc_url( $href["url"] ) . '" title="' . esc_attr( $href["title"] ) . '" target="' . esc_attr( $target ) . '">';
							$output .= '<i class="fab fa-google-play" aria-hidden="true"></i>';
							$output .= '<div class="description">';
								$output .= '<span class="name">' . esc_html__( 'Download via', 'eventchamp' ) . '</span>';
								$output .= '<span class="app-name">' . esc_html__( 'Google Play', 'eventchamp' ) . '</span>';
							$output .= '</div>';
						$output .= '</a>';
					$output .= '</div>';
				}
				if( !empty( $atts["windowstore"] ) ) {
					$output .= '<div class="app-item windowstore">';
						$href = $atts["windowstore"];
						$href = vc_build_link( $href );
						if( !empty( $href["target"] ) ) {
							$target = $href["target"];
						} else {
							$target = "_parent";
						}
						
						$output .= '<a href="' . esc_url( $href["url"] ) . '" title="' . esc_attr( $href["title"] ) . '" target="' . esc_attr( $target ) . '">';
							$output .= '<i class="fab fa-windows" aria-hidden="true"></i>';
							$output .= '<div class="description">';
								$output .= '<span class="name">' . esc_html__( 'Download via', 'eventchamp' ) . '</span>';
								$output .= '<span class="app-name">' . esc_html__( 'Windows', 'eventchamp' ) . '</span>';
							$output .= '</div>';
						$output .= '</a>';
					$output .= '</div>';
				}
				if( !empty( $atts["amazon"] ) ) {
					$output .= '<div class="app-item amazon">';
						$href = $atts["amazon"];
						$href = vc_build_link( $href );
						if( !empty( $href["target"] ) ) {
							$target = $href["target"];
						} else {
							$target = "_parent";
						}
						
						$output .= '<a href="' . esc_url( $href["url"] ) . '" title="' . esc_attr( $href["title"] ) . '" target="' . esc_attr( $target ) . '">';
							$output .= '<i class="fab fa-amazon" aria-hidden="true"></i>';
							$output .= '<div class="description">';
								$output .= '<span class="name">' . esc_html__( 'Download via', 'eventchamp' ) . '</span>';
								$output .= '<span class="app-name">' . esc_html__( 'Amazon', 'eventchamp' ) . '</span>';
							$output .= '</div>';
						$output .= '</a>';
					$output .= '</div>';
				}
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_app_box", "eventchamp_app_box_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'App Box', 'eventchamp' ),
				"base" => "eventchamp_app_box",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-app-box.jpg',
				"description" => esc_html__( 'App box element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'Apple Store', 'eventchamp' ),
						"description" => esc_html__( 'You can create a Apple Store link.', 'eventchamp' ),
						"param_name" => "applestore",
					),
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'Google Play', 'eventchamp' ),
						"description" => esc_html__( 'You can create a Google Play link.', 'eventchamp' ),
						"param_name" => "googleplay",
					),
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'Windows Store', 'eventchamp' ),
						"description" => esc_html__( 'You can create a Windows Store link.', 'eventchamp' ),
						"param_name" => "windowstore",
					),
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'Amazon', 'eventchamp' ),
						"description" => esc_html__( 'You can create a Amazon link.', 'eventchamp' ),
						"param_name" => "amazon",
					),
				),
			)
		);
	}



	/*======
	*
	* Button
	*
	======*/
	function eventchamp_button_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'buttonlink' => '',
				'icon' => '',
			), $atts
		);
		
		$output = '';

		/*====== HTML Output ======*/
		if( !empty( $atts["buttonlink"] ) ) {
			$output .= '<div class="eventchamp-button">';
				$href = $atts["buttonlink"];
				$href = vc_build_link( $href );
				if( !empty( $href["target"] ) ) {
					$target = $href["target"];
				} else {
					$target = "_parent";
				}

				$output .= '<a href="' . esc_url( $href["url"] ) . '" target="' . esc_attr( $target ) . '" title="' . esc_attr( $href["title"] ) . '">';
					if( !empty( $atts["icon"] ) ) {
						$output .= '<i class="' . esc_attr( $atts["icon"] ) . '" aria-hidden="true"></i>';
					}
					$output .= '<span>' . esc_attr( $href["title"] ) . '</span>';
				$output .= '</a>';
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_button", "eventchamp_button_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Button', 'eventchamp' ),
				"base" => "eventchamp_button",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-button.jpg',
				"description" => esc_html__( 'Button element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "vc_link",
						"heading" => esc_html__( 'Button Link', 'eventchamp' ),
						"description" => esc_html__( 'You can create a button link.', 'eventchamp' ),
						"param_name" => "buttonlink",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Icon', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a icon. Example: fab fa-wordpress-simple, fas fa-map-marker-alt. Icon list: https://goo.gl/vdPEsc', 'eventchamp' ),
						"param_name" => "icon",
					)
				),
			)
		);
	}



	/*======
	*
	* Modal Button
	*
	======*/
	function eventchamp_modal_button_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'buttontitle' => '',
				'text' => '',
				'content' => '',
				'shortcode' => '',
				'iframe' => '',
				'icon' => '',
			), $atts
		);
		
		$output = '';

		/*====== Content ======*/
		 $atts['content'] = $content;

		/*====== Random Modal Number ======*/
		$rand = rand( 1, 99999 );

		/*====== HTML Output ======*/
		if( !empty( $atts["buttontitle"] ) ) {
			$output .= '<div class="eventchamp-button">';
				$output .= '<a title="' . esc_attr( $atts["buttontitle"] ) . '" type="button" data-toggle="modal" data-target="#modal_' . esc_attr( $rand ) . '">';
					if( !empty( $atts["icon"] ) ) {
						$output .= '<i class="' . esc_attr( $atts["icon"] ) . '" aria-hidden="true"></i>';
					}
					$output .= '<span>' . esc_attr( $atts["buttontitle"] ) . '</span>';
				$output .= '</a>';
			$output .= '</div>';
			$output .= '<div class="modal fade eventchamp-modal" id="modal_' . esc_attr( $rand ) . '" tabindex="-1" role="dialog" aria-labelledby="modal_' . esc_attr( $rand ) . 'Label">
						  <div class="modal-dialog modal-lg" role="document">
						    <div class="modal-content">
						    	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						    	<div class="modal-body">';
									if( !empty( $atts["text"] ) ) {
										$output .= '<div class="content">' . $atts["text"] . '</div>';
									}
									if( !empty( $atts["content"] ) ) {
										$output .= '<div class="content">' . $atts["content"] . '</div>';
									}
									if( !empty( $atts["shortcode"] ) ) {
										$output .= '<div class="content">' . do_shortcode( '[mc4wp_form id="' . esc_attr( $atts["shortcode"] ) . '"]' ) . '</div>';
									}
									if( !empty( $atts["iframe"] ) ) {
										$output .= '<iframe width="800" height="550" frameborder="0" src="' . esc_url( $atts["iframe"] ) . '"></iframe>';
									}
								$output .= '</div>';
						    $output .= '</div>
						  </div>
						</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_modal_button", "eventchamp_modal_button_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Modal Button', 'eventchamp' ),
				"base" => "eventchamp_modal_button",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-button.jpg',
				"description" => esc_html__( 'Modal button element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Button Title', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a button title.', 'eventchamp' ),
						"param_name" => "buttontitle",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Icon', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a icon. Example: fab fa-wordpress-simple, fas fa-map-marker-alt. Icon list: https://goo.gl/vdPEsc', 'eventchamp' ),
						"param_name" => "icon",
					),
					array(
						"type" => "textarea",
						"heading" => esc_html__( 'Standard Content', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a content.', 'eventchamp' ),
						"param_name" => "text",
					),
					array(
						"type" => "textarea_html",
						"heading" => esc_html__( 'HTML Content', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a HTML content.', 'eventchamp' ),
						"param_name" => "content",
					),
					array(
						"type" => "textarea",
						"heading" => esc_html__( 'Shortcode', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a shortcode.', 'eventchamp' ),
						"param_name" => "shortcode",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Map Iframe Link', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a map iframe link.', 'eventchamp' ),
						"param_name" => "iframe",
					)
				),
			)
		);
	}



	/*======
	*
	* MailChimp Newsletter
	*
	======*/
	function eventchamp_mailchimp_newsletter_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'id' => '',
				'style' => '',
			), $atts
		);
		
		$output = '';

		/*====== HTML Output ======*/
		if( !empty( $atts["id"] ) ) {
			$output = '<div class="eventchamp-newsletter-element ' . esc_attr( $atts["style"] ) . '">';
				$output .= do_shortcode( '[mc4wp_form id="' . esc_attr( $atts["id"] ) . '"]' );
			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_mailchimp_newsletter", "eventchamp_mailchimp_newsletter_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'MailChimp Newsletter', 'eventchamp' ),
				"base" => "eventchamp_mailchimp_newsletter",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-mailchimp-newsletter.jpg',
				"description" => esc_html__( 'MailChimp newsletter element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Form ID', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a MailChimp newsletter form id.', 'eventchamp' ),
						"param_name" => "id",
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a style.', 'eventchamp' ),
						"param_name" => "style",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Style 1', 'eventchamp' ) => 'dark',
							esc_html__( 'Style 2', 'eventchamp' ) => 'white',
						),
					),
				),
			)
		);
	}



	/*======
	*
	* Icon List
	*
	======*/
	function eventchamp_icon_list_output( $atts, $content = null ) {		
		$atts = shortcode_atts(
			array(
				'style' => '',
			), $atts
		);

		$output = '';

		/*====== HTML Output ======*/
		$output .= '<div class="eventchamp-icon-list ' . esc_attr( $atts["style"] ) . '">';
			$output .= '<ul>';
				$output .= do_shortcode( $content );
			$output .= '</ul>';
		$output .= '</div>';

		return $output;
	}
	add_shortcode( "eventchamp_icon_list", "eventchamp_icon_list_output" );

	function eventchamp_icon_list_item_shortcode( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'text' => '',
				'icon' => '',
			), $atts
		);
		
		$output = '';

		/*====== HTML Output ======*/
		if( !empty( $atts["text"] ) ) {
			$output .= '<li>';
				if( !empty( $atts["icon"] ) ) {
					$output .= '<i class="' . esc_attr( $atts["icon"] ) . '" aria-hidden="true"></i>';
				}

				if( !empty( $atts["text"] ) ) {
					$output .= '<div class="text">' . esc_attr( $atts["text"] ) . '</div>';
				}
			$output .= '</li>';
		}

		return $output;
	}
	add_shortcode("eventchamp_icon_list_item", "eventchamp_icon_list_item_shortcode");

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Icon List', 'eventchamp' ),
				"base" => "eventchamp_icon_list",
				"as_parent" => array( 'only' => 'eventchamp_icon_list_item' ),
				"js_view" => "VcColumnView",
				"content_element" => true,
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-icon-list.jpg',
				"description" => esc_html__( 'Icon list element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Style', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a style.', 'eventchamp' ),
						"param_name" => "style",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Style 1', 'eventchamp' ) => 'style1',
							esc_html__( 'Style 2', 'eventchamp' ) => 'style2',
						),
					),
				)
			)
		);
	}

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__("Icon List Item", 'eventchamp'),
				"base" => "eventchamp_icon_list_item",
				"as_child" => array( 'only' => 'eventchamp_icon_list' ),
				"content_element" => true,
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri().'/include/assets/img/icons/eventchamp-icon-list.jpg',
				"description" => esc_html__( 'Icon list item element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Text', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a text.', 'eventchamp' ),
						"param_name" => "text",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Icon', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a icon. Example: fab fa-wordpress-simple, fas fa-map-marker-alt. Icon list: https://goo.gl/vdPEsc', 'eventchamp' ),
						"param_name" => "icon",
					),
				)
			)
		);
	}

	if ( class_exists( 'WPBakeryShortCodesContainer' ) ) {
		class WPBakeryShortCode_eventchamp_icon_list extends WPBakeryShortCodesContainer {}
	}



	/*======
	*
	* Video / Audio Player
	*
	======*/
	function eventchamp_video_audio_element_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'contenttype' => '',
				'videoid' => '',
				'html5link' => '',
				'posterimage' => '',
			), $atts
		);
		
		$output = '';

		/*====== HTML Output ======*/
		if( !empty( $atts["videoid"] ) or !empty( $atts["html5link"] ) ) {
			$output .= '<div class="eventchamp-video-audio-element">';

				if( $atts["contenttype"] == "vimeo" ) {
					if( !empty( $atts["videoid"] ) ) {
						$output .= '<div data-type="vimeo" data-video-id="' . esc_attr( $atts["videoid"] ) . '"></div>';
					}
				} elseif( $atts["contenttype"] == "html5video" ) {
					if( !empty( $atts["html5link"] ) ) {
						$output .= '<video poster="' . esc_url( wp_get_attachment_url( esc_attr( $atts["posterimage"] ), 'full', true, true ) ) . '" controls>
									  <source src="' . esc_url( $atts["html5link"] ) . '" type="video/mp4">
									</video>';
					}
				} elseif( $atts["contenttype"] == "html5audio" ) {
					if( !empty( $atts["html5link"] ) ) {
						$output .= '<audio controls>
									  <source src="' . esc_url( $atts["html5link"] ) . '" type="audio/mp3">
									</audio>';
					}
				} else {
					if( !empty( $atts["videoid"] ) ) {
						$output .= '<div data-type="youtube" data-video-id="' . esc_attr( $atts["videoid"] ) . '"></div>';
					}
				}

			$output .= '</div>';
		}

		return $output;
	}
	add_shortcode( "eventchamp_video_audio_element", "eventchamp_video_audio_element_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Video / Audio Player', 'eventchamp' ),
				"base" => "eventchamp_video_audio_element",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-video-audio-element.jpg',
				"description" => esc_html__( 'Video and audio player element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Content Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a content type.', 'eventchamp' ),
						"param_name" => "contenttype",
						'save_always' => true,
						"value" => array(
							esc_html__( 'YouTube', 'eventchamp' ) => 'youtube',
							esc_html__( 'Vimeo', 'eventchamp' ) => 'vimeo',
							esc_html__( 'HTML5 Video', 'eventchamp' ) => 'html5video',
							esc_html__( 'HTML5 Audio', 'eventchamp' ) => 'html5audio',
						),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Video ID for YouTube / Vimeo', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a video ID for YouTube / Vimeo.', 'eventchamp' ),
						"param_name" => "videoid",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Video / Audio Link for HTML5', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a video / audio link for HTML5 player.', 'eventchamp' ),
						"param_name" => "html5link",
					),
					array(
						"type" => "attach_image",
						"heading" => esc_html__( 'Video Poster for HTML5 Vimeo', 'eventchamp' ),
						"description" => esc_html__( 'You can upload a poster image for HTML5 video.', 'eventchamp'),
						"param_name" => "posterimage",
					),
				),
			)
		);
	}



	/*======
	*
	* Event Calendar
	*
	======*/
	function eventchamp_event_calendar_output( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'contenttype' => '',
				'include-events' => '',
				'exclude-events' => '',
				'hide-expired' => '',
				'exclude-categories' => '',
				'exclude-locations' => '',
				'exclude-organizers' => '',
				'exclude-tags' => '',
				'include-categories' => '',
				'include-locations' => '',
				'include-organizers' => '',
				'include-tags' => '',
			), $atts
		);
		
		$output = '';
		$items = '';

		/*====== Expired Events Status ======*/
		if( !empty( $atts['hide-expired'] ) ) {
			$hide_expired = esc_attr( $atts["hide-expired"] );
		} else {
			$hide_expired = "false";
		}

		/*====== Exclude Categories ======*/
		$exclude_category_array = "";

		if( !empty( $atts['exclude-categories'] ) ) {
			$exclude_categories = $atts['exclude-categories'];
			$exclude_categories = explode( ',', $exclude_categories );
		} else {
			$exclude_categories = "";
		}

		if( !empty( $exclude_categories ) ) {
			$exclude_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $exclude_categories,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Locations ======*/
		$exclude_location_array = "";

		if( !empty( $atts['exclude-locations'] ) ) {
			$exclude_locations = $atts['exclude-locations'];
			$exclude_locations = explode( ',', $exclude_locations );
		} else {
			$exclude_locations = "";
		}

		if( !empty( $exclude_locations ) ) {
			$exclude_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $exclude_locations,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Organizers ======*/
		$exclude_organizer_array = "";

		if( !empty( $atts['exclude-organizers'] ) ) {
			$exclude_organizers = $atts['exclude-organizers'];
			$exclude_organizers = explode( ',', $exclude_organizers );
		} else {
			$exclude_organizers = "";
		}

		if( !empty( $exclude_organizers ) ) {
			$exclude_organizer_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $exclude_organizers,
				'operator' => 'NOT IN',
			);
		}

		/*====== Exclude Tags ======*/
		$exclude_tag_array = "";

		if( !empty( $atts['exclude-tags'] ) ) {
			$exclude_tags = $atts['exclude-tags'];
			$exclude_tags = explode( ',', $exclude_tags );
		} else {
			$exclude_tags = "";
		}

		if( !empty( $exclude_tags ) ) {
			$exclude_tag_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $exclude_tags,
				'operator' => 'NOT IN',
			);
		}

		/*====== Include Categories ======*/
		$include_category_array = "";

		if( !empty( $atts['include-categories'] ) ) {
			$include_categories = $atts['include-categories'];
			$include_categories = explode( ',', $include_categories );
		} else {
			$include_categories = "";
		}

		if( !empty( $include_categories ) ) {
			$include_category_array = array(
				'taxonomy' => 'eventcat',
				'field' => 'term_id',
				'terms' => $include_categories,
				'operator' => 'IN',
			);
		}

		/*====== Include Locations ======*/
		$include_location_array = "";

		if( !empty( $atts['include-locations'] ) ) {
			$include_locations = $atts['include-locations'];
			$include_locations = explode( ',', $include_locations );
		} else {
			$include_locations = "";
		}

		if( !empty( $include_locations ) ) {
			$include_location_array = array(
				'taxonomy' => 'location',
				'field' => 'term_id',
				'terms' => $include_locations,
				'operator' => 'IN',
			);
		}

		/*====== Include Organizers ======*/
		$include_organizers = "";

		if( !empty( $atts['include-organizers'] ) ) {
			$include_organizers = $atts['include-organizers'];
			$include_organizers = explode( ',', $include_organizers );
		} else {
			$include_organizers = "";
		}

		if( !empty( $include_organizers ) ) {
			$include_organizers_array = array(
				'taxonomy' => 'organizer',
				'field' => 'term_id',
				'terms' => $include_organizers,
				'operator' => 'IN',
			);
		}

		/*====== Include Tags ======*/
		$include_tags_array = "";

		if( !empty( $atts['include-tags'] ) ) {
			$include_tags = $atts['include-tags'];
			$include_tags = explode( ',', $include_tags );
		} else {
			$include_tags = "";
		}

		if( !empty( $include_tags ) ) {
			$include_tags_array = array(
				'taxonomy' => 'event_tags',
				'field' => 'name',
				'terms' => $include_tags,
				'operator' => 'IN',
			);
		}

		/*====== Main Query ======*/
		$arg = array(
			'posts_per_page' => -1,
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'post_type' => 'event',
			'tax_query' => array (
				'relation' => 'AND',
				$include_location_array,
				$include_category_array,
				$include_organizers_array,
				$include_tags_array,
				$exclude_category_array,
				$exclude_location_array,
				$exclude_organizer_array,
				$exclude_tag_array,
			)
		);

		/*====== Include Events ======*/
		if( !empty( $atts['include-events'] ) ) {
			$event_ids = $atts['include-events'];
			$include_events = explode( ',', $event_ids );
		} else {
			$include_events = "";
		}

		if( !empty( $include_events ) ) {
			$extra_query = array(
				'post__in' => $include_events,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== Exclude Events ======*/
		if( $hide_expired == "false" ) {
			if( !empty( $atts['exclude-events'] ) ) {
				$exclude_events = $atts['exclude-events'];
				$exclude_events = explode( ',', $exclude_events );
			} else {
				$exclude_events = array();
			}

			if( !empty( $exclude_events ) ) {
				$extra_query = array(
					'post__not_in' => $exclude_events,
				);
				$arg = wp_parse_args( $arg, $extra_query );
			}
		}

		/*====== Add Expired Events in Exclude Events ======*/
		if( $hide_expired == "true" ) {
			$expired_ids = eventchamp_expired_event_ids();
		} else {
			$expired_ids = array();
		}

		if( !empty( $expired_ids ) ) {
			if( !empty( $exclude_events ) ) {
				$exclude_events_expired = $exclude_events;
				$exclude_events_expired = explode( ',', $exclude_events_expired );
			} else {
				$exclude_events_expired = array();
			}

			$excludeevents_with_expired = array_merge( $exclude_events_expired, $expired_ids );

			$extra_query = array(
				'post__not_in' => $excludeevents_with_expired,
			);
			$arg = wp_parse_args( $arg, $extra_query );
		}

		/*====== HTML Output ======*/
		$wp_query = new WP_Query( $arg );
		if( !empty( $wp_query ) ) {
			while ( $wp_query->have_posts() ) {
				$wp_query->the_post();
				$event_start_date = get_post_meta( get_the_ID(), 'event_start_date', true );
				if( empty( $event_start_date ) ) {
					$event_start_date = "";
				}

				$event_start_time = get_post_meta( get_the_ID(), 'event_start_time', true );
				if( !empty( $event_start_time ) ) {
					$event_start_time = "T" . $event_start_time;
				} else {
					$event_start_time = "";					
				}

				$event_end_date = get_post_meta( get_the_ID(), 'event_end_date', true );
				if( empty( $event_end_date ) ) {
					$event_end_date = "";
				}

				$event_end_time = get_post_meta( get_the_ID(), 'event_end_time', true );
				if( !empty( $event_end_time ) ) {
					$event_end_time = "T" . $event_end_time;
				} else {
					$event_end_time = "";
				}

				$items .= "{
							id: " . get_the_ID() . ",
							title: '" . the_title_attribute( array( 'echo' => 0, 'post' => get_the_ID() ) ) . "',
							url: '" . get_the_permalink() . "',
							start: '" . $event_start_date . $event_start_time . "',
							end: '" . $event_end_date . $event_end_time . "'
						},
						";
			}

			$date_now = date("Y-m-d");

			if( $atts["contenttype"] == "calendar" ) {
				$type = "month";
				$def = "";
			} elseif( $atts["contenttype"] == "calendarlistweek" ) {
				$type = "month,listWeek";
				$def = "";
			} elseif( $atts["contenttype"] == "calendarlistday" ) {
				$type = "month,listDay";
				$def = "";
			} elseif( $atts["contenttype"] == "fully" ) {
				$type = "month,agendaWeek,agendaDay,listWeek";
				$def = "";
			} elseif( $atts["contenttype"] == "listweek" ) {
				$type = "listWeek";
				$def = "defaultView: 'listWeek',";
			} elseif( $atts["contenttype"] == "listday" ) {
				$type = "listDay";
				$def = "defaultView: 'listDay',";
			} else {
				$type = "month";
				$def = "";
			}

			$local = get_locale();
			if( !empty( $local ) ) {
				$local_code = $local;
			} else {
				$local_code = "en";
			}

			/*====== Inline Script ======*/
			wp_add_inline_script( "eventchamp", "jQuery(document).ready(function($){
				var initialLocaleCode = '" . $local_code . "';

				$('#calendar-datepicker').fullCalendar({
					header: {
						left: 'prev,next today',
						center: 'title',
						right: '" . $type .  "'
					},
					defaultDate: '".$date_now."',
					" . $def . "
					navLinks: true,
					editable: true,
					eventLimit: true,
					locale: initialLocaleCode,
					events: [".$items."]
				});
			});" );
		}
		wp_reset_postdata();

		$output .= '<div class="event-calendar-element">';
			$output .= '<div id="calendar-datepicker"></div>';
		$output .= '</div>';

		return $output;
	}
	add_shortcode( "eventchamp_event_calendar", "eventchamp_event_calendar_output" );

	if( function_exists( 'vc_map' ) ) {
		vc_map(
			array(
				"name" => esc_html__( 'Events Calendar', 'eventchamp' ),
				"base" => "eventchamp_event_calendar",
				"category" => esc_html__( 'Eventchamp Theme', 'eventchamp' ),
				"icon" => get_template_directory_uri() . '/include/assets/img/icons/eventchamp-event-calendar.jpg',
				"description" => esc_html__( 'Events calendar element.', 'eventchamp' ),
				"params" => array(
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Calendar Type', 'eventchamp' ),
						"description" => esc_html__( 'You can choose a calendar type.', 'eventchamp' ),
						"param_name" => "contenttype",
						'save_always' => true,
						"value" => array(
							esc_html__( 'Calendar', 'eventchamp' ) => 'calendar',
							esc_html__( 'Calendar + List Week', 'eventchamp' ) => 'calendarlistweek',
							esc_html__( 'Calendar + List Day', 'eventchamp' ) => 'calendarlistday',
							esc_html__( 'Fully', 'eventchamp' ) => 'fully',
							esc_html__( 'List Week', 'eventchamp' ) => 'listweek',
							esc_html__( 'List Day', 'eventchamp' ) => 'listday',
							esc_html__( 'External Dragging', 'eventchamp' ) => 'externaldragging',
						),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Events', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-events",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Events', 'eventchamp' ),
						"description" => esc_html__( 'You can enter event ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-events",
					),
					array(
						"type" => "dropdown",
						"heading" => esc_html__( 'Hide Expired Events', 'eventchamp' ),
						"description" => esc_html__( 'You can hide expired events.', 'eventchamp' ),
						"param_name" => "hide-expired",
						'save_always' => true,
						"value" => array(
							esc_html__( 'False', 'eventchamp' ) => 'false',
							esc_html__( 'True', 'eventchamp' ) => 'true',
						),
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter category ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-categories",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-locations",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Organizers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "exclude-organizers",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Exclude Tags', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "exclude-tags",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Categories', 'eventchamp' ),
						"description" => esc_html__( 'You can enter category ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-categories",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Locations', 'eventchamp' ),
						"description" => esc_html__( 'You can enter location ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-locations",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Organizers', 'eventchamp' ),
						"description" => esc_html__( 'You can enter organizers ids. Separate with commas. Example: 1,2,3', 'eventchamp' ),
						"param_name" => "include-organizers",
					),
					array(
						"type" => "textfield",
						"heading" => esc_html__( 'Include Tag', 'eventchamp' ),
						"description" => esc_html__( 'You can enter a tag. Example: Event.', 'eventchamp' ),
						"param_name" => "include-tags",
					),
				),
			)
		);
	}
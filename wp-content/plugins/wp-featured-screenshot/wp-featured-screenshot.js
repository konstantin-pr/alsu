(function($) {

jQuery(document).ready(function($) {
$(window).load(function() {
	

	$('.setting').attr('data-setting', 'title').each(function () {
	var url = $(this).children('input').val();
	$(".link-to-custom").val(url);
	console.log(url);
	})
	
	function IsValidImageUrl(url) {
	$("<img>", {
		src: url,
		error: function() { return(false); },
		load: function() { return(true); }
	});
	}
	
	function urlExists(url, callback){
	  $.ajax({
		type: 'GET',
		url: url,
		dataType: "json",
		success: function(){
		  return(true);
		},
		error: function() {
		  return(false);
		}
	  });
	}

	 $("#wpfs_saveimg").click(function(e){
		
	     $('button#wpfs_saveimg').html('Saving...Please Wait.');
		var url = $('#url-input').val();
		var pid = $('#post_ID').val();
		var url_check = url;
		if (url.indexOf("www") < 0 ) {
			if (url.indexOf("http") < 0 ) {
				url_check = "http://www."+url;
				url = "http%3A%2F%2Fwww."+url;
			}
		}
		if (url.indexOf("http") < 0 ) {
			url_check = "http://"+url;
			url = "http%3A%2F%2F"+url;
		}
		var img = 'http://s.wordpress.com/mshots/v1/'+url+'?w=1280';
		$.post(ajax_object.ajax_url,{
						"action": "wpfs_ajax",
						"data": img,
						"url": url_check,
						"pid": pid,
						},function(response){
								console.log(response);
							  location.reload(true);
							  window.location = self.location;
							  $('button#wpfs_saveimg').prop("disabled",false);
						});
	       
		$('button#wpfs_saveimg').prop("disabled",true);
	});	
	
});
});
})(jQuery);
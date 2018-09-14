<?php
     //error_reporting(E_ALL);
    //ini_set('display_errors', 1);
	define( 'EVENTCHAMP_VERSION', '1.6.7' );
	include ( get_template_directory() . '/include/core.php');
	include ( get_template_directory() . '/include/admin.php');
	include ( get_template_directory() . '/include/widgets.php');
	include ( get_template_directory() . '/include/customize.php');
	include  (get_template_directory() . '/include/tgm-plugins.php' );

	add_filter( 'ot_show_pages', '__return_false' );
	add_filter( 'ot_show_new_layout', '__return_false' );
	add_filter( 'ot_theme_mode', '__return_true' );
	if ( ! class_exists( 'OT_Loader' ) ) {
		require get_template_directory() .'/include/admin/ot-loader.php';
	}



 
 //@TODO check this load jquery
add_filter( 'style_loader_tag',  'clean_style_tag'  );
add_filter( 'script_loader_tag', 'clean_script_tag'  );

add_filter( 'wp_head', 'clean_script_tag', 10, 1 );

add_action('wp_head', function() {
  ob_flush();
  flush();
}, 999);

remove_filter( 'ot_recognized_font_families', array('eventchamp_font_settings','eventchamp_font_google_api'));
/**
 * Clean up output of stylesheet <link> tags
 */
function clean_style_tag( $input ) {
    preg_match_all( "!<link rel='stylesheet'\s?(id='[^']+')?\s+href='(.*)' type='text/css' media='(.*)' />!", $input, $matches );
    if ( empty( $matches[2] ) ) {
        return $input;
    }
    // Only display media if it is meaningful
    $media = $matches[3][0] !== '' && $matches[3][0] !== 'all' ? ' media="' . $matches[3][0] . '"' : '';

    return '<link rel="stylesheet" href="' . $matches[2][0] . '"' . $media . '>' . "\n";
}

/**
 * Clean up output of <script> tags
 */
function clean_script_tag( $input ) {
    $input = str_replace( "type='text/javascript' ", '', $input );

    return str_replace( "'", '"', $input );
}

add_filter( 'post_thumbnail_html', 'remove_width_attribute', 10 );
add_filter( 'image_send_to_editor', 'remove_width_attribute', 10 );

function remove_width_attribute( $html ) {
   $html = preg_replace( '/(width|height|0)="\d*"\s/', "", $html );
   return $html;
}




?>

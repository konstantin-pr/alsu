<?php
/**
 * @package wp-featured-screenshot
 * @version 1.3  */
/*
Plugin Name: WP Featured Screenshot
Plugin URI:  http://www.wplinkspage.com/
Description: This plugin provides a screenshot of any website as a featured image or embedded image. 
Version: 1.3
Author: Allyson Rico, Robert Macchi
Author URI:  http://www.wplinkspage.com/
*/

/** Require dependencies */
require_once( ABSPATH . 'wp-admin/includes/image.php' );
require_once( ABSPATH . 'wp-admin/includes/file.php' );
require_once( ABSPATH . 'wp-admin/includes/media.php' );  
require_once( ABSPATH . 'wp-includes/media-template.php' );     

$upload_dir = wp_upload_dir();
$wpfs_upload = $upload_dir['basedir'].'/'.'wp-featured-screenshot/';
if( ! file_exists( $wpfs_upload ) )
    wp_mkdir_p( $wpfs_upload );

if (!defined('WPFS_UPLOAD_DIR')) {
    define('WPFS_UPLOAD_DIR', $wpfs_upload);
}

if (!defined('WPFS_UPLOAD_URL')) {
    define('WPFS_UPLOAD_URL', $upload_dir['baseurl'].'/'.'wp-featured-screenshot/');
}

function load_wpfs_js() {
add_action( 'admin_enqueue_scripts', 'enqueue_wpfs_script' );
}

function enqueue_wpfs_script($pagenow) {
	wp_enqueue_script( 'wp-featured-screenshot', plugins_url( 'wp-featured-screenshot/wp-featured-screenshot.js', 'wp-featured-screenshot' ), null, null, true );
	wp_localize_script( 'wp-featured-screenshot', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
	wp_enqueue_style( 'wpfs-style',  plugins_url( 'wp-featured-screenshot/wp-featured-screenshot.css', 'wp-featured-screenshot' ), null, null, false );
}	

add_filter('media_upload_tabs', 'wpfs_tab');
function wpfs_tab($tabs) {
    $tabs['wpfs'] = "Screenshot";
    return $tabs;
}

// add js to new tab
add_action('media_upload_wpfs', 'load_wpfs_js');

function wpfs_imagelink_setup() {
	$image_set = get_option( 'image_default_link_type' );
	
	if ($image_set !== 'custom') {
		update_option('image_default_link_type', 'custom');
	}
}
add_action('admin_init', 'wpfs_imagelink_setup', 10);

// call the new tab with wp_iframe
add_action('media_upload_wpfs', 'add_wpfs_form');
function add_wpfs_form() {
    wp_iframe( 'wpfs_form' );
}

// the screenshot tab content
function wpfs_form() {
	$q = $_GET;
	$q['posts_per_page'] = 10;
	$q['paged'] = isset( $q['paged'] ) ? intval( $q['paged'] ) : 0;
	if ( $q['paged'] < 1 ) {
		$q['paged'] = 1;
	}
	$q['offset'] = ( $q['paged'] - 1 ) * 10;
	if ( $q['offset'] < 1 ) {
		$q['offset'] = 0;
	}
	
    echo media_upload_header(); 
	$upload_dir = wp_upload_dir();
	if(isset($_REQUEST['post_id'])) {
		$post = $_REQUEST['post_id'];
	} else $post = 0;
	 $args = array(
		'post_type'        => 'attachment',
		'post_mime_type'     => 'image',
		'posts_per_page' => 10,
		'offset' => $q['offset'],
		'meta_query' => array(
			array(
				'key' => 'wpfs',
				'value' => 'screenshot',
			)
		)
	);
	$targs = array(
		'post_type'        => 'attachment',
		'post_mime_type'     => 'image',
		'nopaging' => true,
		'meta_query' => array(
			array(
				'key' => 'wpfs',
				'value' => 'screenshot',
			)
		)
	);
	$media = get_posts( $args );
	?> <input id="post_ID" type="hidden" value="<?php echo $post; ?>" name="post_ID">
			<label class="wpfs-label" for="url-input">URL: </label>
			<input class="wpfs-input" id="url-input" type="text" name="url" maxlength="255" />
			<button id="wpfs_saveimg" class="button button-primary button-large" type="submit" >Add Link</button>
	<?php
	$errors = array();

	global $wpdb, $wp_query, $wp_locale, $tab, $post_mime_types;
	$type = 'image';
	$post_id = isset( $_REQUEST['post_id'] ) ? intval( $_REQUEST['post_id'] ) : 0;
	$_GET['post_mime_type'] = 'image';
	$form_action_url = admin_url("media-upload.php?type=$type&tab=library&post_id=$post_id");
	/** This filter is documented in wp-admin/includes/media.php */
	$form_action_url = apply_filters( 'media_upload_form_url', $form_action_url, $type );
	$form_class = 'media-upload-form validate';

	if ( get_user_setting('uploader') )
		$form_class .= ' html-uploader';

	$q = $_GET;
	$q['posts_per_page'] = 10;
	$q['paged'] = isset( $q['paged'] ) ? intval( $q['paged'] ) : 0;
	if ( $q['paged'] < 1 ) {
		$q['paged'] = 1;
	}
	$q['offset'] = ( $q['paged'] - 1 ) * 10;
	if ( $q['offset'] < 1 ) {
		$q['offset'] = 0;
	}

	list($post_mime_types, $avail_post_mime_types) = wp_edit_attachments_query( $q );
	
	?>
	
	<form id="filter" method="get">
	<input type="hidden" name="type" value="<?php echo esc_attr( $type ); ?>" />
	<input type="hidden" name="tab" value="<?php echo esc_attr( $tab ); ?>" />
	<input type="hidden" name="post_id" value="<?php echo (int) $post_id; ?>" />
	<input type="hidden" name="post_mime_type" value="<?php echo isset( $_GET['post_mime_type'] ) ? esc_attr( $_GET['post_mime_type'] ) : ''; ?>" />
	<input type="hidden" name="context" value="<?php echo isset( $_GET['context'] ) ? esc_attr( $_GET['context'] ) : ''; ?>" />
	
	
	<div class="tablenav">
	
	<?php
	$total = count(get_posts( $targs ));
	$page_links = paginate_links( array(
		'base' => add_query_arg( 'paged', '%#%' ),
		'format' => '',
		'prev_text' => __('&laquo;'),
		'next_text' => __('&raquo;'),
		'total' => ceil($total / 10),
		'current' => $q['paged'],
	));
	
	if ( $page_links )
		echo "<div class='tablenav-pages'>$page_links</div>";
	?>
	
	
	
	<br class="clear" />
	</div>
	</form>
	
	<form enctype="multipart/form-data" method="post" action="<?php echo esc_url( $form_action_url ); ?>" class="<?php echo $form_class; ?>" id="library-form">
	
	<?php wp_nonce_field('media-form'); ?>
	<?php //media_upload_form( $errors ); ?>
	
	<script type="text/javascript">
	<!--
	jQuery(function($){
		var preloaded = $(".media-item.preloaded");
		if ( preloaded.length > 0 ) {
			preloaded.each(function(){prepareMediaItem({id:this.id.replace(/[^0-9]/g, '')},'');});
			updateMediaForm();
		}
	});
	-->
	</script>
	
	<div id="media-items">
	<?php add_filter('attachment_fields_to_edit', 'media_post_single_attachment_fields_to_edit', 10, 2); 
	foreach ($media as $img ) {
		$IID = $img->ID;
		echo '<div id="media-item-'.$IID.'" class="media-item preloaded">';
		echo get_media_item($IID);	
		echo '</div>';
	}
	//echo get_media_items(null,$errors);
	?>
	</div>
	<p class="ml-submit">
	<?php submit_button( __( 'Save all changes' ), 'button savebutton', 'save', false ); ?>
	<input type="hidden" name="post_id" id="post_id" value="<?php echo (int) $post_id; ?>" />
	</p>
	</form>
    <a href="http://wplinkspage.com/" target="_blank"><img src="<?php echo plugins_url( 'wp-featured-screenshot/WP-Featured-Screenshot-ad.jpg', 'wp-featured-screenshot' ) ?>" style="border: 1px solid #000; border-radius: 10px; margin-top: 20px; max-width: 95%; padding: 10px;" /></a>
	<?php
	echo wp_print_media_templates();
}

// AJAX to add a screenshot

add_action( 'wp_ajax_wpfs_ajax', 'wpfs_ajax_callback' );

function wpfs_ajax_callback() {	
	$upload_dir = wp_upload_dir();
	
	if(isset($_REQUEST['pid'])) {
		$post = $_REQUEST['pid'];
		$post = absint($post);
	}else die(json_encode(array('message' => 'ERROR', 'code' => 1227)));
	
	if (isset($_REQUEST['data'])) {
		$data = $_REQUEST['data'];
		$data = esc_url_raw($data);
	}else die(json_encode(array('message' => 'ERROR', 'code' => 1336)));
	
	if (isset($_REQUEST['url'])) {
		$url = $_REQUEST['url'];
		$url = esc_url_raw($url);
		// in case scheme relative URI is passed, e.g., //www.google.com/
		
		$input = trim($url, '/');
		
		// If scheme not included, prepend it
		if (!preg_match('#^http(s)?://#', $input)) {
			$input = 'http://' . $input;
		}
		
		$urlParts = parse_url($input);
		
		// remove www
		$domain = preg_replace('/^www\./', '', $urlParts['host']);
		$display = $domain;
		// remove punctuation
		$url = strtolower($url);
		$filename = preg_replace("/[^a-zA-Z0-9]+/", "", $url);
	}else die(json_encode(array('message' => 'ERROR', 'code' => 1337)));

    // Save as a temporary file
	$down_url = $data . '.jpg';
    $temp = download_url( $down_url );
	sleep(10);
    $tmp = download_url( $down_url );

    // Check for download errors
    if ( is_wp_error( $tmp ) ) 
    {
        @unlink( $file_array[ 'tmp_name' ] );
        return $tmp;
    }
	
	$img_url = WPFS_UPLOAD_URL.$filename.".jpg";
	
    $file = WPFS_UPLOAD_DIR . $filename . '.jpg';
	
	
	// Take care of image files without extension:
    $path = pathinfo( $tmp );
	if( ! isset( $path['extension'] ) ):
        $tmpnew = $tmp . '.jpg';
        if( ! rename( $tmp, $tmpnew ) ):
            return '';
        else:
            $name = $filename.'.jpg';
            $tmp = $tmpnew;
        endif;
    endif;
	if( $path['extension'] == 'tmp' ):
        $tmpnew = $path['dirname'].'/'.$path['filename'] . '.jpg';
        if( ! rename( $tmp, $tmpnew ) ):
            return '';
        else:
            $name = $filename.'.jpg';
            $tmp = $tmpnew;
        endif;
    endif;
	
	
	$exists = file_exists($file);
	if ($exists == true) {
		$file = WPFS_UPLOAD_DIR . $filename . time() . '.jpg';
	}
	$move = rename($tmp, $file);
	
	$parent_post_id = $post;
	$filetype = wp_check_filetype( basename( $file ), null );
	
	$attachment = array(
		'guid'           => WPFS_UPLOAD_URL . basename( $file ), 
		'post_mime_type' => $filetype['type'],
		'post_title'     => $url,
		'post_excerpt'	 => '',
		'post_content'   => '',
		'post_status'    => 'inherit'
	);
	
	$attach_id = wp_insert_attachment( $attachment, $file, $parent_post_id );
	
	
	require_once( ABSPATH . 'wp-admin/includes/image.php' );
	
	$attach_data = wp_generate_attachment_metadata( $attach_id, $file );
	wp_update_attachment_metadata( $attach_id, $attach_data );
	add_post_meta( $attach_id, 'wpfs', 'screenshot' );
	
	wp_die();
}


?>
<?php


/*======
*
* Post Types
*
======*/
	/*====== Events ======*/
	if ( ! function_exists('eventchamp_events') ) {
		function eventchamp_events() {
			$labels = array(
				'name' => _x( 'Events', 'Events General Name', 'eventchamp' ),
				'singular_name' => _x( 'Event', 'Events Singular Name', 'eventchamp' ),
				'menu_name' => esc_html__( 'Events', 'eventchamp' ),
				'parent_item_colon' => esc_html__( 'Parent Event:', 'eventchamp' ),
				'all_items' => esc_html__( 'All Events', 'eventchamp' ),
				'view_item' => esc_html__( 'View Event', 'eventchamp' ),
				'add_new_item' => esc_html__( 'Add New Event Item', 'eventchamp' ),
				'add_new' => esc_html__( 'Add New Event', 'eventchamp' ),
				'edit_item' => esc_html__( 'Edit Event', 'eventchamp' ),
				'update_item' => esc_html__( 'Update Event', 'eventchamp' ),
				'search_items' => esc_html__( 'Search Event', 'eventchamp' ),
				'not_found' => esc_html__( 'Not Event Found', 'eventchamp' ),
				'not_found_in_trash' => esc_html__( 'Not Event Found in Trash', 'eventchamp' ),
			);
			$args = array(
				'label' => esc_html__( 'Events', 'eventchamp' ),
				'description' => esc_html__( 'Event post type description.', 'eventchamp' ),
				'labels' => $labels,
				'supports' => array( 'title', 'comments', 'author', 'excerpt', 'thumbnail', 'revisions', 'editor', 'editor', 'custom-fields' ),
				'hierarchical' => false,
				'public' => true,
				'show_ui' => true,
				'show_in_menu' => true,
				'show_in_nav_menus' => true,
				'show_in_admin_bar' => true,
				'menu_position' => 20,
				'menu_icon' => 'dashicons-calendar-alt',
				'can_export' => true,
				'has_archive' => true,
				'exclude_from_search' => false,
				'publicly_queryable' => true,
				'capability_type' => 'post',
			);
			register_post_type( 'event', $args );
		}
		add_action( 'init', 'eventchamp_events', 0 );
	}

	/*====== Venues ======*/
	if ( ! function_exists('eventchamp_venues') ) {
		function eventchamp_venues() {
			$labels = array(
				'name' => _x( 'Venues', 'Venues General Name', 'eventchamp' ),
				'singular_name' => _x( 'Venue', 'Venues Singular Name', 'eventchamp' ),
				'menu_name' => esc_html__( 'Venues', 'eventchamp' ),
				'parent_item_colon' => esc_html__( 'Parent Venue:', 'eventchamp' ),
				'all_items' => esc_html__( 'All Venues', 'eventchamp' ),
				'view_item' => esc_html__( 'View Venue', 'eventchamp' ),
				'add_new_item' => esc_html__( 'Add New Venue Item', 'eventchamp' ),
				'add_new' => esc_html__( 'Add New Venue', 'eventchamp' ),
				'edit_item' => esc_html__( 'Edit Venue', 'eventchamp' ),
				'update_item' => esc_html__( 'Update Venue', 'eventchamp' ),
				'search_items' => esc_html__( 'Search Venue', 'eventchamp' ),
				'not_found' => esc_html__( 'Not Venue Found', 'eventchamp' ),
				'not_found_in_trash' => esc_html__( 'Not Venue Found in Trash', 'eventchamp' ),
			);
			$args = array(
				'label' => esc_html__( 'Venues', 'eventchamp' ),
				'description' => esc_html__( 'Venue post type description.', 'eventchamp' ),
				'labels' => $labels,
				'supports' => array( 'title', 'comments', 'author', 'excerpt', 'thumbnail', 'revisions', 'editor', 'editor', 'custom-fields' ),
				'hierarchical' => false,
				'public' => true,
				'show_ui' => true,
				'show_in_menu' => true,
				'show_in_nav_menus' => true,
				'show_in_admin_bar' => true,
				'menu_position' => 20,
				'menu_icon' => 'dashicons-store',
				'can_export' => true,
				'has_archive' => true,
				'exclude_from_search' => false,
				'publicly_queryable' => true,
				'capability_type' => 'post',
			);
			register_post_type( 'venue', $args );
		}
		add_action( 'init', 'eventchamp_venues', 0 );
	}

	/*====== Speakers ======*/
	if ( ! function_exists('eventchampspeakers') ) {
		function eventchampspeakers() {
			$labels = array(
				'name' => _x( 'Speakers', 'Speakers General Name', 'eventchamp' ),
				'singular_name' => _x( 'Speaker', 'Speakers Singular Name', 'eventchamp' ),
				'menu_name' => esc_html__( 'Speakers', 'eventchamp' ),
				'parent_item_colon' => esc_html__( 'Parent Speaker:', 'eventchamp' ),
				'all_items' => esc_html__( 'All Speakers', 'eventchamp' ),
				'view_item' => esc_html__( 'View Speaker', 'eventchamp' ),
				'add_new_item' => esc_html__( 'Add New Speaker Item', 'eventchamp' ),
				'add_new' => esc_html__( 'Add New Speaker', 'eventchamp' ),
				'edit_item' => esc_html__( 'Edit Speaker', 'eventchamp' ),
				'update_item' => esc_html__( 'Update Speaker', 'eventchamp' ),
				'search_items' => esc_html__( 'Search Speaker', 'eventchamp' ),
				'not_found' => esc_html__( 'Not Speaker Found', 'eventchamp' ),
				'not_found_in_trash' => esc_html__( 'Not Speaker Found in Trash', 'eventchamp' ),
			);
			$args = array(
				'label' => esc_html__( 'Speakers', 'eventchamp' ),
				'description' => esc_html__( 'Speaker post type description.', 'eventchamp' ),
				'labels' => $labels,
				'supports' => array( 'title', 'comments', 'author', 'excerpt', 'thumbnail', 'revisions', 'editor', 'custom-fields' ),
				'hierarchical' => false,
				'public' => true,
				'show_ui' => true,
				'show_in_menu' => true,
				'show_in_nav_menus' => true,
				'show_in_admin_bar' => true,
				'menu_position' => 20,
				'menu_icon' => 'dashicons-microphone',
				'can_export' => true,
				'has_archive' => true,
				'exclude_from_search' => false,
				'publicly_queryable' => true,
				'capability_type' => 'post',
			);
			register_post_type( 'speaker', $args );
		} 
		add_action( 'init', 'eventchampspeakers', 0 );
	}

/*======
*
* Taxonomies
*
======*/
	/*====== Locations ======*/
	if ( ! function_exists( 'location' ) ) {
		function location() {
			$labels = array(
				'name' => _x( 'Locations', 'Locations General Name', 'eventchamp' ),
				'singular_name' => _x( 'Locations', 'Locations Singular Name', 'eventchamp' ),
				'menu_name' => esc_html__( 'Locations', 'eventchamp' ),
				'all_items' => esc_html__( 'All Locations', 'eventchamp' ),
				'parent_item' => esc_html__( 'Parent Location', 'eventchamp' ),
				'parent_item_colon' => esc_html__( 'Parent Location:', 'eventchamp' ),
				'new_item_name' => esc_html__( 'New Location Name', 'eventchamp' ),
				'add_new_item' => esc_html__( 'Add New Location', 'eventchamp' ),
				'edit_item' => esc_html__( 'Edit Location', 'eventchamp' ),
				'view_item' => esc_html__( 'View Location', 'eventchamp' ),
				'update_item' => esc_html__( 'Update Location', 'eventchamp' ),
				'separate_items_with_commas' => esc_html__( 'Separate locations with commas', 'eventchamp' ),
				'search_items' => esc_html__( 'Search Locations', 'eventchamp' ),
				'add_or_remove_items' => esc_html__( 'Add or remove locations', 'eventchamp' ),
				'choose_from_most_used' => esc_html__( 'Choose from the most used locations', 'eventchamp' ),
				'not_found' => esc_html__( 'Not Found', 'eventchamp' ),
			);
			$args = array(
				'labels' => $labels,
				'hierarchical' => true,
				'public' => true,
				'show_ui' => true,
				'show_admin_column' => false,
				'show_in_nav_menus' => true,
				'show_tagcloud' => true,
			);
			register_taxonomy( 'location', array( 'event', 'venue' ), $args );

		}
		add_action( 'init', 'location', 0 );
	}

	/*====== Organizers ======*/
	if ( ! function_exists( 'organizer' ) ) {
		function organizer() {
			$labels = array(
				'name' => _x( 'Organizers', 'Organizers General Name', 'eventchamp' ),
				'singular_name' => _x( 'Organizers', 'Organizers Singular Name', 'eventchamp' ),
				'menu_name' => esc_html__( 'Organizers', 'eventchamp' ),
				'all_items' => esc_html__( 'All Organizers', 'eventchamp' ),
				'parent_item' => esc_html__( 'Parent Organizer', 'eventchamp' ),
				'parent_item_colon' => esc_html__( 'Parent Organizer:', 'eventchamp' ),
				'new_item_name' => esc_html__( 'New Organizer Name', 'eventchamp' ),
				'add_new_item' => esc_html__( 'Add New Organizer', 'eventchamp' ),
				'edit_item' => esc_html__( 'Edit Organizer', 'eventchamp' ),
				'view_item' => esc_html__( 'View Organizer', 'eventchamp' ),
				'update_item' => esc_html__( 'Update Organizer', 'eventchamp' ),
				'separate_items_with_commas' => esc_html__( 'Separate organizers with commas', 'eventchamp' ),
				'search_items' => esc_html__( 'Search Organizers', 'eventchamp' ),
				'add_or_remove_items' => esc_html__( 'Add or remove organizers', 'eventchamp' ),
				'choose_from_most_used' => esc_html__( 'Choose from the most used organizers', 'eventchamp' ),
				'not_found' => esc_html__( 'Not Found', 'eventchamp' ),
			);
			$args = array(
				'labels' => $labels,
				'hierarchical' => true,
				'public' => true,
				'show_ui' => true,
				'show_admin_column' => false,
				'show_in_nav_menus' => true,
				'show_tagcloud' => true,
			);
			register_taxonomy( 'organizer', array( 'event' ), $args );

		}
		add_action( 'init', 'organizer', 0 );
	}

	/*====== Tags ======*/
	if ( ! function_exists( 'event_tags' ) ) {
		function event_tags() {
			$labels = array(
				'name' => _x( 'Tags', 'Tags General Name', 'eventchamp' ),
				'singular_name' => _x( 'Tags', 'Tags Singular Name', 'eventchamp' ),
				'menu_name' => esc_html__( 'Tags', 'eventchamp' ),
				'all_items' => esc_html__( 'All Tags', 'eventchamp' ),
				'parent_item' => esc_html__( 'Parent Tag', 'eventchamp' ),
				'parent_item_colon' => esc_html__( 'Parent Tag:', 'eventchamp' ),
				'new_item_name' => esc_html__( 'New Tag Name', 'eventchamp' ),
				'add_new_item' => esc_html__( 'Add New Tag', 'eventchamp' ),
				'edit_item' => esc_html__( 'Edit Tag', 'eventchamp' ),
				'view_item' => esc_html__( 'View Tag', 'eventchamp' ),
				'update_item' => esc_html__( 'Update Tag', 'eventchamp' ),
				'separate_items_with_commas' => esc_html__( 'Separate tags with commas', 'eventchamp' ),
				'search_items' => esc_html__( 'Search Tags', 'eventchamp' ),
				'add_or_remove_items' => esc_html__( 'Add or remove tags', 'eventchamp' ),
				'choose_from_most_used' => esc_html__( 'Choose from the most used tags', 'eventchamp' ),
				'not_found' => esc_html__( 'Not Found', 'eventchamp' ),
			);
			$args = array(
				'labels' => $labels,
				'hierarchical' => true,
				'public' => true,
				'show_ui' => true,
				'show_admin_column' => false,
				'show_in_nav_menus' => true,
				'show_tagcloud' => true,
			);
			register_taxonomy( 'event_tags', array( 'event', 'venue' ), $args );

		}
		add_action( 'init', 'event_tags', 0 );
	}

	/*====== Event Categories ======*/
	if ( ! function_exists( 'eventcat' ) ) {
		function eventcat() {
			$labels = array(
				'name' => _x( 'Event Categories', 'Event Categories General Name', 'eventchamp' ),
				'singular_name' => _x( 'Event Categories', 'Event Categories Singular Name', 'eventchamp' ),
				'menu_name' => esc_html__( 'Event Categories', 'eventchamp' ),
				'all_items' => esc_html__( 'All Event Categories', 'eventchamp' ),
				'parent_item' => esc_html__( 'Parent Event Category', 'eventchamp' ),
				'parent_item_colon' => esc_html__( 'Parent Event Category:', 'eventchamp' ),
				'new_item_name' => esc_html__( 'New Event Category Name', 'eventchamp' ),
				'add_new_item' => esc_html__( 'Add New Event Category', 'eventchamp' ),
				'edit_item' => esc_html__( 'Edit Event Category', 'eventchamp' ),
				'view_item' => esc_html__( 'View Event Category', 'eventchamp' ),
				'update_item' => esc_html__( 'Update Event Category', 'eventchamp' ),
				'separate_items_with_commas' => esc_html__( 'Separate event categories with commas', 'eventchamp' ),
				'search_items' => esc_html__( 'Search Event Categories', 'eventchamp' ),
				'add_or_remove_items' => esc_html__( 'Add or remove event categories', 'eventchamp' ),
				'choose_from_most_used' => esc_html__( 'Choose from the most used event categories', 'eventchamp' ),
				'not_found' => esc_html__( 'Not Found', 'eventchamp' ),
			);
			$args = array(
				'labels' => $labels,
				'hierarchical' => true,
				'public' => true,
				'show_ui' => true,
				'show_admin_column' => false,
				'show_in_nav_menus' => true,
				'show_eventcatcloud' => true,
			);
			register_taxonomy( 'eventcat', array( 'event'), $args );

		}
		add_action( 'init', 'eventcat', 0 );
	}

	/*====== Venue Categories ======*/
	if ( ! function_exists( 'venuecat' ) ) {
		function venuecat() {
			$labels = array(
				'name' => _x( 'Venue Categories', 'Venue Categories General Name', 'eventchamp' ),
				'singular_name' => _x( 'Venue Categories', 'Venue Categories Singular Name', 'eventchamp' ),
				'menu_name' => esc_html__( 'Venue Categories', 'eventchamp' ),
				'all_items' => esc_html__( 'All Venue Categories', 'eventchamp' ),
				'parent_item' => esc_html__( 'Parent Venue Category', 'eventchamp' ),
				'parent_item_colon' => esc_html__( 'Parent Venue Category:', 'eventchamp' ),
				'new_item_name' => esc_html__( 'New Venue Category Name', 'eventchamp' ),
				'add_new_item' => esc_html__( 'Add New Venue Category', 'eventchamp' ),
				'edit_item' => esc_html__( 'Edit Venue Category', 'eventchamp' ),
				'view_item' => esc_html__( 'View Venue Category', 'eventchamp' ),
				'update_item' => esc_html__( 'Update Venue Category', 'eventchamp' ),
				'separate_items_with_commas' => esc_html__( 'Separate venue categories with commas', 'eventchamp' ),
				'search_items' => esc_html__( 'Search Venue Categories', 'eventchamp' ),
				'add_or_remove_items' => esc_html__( 'Add or remove venue categories', 'eventchamp' ),
				'choose_from_most_used' => esc_html__( 'Choose from the most used venue categories', 'eventchamp' ),
				'not_found' => esc_html__( 'Not Found', 'eventchamp' ),
			);
			$args = array(
				'labels' => $labels,
				'hierarchical' => true,
				'public' => true,
				'show_ui' => true,
				'show_admin_column' => false,
				'show_in_nav_menus' => true,
				'show_venuecatcloud' => true,
			);
			register_taxonomy( 'venuecat', array( 'venue'), $args );

		}
		add_action( 'init', 'venuecat', 0 );
	}
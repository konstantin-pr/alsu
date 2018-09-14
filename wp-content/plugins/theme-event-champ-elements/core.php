<?php

/*======
*
* Create Social Media Links for User Profiles
*
======*/
function eventchamp_user_profile_social_media( $user_profile_create_fields ) {
	$user_profile_create_fields['facebook'] = esc_html__( 'Facebook', 'eventchamp' );
	$user_profile_create_fields['googleplus'] = esc_html__( 'Google+', 'eventchamp' );
	$user_profile_create_fields['instagram'] = esc_html__( 'Instagram', 'eventchamp' );
	$user_profile_create_fields['linkedin'] = esc_html__( 'LinkedIn', 'eventchamp' );
	$user_profile_create_fields['vine'] = esc_html__( 'Vine', 'eventchamp' );
	$user_profile_create_fields['twitter'] = esc_html__( 'Twitter', 'eventchamp' );
	$user_profile_create_fields['pinterest'] = esc_html__( 'Pinterest', 'eventchamp' );
	$user_profile_create_fields['youtube'] = esc_html__( 'YouTube', 'eventchamp' );
	$user_profile_create_fields['behance'] = esc_html__( 'Behance', 'eventchamp' );
	$user_profile_create_fields['deviantart'] = esc_html__( 'DeviantArt', 'eventchamp' );
	$user_profile_create_fields['digg'] = esc_html__( 'Digg', 'eventchamp' );
	$user_profile_create_fields['dribbble'] = esc_html__( 'Dribbble', 'eventchamp' );
	$user_profile_create_fields['flickr'] = esc_html__( 'Flickr', 'eventchamp' );
	$user_profile_create_fields['github'] = esc_html__( 'GitHub', 'eventchamp' );
	$user_profile_create_fields['lastfm'] = esc_html__( 'Last.fm', 'eventchamp' );
	$user_profile_create_fields['reddit'] = esc_html__( 'Reddit', 'eventchamp' );
	$user_profile_create_fields['soundcloud'] = esc_html__( 'SoundCloud', 'eventchamp' );
	$user_profile_create_fields['tumblr'] = esc_html__( 'Tumblr', 'eventchamp' );
	$user_profile_create_fields['vimeo'] = esc_html__( 'Vimeo', 'eventchamp' );
	$user_profile_create_fields['vk'] = esc_html__( 'VK', 'eventchamp' );
	$user_profile_create_fields['medium'] = esc_html__( 'Medium', 'eventchamp' );
	return $user_profile_create_fields;
}
add_filter( 'user_contactmethods', 'eventchamp_user_profile_social_media', 10, 1 );

/*======
*
* Comment List Template
*
======*/
function eventchamp_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment;
	extract($args, EXTR_SKIP);

	if ( 'div' == $args['style'] ) {
		$tag = 'div';
		$add_below = 'comment';
	} else {
		$tag = 'li';
		$add_below = 'div-comment';
	}
?>
	<<?php echo esc_attr( $tag ) ?> <?php comment_class( empty( $args['has_children'] ) ? '' : 'parent' ) ?> id="comment-<?php comment_ID() ?>">
	
	<?php if ( 'div' != $args['style'] ) { ?>
		<div id="div-comment-<?php comment_ID() ?>" class="comment-body">
	<?php } ?>
		<div class="comment-author vcard">
			<?php
				$user = get_user_by( 'email', $comment->comment_author_email );
			?>
			<?php if ( $args['avatar_size'] != 0 ) { echo get_avatar( $comment, $args['avatar_size'] ); } ?>
			<?php $allowed_html = array ( 'span' => array() ); printf( wp_kses( '<cite class="fn">%s</cite>', 'eventchamp' ), get_comment_author() ); ?>

			<div class="comment-meta commentmetadata"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ); ?>">
				<?php printf( esc_html__( '%1$s', 'eventchamp' ), get_comment_date(),  get_comment_time() ); ?></a>
			</div>

			<div class="reply">
				<?php comment_reply_link( array_merge( $args, array( 'add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
				<?php edit_comment_link( '<i class="fas fa-pencil-alt" aria-hidden="true"></i>' . esc_html__( 'Edit', 'eventchamp' ), '  ', '' ); ?>
			</div>
		</div>
		
		<?php if ( $comment->comment_approved == '0' ) { ?>
			<em class="comment-awaiting-moderation"><?php echo esc_html__( 'Your comment is awaiting moderation.', 'eventchamp' ); ?></em>
		<?php } ?>

		<?php comment_text(); ?>

	<?php if ( 'div' != $args['style'] ) { ?>
		</div>
	<?php } ?>
<?php
}

/*======
*
* Comment Field to Top
*
======*/
function eventchamp_move_comment_field_to_bottom( $fields ) {
	$comment_field = $fields['comment'];
	unset( $fields['comment'] );
	$fields['comment'] = $comment_field;
	return $fields;
}
add_filter( 'comment_form_fields', 'eventchamp_move_comment_field_to_bottom' );
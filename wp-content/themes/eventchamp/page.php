<?php
/*
	* The template for displaying page
*/
get_header(); ?>

	<?php eventchamp_sub_content_before(); ?>
		<?php
			$box_layout = get_post_meta( get_the_ID(), 'box_layout', true );
			$featured_image_status = get_post_meta( get_the_ID(), 'featured_image_status', true );
			$post_post_title_each = get_post_meta( get_the_ID(), 'page_title', true );
			$post_post_title = ot_get_option( 'post_post_title' );
			if( !$post_post_title == 'off' or $post_post_title == 'on' ) {
				if( !$post_post_title_each == 'off' or $post_post_title_each == 'on' ) {
					eventchamp_archive_title();
				}
			}
		?>
		<?php eventchamp_container_before(); ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php eventchamp_row_before(); ?>
					<?php eventchamp_post_content_before(); ?>
						<div class="page-list page-content-list">
							<?php if( !$featured_image_status == 'off' or $featured_image_status == 'on' ) { ?>
								<?php eventchamp_featured_image_post( $post_id = get_the_ID() ); ?>
							<?php } ?>
							<article id="page-<?php the_ID(); ?>" <?php post_class(); ?>>
								<div class="page-wrapper">
									<div class="page-content">
										<?php if( $box_layout == 'on' ) { ?>
											<div class="page-content-body">
										<?php } ?>
											<?php
												the_content();

												wp_link_pages( array(
													'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'eventchamp' ) . '</span>',
													'after'       => '</div>',
													'link_before' => '<span>',
													'link_after'  => '</span>',
												) );
												
												edit_post_link( esc_html__( 'Edit Page', 'eventchamp' ), '<span class="edit-link">', '</span>' );
											?>
										<?php if( $box_layout == 'on' ) { ?>
											</div>
										<?php } ?>
									</div>
								</div>
							</article>
						</div>
						<?php
							$page_comment_area = ot_get_option( 'page_comment_area' );
							if( $page_comment_area == "on" or !$page_comment_area == "off" ) {
								if ( comments_open() || get_comments_number() ) {
									comments_template();
								}
							}
						?>
					<?php eventchamp_content_area_after(); ?>
					<?php get_sidebar(); ?> 
				<?php eventchamp_row_after(); ?>
			<?php endwhile; ?>
		<?php eventchamp_container_after(); ?>
	<?php eventchamp_sub_content_after(); ?>

<?php get_footer();
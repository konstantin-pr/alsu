
<script>
var ss = document.createElement("link");ss.type = "text/css";ss.rel = "stylesheet";
ss.href = "<?php echo get_stylesheet_uri(); ?>";document.getElementsByTagName("head")[0].appendChild(ss);
</script>
<noscript><link rel="stylesheet"  href="<?php echo get_stylesheet_uri(); ?>" /></noscript>
	<?php eventchamp_footer(); ?>
	<?php eventchamp_content_after(); ?>
	<?php eventchamp_wrapper_after(); ?>
	<?php wp_footer(); ?>
	</body>
</html>

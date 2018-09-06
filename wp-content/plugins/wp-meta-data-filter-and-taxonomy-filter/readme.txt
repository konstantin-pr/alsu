=== WordPress Meta Data and Taxonomies Filter (MDTF) ===
Contributors: RealMag777
Donate link: https://wp-filter.com/a/buy
Tags: filter,products filter,taxonomies filter,meta filter,woocommerce
Requires at least: 4.1.0
Tested up to: 4.9.6
Stable tag: 1.2.4

The main idea of the plugin – make your WordPress site content is searchable by meta fields and taxonomies on the same time.

== Description ==

The main idea of MDTF – make your WordPress site content is searchable by meta fields and taxonomies on the same time.

The plugin for searching and filtering WordPress content - posts and custom post types by taxonomies and meta data fields on the same time.

MDTF is ready to work as WooCommerce products filter. The plugin has very high flexibility!

With MDTF you will be able to filter posts/pages/custom types by the meta fields and/or taxonomies on the same time.

DOCUMENTATION: [https://wp-filter.com/documentation/](https://wp-filter.com/documentation/)
DEMO: [https://wp-filter.com/demo-sites/](https://wp-filter.com/demo-sites/)

* AJAX searching for: posts, custom post types, woocommerce products, jigoshop products, EasyDigitalDownloads products
* Widgets and Shortcodes
* [STATISTICS](https://wp-filter.com/extension/statistic/)
* [Post Messenger](https://wp-filter.com/extension/post-messenger/)
* Filter posts and custom post types by meta fields
* Filter posts and custom post types by taxonomies
* Query multiple taxonomies and meta fields on the same time
* Ready for WooCommerce! Work with WooCommerce: price, products attributes and with product categories!
* Ready for Jigoshop! and EasyDigitalDownloads
* INSERT SEARCH FORMS BY SHORTCODES IN ANY PLACE OF YOUR SITE
* Creating search-filter shortcodes by constructor
* Meta values html-items combinations auto recount based on the current search (dynamic recount)
* Taxonomies terms values auto recount based on the current search
* Built-in the meta-fields data constructor (checkbox, drop-down, multi drop-down, range-slider, calendar, textinput, label)
* AJAX recounting of the seacrh form html-items for hierarchical searching
* Unlimited count of meta fields which can be created by built-in meta data constructor
* Auto submit option
* Step for range slider optionally. Integer or Decimal.
* Size for any drop-down optionally
* Searching by post title and its content (any post type)
* Specify for each meta fields the display mode on front: drop-down, checkbox, range slider, calendar, textinput, label
* Specify for each taxonomy the display mode on front: drop-down, checkbox, multi drop-down, label
* Constructor of sort-panels 
* Nice tooltip for each html-element of the search form with description text
* Unlimited instances of the MDTF widgets and MDTF shortcodes, and each of them has its own set of settings
* Empty terms or meta fields can be hidden optionally in widgets and in shortcodes (premium)
* Works with any kind of post, custom post type, woocommerce/jigoshop products, category or custom taxonomies, price
* Dynamic recount for the search combinations
* Reset button optionally
* Toggles for the filter sections
* And another magic features


**Videos**:
- [Easy entry](https://wp-filter.com/video-tutorials#video_1291)
- [Creating complex cars dealer site](https://wp-filter.com/video-tutorials#video_1293)
- [Quick start with WooCommerce](https://wp-filter.com/video-tutorials#video_1292)


WATCH MORE VIDEOS HERE: [https://wp-filter.com/video-tutorials/](https://wp-filter.com/video-tutorials/)

NOT INCLUDED IN THE FREE VERSION OF THE PLUGIN: [https://wp-filter.com/difference-free-premium-versions-plugin/](https://wp-filter.com/difference-free-premium-versions-plugin/)

Look more here: [https://wp-filter.com/](https://wp-filter.com/)


LOOKING JUST ONLY FILTER FOR WOOCOMMERCE? LOOK HERE PLEASE: [https://wordpress.org/plugins/woocommerce-products-filter/](https://wordpress.org/plugins/woocommerce-products-filter/)


**Important note**: if you have troubles with empty result page, and you sure that it must be, do next please:
* open your theme header.php
* at the same bottom of the file drop this &lt;?php do_shortcode('[mdf_force_searching]') ?&gt;
* save file

== Installation ==
* Download to your plugin directory or simply install via Wordpress admin interface.
* Activate.
* Use.


== Frequently Asked Questions ==

Q: Where can I see demos?
R: [https://cars.wp-filter.com/](https://cars.wp-filter.com/) AND [https://general.wp-filter.com/](https://general.wp-filter.com/)

Q: Where can see I WooCommerce demo?
R: [https://woocommerce.wp-filter.com/](https://woocommerce.wp-filter.com/)

Q: Where can see I ajax search demo by title/content?
R: [https://miscellaneous.wp-filter.com/](https://miscellaneous.wp-filter.com/)

Q: Where can I read documentation?
R: [https://wp-filter.com/documentation/](https://wp-filter.com/documentation/)

Q: Where can I watch video tutorials?
R: [https://wp-filter.com/video-tutorials/](https://wp-filter.com/video-tutorials/)


== Screenshots ==

1. Settings - tab-1
2. Settings - tab-2
3. Settings - tab-3
4. Settings - tab-4
5. Settings - tab-5
6. Settings - tab-6
7. Settings - tab-7
8. Settings - tab-8
9. Settings - shortcodes
10. Settings - sort panels
11. Settings - constant links



== Changelog ==

= 1.2.4 =
- minor fixes and adaptation for woocommerce v.3.3.1
- previous version: https://wp-filter.com/wp-content/uploads/2018/02/wp-meta-data-filter-and-taxonomy-filter-1.2.3.zip

= 1.2.3 =
- https://wp-filter.com/update-v-2-2-3-v-1-2-3/

= 1.2.2 =
- https://wp-filter.com/update-v-2-2-2-v-1-2-2/
- see previous version of the plugin here: https://wp-filter.com/wp-content/uploads/2017/08/wp-meta-data-filter-and-taxonomy-filter-1.2.1.zip

= 1.2.1 =
- Minor fixes
- New filter item: Multiple checkbox select - in premium only for taxonomies
- New option: Range slider skin
- New option: Init plugin scripts on the next site pages only
- New option: JavaScript code after AJAX is done
- New option: Sort options by alphabetical order
- New option: Custom CSS code
- New feature: Cache terms
- mdf_search_is_going - CSS class in tag body if searching is going
- $args = apply_filters('mdf_custom_shortcode_query_args', $args, $custom_id); - wp-filter for shortcode [mdf_custom] 
- //require plugin_dir_path(__FILE__) . 'ext/utilities.php'; - not documented extension in index.php

= 1.2.0 =
- WordPress 4.3 compatibility
- New shortcode mdf_select_title for drop-down in meta constructor
Example: echo do_shortcode('[mdf_select_title post_id=117 meta_key=medafi_fashion]');
print_r(MetaDataFilterCore::get_val_as_select_title(139,'medafi_fashion', 'africa'));
- Cron for cleaning dynamic recount cache
- Different overlay skins in the plugin options for front of site
- Sort options by alphabetical order for drop-down in meta constructor
- Keys in drop-down in meta constructor can be with spaces, any customer wants

= 1.1.9 =
A lot of improvements. Attention for codecanyon customers - do not update to this version - it is the free one and have less functionality!!! Download your copy of the plugin you bought from codecanyon site only!

= 1.0.7 =
Search links became short

= 1.0.6 =
Some fixes and improvements

= 1.0.5 =
A lot of fixes and improvements

= 1.0.4 =
Fixed bug with empty result page. To resolve it added new shortcode 
<?php do_shortcode('[mdf_force_searching]') ?>. It is just enough open in your theme header.php in wordpress editor and drop this shortcode on the same bottom of the file.

= 1.0.3 =
Added auto submit for meta fileds. Added ion.range-slider javascript for beauty range-sliders

= 1.0.2 =
Some php notices are removed. Reset button is added.

= 1.0.1 =
1 bug is fixed

= 1.0.0 =
Plugin is released. Operate all the basic functions.
If you want more functionality, look here: https://wp-filter.com/a/buy



== License ==

This plugin is copyright pluginus.net &copy; 2012-2018 with [GNU General Public License][] by realmag777.

This program is free software; you can redistribute it and/or modify it under the terms of the [GNU General Public License][] as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY. See the GNU General Public License for more details.

[GNU General Public License]: http://www.gnu.org/copyleft/gpl.html



== Upgrade Notice ==
Look here for full functionality plugin and updates: https://wp-filter.com/a/buy

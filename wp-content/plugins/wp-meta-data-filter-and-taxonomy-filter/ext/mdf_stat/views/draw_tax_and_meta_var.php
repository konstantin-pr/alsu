<?php
if (!defined('ABSPATH')) {
    die('No direct access allowed');
}
?>
<div id="mdf_stat_redraw_var">
    <?php
    if (!empty($tax)) {
        ?>
        <select id="mdf_stat_snippet_tax"  multiple="" class="chosen_select" >
            <?php
            foreach ($all_tax as $key => $value) {
                if (!in_array($key, $tax)) {
                    continue;
                }
                ?>
                <option value="<?php echo $key; ?>"><?php echo $value->label; ?></option>
                <?php
            }
            ?>
        </select>&nbsp;<?php _e('Taxonomies', 'meta-data-filter') ?><br />
        <?php
    }

    if (!empty($meta)) {
        ?>

        <select id="mdf_stat_snippet_meta"  multiple="" class="chosen_select" >
            <?php
            foreach ($meta as $value) {
                ?>
                <option value="<?php echo trim($value) ?>"><?php echo $value ?></option>
                <?php
            }
            ?>
        </select>&nbsp;<?php _e('Meta keys', 'meta-data-filter') ?><br />
        <?php
    }
    ?>   </div>


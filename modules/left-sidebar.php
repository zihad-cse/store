<div class="sidenav" id="sidenav">
    <?php
    foreach ($menuList as $category) {
        if (array_key_exists($category, $categoryMenuList)) {
            $secondSubMenu = $categoryMenuList[$category];
            if (count($secondSubMenu) > 0) { ?>
                <button onclick="hideLoadMore()" id="categoryTarget" data-category="<?php echo $categoryItems[$category]->groupid; ?>" class="dropdown-btn"><?php echo $categoryItems[$category]->groupname; ?>
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-container">
                    <?php foreach ($secondSubMenu as $subMenu) {
                        if (array_key_exists($subMenu, $categoryMenuList)) {
                            $thirdSubMenu = $categoryMenuList[$subMenu];
                            if (count($thirdSubMenu) > 0) { ?>
                                <button onclick="hideLoadMore()" data-category="<?php echo $categoryItems[$subMenu]->groupid; ?>" class="dropdown-btn"><?php echo $categoryItems[$subMenu]->groupname; ?>
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="sub-dropdown-container">
                                    <?php
                                    foreach ($thirdSubMenu as $subMenu) { ?>
                                        <button onclick="hideLoadMore()" data-category="<?php echo $categoryItems[$subMenu]->groupid; ?>" class="dropdown-btn"><?php echo $categoryItems[$subMenu]->groupname; ?>
                                            <i class="fa fa-caret-down"></i>
                                        </button>
                                        <div></div>
                                    <?php }
                                    ?>
                                </div>
                        <?php
                            }
                        }
                        ?>
                    <?php } ?>
                </div>
            <?php }
        } else {
            ?>
            <button onclick="hideLoadMore()" id="categoryTarget" data-category="<?php echo $categoryItems[$category]->groupid; ?>" class="dropdown-btn"><?php echo $categoryItems[$category]->groupname; ?>
                <i class="fa fa-caret-down"></i>
            </button>
    <?php }
    } ?>
</div>
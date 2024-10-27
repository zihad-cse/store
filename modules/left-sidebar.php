

<div class="sidenav" id="sidenav">
<?php foreach($categoryData as $category){ ?>
    <button data-category="<?php echo $category->categoryID ?>" class="dropdown-btn"><?php echo $category->categoryName ?>
        <i class="fa fa-caret-down"></i>
    </button>
    <!-- <div class="dropdown-container">
        <a class="sub-dropdown-btn" href="#"><i class="fa fa-caret-down caret-icon"></i>Link 1</a>
        <div class="sub-dropdown-container">
            <a href="">Sub Link 1</a>
            <a href="">Sub Link 2</a>
            <a href="">Sub Link 3</a>
        </div>
        <a class="sub-dropdown-btn" href="#"><i class="fa fa-caret-down caret-icon"></i> Link 2</a>
        <div class="sub-dropdown-container">
            <a href="">Sub Link 1</a>
            <a href="">Sub Link 2</a>
            <a href="">Sub Link 3</a>
        </div>
        <a class="sub-dropdown-btn" href="#"><i class="fa fa-caret-down caret-icon"></i> Link 3</a>
        <div class="sub-dropdown-container">
            <a href="">Sub Link 1</a>
            <a href="">Sub Link 2</a>
            <a href="">Sub Link 3</a>
        </div>
    </div> -->
    <?php }?>
</div>
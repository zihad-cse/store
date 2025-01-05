<div class="sidenav" id="sidenav">

<?php foreach($categoryData as $category){ ?>
    <button onclick="hideLoadMore()" data-category="<?php echo $category->categoryID ?>" class="dropdown-btn"><?php echo $category->categoryName ?>
        <i class="fa fa-caret-down"></i>
    </button>
    <?php }?>
</div>
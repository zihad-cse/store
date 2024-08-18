<!-- Products list -->

<div id="content-wrapper-div" class="content-wrapper d-grid"></div>

<!-- Cart section -->

<?php include_once "cart.php"; ?>

<!-- Checkout Section -->

<?php include_once "checkout.php"; ?>

<!-- Selected Product Section -->

<?php include_once "product.php"; ?>

<!-- debug button -->

<?php if (isset($_GET['debug'])) { ?>
    <button class="btn-primary" style="margin-left: 300px;" id="eraseLocalStorage">Clear Cart</button>
<?php } ?>

<!-- Featured Categories and other carousels -->

<div class="main-content-categories">
    <div class="mc-cat-wrapper" id="mc-cat-wrapper">
        <div class="mc-cat-inner">
            <div class="mc-cat-text">
                <h2>Computers</h2>
                <button>Shop Now -></button>
            </div>
        </div>
        <div class="mc-cat-inner">
            <div class="mc-cat-text">
                <h2>Mobile</h2>
                <button>Shop Now -></button>
            </div>
        </div>
        <div class="mc-cat-inner">
            <div class="mc-cat-text">
                <h2>Tools</h2>
                <button>Shop Now -></button>
            </div>
        </div>
    </div>
</div>
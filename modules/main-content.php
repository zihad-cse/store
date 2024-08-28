<!-- Products list -->

<div id="content-wrapper-div" class="content-wrapper d-grid"></div>
<!-- <div class="testContentWrapper">
    <div id="itemId" class="item d-flex flex-column" data-prod-id='99' data-category='4' data-prod-name='Jello' data-prod-price='222'>
        <div class="item-viewing-trigger">
            <div class="item-picture">
                <img class="item-picture-img" style="max-height: 160px; max-width: 160px;" src="" alt="">
            </div>
            <div class="item-desc text-start">
                <div id='itemCategoryDiv' class="item-desc-category">
                    <a class="text-decoration-none item-desc-category-link" href="">${randomCatName}</a>
                </div>
                <div class="item-desc-title">
                    <p class="text-decoration-none item-desc-title-link" href="">${randomName} </p>
                </div>
                <div class="item-desc-price">
                    <span class="item-desc-price-inner">৳${randomPrice}</span>
                    <span class="float-end"></span>
                </div>
                <div id='itemCatNum' style="visibility:hidden;">
                    ${randomCategoryNum}
                </div>
            </div>
        </div>
        <div class="">
            <button class='d-block item-desc-add'>Add to Cart</button>
            <div class='in-cart-qty d-none'>
                <div class='in-cart-qty-dec'>
                    -
                </div>
                <div class='in-cart-qty-val'>
                    <input class='in-cart-qty-val-input' type="number" min='0' value='1'>
                </div>
                <div class='in-cart-qty-inc'>
                    +
                </div>
            </div>
        </div>
    </div>
</div> -->

<!-- Cart section -->

<?php include_once "cart.php"; ?>

<!-- Checkout Section -->

<?php include_once "checkout.php"; ?>

<!-- Selected Product Section -->

<?php include_once "product.php"; ?>

<!-- debug button -->

<?php if (isset($_GET['debug'])) { ?>
    <div>
        <div style="width: fit-content; margin-left:320px;" id='testDiv' class="btn-primary" data-id='12' data-price='1200'>
            Local Storage
        </div>
        <div style="width: fit-content; margin-left:320px;" id='removeDiv' class="btn-primary" data-id='12' class="btn-primary">
            Delete Item
        </div>
        <div style="width: fit-content; margin-left:320px;" id="displayDiv" class="d-none btn-primary">

        </div>
    </div>
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
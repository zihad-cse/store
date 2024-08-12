<div id="productWrapper" class="product-wrapper d-none">
    <div class="product-page-header">
        <button class="mt-2 mb-2 p-3 btn color-primary product-back-button"><i class="fa-solid fa-arrow-left"></i></button>
        <p>Pathing > Goes > Here</p>
    </div>

    <div class="product-container">
        <div class="product-img-wrapper">
                <div class="product-img-container">
                    <img class="product-img" src="" onclick="openImage(this.src)" alt="Product Image">
                </div>
            <div class="product-img-select">
                <div class="product-img-thumbnail-container">
                    <div class="product-img-thumbnail product-img-thumbnail-active">
                        <img src="https://daccastore.erp.place/erp/companies/daccastore/part_pics/1.jpeg" alt="">
                    </div>
                </div>
                <!-- <div class="product-img-thumbnail-container">
                    <div class="product-img-thumbnail">
                        <img src="https://daccastore.erp.place/erp/companies/daccastore/part_pics/2.jpeg" alt="">
                    </div>
                </div>
                <div class="product-img-thumbnail-container">
                    <div class="product-img-thumbnail">
                        <img src="https://daccastore.erp.place/erp/companies/daccastore/part_pics/3.jpeg" alt="">
                    </div>
                </div> -->
            </div>
        </div>
        <div class="m-4 product-desc-wrapper">
            <div class="product-desc-title">
                <h2></h2>
            </div>
            <div class="product-desc-category">
                <a class="text-decoration-none" href=""></a>
            </div>
            <div class="mt-1 product-desc-price">
                <span></span>
            </div>
            <div class="mx-1 product-desc-mini-description">
                <p>This is an average non-special detail section for this item. This item is fake, do not look too much into it. This is written as an example only.</p>
            </div>
            <div class="mx-1 product-desc-cart">
                <div>
                    <button class="qnty-decrement" aria-label="Decrease Value" onclick="cartQty.stepDown()">-</button>
                    <input id="cartQty" class="product-desc-cart-qnty text-center" type="number" value="1" min="1">
                    <button class="qnty-increment" aria-label="Increase Value" onclick="cartQty.stepUp()">+</button>
                </div>
                <div class="product-desc-cart-btn">
                    <button><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    <div class="product-full-desc">
        <div class="product-full-desc-buttons">
            <button class="active-primary-btn">Description</button>
            <button class="inactive">Tags</button>
            <button class="inactive">Questions</button>
        </div>
        <div class="product-full-desc-main">
            <p>This is a standard description that is supposed to be descriptive. It is supposed to be descriptive because it knows that it should be but cannot because it actually has no free will. <br>
                <b>Specifications:</b>
            <ul>
                <li>Length: At least 2 apples</li>
                <li>Color: Whale</li>
                <li>Warranty: I don't know</li>
            </ul>
            <strong>Note: This is not a cat</strong>
            </p>
            <h2>Packaging and Delivery</h2>
            <hr>
            <span>This will be wrapped in tinfoil and will be contained within a Pringles Can.</span>
        </div>
    </div>
</div>
<!-- Products list -->

<div id="content-wrapper-div" class="content-wrapper d-none"></div>

<!-- Cart section -->

<?php include_once "cart.php"; ?>

<!-- Checkout Section -->

<?php include_once "checkout.php"; ?>

<!-- Selected Product Section -->

<?php include_once "product.php"; ?>


<div class="payment-page-wrapper">
    <div style="padding: 30px; margin-left: 300px; margin-right: 300px;" class="payment-page-container">
        <div style="background-color: #F3FBFB; padding: 10px; margin: 10px;" class="payment-page-inner-container">
            <div class="cart-detail-view-title">
                <div>
                    <h3>Payment</h3>
                </div>
                <div class="cart-detail-view-title-path">
                    <p><a class="text-decoration-none text-primary" href="">Home</a> > Path > Path</p>
                </div>
            </div>
            <div class="payment-page-detail-container d-flex space-between">
                <div style="background-color: #FFF; padding: 10px; margin: 10px;" class="payment-page-payment-section">
                    <div style="padding: 20px;" class="payment-section-container">
                        <h3>Select a Payment Method:</h3>
                        <select  name="paymentOption" id="paymentOption">
                            <option selected value="none">Select an Option</option>
                            <option value="1">Card</option>
                            <option value="2">Mobile Wallet (e.g. Bkash, Nagad, Rocket)</option>
                            <option value="3">Cash On Delivery</option>
                        </select>
                        <div class="payment-method-container">
                            <div class="payment-method-card-container">
                                <h4>Saved Cards:</h4>
                                <div class="payment-method-saved-cards-list">
                                    
                                </div>
                            </div>
                            <div class="payment-method-mobile-wallet-container">

                            </div>
                            <div class="payment-method-cod-container">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="payment-page-detail-cart-summary">
                    <div class="checkout-cart-wrapper">
                        <div class="checkout-cart-summary">
                            <div>
                                <h3>Your Cart:</h3>
                            </div>
                            <div class="checkout-cart-items-list">
                            </div>
                            <hr style="color: #ececec;">
                            <div class="checkout-cart-prices">
                                <h3>Price:</h3>
                                <div class="mb-3 d-flex space-between">
                                    <strong>Subtotal:</strong>
                                    <span class="checkoutSumTotal"></span>
                                </div>
                                <div class="mt-3 d-flex space-between">
                                    <strong>Shipping:</strong>
                                    <span>৳0</span>
                                </div>
                            </div>
                            <hr style="color: #ececec;">
                            <div class="mt-3 d-flex space-between">
                                <strong>Total:</strong>
                                <span class="checkoutSumTotal"></span>
                            </div>
                            <hr style="color: #ececec;">
                            <div class="checkout-cart-buttons">
                                <div class="checkout-cart-payment">
                                    <button>Proceed to Payment</button>
                                </div>
                                <div onclick="editCartFromCheckout()" class="checkout-back-to-cart">
                                    <button class="checkout-back-to-cart-btn">Edit Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

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
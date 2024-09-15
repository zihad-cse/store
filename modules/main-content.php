<!-- Products list -->

<div id="content-wrapper-div" class="content-wrapper d-grid"></div>

<!-- Cart section -->

<?php include_once "cart.php"; ?>

<!-- Checkout Section -->

<?php include_once "checkout.php"; ?>

<!-- Selected Product Section -->

<?php include_once "product.php"; ?>


<div class="payment-page-wrapper d-none">
    <div style="padding: 30px; margin-left: 300px; margin-right: 300px;" class="payment-page-container">
        <div style="background-color: #F3FBFB; padding: 10px; border-radius:10px;" class="payment-page-inner-container">
            <div class="cart-detail-view-title">
                <div>
                    <h3>Payment</h3>
                </div>
            </div>
            <div class="payment-page-detail-container d-flex flex-center">
                <div style="background-color: #FFF; margin: 10px;" class="payment-page-mobile-wallet-section d-none">
                    <div style="padding: 20px;" class="payment-section-container">
                        <b>Select a service:</b>
                        <div class="payment-mo-wallet-agents mt-3 mb-3">
                            <input id="payment_bkash" name="paymentMobileWallets" type="radio">
                            <label for="payment_bkash">Bkash</label>
                            <input id="payment_nagad" name="paymentMobileWallets" type="radio">
                            <label for="payment_nagad">Nagad</label>
                            <input id="payment_rocket" name="paymentMobileWallets" type="radio">
                            <label for="payment_rocket">Rocket</label>
                        </div>
                        <div class="payment-mo-wallet-number mt-3 mb-3 d-flex flex-column">
                            <label class="mt-2 mb-2" for="paymentMobile">Number:</label>
                            <input id="paymentMobile" type="text">
                        </div>
                        <div class="mt-3 mb-3">
                            <button class="payment_submit btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
                <div style="background-color: #FFF; margin: 10px;" class="payment-page-card-section d-none">
                    <div style="padding: 20px;" class="payment-section-container">
                        <div>
                            <h3>Select a service:</h3>
                            <input id="payment_bkash" name="paymentMobileWallets" type="radio">
                            <label for="payment_bkash">American Express</label>
                            <input id="payment_nagad" name="paymentMobileWallets" type="radio">
                            <label for="payment_nagad">Visa</label>
                            <input id="payment_rocket" name="paymentMobileWallets" type="radio">
                            <label for="payment_rocket">Mastercard</label>
                        </div>
                        <div>
                            <h3>Card Details:</h3>
                            <label for="cardHolder_Name">Card Holder Name</label>
                            <input class="form-input-text" id="cardHolder_Name" type="text">
                            <div class="d-flex flex-row">
                                <input placeholder="Card Number" class="form-input-text" id="card_number" type="text">                                
                                <input placeholder="Exp Date" class="form-input-text" id="card_exp" type="text">
                                <input placeholder="CVV" class="form-input-text" id="card_cvv" type="text">
                            </div>
                            <div>
                                <button class="payment_submit btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="background-color: #FFF; margin: 10px;" class="payment-page-cod-section d-none">
                    <div style="padding: 20px;" class="payment-section-container">
                        <h3>Cash on Delivery:</h3>
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
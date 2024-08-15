<div class='checkout-view-wrapper d-none'>
    <div class="cart-detail-view-container">
        <div class="cart-detail-view-title">
            <div>
                <h3>Checkout</h3>
            </div>
            <div class="cart-detail-view-title-path">
                <p>Pathing > Goes > Here</p>
            </div>
        </div>
        <div class="checkout-main-section d-flex">
            <div class="checkout-form-wrapper">
                <h3>Billing Details</h3>
                <div class="checkout-billing-form-container">
                    <form class="checkout-billing-form-container d-flex" action="">
                        <div class="billing-form-name d-flex flex-column">
                            <label for="fullName">Full Name*</label>
                            <input id="fullName" type="text">
                        </div>
                        <div class="billing-form-deliv-area d-flex flex-column">
                            <label for="delivArea">Delivery Area*</label>
                            <select name="delivArea" id="delivArea">
                                <option selected value="">Select a Delivery Area</option>
                                <option value="1">Area 1</option>
                                <option value="2">Area 2</option>
                                <option value="3">Area 3</option>
                                <option value="4">Area 4</option>
                            </select>
                        </div>
                        <div class="delivery-form-address d-flex flex-column">
                            <label for="deliveryAddress">Delivery Address*</label>
                            <input id="deliveryAddress" type="text">
                        </div>
                        <div class="delivery-form-p-contact d-flex flex-column">
                            <label for="primaryContact">Primary Contact*</label>
                            <input id="primaryContact" type="text">
                        </div>
                        <div class="delivery-additional-contact d-flex flex-column">
                            <label for="additionalContact">Additional Contact (Optional)</label>
                            <input id="additionalContact" type="text">
                        </div>
                        <div class="delivery-billing-email d-flex flex-column">
                            <label for="billingEmail">Email</label>
                            <input type="email">
                        </div>
                        <h4>Additional Instructions</h4>
                        <div class="delivery-order-notes d-flex flex-column">
                            <label for="deliverOrderNotes">Order Notes (Optional)</label>
                            <textarea style="resize: none; height: 150px; " name="deliverOrderNotes" id="deliverOrderNotes"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="checkout-cart-wrapper">
                <div class="checkout-cart-summary">
                    <div>
                        <h3>Your Cart:</h3>
                    </div>
                    <div class="cart-items-list">
                        <div class="cart-item-wrapper">
                            <div class="cart-item-img">
                                <img src="https://daccastore.erp.place/erp/companies/daccastore/part_pics/1.jpeg" alt="">
                            </div>
                            <div class="cart-item-desc">
                                <div class="cart-item-title">
                                    <p>USB Cable A</p>
                                </div>
                                <div class="cart-item-price">
                                    <p>৳250</p>
                                </div>
                                <div class="cart-item-qty">
                                    <p>x1</p>
                                </div>
                            </div>
                            <div class="cart-item-remove">
                                <img src="img/remove-button.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <hr style="color: #ececec;">
                    <div class="checkout-cart-prices">
                        <h3>Price:</h3>
                        <div class="mb-3 d-flex space-between">
                            <strong>Subtotal:</strong>
                            <span>৳250</span>
                        </div>
                        <div class="mt-3 d-flex space-between">
                            <strong>Shipping:</strong>
                            <span>৳0</span>
                        </div>
                    </div>
                    <hr style="color: #ececec;">
                    <div class="mt-3 d-flex space-between">
                        <strong>Total:</strong>
                        <span>৳250</span>
                    </div>
                    <hr style="color: #ececec;">
                    <div class="checkout-cart-buttons">
                        <div class="checkout-cart-payment">
                            <button>Proceed to Payment</button>
                        </div>
                        <div class="checkout-back-to-cart">
                            <button>Edit Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
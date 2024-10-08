<div id="cart-detail-view-wrap" class="d-none">
    <div class="cart-detail-view-container">
        <div class="cart-detail-view-title">
            <div>
                <h3>Cart</h3>
            </div>
            <div class="cart-detail-view-title-path">
                <p><a class="text-decoration-none text-primary" href="">Home</a> > Path > Path</p>
            </div>
        </div>
        <div class="cart-detail-list">
            <div class="cart-detail-list-main">
                <div class="cart-list">
                    <div class="cart-detail-list-header">
                        <h2>Items in your cart</h2>
                    </div>
                    <table>
                        <thead class="cart-list-thead">
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody class="cart-list-tbody">
                        </tbody>
                    </table>
                </div>
                <div id="updateBtnsWrapper" class="mt-2 ms-2 d-none">
                    <button id="updateCartBtn" style="float: right; border-radius: 15px" class="btn-primary">Update Cart</button>
                </div>
                <div class="cart-list-bottom-portion">
                    <div class="cart-list-pricing-wrapper">
                        <div class="cart-list-pricing-inner-wrapper">
                            <div class="cart-list-pricing-header">
                                <h3>Cart Total</h3>
                            </div>
                            <div class="cart-list-pricing-subtotal">
                                <div>
                                    <p>Subtotal</p>
                                </div>
                                <div>
                                    <p class="cart-list-total">250৳</p>
                                </div>
                            </div>
                            <div class="cart-list-pricing-total">
                                <div>
                                    <p>Total</p>
                                </div>
                                <div>
                                    <p class="cart-list-total">250৳</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cart-list-checkout-buttons">
                        <button onclick="closeCartDetails()" class="cart-list-dismiss-btn">Back to shopping</button>
                        <button onclick="checkoutViewOpen(); initiateCheckoutPage()" class="cart-list-checkout">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="no-items-in-cart-wrapper d-none">
        <div class="no-items-in-cart-container">
            <img style="height: 300px;" src="img/empty.png" alt="">
            <h3>There are no items in your cart.</h3>
            <h5 onclick="closeCartDetails(); initializeCart();">Back To Shopping</h5>
        </div>
    </div>
</div>
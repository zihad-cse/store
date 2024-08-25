<div class="right-sidebar-cart-wrapper d-none">
    <div class="right-sidebar-cart-dismiss">
        <div class="total-items-in-cart"></div>
        <div onclick="cartDisappear()" class="right-sidebar-cart-dismiss-btn">
            <i class="fa-regular fa-circle-xmark"></i>
        </div>
    </div>
    <div class="no-items-in-cart d-none">
        <div class="no-items-in-cart-img">
            <img style="width: 250px;" src="img/empty.png" alt="">
        </div>
        <div class="no-items-in-cart-desc">
            <h3>Your cart is empty.</h3>
            <strong onclick="cartDisappear()">Continue Shopping</strong>
        </div>
    </div>
    <div class="items-in-cart d-block">
        <div class="cart-items-list"></div>
    </div>
    <div class="right-sidebar-cart-checkout d-flex flex-center">
        <button onclick="checkoutViewOpen(); cartDisappear()">
            Checkout
        </button>
    </div>
    <div class="right-sidebar-cart-view d-flex flex-center d-none">
        <button onclick="openCartDetails(); cartDisappear(); initiateCartPage();">
            View Cart
        </button>
    </div>
</div>
<div class="right-sidebar">
    <div class="d-flex flex-column">
        <div class="col-12 py-2 advert-image-container">
            <img src="img/ad-example-1.png" alt="">
        </div>
        <div class="col-12 py-2">
            <img style="width: 290px; height: 290px; object-fit: cover;" src="img/ad-example-2.png" alt="">
        </div>
        <div class="col-12 py-2">
            <img style="width: 290px; height: 290px;" src="img/ad-example-3.png" alt="">
        </div>
    </div>
</div>
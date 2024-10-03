// dropdown burger button 


//Scroll to top action

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' });
}

var view830px = window.matchMedia("(max-width: 830px)");

//Navbar Open and Close start

function openNav() {
    const sidebar = document.getElementById("sidenav");
    sidebar.style.width = "300px";
    sidebar.style.opacity = "1";
    sidebar.style.visibility = "visible";
    if (!view830px.matches) {
        document.getElementById("content-wrapper-div").style.marginLeft = "300px";
        document.getElementById("footer").style.marginLeft = "300px";
        document.getElementById("mc-cat-wrapper").style.marginLeft = "300px";
        document.getElementById("productWrapper").style.marginLeft = "300px";
        document.getElementById("productWrapper").style.marginRight = "300px";
        document.getElementById("cart-detail-view-wrap").style.marginRight = "300px";
        document.getElementById("cart-detail-view-wrap").style.marginLeft = "300px";
        document.querySelector(".checkout-view-wrapper").style.marginRight = "300px";
        document.querySelector(".checkout-view-wrapper").style.marginLeft = "300px";
    }
    document.querySelector(".left-sidebar-burger").setAttribute("onclick", "closeNav()");
}
function closeNav() {
    const sidebar = document.getElementById("sidenav");
    sidebar.style.width = "0px";
    sidebar.style.opacity = "0";
    sidebar.style.visibility = "hidden";
    document.getElementById("content-wrapper-div").style.marginLeft = "0px";
    document.getElementById("footer").style.marginLeft = "0px";
    document.getElementById("mc-cat-wrapper").style.marginLeft = "0px";
    document.getElementById("productWrapper").style.marginLeft = "0px";
    document.getElementById("productWrapper").style.marginRight = "0px";
    document.getElementById("cart-detail-view-wrap").style.marginLeft = "0px";
    document.querySelector(".checkout-view-wrapper").style.marginLeft = "0px";
    document.querySelector(".checkout-view-wrapper").style.marginRight = "0px";
    document.querySelector(".left-sidebar-burger").setAttribute("onclick", "openNav()");
}


function navButtonAction(view830px) {
    if (view830px.matches) {
        closeNav();
        document.getElementById("cart-detail-view-wrap").style.marginRight = "0px";
    } else {
        openNav();
        document.getElementById("cart-detail-view-wrap").style.marginRight = "300px";
    }
}

navButtonAction(view830px);

view830px.addEventListener("change", function () {
    navButtonAction(view830px);
});

// Homepage Banner Disappearance 

function bannerVisNone(){
   const homePageBanner = document.getElementById('homePageBanner');
   homePageBanner.classList.add('d-none');
}

//Sidenav button dropdowns

var sideNavWrapper = document.getElementById('sidenav');
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

let currentOpenDropdown = null;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        for (j = 0; j < dropdown.length; j++) {
            if (dropdown[j] !== this) {
                let otherDropdownContent = dropdown[j].nextElementSibling;
                let otherDropdownCaret = dropdown[j].querySelector(".fa-caret-down");
                dropdown[j].classList.remove('active');
                otherDropdownCaret.classList.remove('.expanded-rotate');
                otherDropdownContent.classList.remove('visible');
            }
        }
        var dropdownContent = this.nextElementSibling;
        var dropdownCaret = this.querySelector(".fa-caret-down");
        this.classList.toggle('active')
        dropdownContent.classList.toggle("visible");
        dropdownCaret.classList.toggle("expanded-rotate");
        bannerVisNone();
    });
}


var subDropdown = document.getElementsByClassName("sub-dropdown-btn");
var i;

for (i = 0; i < subDropdown.length; i++) {
    subDropdown[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        var dropdownCaret = this.querySelector(".fa-caret-down");
        this.classList.toggle('active')
        dropdownContent.classList.toggle("visible");
        dropdownCaret.classList.toggle("expanded-rotate");
    });
}




// Product Image Zoom



const container = document.querySelector('.product-img-container');
const image = document.querySelector('.product-img');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    image.style.transform = 'scale(1.5)';
});

container.addEventListener('mouseleave', () => {
    image.style.transformOrigin = 'center center';
    image.style.transform = 'scale(1)';
    image.style.zIndex = '1';
});

// Product Image Picker

const mainImage = document.querySelector('.product-img');
const thumbnails = document.querySelectorAll('.product-img-thumbnail img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
        mainImage.style.transformOrigin = 'center center';
        mainImage.style.transform = 'scale(1)';
        mainImage.style.zIndex = '1';

        thumbnails.forEach(th => th.parentElement.classList.remove('product-img-thumbnail-active'));

        thumbnail.parentElement.classList.add('product-img-thumbnail-active');
    });
});

//Opening image in new tab on click

function openImage(imgurl) {
    window.open(imgurl, '_blank');
}

//Product Viewing


document.querySelector('.content-wrapper').addEventListener('click', function (event) {
    if (event.target && event.target.closest('.item-viewing-trigger')) {
        event.preventDefault();

        const item = event.target.closest('.item');

        const itemDataAttributes = item.dataset;

        const storedData = {
            name: itemDataAttributes.prodName,
            id: itemDataAttributes.prodId,
            category: itemDataAttributes.category,
            price: itemDataAttributes.prodPrice
        }

        const itemID = storedData.id;
        const itemCat = storedData.category;
        const itemName = storedData.name;
        const itemPrice = storedData.price;

        const categoryName = catNames[itemCat];

        const imageSection = item.querySelector('.item-picture');
        const itemDesc = item.querySelector('.item-desc');
        const imageSrc = imageSection.querySelector('img').src;
        const itemCategory = itemDesc.querySelector('.item-desc-category');
        const itemTitle = itemDesc.querySelector('.item-desc-title');
        const adSidebar = document.querySelector('.right-sidebar');
        const listWrapper = document.querySelector('.content-wrapper');
        const productDetails = document.querySelector('.product-wrapper');

        listWrapper.classList.remove('d-grid');
        listWrapper.classList.add('d-none');
        productDetails.classList.remove('d-none');
        adSidebar.classList.add('d-none');

        if (cartItems) {
            for (const key in cartItemsAsObj) {
                if (key === itemID) {
                    let qtyFromCartItems = cartItemsAsObj[key].quantity;
                    document.querySelector('.in-cart-warning').classList.remove('d-none');
                    document.querySelector('.in-cart-warning').classList.add('d-flex');
                    document.querySelector('.product-desc-cart-btn').classList.add('product-desc-cart-btn-disabled');
                    document.querySelector('.product-desc-cart-btn').innerHTML = 'Item In Cart';
                    document.querySelector('.product-page-desc-cart-qnty').value = qtyFromCartItems;
                    document.querySelector('.product-qnty-increment').classList.add('product-qnty-disabled');
                    document.querySelector('.product-qnty-decrement').classList.add('product-qnty-disabled');
                    document.getElementById('cartQty').disabled = true;
                    break;
                } else {
                    document.querySelector('.in-cart-warning').classList.add('d-none');
                    document.querySelector('.in-cart-warning').classList.remove('d-flex');
                    document.querySelector('.product-desc-cart-btn').classList.remove('product-desc-cart-btn-disabled');
                    document.querySelector('.product-desc-cart-btn').innerHTML = '<i class="fa-solid fa-cart-plus"></i> Add to Cart';
                    document.querySelector('.product-page-desc-cart-qnty').value = "1";

                }
            }
        }

        document.querySelector('.product-img').src = imageSrc;
        document.querySelector('.product-img-thumbnail img').src = imageSrc;
        document.querySelector('.product-desc-title h2').innerHTML = `${itemName}`;
        document.querySelector('.product-desc-category').innerHTML = `<a class="text-decoration-none" href="">${categoryName}</a>`;
        document.querySelector('.product-page-path-cat').innerHTML = categoryName;
        document.querySelector('.product-page-path-cat').setAttribute('data-cat', itemCat);
        document.querySelector('.product-container').setAttribute('data-id', itemID);
        document.querySelector('.product-container').setAttribute('data-price', itemPrice);
        document.querySelector('.product-container').setAttribute('data-name', itemName);
        document.querySelector('.product-page-path-name').innerHTML = itemName;
        document.querySelector('.product-desc-price').innerHTML = `<span>${itemPrice}</span>`;
        scrollToTop();
        bannerVisNone();
    };
});

// Actions within Product Page

document.querySelector('.product-wrapper').addEventListener('click', function (event) {
    if (event.target && event.target.closest('.product-back-button')) {
        document.querySelector('.content-wrapper').classList.remove('d-none');
        document.querySelector('.content-wrapper').classList.add('d-grid');
        document.querySelector('.product-wrapper').classList.add('d-none');
        document.querySelector('.right-sidebar').classList.remove('d-none');
    }
    if (event.target && event.target.closest('.product-desc-cart-btn')) {
        cartItemQty = document.querySelector('.product-page-desc-cart-qnty').value;
        productId = document.querySelector('.product-container').dataset.id;
        productPrice = document.querySelector('.product-container').dataset.price;
        productName = document.querySelector('.product-container').dataset.name;
        const newCartItem = {
            name: productName,
            price: productPrice,
            quantity: cartItemQty
        }
        updateCartItems(productId, cartItemQty);
        updateCartItemsAsObj(productId, newCartItem);
        updateItemDisplay(productId);
        initializeCart();
        countCart();
        if (cartItems) {
            for (const key in cartItemsAsObj) {
                if (key === productId) {
                    let qtyFromCartItems = cartItemsAsObj[key].quantity;
                    document.querySelector('.in-cart-warning').classList.remove('d-none');
                    document.querySelector('.in-cart-warning').classList.add('d-flex');
                    document.querySelector('.product-desc-cart-btn').classList.add('product-desc-cart-btn-disabled');
                    document.querySelector('.product-desc-cart-btn').innerHTML = 'Item In Cart';
                    document.querySelector('.product-page-desc-cart-qnty').value = qtyFromCartItems;
                    break;
                } else {
                    document.querySelector('.in-cart-warning').classList.add('d-none');
                    document.querySelector('.in-cart-warning').classList.remove('d-flex');
                    document.querySelector('.product-desc-cart-btn').classList.remove('product-desc-cart-btn-disabled');
                    document.querySelector('.product-desc-cart-btn').innerHTML = '<i class="fa-solid fa-cart-plus"></i> Add to Cart';
                    document.querySelector('.product-page-desc-cart-qnty').value = "1";

                }
            }
        }
    }
})



//Cart Actions

// Cart Preview Open

function cartAppear() {
    var cartSidebar = document.querySelector('.right-sidebar-cart-wrapper');
    var cartIcon = document.querySelector('.cart-wrapper');
    var itemsInCart = document.querySelector('.items-in-cart');
    cartSidebar.style.height = "75%";
    cartSidebar.style.opacity = "1";
    cartSidebar.style.visibility = "visible";
    cartIcon.setAttribute('onclick', 'cartDisappear()');

    if (!itemsInCart.classList.contains('d-block')) {
        var cartViewButton = cartSidebar.querySelector('.right-sidebar-cart-view');
        var cartCheckoutButton = cartSidebar.querySelector('.right-sidebar-cart-checkout');
        cartViewButton.classList.remove('d-flex');
        cartViewButton.classList.add('d-none');
        cartCheckoutButton.classList.remove('d-flex');
        cartCheckoutButton.classList.add('d-none');
    }
}

// Cart Preview Close

function cartDisappear() {
    var cartSidebar = document.querySelector('.right-sidebar-cart-wrapper');
    var cartIcon = document.querySelector('.cart-wrapper');
    cartSidebar.style.height = "0%";
    cartSidebar.style.opacity = "0";
    cartSidebar.style.visibility = "hidden";
    cartIcon.setAttribute('onclick', 'cartAppear()');
}

// Cart Page Open

function openCartDetails() {
    const listWrapper = document.querySelector('.content-wrapper');
    const cartDetails = document.getElementById('cart-detail-view-wrap');
    const checkoutView = document.querySelector('.checkout-view-wrapper');
    listWrapper.classList.remove('d-grid');
    listWrapper.classList.add('d-none');
    cartDetails.classList.remove('d-none');
    cartDetails.classList.add('d-block');
    if (checkoutView.classList.contains('d-block')) {
        checkoutView.classList.remove('d-block');
        checkoutView.classList.add('d-none');
    }
    if (!document.querySelector('.product-wrapper').classList.contains('d-none')) {
        document.querySelector('.product-wrapper').classList.add('d-none');
        document.querySelector('.right-sidebar').classList.remove('d-none');
    }
    bannerVisNone();
}

// Cart Page Close

function closeCartDetails() {
    const listWrapper = document.querySelector('.content-wrapper');
    const cartDetails = document.getElementById('cart-detail-view-wrap');
    listWrapper.classList.remove('d-none');
    listWrapper.classList.add('d-grid');
    cartDetails.classList.remove('d-block');
    cartDetails.classList.add('d-none');
}

// Checkout page Open

function checkoutViewOpen() {
    const listWrapper = document.querySelector('.content-wrapper');
    const checkoutView = document.querySelector('.checkout-view-wrapper');
    if (listWrapper.classList.contains('d-grid')) {
        listWrapper.classList.remove('d-grid');
        listWrapper.classList.add('d-none');
    } else {
        closeCartDetails();
        listWrapper.classList.remove('d-grid');
        listWrapper.classList.add('d-none');
    }
    checkoutView.classList.remove('d-none');
    checkoutView.classList.add('d-block');
    bannerVisNone();
}


function editCartFromCheckout() {
    const checkoutView = document.querySelector('.checkout-view-wrapper');
    const cartDetails = document.getElementById('cart-detail-view-wrap');
    cartDetails.classList.remove('d-none');
    cartDetails.classList.add('d-block');
    checkoutView.classList.remove('d-block');
    checkoutView.classList.add('d-none');
    initiateCartPage();
}

// Sets localstorage data with Cart ID and Qty
let itemDetails = {};
document.querySelector('.content-wrapper').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('item-desc-add')) {
        const addCartBtn = event.target;
        const cartItemQty = addCartBtn.nextElementSibling;
        const itemID = addCartBtn.closest('.item').dataset.prodId;
        const itemName = addCartBtn.closest('.item').dataset.prodName;
        const itemPrice = addCartBtn.closest('.item').dataset.prodPrice;
        addCartBtn.classList.remove('d-block');
        addCartBtn.classList.add('d-none');
        cartItemQty.classList.remove('d-none');
        cartItemQty.classList.add('d-flex');
        const inputField = cartItemQty.querySelector('.in-cart-qty-val-input');
        if (inputField) {
            inputField.value = 1;
        }
        itemDetails = {
            name: itemName,
            price: itemPrice,
            quantity: inputField.value
        }
        updateCartItemsAsObj(itemID, itemDetails);
        updateCartItems(itemID, inputField.value);
        initializeCart();
        countCart();
    }
});



function countCart() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) ?? [];
    let totalSum = 0;
    let cartCounter = document.querySelector('.total-items-in-cart');

    for (let key of Object.keys(cartItems)) {
        let value = cartItems[key];
        let numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            totalSum += numericValue;
        }
    }
    if (totalSum == 0) {
        cartCounter.classList.add('d-invisible');
        localStorage.removeItem('cartItems');
    }
    if (totalSum == 1) {
        if (cartCounter.classList.contains('d-invisible')) {
            cartCounter.classList.remove('d-invisible');
        }
        cartCounter.innerHTML = `<h4>Your cart has: ${totalSum} Item</h4>`;
    }
    if (totalSum > 1) {
        if (cartCounter.classList.contains('d-invisible')) {
            cartCounter.classList.remove('d-invisible');
        }
        cartCounter.innerHTML = `<h4>Your cart has: ${totalSum} Items</h4>`;
    }
}

// Login Registration Modal actions start

function openLoginRegModal() {
    const modal = document.getElementById('loginRegModal');
    modal.style.display = 'block';
    modal.style.opacity = 0;
    modal.style.transition = 'opacity 0.2s ease-in-out';
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 10);
}

document.querySelector('.account-wrapper').addEventListener('click', openLoginRegModal);

function closeModal() {
    const modal = document.getElementById('loginRegModal');
    modal.style.opacity = 0;
    modal.style.transition = 'opacity 0.2s ease-in-out';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
}

document.getElementById('modalDismiss').addEventListener('click', closeModal);

function switchToLogin() {
    const regSection = document.querySelector('.registration-form-main-content');
    const loginSection = document.querySelector('.login-form-main-content');

    regSection.classList.remove('d-flex');
    regSection.classList.add('d-none');
    loginSection.classList.remove('d-none');
    loginSection.classList.add('d-flex');
}

document.querySelector('.reg-page-switch-btn').addEventListener('click', switchToLogin);

function switchToReg() {
    const regSection = document.querySelector('.registration-form-main-content');
    const loginSection = document.querySelector('.login-form-main-content');

    regSection.classList.remove('d-none');
    regSection.classList.add('d-flex');
    loginSection.classList.remove('d-flex');
    loginSection.classList.add('d-none');
}

document.querySelector('.login-page-switch-btn').addEventListener('click', switchToReg);

// Login Registration Modal Actions end

const billSameShip = document.getElementById('billSameShip');

billSameShip.checked = true;
let billSameShipChecked = billSameShip.checked;

billSameShip.addEventListener('change', function () {
    billSameShipChecked = billSameShip.checked;
    console.log(billSameShipChecked);
    if (billSameShipChecked == false) {
        document.getElementById('billingDetailsForm').classList.add('d-block');
        document.getElementById('billingDetailsForm').classList.remove('d-none');
    }
    if (billSameShipChecked == true) {
        document.getElementById('billingDetailsForm').classList.add('d-none');
        document.getElementById('billingDetailsForm').classList.remove('d-block');
    }
})

// Carousel Actions Start

const carouselItems = document.querySelectorAll(".homepage-carousel-item");
var currentItem = 0;

const carouselPrevButton = document.querySelector(".carousel-nav-prev");
const carouselNextButton = document.querySelector(".carousel-nav-next");

carouselPrevButton.addEventListener("click", () => {
    currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

carouselNextButton.addEventListener("click", () => {
    currentItem = (currentItem + 1) % carouselItems.length;
    updateCarousel();
});

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.style.transform = `translateX(-${currentItem * 100}%)`;
    });
};

let intervalId;
let isPaused = false;

function startInterval() {
    intervalId = setInterval(() => {
        carouselItems.forEach((item, index) => {
            item.style.transform = `translateX(-${currentItem * 100}%)`;
        });
        currentItem = (currentItem + 1) % carouselItems.length;
    }, 5000);
}

function pauseInterval() {
    clearInterval(intervalId);
    isPaused = true;
}

function resumeInterval() {
    if (isPaused) {
        startInterval();
        isPaused = false;
    }
}

startInterval();
carouselItems.forEach(item => {
    item.addEventListener('mouseover', pauseInterval);
    item.addEventListener('mouseout', resumeInterval);
});

// Carousel Actions End
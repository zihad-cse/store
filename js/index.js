// dropdown burger button 


//Scroll to top action

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' });
}

var view830px = window.matchMedia("(max-width: 830px)");

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
    document.querySelector(".left-sidebar-burger").setAttribute("onclick", "openNav()");
}


function navButtonAction(view830px) {
    if (view830px.matches) {
        closeNav();
    } else {
        openNav();
    }
}

navButtonAction(view830px);

view830px.addEventListener("change", function () {
    navButtonAction(view830px);
});


//Category Number Generator (Test)

// const randomNumber = Math.floor(Math.random() * 10);
// const categoryDiv = document.getElementById('itemCategoryDiv');
// categoryDiv.textContent = randomNumber;

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
        const imageSection = item.querySelector('.item-picture');
        const itemDesc = item.querySelector('.item-desc');
        const imageSrc = imageSection.querySelector('img').src;
        const itemCategory = itemDesc.querySelector('.item-desc-category');
        const itemTitle = itemDesc.querySelector('.item-desc-title');
        const itemPrice = itemDesc.querySelector('.item-desc-price');
        const adSidebar = document.querySelector('.right-sidebar');
        const listWrapper = document.querySelector('.content-wrapper');
        const productDetails = document.querySelector('.product-wrapper');

        listWrapper.classList.remove('d-grid');
        listWrapper.classList.add('d-none');
        productDetails.classList.remove('d-none');
        adSidebar.classList.add('d-none');

        document.querySelector('.product-img').src = imageSrc;
        document.querySelector('.product-img-thumbnail img').src = imageSrc;
        document.querySelector('.product-desc-title h2').innerHTML = `${itemTitle}`;
        document.querySelector('.product-desc-category').innerHTML = `<a class="text-decoration-none" href="">${itemCategory}</a>`;
        document.querySelector('.product-desc-price').innerHTML = `<span>${itemPrice}</span>`;
        scrollToTop();

    };


});

document.querySelector('.product-wrapper').addEventListener('click', function (event) {
    if (event.target && event.target.closest('.product-back-button')) {
        document.querySelector('.content-wrapper').classList.remove('d-none');
        document.querySelector('.content-wrapper').classList.add('d-grid');
        document.querySelector('.product-wrapper').classList.add('d-none');
        document.querySelector('.right-sidebar').classList.remove('d-none');
    }
})

//Cart Actions

function cartAppear() {
    var cartSidebar = document.querySelector('.right-sidebar-cart-wrapper');
    var cartIcon = document.querySelector('.cart-wrapper');
    var itemsInCart = document.querySelector('.items-in-cart');
    cartSidebar.classList.remove('d-none');
    cartSidebar.classList.add('d-block');
    cartIcon.setAttribute('onclick', 'cartDisappear()');

    if (!itemsInCart.classList.contains('d-block')) {
        var cartViewButton = cartSidebar.querySelector('.right-sidebar-cart-view');
        var cartCheckoutButton = cartSidebar.querySelector('.right-sidebar-cart-checkout');
        cartViewButton.classList.remove('d-flex');
        cartViewButton.classList.add('d-none');
        cartCheckoutButton.classList.remove('d-flex');
        cartCheckoutButton.classList.add('d-none');
    }
    // else if (itemsInCart.classList.contains('d-block')) {
    //     var cartViewButton = cartSidebar.querySelector('.right-sidebar-cart-view');
    //     var cartCheckoutButton = cartSidebar.querySelector('.right-sidebar-cart-checkout');
    //     if (cartViewButton.classList.contains('d-none') && cartCheckoutButton.classList.contains('d-none')) {
    //         cartViewButton.classList.remove('d-none');
    //         cartViewButton.classList.add('d-flex');
    //         cartCheckoutButton.classList.remove('d-none');
    //         cartCheckoutButton.classList.add('d-flex');
    //     }
    // }
}

function cartDisappear() {
    var cartSidebar = document.querySelector('.right-sidebar-cart-wrapper');
    var cartIcon = document.querySelector('.cart-wrapper');
    cartSidebar.classList.remove('d-block');
    cartSidebar.classList.add('d-none');
    cartIcon.setAttribute('onclick', 'cartAppear()');
}
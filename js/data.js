const catNames = ['Advanced Kits', 'Antennas', 'Appliance', 'Audio', 'Automatic Light', 'Automatic Switch', 'AVR Microcontroller', 'Battery', 'Biometrics', 'Bluetooth'];

function fetchData() {
    $.ajax({
        url: 'data/data.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            let content = '';
            let itemID = 1;
            data.forEach(function (prod) {
                const randomCategoryNum = Math.floor(Math.random() * 10);
                const randomCatName = catNames[randomCategoryNum];
                content += `
                    <div id="itemId" class="item d-flex flex-column" data-prod-id='${itemID}' data-category='${randomCategoryNum}'>
                        <div class="item-viewing-trigger">
                            <div class="item-picture">
                                <img class="item-picture-img" style="max-height: 160px; max-width: 160px;" src="${prod}" alt="">
                            </div>
                            <div class="item-desc text-start">
                                <div id='itemCategoryDiv' class="item-desc-category">
                                    <a class="text-decoration-none item-desc-category-link" href="">${randomCatName}</a>
                                </div>
                                <div class="item-desc-title">
                                    <p class="text-decoration-none item-desc-title-link" href="">Placeholder Item Title </p>
                                </div>
                                <div class="item-desc-price">
                                    <span class:"item-desc-price-inner">৳250</span>
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
                `;
                itemID++;
            });
            $('#content-wrapper-div').html(content);

            $('#content-wrapper-div .item').each(function () {
                const prodID = $(this).data('prod-id');
                if (localStorage.getItem(prodID)) {
                    const qty = localStorage.getItem(prodID);
                    $(this).find('.in-cart-qty-val-input').val(qty);
                    $(this).find('.item-desc-add').removeClass('d-block').addClass('d-none');
                    $(this).find('.in-cart-qty').removeClass('d-none').addClass('d-flex');
                    countCart();
                }
            })

            $('#content-wrapper-div').on('click', '.in-cart-qty-inc', function () {
                const input = $(this).siblings('.in-cart-qty-val').find('input');
                const itemID = $(this).closest('.item').data('prod-id');
                if (input && input.attr('type') === 'number') {
                    input[0].stepUp();
                    localStorage.setItem(`${itemID}`, input.val());
                    initializeCart();
                    countCart();
                }
            });
            $('#content-wrapper-div').on('click', '.in-cart-qty-dec', function () {
                const input = $(this).siblings('.in-cart-qty-val').find('input');
                const itemID = $(this).closest('.item').data('prod-id');
                if (input && input.attr('type') === 'number') {
                    input[0].stepDown();
                    const newValue = input.val();
                    if (newValue <= 0) {
                        localStorage.removeItem(`${itemID}`);
                        $(this).closest('.in-cart-qty').removeClass('d-flex').addClass('d-none');
                        $(this).closest('.item').find('.item-desc-add').removeClass('d-none').addClass('d-block');
                    } else {
                        localStorage.setItem(`${itemID}`, newValue);
                    }
                    initializeCart();
                    countCart();
                }
            });
            $('#content-wrapper-div').on('input', '.in-cart-qty-val-input', function () {
                const input = $(this);
                const itemID = $(this).closest('.item').data('prod-id');
                if (input && input.attr('type') === 'number') {
                    localStorage.setItem(`${itemID}`, input.val());
                    initializeCart();
                    countCart();
                }
            });

        },
        error: function (xhr, status, error) {
            console.error('AJAX request failed', status, error);
        }
    })
}


function initializeCart() {
    const cartWrapper = document.querySelector('.cart-items-list');
    const nothingInCartWrapper = document.querySelector('.no-items-in-cart');
    cartWrapper.innerHTML = '';

    const localStorageData = {};

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        localStorageData[key] = value;
    }

    const isEmptyCart = Object.keys(localStorageData).length === 0;

    if (isEmptyCart) {
        nothingInCartWrapper.classList.add('d-block');
        nothingInCartWrapper.classList.remove('d-none');
        cartWrapper.classList.add('d-none');
        cartWrapper.classList.remove('d-block');
    } else {
        nothingInCartWrapper.classList.add('d-none');
        nothingInCartWrapper.classList.remove('d-block');
        cartWrapper.classList.add('d-block');
        cartWrapper.classList.remove('d-none');

        for (const key in localStorageData) {
            const value = localStorageData[key];
            const cartWrapper = document.querySelector('.cart-items-list');
            const cartItemWrapper = document.createElement('div');
            cartItemWrapper.classList.add('cart-item-wrapper', 'mt-3', 'mb-3');
            cartItemWrapper.innerHTML = `
                <div class="cart-item-img">
                    <img src="https://daccastore.erp.place/erp/companies/daccastore/part_pics/${key}.jpeg" alt="">
                </div>
                <div class="cart-item-desc">
                    <div class="cart-item-title">
                        <p>USB Cable A</p>
                    </div>
                    <div class="cart-item-price">
                        <p>৳250</p>
                        <p>x${value}</p>
                    </div>
                    <div class="cart-item-qty">
                    </div>
                </div>
                <div class="cart-item-remove" data-prod-id="${key}">
                    <img src="img/remove-button.svg" alt="">
                </div>
        `;
            cartWrapper.appendChild(cartItemWrapper);
        }
    }
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', function () {
            const itemID = this.getAttribute('data-prod-id');
            localStorage.removeItem(itemID);
            updateItemDisplay(itemID);
            initializeCart();
            countCart();
        });
    });
}

function updateItemDisplay(itemID){
    const item = document.querySelector(`.item[data-prod-id='${itemID}'`);
    if (item){
        const addCartBtn= item.querySelector('.item-desc-add');
        const cartItemQty = item.querySelector('.in-cart-qty');
        if(addCartBtn){
            addCartBtn.classList.remove('d-none');
            addCartBtn.classList.add('d-block');
        }
        if(cartItemQty){
            cartItemQty.classList.remove('d-flex');
            cartItemQty.classList.add('d-none');
        }
        const inputField = cartItemQty ? cartItemQty.querySelector('.in-cart-qty-val-input') : null;
        if (inputField){
            inputField.value = 0;
        }
    }
}

$(document).ready(function () {
    fetchData();
    initializeCart();
    countCart();
    $('.dropdown-btn').click(function () {
        const selectedCat = $(this).data('category');
        $('.item').each(function () {
            const itemCat = $(this).data('category');
            if (itemCat === selectedCat) {
                $(this).removeClass('d-none');
            } else {
                $(this).addClass('d-none');
                $(this).removeClass('d-flex');
            }
        });
    });
})


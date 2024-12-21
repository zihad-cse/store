let cartItems = JSON.parse(localStorage.getItem('cartItems')) ?? {};
let cartItemsAsObj = JSON.parse(localStorage.getItem('cartItemsAsObj')) ?? {};
function updateCartItems(itemID, quantity) {
    if (quantity > 0) {
        cartItems[itemID] = quantity;
    } else {
        delete cartItems[itemID];
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


function checkoutSumPrice(price, qty) {
    sum = price * qty;

}

function updateCartTotal(amount) {
    const cartTotalElements = document.querySelectorAll('.cart-list-total');
    cartTotalElements.forEach(element => {
        element.textContent = `${amount.toFixed(2)}`;
    })
}

function updateCartItemsAsObj(itemID, itemDetails) {
    if (itemDetails.quantity > 0) {
        const existingItem = cartItemsAsObj[itemID];
        if (existingItem) {
            existingItem.quantity = itemDetails.quantity;
            cartItemsAsObj[itemID] = existingItem;
        } else {
            cartItemsAsObj[itemID] = itemDetails;
        }
    } else {
        delete cartItemsAsObj[itemID];
    }
    localStorage.setItem('cartItemsAsObj', JSON.stringify(cartItemsAsObj));
}

let currentLimit = 20;

function fetchData(limit = currentLimit) {

    dataFetchUrl = dataFetchUrl.replace(/(\?|&)limit=\d+/, '');

    if (defaultLimit === false) {
        dataFetchUrl += (dataFetchUrl.includes('?') ? '&' : '?') + `limit=${limit}`
    }
    $.ajax({
        url: `${dataFetchUrl}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            let content = '';
            // console.log(data);
            data.forEach(function (prod) {
                const randomCategoryNum = prod.category_id;
                const imgurl = prod.img;
                const randomPrice = prod.webprice;
                const randomCatName = prod.category;
                const randomName = prod.description;
                const itemID = prod.stockid;
                const itemLongDesc = prod.longdescription;

                content += `
                    <div id="itemId" class="item d-flex flex-column" data-prod-id='${itemID}' data-category-name='${randomCatName}' data-category='${randomCategoryNum}' data-prod-name='${randomName}' data-prod-price='${randomPrice}' data-prod-longdesc='${itemLongDesc}'>
                        <div class="item-viewing-trigger">
                            <div class="item-picture">
                                <img class="item-picture-img" style="max-height: 160px; max-width: 160px;" src="${imgurl}" alt="">
                            </div>
                            <div class="item-desc text-start">
                                <div id='itemCategoryDiv' class="item-desc-category">
                                    <a class="text-decoration-none item-desc-category-link" href="">${randomCatName}</a>
                                </div>
                                <div class="item-desc-title">
                                    <p class="text-decoration-none item-desc-title-link" href="">${randomName} </p>
                                </div>
                                <div class="item-desc-price">
                                    <span class:"item-desc-price-inner">৳${randomPrice}</span>
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
            });
            $('#content-wrapper-div').html(content);

            $('#content-wrapper-div .item').each(function () {
                const prodID = $(this).data('prod-id');
                if (cartItems[prodID]) {
                    const qty = cartItems[prodID];
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
                    const newValue = input.val();
                    const newValueObj = {
                        quantity: newValue
                    }
                    updateCartItemsAsObj(itemID, newValueObj)
                    updateCartItems(itemID, input.val());
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
                        const newValueObj = {
                            quantity: newValue
                        }
                        updateCartItemsAsObj(itemID, newValueObj);
                        updateCartItems(itemID, input.val());
                        $(this).closest('.in-cart-qty').removeClass('d-flex').addClass('d-none');
                        $(this).closest('.item').find('.item-desc-add').removeClass('d-none').addClass('d-block');
                    } else {
                        updateCartItems(itemID, newValue);
                    }
                    initializeCart();
                    countCart();
                }
            });
            $('#content-wrapper-div').on('input', '.in-cart-qty-val-input', function () {
                const input = $(this);
                const itemID = $(this).closest('.item').data('prod-id');
                if (input && input.attr('type') === 'number') {
                    const newValue = input.val();
                    updateCartItems(itemID, newValue);
                    const newValueObj = {
                        quantity: newValue
                    }
                    updateCartItemsAsObj(itemID, newValueObj);
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
// Function to load more items into the home page.

function loadMoreFunction() {
    defaultLimit = false;
    currentLimit += 20;
    fetchData(currentLimit);
    defaultLimit = true;
}

function initializeCart() {
    const cartWrapper = document.querySelector('.cart-items-list');
    const nothingInCartWrapper = document.querySelector('.no-items-in-cart');
    cartWrapper.innerHTML = '';

    if (Object.keys(cartItems).length === 0) {
        localStorage.removeItem('cartItems');
    }

    const isEmptyCart = Object.keys(cartItems).length === 0;

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

        for (const key in cartItemsAsObj) {
            const itemID = cartItemsAsObj[key];
            const qty = itemID.quantity;
            const price = itemID.price;
            const itemName = itemID.name;
            const cartWrapper = document.querySelector('.cart-items-list');
            const cartItemWrapper = document.createElement('div');
            cartItemWrapper.classList.add('cart-item-wrapper', 'mt-3', 'mb-3');
            cartItemWrapper.innerHTML = `
                <div class="cart-item-img">
                    <img src="https://daccastore.erp.place/erp/companies/daccastore/part_pics/${key}.jpeg" alt="">
                </div>
                <div class="cart-item-desc">
                    <div class="cart-item-title">
                        <p>${itemName}</p>
                    </div>
                    <div class="cart-item-price">
                        <p>৳${price}</p>
                        <p>x${qty}</p>
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
            delete cartItems[itemID];
            delete cartItemsAsObj[itemID];
            if (Object.keys(cartItems).length === 0) {
                localStorage.removeItem('cartItems');
            } else {
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
            updateCartItemsAsObj(itemID, 0);
            updateCartItems(itemID, 0);
            updateItemDisplay(itemID);
            initializeCart();
            countCart();
        });
    });
}

function initiateCartPage() {
    const cartWrapper = document.querySelector('.cart-list-tbody');
    const cartDetailViewCont = document.querySelector('.cart-detail-view-container');
    const nothingInCart = document.querySelector('.no-items-in-cart-wrapper');

    const cartTotalElement = document.querySelector('.cart-list-total');
    let amount = 0;

    cartWrapper.innerHTML = ``;
    const isEmptyCart = Object.keys(cartItems).length === 0;

    if (isEmptyCart) {
        nothingInCart.classList.add('d-flex');
        nothingInCart.classList.remove('d-none');
        cartDetailViewCont.classList.remove('d-block');
        cartDetailViewCont.classList.add('d-none');
        cartTotalElement.textContent = "0";
    } else {

        nothingInCart.classList.add('d-none');
        nothingInCart.classList.remove('d-flex');
        cartDetailViewCont.classList.remove('d-none');
        cartDetailViewCont.classList.add('d-block');

        for (const key in cartItemsAsObj) {
            const cartItemDetail = cartItemsAsObj[key];
            const qty = parseInt(cartItemDetail.quantity);
            const itemName = cartItemDetail.name;
            const price = cartItemDetail.price;

            const itemTotalPrice = qty * price;
            amount += itemTotalPrice;

            const cartItemTr = document.createElement('tr');
            // const itemTotalPrice = checkoutSumPrice(price, amount);

            // itemtotalPrice = itemTotalPrice.toFixed(2);

            // for (let i = 0; i < cartSumHtml.length; i++) {
            //     cartSumHtml[i].innerHTML = '৳' + itemTotalPrice
            // }
            cartItemTr.innerHTML =
                `
                    <td><input checked type="checkbox"></td>
                    <td>
                        <div class="cart-list-tbody-prod-title" data-prod-id=${key}>
                            <div class="cart-list-tbody-prod-title-img">
                                <img style="height: 50px;" src="https://daccastore.erp.place/erp/companies/daccastore/part_pics/${key}.jpeg" alt="">
                            </div>
                            <div class="cart-list-tbody-prod-title-link">
                                <a href="javascript:void(0)">${itemName}</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class='qnty-wrapper'>
                            <div class='qnty-decrement'>
                                -
                            </div>
                            <div>
                                <input class='product-desc-cart-qnty' type="number" min='0' value='${qty}'>
                            </div>
                            <div class='qnty-increment'>
                                +
                            </div>
                        </div>
                    </td>
                    <td>${itemTotalPrice.toFixed(2)}৳ </td>
                    <td><i data-prod-id="${key}" class="cart-list-remove-item fa-solid fa-xmark"></i></td>
                `;
            cartWrapper.appendChild(cartItemTr);
        }
        updateCartTotal(amount);
    }

    const updateButton = document.getElementById('updateBtnsWrapper');
    let hasChanged = false;

    cartWrapper.addEventListener('click', (event) => {
        const target = event.target;
        const input = target.closest('.qnty-wrapper').querySelector('.product-desc-cart-qnty');

        if (target.classList.contains('qnty-increment') || target.classList.contains('qnty-decrement')) {
            if (target.matches('.qnty-increment, .qnty-decrement')) {
                event.preventDefault();
                hasChanged = true;
                updateButton.classList.remove('d-none');
                updateButton.classList.add('d-block');
            }
        }

    })

    function handleQtyChange(event) {
        const target = event.target;
        const input = target.closest('.qnty-wrapper').querySelector('.product-desc-cart-qnty')
        if (target.classList.contains('qnty-increment')) {
            input.stepUp();
        } else if (target.classList.contains('qnty-decrement') && input.value > 0) {
            input.stepDown();
        }
    }

    cartWrapper.removeEventListener('click', handleQtyChange);
    cartWrapper.addEventListener('click', handleQtyChange);

    updateButton.addEventListener('click', () => {
        if (hasChanged) {
            const cartItemsTr = cartWrapper.querySelectorAll('tr');

            for (const cartItemTr of cartItemsTr) {
                const quantityInput = cartItemTr.querySelector('.product-desc-cart-qnty');
                const itemId = cartItemTr.querySelector('.cart-list-tbody-prod-title').getAttribute('data-prod-id');

                const newQnty = quantityInput.value;

                const newQntyObj = {
                    quantity: newQnty
                }

                updateCartItems(itemId, newQnty);
                updateCartItemsAsObj(itemId, newQntyObj);
                updateItemDisplay(itemId);
            }
            hasChanged = false;
            updateButton.classList.remove('d-block');
            updateButton.classList.add('d-none');
        }
    })
    document.querySelectorAll('.cart-list-remove-item').forEach(button => {
        button.addEventListener('click', function () {
            const itemID = this.getAttribute('data-prod-id');
            delete cartItems[itemID];
            delete cartItemsAsObj[itemID];
            if (Object.keys(cartItems).length === 0) {
                localStorage.removeItem('cartItems');
            } else {
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
            updateCartItems(itemID, 0);
            updateCartItemsAsObj(itemID, 0);
            initializeCart();
            initiateCartPage();
            updateItemDisplay(itemID)
        });
    });
    bannerVisNone();
};

let totalCartPrice = 0;

function updateCheckoutTotal(amount) {
    const sumInnerHtml = document.querySelectorAll('.checkoutSumTotal');
    sumInnerHtml.forEach(element => {
        element.innerHTML = amount.toFixed(2);
    })
}

function initiateCheckoutPage() {
    const cartItemListWrapper = document.querySelector('.checkout-cart-items-list');
    cartItemListWrapper.innerHTML = ``;

    const isEmptyCart = Object.keys(cartItems).length === 0;
    if (isEmptyCart) {
        console.log('No Cart Items');
        updateCheckoutTotal(0);
    } else {
        let totalAmount = 0;
        // let amount = 0
        // let price = 0
        // for (const key in cartItemsAsObj) {
        //     const cartItemDetail = cartItemsAsObj[key];
        //     price = cartItemDetail.price;
        //     amount += value;
        // }
        for (const key in cartItemsAsObj) {
            const cartItemDetail = cartItemsAsObj[key];
            const itemName = cartItemDetail.name;
            const qty = cartItemDetail.quantity;
            const price = cartItemDetail.price;
            const itemTotal = qty * price;
            totalAmount += itemTotal;

            const cartListItem = document.createElement('div');
            cartListItem.classList.add('cart-item-wrapper', 'mt-2', 'mb-2');
            cartListItem.innerHTML =
                `
                    <div class="cart-item-img">
                        <img src="https://daccastore.erp.place/erp/companies/daccastore/part_pics/${key}.jpeg" alt="">
                    </div>
                    <div class="cart-item-desc">
                        <div class="cart-item-title">
                        <p>${itemName}</p>
                        </div>
                        <div class="cart-item-price">
                        <p>৳${price}</p>
                        <p>x${qty}</p>
                        </div>
                        <div class="cart-item-qty">
                        </div>
                        </div>
                        <div class="cart-item-remove" data-prod-id="${key}">
                        <img src="img/remove-button.svg" alt="">
                        </div>
                        `;
            cartItemListWrapper.appendChild(cartListItem);
        }
        updateCheckoutTotal(totalAmount);
        totalCartPrice = totalAmount;

        // const itemTotalPrice = checkoutSumPrice(price, amount);
        // totalCartPrice = itemTotalPrice;
        // let sumInnerHtml = document.querySelectorAll('.checkoutSumTotal');
        // for (let i = 0; i < sumInnerHtml.length; i++) {
        //     sumInnerHtml[i].innerHTML = '৳' + itemTotalPrice;
        // }

    }
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', function () {
            const itemID = this.getAttribute('data-prod-id');
            delete cartItems[itemID];
            if (Object.keys(cartItems).length === 0) {
                localStorage.removeItem('cartItems');
                editCartFromCheckout();
            } else {
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
            updateCartItems(itemID, 0);
            updateCartItemsAsObj(itemID, 0);
            updateItemDisplay(itemID);
            initializeCart();
            initiateCartPage();
            initiateCheckoutPage();
        })
    })
}
function updateItemDisplay(itemID) {
    const item = document.querySelector(`.item[data-prod-id='${itemID}'`);
    console.log('Update Item Display')
    if (item) {
        const addCartBtn = item.querySelector('.item-desc-add');
        const cartItemQty = item.querySelector('.in-cart-qty');
        if (addCartBtn) {
            addCartBtn.classList.remove('d-none');
            addCartBtn.classList.add('d-block');
        }
        if (cartItemQty) {
            cartItemQty.classList.remove('d-flex');
            cartItemQty.classList.add('d-none');
        }
        const inputField = cartItemQty ? cartItemQty.querySelector('.in-cart-qty-val-input') : null;
        if (inputField) {
            inputField.value = 0;
        }
    }
}

let limit = 20;

function loadMoreProducts(currentLimit) {
    $.ajax({
        url: './data/product-data-fetch.php',
        method: 'POST',
        data: { limit: currentLimit },
        success: function (response) {
            console.log(currentLimit);
            console.log(JSON.parse(response));
        }
    })
}


// user actions here

var phoneReg = new RegExp(/(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/);
function userLogin() {
    var phoneNumber = $("#phnNumber").val();
    if ($.isNumeric(phoneNumber)) {
        if (!phoneReg.test(phoneNumber)) {
            $("#errorDivContainer").html("<div id='loginRegErr'>Please Enter a Valid Number</div>")
        } else {
            $("#errorDivContainer").html("");
            var curlCheck = "userPhoneNumberSend";
            $.ajax({
                url: "data/userActions.php",
                type: "POST",
                data: {
                    phoneNumber: phoneNumber,
                    check: curlCheck,
                },
                success: function (response) {
                    console.log(response)
                    if (!response == "success") {
                        var phone = "'" + phoneNumber + "'";
                        var submitOtpSegment = '<label class="mt-2 mb-2" for="otpField">Enter OTP: </label><input id="otpField" class="form-input-text mt-2 mb-2" type="text"><span>Resend</span><button class="otp-submit-btn btn-primary mt-2 mb-2">Submit</button>';
                        $("#otpSection").html(submitOtpSegment);
                    } else {
                        $("#errorDivContainer").html("<div id='loginRegErr'>" + response + "</div>");
                    }
                }
            })
        }
    } else {
        $("#errorDivContainer").html("<div id='loginRegErr'>Please Enter a Valid Number</div>");
    }
}

// function userSignUp() {
//     var errFlag = 0;
//     var regNumber = $("#regNumber").val();
//     if ($.isNumeric(regNumber)){
//         if(!phoneReg.test(regNumber)) {
//             $("#errorDivContainer").html("<div id='loginRegErr'>Please Enter a Valid Number</div>");
//             errFlag = 1;
//         } else {
//             $("#errorDivContainer").html("");
//         }
//     } else {
//         $("#errorDivContainer").html("<div id='loginRegErr'>Please Enter a Valid Number</div>")
//     }

// }



$(document).ready(function () {
    fetchData();
    initializeCart();
    countCart();
    $('.dropdown-btn').click(function () {
        const selectedCat = $(this).data('category');
        categoryFilter(selectedCat);
    })
})

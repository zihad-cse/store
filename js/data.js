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

            $('#content-wrapper-div .item').each(function(){
                const prodID = $(this).data('prod-id');
                if(localStorage.getItem(prodID)){
                    const qty = localStorage.getItem(prodID);
                    $(this).find('.in-cart-qty-val-input').val(qty);
                    $(this).find('.item-desc-add').removeClass('d-block').addClass('d-none');
                    $(this).find('.in-cart-qty').removeClass('d-none').addClass('d-flex');
                }
            })

            $('#content-wrapper-div').on('click', '.in-cart-qty-inc', function () {
                const input = $(this).siblings('.in-cart-qty-val').find('input');
                const itemID = $(this).closest('.item').data('prod-id');
                if (input && input.attr('type') === 'number') {
                    input[0].stepUp();
                    localStorage.setItem(`${itemID}`, input.val());
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
                }
            });
            $('#content-wrapper-div').on('input', '.in-cart-qty-val-input', function () {
                const input = $(this);
                const itemID = $(this).closest('.item').data('prod-id');
                if (input && input.attr('type') === 'number') {
                    localStorage.setItem(`${itemID}`, input.val());
                }
            });
        },
        error: function(xhr, status, error){
            console.error('AJAX request failed', status, error);
        }
    })
}
$(document).ready(function () {
    fetchData();
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


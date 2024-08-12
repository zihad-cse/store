const catNames = ['Advanced Kits', 'Antennas', 'Appliance', 'Audio', 'Automatic Light', 'Automatic Switch', 'AVR Microcontroller', 'Battery', 'Biometrics', 'Bluetooth'];

function fetchData() {
    $.ajax({
        url: 'data/data.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            let content = '';
            let itemID = 0;
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
                            <button class='d-block item-desc-add' onclick='itemAddedToCart()'>Add to Cart</button>
                            <div class='in-cart-qty d-none'>
                                <div class='in-cart-qty-inc'>
                                    -
                                </div>
                                <div class='in-cart-qty-val'>
                                    <input type="number" min='1' value='1'>
                                </div>
                                <div class='in-cart-qty-dec'>
                                    +
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                itemID++;
            });
            $('#content-wrapper-div').html(content);
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
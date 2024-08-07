const catNames = ['Advanced Kits', 'Antennas', 'Appliance', 'Audio', 'Automatic Light', 'Automatic Switch', 'AVR Microcontroller', 'Battery', 'Biometrics', 'Bluetooth'];

function fetchData() {
    $.ajax({
        url: 'data/data.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            let content = '';
            data.forEach(function (prod) {
                const randomCategoryNum = Math.floor(Math.random() * 10);
                const randomCatName = catNames[randomCategoryNum];
                content += `
                    <div id="itemId" class="item d-flex flex-column" data-category='${randomCategoryNum}'>
                        <div class="item-viewing-trigger">
                            <div class="item-picture">
                                <img class="item-picture-img" style="max-height: 160px; max-width: 160px;" src="${prod}" alt="">
                            </div>
                            <div class="item-desc text-start">
                                <div id='itemCategoryDiv' class="item-desc-category">
                                    <a class="text-decoration-none item-desc-category-link" href="">${randomCatName}</a>
                                </div>
                                <div class="item-desc-title">
                                    <a class="text-decoration-none item-desc-title-link" href="">USB Cable A </a>
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
                            <div class="item-desc-add">
                                <button>Add to Cart</button>
                            </div>
                    </div>
                `;
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
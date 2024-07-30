function fetchData(){
    $.ajax({
        url: 'data/data.php',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            let content = '';
            data.forEach(function(prod){
                content += `
                    <div id="itemId" class="item flex-column">
                        <div class="item-picture">
                            <img class="item-picture-img" style="max-height: 160px; max-width: 160px;" src="${prod}" alt="">
                        </div>
                        <div class="item-desc text-start">
                            <div class="item-desc-category">
                                <a class="text-decoration-none item-desc-category-link" href="">Cables</a>
                            </div>
                            <div class="item-desc-title">
                                <a class="text-decoration-none item-desc-title-link" href="">USB Cable A </a>
                            </div>
                            <div class="item-desc-price">
                                <span class:"item-desc-price-inner">৳250</span>
                                <span class="float-end"></span>
                            </div>
                            <div class="item-desc-add">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            $('#content-wrapper-div').html(content);
        }
    })
}
$(document).ready(function(){
    fetchData();
    // setInterval(fetchData, 10000);
})
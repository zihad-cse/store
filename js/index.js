// dropdown burger button 


var view830px = window.matchMedia("(max-width: 830px)")
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


// dropdown buttons in sidenav

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle("visible");
        var dropdownCaret = this.querySelector(".fa-caret-down");
        dropdownCaret.classList.toggle("expanded");
    });
}


var subDropdown = document.getElementsByClassName("sub-dropdown-btn");
var i;

for (i = 0; i < subDropdown.length; i++) {
    subDropdown[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle("visible");
        var dropdownCaret = this.querySelector(".fa-caret-down");
        dropdownCaret.classList.toggle("expanded");
    });
}



// dropdownButton.addEventListener("click", function(){
//     dropdownCaret.classList.toggle("expanded");
// })


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
        // Update the main image source
        mainImage.src = thumbnail.src;
        mainImage.style.transformOrigin = 'center center';
        mainImage.style.transform = 'scale(1)';
        mainImage.style.zIndex = '1';

        // Remove "active" class from all thumbnails
        thumbnails.forEach(th => th.parentElement.classList.remove('product-img-thumbnail-active'));

        // Add "active" class to the clicked thumbnail
        thumbnail.parentElement.classList.add('product-img-thumbnail-active');
    });
});

function openImage(imgurl){
    window.open(imgurl, '_blank');
}
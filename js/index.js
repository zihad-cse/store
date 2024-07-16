// dropdown burger button 
function openNav() {
    const sidebar = document.getElementById("sidenav");
    sidebar.style.width = "300px";
    sidebar.style.opacity = "1";
    sidebar.style.visibility = "visible";
    if (!view830px.matches){
        document.getElementById("content-wrapper-div").style.marginLeft = "300px";
        document.getElementById("footer").style.marginLeft ="300px";
        document.getElementById("mc-cat-wrapper").style.marginLeft ="300px";
    }
    document.querySelector(".left-sidebar-burger").setAttribute("onclick", "closeNav()");
}
function closeNav() {
    const sidebar = document.getElementById("sidenav");
    sidebar.style.width = "0px";
    sidebar.style.opacity = "0";
    sidebar.style.visibility = "hidden";
    document.getElementById("content-wrapper-div").style.marginLeft = "0px";
    document.getElementById("footer").style.marginLeft ="0px";
    document.getElementById("mc-cat-wrapper").style.marginLeft ="0px";
    document.querySelector(".left-sidebar-burger").setAttribute("onclick", "openNav()");
}


function navButtonAction(view830px) {
    if (view830px.matches) { // If media query matches
        closeNav();
    } else {
        openNav();
    }
}

// Create a MediaQueryList object
var view830px = window.matchMedia("(max-width: 830px)")

// Call listener function at run time
navButtonAction(view830px);

// Attach listener function on state changes
view830px.addEventListener("change", function () {
    navButtonAction(view830px);
});


// dropdown buttons in sidenav
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        // this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.visibility === "hidden") {
            dropdownContent.style.visibility = "visible";
            dropdownContent.style.opacity = "1";
            dropdownContent.style.height = "25%";
        } else {
            dropdownContent.style.visibility = "hidden";
            dropdownContent.style.opacity = "0";
            dropdownContent.style.height = "0";
        }
    });
}
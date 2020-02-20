var sticky;
var header
function load(){
    window.onscroll = function() {myFunction()};
    header = document.getElementById("navbar");
    sticky = header.offsetTop;
}


function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
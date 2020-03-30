var sticky;
var header
function loadIndexHtml(){
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


function loadFormulaire(img){
    document.location.href="reservation.html?name="+img.name;
}

function loadFormHtml(){
    var url = window.location.search;
    url = url.split('?name=');
    if(url == ""){
        url[1] = "Erreur, pas de destination sélectionnée :("
    }
    document.getElementById("destination").textContent=url[1];
}

var popup_layer = document.getElementsByClassName("popup_layer");
var popup_form = document.getElementsByClassName("popup_form");

function popup_show(){
    popup_layer[0].style.display = "block";
    popup_form[0].style.display = "block";
}

function popup_close(){
    popup_layer[0].style.display = "none";
    popup_form[0].style.display = "none";
}

var popup_formShow = document.getElementsByClassName("popup_form-show");
for(var i = 0; i < popup_formShow.length; i++){
    popup_formShow[i].addEventListener('click', popup_show);
}

document.getElementsByClassName("popup_form-close")[0].addEventListener('click', popup_close);
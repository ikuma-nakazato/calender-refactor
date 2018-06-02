var layer = document.getElementById("layer");
var form = document.getElementById("form");

function show(){
    layer.style.display = "block";
    form.style.display = "block";
}

function close(){
    layer.style.display = "none";
    form.style.display = "none";
}

document.getElementById("show").addEventListener('click', show);
document.getElementById("close").addEventListener('click',close);

let colorChange = document.querySelector(".colorChange");

function doColorChange() {
    //document.querySelector(".colorChange").style.backgroundColor = "rgb(124, 206, 238)";
    document.querySelector("h1").style.color = "rgb(255, 208, 236)"; 
    document.querySelectorAll("p").forEach(function(p) {
        p.style.backgroundColor = "rgb(255, 208, 236)";
    });
    document.querySelector("ul").style.backgroundColor = "rgb(255, 208, 236)";
}

colorChange.addEventListener("click", doColorChange);
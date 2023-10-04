var menuImg = document.getElementById("menuImg");
var menuOpen = document.getElementById("menu-open");
var menuImgFechado = document.getElementById("menuImgFechado");

menuImg.addEventListener('click', function(){
    menuOpen.style.cssText = (
        "transition: 0.2s;" +
        "display: block;"
    );
})

menuImgFechado.addEventListener('click', function(){
    menuOpen.style.cssText = (
        "transition: 0.2s;" +
        "display: none;"   
    );
})
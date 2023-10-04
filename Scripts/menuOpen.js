var menuImg = document.getElementById("menuImg");
var menuOpen = document.getElementById("menu-open");
var menuImgFechado = document.getElementById("menuImgFechado");
var body = document.body;

menuImg.addEventListener('click', function(e){
    menuOpen.style.cssText = (
        "transition: 0.2s;" +
        "display: block;"
    );
    body.classList.add("menu-open"); // Adiciona a classe menu-open ao body
    e.stopPropagation();
})

menuImgFechado.addEventListener('click', function(){
    menuOpen.style.cssText = (
        "transition: 0.2s;" +
        "display: none;"   
    );
    body.classList.remove("menu-open"); // Remove a classe menu-open do body
})

document.addEventListener('click', function(e) {
    if (!menuOpen.contains(e.target) && e.target !== menuImg) {
        menuOpen.style.cssText = (
            "transition: 0.2s;" +
            "display: none;"
        );
        body.classList.remove("menu-open"); // Remove a classe menu-open do body
    }
});

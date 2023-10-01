var menuMobile = document.getElementById("menu-mobile");
var listMenu = document.getElementById("listMenumenu-mobile");

var close = 0;

menuMobile.addEventListener('click', function(){
    if(close == 0){
        menuMobile.src = 'Images/Menu/menu-fechado.png';

        close = 1;
    }
    else if(close == 1){
        menuMobile.src = 'Images/Menu/menu.png';

        close = 0;
    }
})
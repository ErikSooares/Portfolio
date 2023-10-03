var imgProjectsClock = document.getElementById("imgProjectsClock");
var imgProjectsRGB = document.getElementById("imgProjectsRGB");
var imgProjectsBlackTheme = document.getElementById("imgProjectsBlackTheme");

//Alterando as imagens do certificado Html
imgProjectsClock.addEventListener('mouseover', function(){
    imgProjectsClock.src = 'Images/Projects/Clock/Clock.png';
});
imgProjectsClock.addEventListener('mouseout', function(){
    imgProjectsClock.src = 'Images/Projects/Clock/ClockDesfoque.jpg'; // Restaura a imagem original
});

//Alterando as imagens do certificado React
imgProjectsRGB.addEventListener('mouseover', function(){
    imgProjectsRGB.src = 'Images/Projects/RGB/RGB.png';
});
imgProjectsRGB.addEventListener('mouseout', function(){
    imgProjectsRGB.src = 'Images/Projects/RGB/RGBDesfoque.png'; // Restaura a imagem original
});

//Alterando as imagens do certificado Git
imgProjectsBlackTheme.addEventListener('mouseover', function(){
    imgProjectsBlackTheme.src = 'Images/Projects/Black Theme/Black.png';
});
imgProjectsBlackTheme.addEventListener('mouseout', function(){
    imgProjectsBlackTheme.src = 'Images/Projects/Black Theme/BlackDesfoque.png'; // Restaura a imagem original
});

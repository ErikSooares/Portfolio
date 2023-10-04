var ImgProjectClock = document.getElementById("ImgProjectClock");

//Alterando as imagens do certificado Html
ImgProjectClock.addEventListener('mouseover', function(){
    ImgProjectClock.src = 'Images/Projects/Clock/Clock.png';
});
ImgProjectClock.addEventListener('mouseout', function(){
    ImgProjectClock.src = 'Images/Projects/Clock/ClockDesfoque.png'; // Restaura a imagem original
});
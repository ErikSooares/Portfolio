//Alterando as imagens de contato quando o mouse estiver em cima do elemento
var imgTel = document.getElementById("imgTel");
var imgGit = document.getElementById("imgGit");
var imgLink = document.getElementById("imgLink");
var imgEmail = document.getElementById("imgEmail");

//Alterando as imagens do link Telefone
imgTel.addEventListener('mouseover', function(){
    imgTel.src = '/Images/Telefone/telefoneHover.png';
});

imgTel.addEventListener('mouseout', function(){
    imgTel.src = '/Images/Telefone/telefone.png'; // Restaura a imagem original
});

//Alterando as imagens do link GitHub
imgGit.addEventListener('mouseover', function(){
    imgGit.src = '/Images/GitHub/githubHover.png';
});

imgGit.addEventListener('mouseout', function(){
    imgGit.src = '/Images/GitHub/github.png'; // Restaura a imagem original
});

//Alterando as imagens do link LinkedIn
imgLink.addEventListener('mouseover', function(){
    imgLink.src = '/Images/LinkedIn/linkedinHover.png';
});

imgLink.addEventListener('mouseout', function(){
    imgLink.src = '/Images/LinkedIn/linkedin.png'; // Restaura a imagem original
});

//Alterando as imagens do link Email
imgEmail.addEventListener('mouseover', function(){
    imgEmail.src = '/Images/Email/emailHover.png';
});

imgEmail.addEventListener('mouseout', function(){
    imgEmail.src = '/Images/Email/email.png'; // Restaura a imagem original
});
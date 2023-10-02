var imgCertificateHtml = document.getElementById("imgCertificateHtml");
var imgCertificateReact = document.getElementById("imgCertificateReact");
var imgCertificateGit = document.getElementById("imgCertificateGit");
var imgCertificateAgile = document.getElementById("imgCertificateAgile");


//Alterando as imagens do certificado Html
imgCertificateHtml.addEventListener('mouseover', function(){
    imgCertificateHtml.src = 'Images/Certificates/HTML/CertificadoHTML.png';
});
imgCertificateHtml.addEventListener('mouseout', function(){
    imgCertificateHtml.src = 'Images/Certificates/HTML/CertificadoHTMLDesfoque.png'; // Restaura a imagem original
});

//Alterando as imagens do certificado React
imgCertificateReact.addEventListener('mouseover', function(){
    imgCertificateReact.src = 'Images/Certificates/React/CertificateREACT.png';
});
imgCertificateReact.addEventListener('mouseout', function(){
    imgCertificateReact.src = 'Images/Certificates/React/CertificateREACTDesfoque.png'; // Restaura a imagem original
});

//Alterando as imagens do certificado Git
imgCertificateGit.addEventListener('mouseover', function(){
    imgCertificateGit.src = 'Images/Certificates/Git/Git.png';
});
imgCertificateGit.addEventListener('mouseout', function(){
    imgCertificateGit.src = 'Images/Certificates/Git/GitDesfoque.png'; // Restaura a imagem original
});

//Alterando as imagens do certificado Metodologias agéis
imgCertificateAgile.addEventListener('mouseover', function(){
    imgCertificateAgile.src = 'Images/Certificates/Metodologias/Metodologias.png';
});
imgCertificateAgile.addEventListener('mouseout', function(){
    imgCertificateAgile.src = 'Images/Certificates/Metodologias/MetodologiasDesfoque.png'; // Restaura a imagem original
});
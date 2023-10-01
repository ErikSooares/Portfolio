var btnChangeColor = document.getElementById("btnChangeColor");
var ballChangeColor = document.getElementById("ballChangeColor");

var menu = document.getElementById("menu");
var linkHome = document.getElementById("linkHome");
var linkAbout = document.getElementById("linkAbout");
var linkSkills = document.getElementById("linkSkills");
var linkProjects = document.getElementById("linkProjects");
var linkCertificates = document.getElementById("linkCertificates");

var home = document.getElementById("home");
var aboutMe = document.getElementById("aboutMe");
var txtAboutMe1 = document.getElementById("txtAboutMe1");
var txtAboutMe2 = document.getElementById("txtAboutMe2");

var theme = 0

btnChangeColor.addEventListener('click', function(){

    //Modo claro
    if(theme == 0){
        ballChangeColor.style.cssText = (
            "transition: 0.2s;"   +
            "position: relative;" +
            "left: 42px;"         +

            "background-color: black;"
        )
        btnChangeColor.style.cssText = (
            "transition: 0.2s;"   +
            "background-color: var(--cor-fundoClaro);"
        )

        // Cores do menu
        menu.style.cssText = (
            "transition: 0.2s;"   +
            "background-color: white;"
        )
        // Cores do home
        home.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"       +
            "background-color: var(--cor-fundoClaro)"
        )
        // Cores do aboutMe
        aboutMe.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"       +
            "background-color: white;"
        )
        // Cores do aboutMe
        txtAboutMe1.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"       
        )
        // Cores do aboutMe
        txtAboutMe2.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"       
        )

        linkHome.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"
        )
        linkAbout.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"
        )
        linkSkills.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"
        )
        linkProjects.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"
        )
        linkCertificates.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"
        )

        theme = 1;
    }
    else if(theme == 1){

        //Modo escuro
        ballChangeColor.style.cssText = (
            "transition: 0.2s;"   +
            "position: relative;" +
            "left: 3px;"          +

            "background-color: var(--cor-fundo);"
        )
        btnChangeColor.style.cssText = (
            "transition: 0.2s;"   +
            "background-color: var(--cor-destaque);"
        )

        // Cores do menu
        menu.style.cssText = (
            "transition: 0.2s;"   +
            "background-color: var(--cor-fundo);"
        )
        // Cores do home
        home.style.cssText = (
            "transition: 0.2s;"   +
            "color: white;"       +
            "background-color: var(--cor-fundo2)"
        )
        // Cores do aboutMe
        aboutMe.style.cssText = (
            "transition: 0.2s;"   +
            "color: white;"       +
            "background-color: var(--cor-fundo);"
        )
        // Cores do aboutMe txt
        txtAboutMe1.style.cssText = (
            "transition: 0.2s;"   +
            "color: rgb(163, 163, 163);"       
        )
        // Cores do aboutMe txt
        txtAboutMe2.style.cssText = (
            "transition: 0.2s;"   +
            "color: rgb(163, 163, 163);"       
        )
        linkHome.style.cssText = (
            "transition: 0.2s;"   +
            "color: white;"
        )
        linkAbout.style.cssText = (
            "transition: 0.2s;"   +
            "color: white;"
        )
        linkSkills.style.cssText = (
            "transition: 0.2s;"   +
            "color: white;"
        )
        linkProjects.style.cssText = (
            "transition: 0.2s;"   +
            "color: white;"
        )
        linkCertificates.style.cssText = (
            "transition: 0.2s;"   +
            "color: white;"
        )
        
        theme = 0;
    }
})

linkHome.addEventListener('mouseenter', function() {
    linkHome.style.color = "var(--cor-destaque)";
});
linkHome.addEventListener('mouseleave', function() {
    if(theme == 0){
        linkHome.style.color = "white";

    }
    else{
        linkHome.style.color = "black";

    }
});

linkAbout.addEventListener('mouseenter', function() {
    linkAbout.style.color = "var(--cor-destaque)";
});
linkAbout.addEventListener('mouseleave', function() {
    if(theme == 0){
        linkAbout.style.color = "white";

    }
    else{
        linkAbout.style.color = "black";

    }
});

linkSkills.addEventListener('mouseenter', function() {
    linkSkills.style.color = "var(--cor-destaque)";
});
linkSkills.addEventListener('mouseleave', function() {
    if(theme == 0){
        linkSkills.style.color = "white";

    }
    else{
        linkSkills.style.color = "black";

    }
});

linkProjects.addEventListener('mouseenter', function() {
    linkProjects.style.color = "var(--cor-destaque)";
});
linkProjects.addEventListener('mouseleave', function() {
    if(theme == 0){
        linkProjects.style.color = "white";

    }
    else{
        linkProjects.style.color = "black";

    }
});

linkCertificates.addEventListener('mouseenter', function() {
    linkCertificates.style.color = "var(--cor-destaque)";
});
linkCertificates.addEventListener('mouseleave', function() {
    if(theme == 0){
        linkCertificates.style.color = "white";

    }
    else{
        linkCertificates.style.color = "black";

    }
});
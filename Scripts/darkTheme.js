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
            "left: 42px;"         
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

        theme = 1;
    }
    else if(theme == 1){

        //Modo escuro
        ballChangeColor.style.cssText = (
            "transition: 0.2s;"   +
            "position: relative;" +
            "left: 3px;"          
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
        
        theme = 0;
    }
})
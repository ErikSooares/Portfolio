var btnChangeColor = document.getElementById("btnChangeColor");
var ballChangeColor = document.getElementById("ballChangeColor");

var menu = document.getElementById("menu");
var home = document.getElementById("home");
var aboutMe = document.getElementById("aboutMe");
var txtAboutMe1 = document.getElementById("txtAboutMe1");
var txtAboutMe2 = document.getElementById("txtAboutMe2");
var skills = document.getElementById("skills");
var projects = document.getElementById("projects");
var certificates = document.getElementById("certificates");

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
        // Cores do skills
        skills.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"       +
            "background-color: var(--cor-fundoClaro);"     
        )
        // Cores do projects
        projects.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"       +
            "background-color: white;"     
        )
        // Cores do certificates
        certificates.style.cssText = (
            "transition: 0.2s;"   +
            "color: black;"       +
            "background-color: var(--cor-fundoClaro);"     
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
        // Cores do skills
        skills.style.cssText = (
            "transition: 0.2s;"   +
            "color: white;"       +
            "background-color: var(--cor-fundo2);"     
        )
        // Cores do projects
        projects.style.cssText = (
            "transition: 0.2s;"   +
            "color: white;"       +
            "background-color: var(--cor-fundo);"     
        )
        // Cores do certificates
        certificates.style.cssText = (
            "transition: 0.2s;"   +
            "color: white;"       +
            "background-color: var(--cor-fundo2);"     
        )
        
        theme = 0;
    }
})
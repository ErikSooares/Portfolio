var btnChangeColor = document.getElementById("btnChangeColor");
var ballChangeColor = document.getElementById("ballChangeColor");

var theme = 0

btnChangeColor.addEventListener('click', function(){
    if(theme == 0){
        ballChangeColor.style.cssText = (
            "transition: 0.2s;"   +
            "position: relative;" +
            "left: 42px;"         +

            "background-color: var(--cor-fundo);"
        )
        btnChangeColor.style.cssText = (
            "transition: 0.2s;"   +
            "background-color: var(--cor-destaque);"
        )

    
        theme = 1;
    }
    else if(theme == 1){
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
        
        theme = 0;
    }
})
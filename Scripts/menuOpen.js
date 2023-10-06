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

//Baixando o curriculo
var btnDownloadCv = document.getElementById('btnDownloadCv');
var linkDocumento = document.getElementById('linkDocumento');

btnDownloadCv.addEventListener('click', function() {
    linkDocumento.click(); // Clique no link oculto para iniciar o download.
});

//Hora e data atualizados
var day = document.getElementById('day');
var hour = document.getElementById('hour');

var date = new Date();

function inciarC(){
    const intervaloSegundos = setInterval(function() {
        let date = new Date();

        var horas = date.getHours();
        var minutos = date.getMinutes();
        var segundos = date.getSeconds();
        var periodo;

        if(horas < 10){
            horas = 0
            horas = "0" + date.getHours();
        }
        if(minutos < 10){
            minutos = 0
            minutos = "0" + date.getMinutes();
        }
        if(segundos < 10){
            segundos = 0
            segundos = "0" + date.getSeconds();
        }

        if(horas < 12){
            periodo = "am";
        }
        else{
            periodo = "pm";
        }

        hour.innerText = `${horas}:${minutos} ${periodo}`; 
        
    }, 1000);
}

inciarC();

//Colocando a data correta

function IniciarData(){
    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    day.innerText = days[date.getDay()]
}

IniciarData()
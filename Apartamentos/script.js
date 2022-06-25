//Planta
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')

var planta1 = document.getElementById('planta1')
var planta2 = document.getElementById('planta2')
var planta3 = document.getElementById('planta3')

button1.addEventListener('click', mostrar_planta1)
button2.addEventListener('click', mostrar_planta2)
button3.addEventListener('click', mostrar_planta3)
function mostrar_planta1(){
    planta1.style.display = 'block'
    planta2.style.display = 'none'
    planta3.style.display = 'none'
}
function mostrar_planta2(){
    planta1.style.display = 'none'
    planta2.style.display = 'block'
    planta3.style.display = 'none'
}
function mostrar_planta3(){
    planta1.style.display = 'none'
    planta2.style.display = 'none'
    planta3.style.display = 'block'
}

//Tour
var buttonIniciarTour = document.getElementById('buttonIniciarTour')
var buttonEncerrarTour = document.getElementById('buttonEncerrarTour')
var iframeDiv = document.getElementById('iframe-div')
buttonIniciarTour.addEventListener('click', mostrar_iframe)
buttonEncerrarTour.addEventListener('click', esconder_iframe)

function mostrar_iframe(){
    iframeDiv.style.display = 'block'
    buttonIniciarTour.style.display = 'none'
    buttonEncerrarTour.style.display = 'block'
}

function esconder_iframe(){
    iframeDiv.style.display = 'none'
    buttonIniciarTour.style.display = 'block'
    buttonEncerrarTour.style.display = 'none'
}



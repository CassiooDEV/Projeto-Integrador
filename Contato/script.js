let fecharform = document.getElementById('fecharform');
let mostrar = document.getElementsByClassName('mostrar');
let formulario = document.getElementById('formulario');
let buttons = document.getElementsByClassName('botaoForm');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', mostraformulario)
})
fecharform.addEventListener('click', mostraformulario)
function mostraformulario(){
   formulario.classList.toggle("mostrar")
}
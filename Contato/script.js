let enviar = document.getElementById('enviar');
let fecharform = document.getElementById('fecharform');
let mostrar = document.getElementsByClassName('mostrar');
let formulario = document.getElementById('formulario');
let buttons = document.getElementsByClassName('botaoForm');
let input = document.getElementsByTagName('input');
let textarea = document.getElementsByTagName('textarea');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', mostraformulario);
});
fecharform.addEventListener('click', mostraformulario);
function mostraformulario() {
    formulario.classList.toggle('mostrar');
}
enviar.addEventListener('click', () => {
    Array.from(input).forEach((input) => {
        input.value = '';
    });
    Array.from(textarea).forEach((textarea) => {
        textarea.value = '';
    });
    alert('Enviado com sucesso!');
});

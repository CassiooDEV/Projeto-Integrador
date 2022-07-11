let fecharformcadastro = document.getElementById('fecharformcadastro');
let botao1 = document.getElementById('botao1');
let botao2 = document.getElementById('botao2');
let enviar = document.getElementById('enviar');
let enviarcadastro = document.getElementById('enviarcadastro');
let fecharform = document.getElementById('fecharform');
let mostrar = document.getElementsByClassName('mostrar');
let cadastro = document.getElementById('cadastro');
let formulario = document.getElementById('formulario');
let buttons = document.getElementsByClassName('botaoForm');
let input = document.getElementsByTagName('input');

fecharform.addEventListener('click', mostraformulario);
fecharformcadastro.addEventListener('click', mostracadastro);

function mostraformulario() {
    formulario.classList.toggle('mostrar');
}
function mostracadastro() {
    cadastro.classList.toggle('mostrar');
}

botao1.addEventListener('click', mostraformulario);
botao2.addEventListener('click', mostracadastro);

enviar.addEventListener('click', () => {
    mostraformulario();
    Array.from(input).forEach((input) => {
        input.value = '';
    });
    alert('Logado com sucesso!');
});

enviarcadastro.addEventListener('click', () => {
    mostracadastro();
    Array.from(input).forEach((input) => {
        input.value = '';
    });
    alert('Cadastrado com sucesso!');
});

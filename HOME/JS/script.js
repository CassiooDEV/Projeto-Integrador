let nome = document.getElementById('name');
let email = document.getElementById('email');
let form = document.getElementById('form');
let users = document.getElementById('users');
let btn = document.getElementById('btn-form');
let state = document.getElementById('datalistOptions');
let li = document.getElementById('complete');

let vEmail = false;
let vState = false;

btn.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    verifEmail();
    verifState();
    if (nome.value === '' || email.value === '') {
        alert('Por favor preencha os dados');
        setTimeout(() => (msg.innerHTML = ''), 3000);
    } else if (vEmail === true && vState === true) {
        li.innerHTML = `Obrigado por se cadastrar ${nome.value}, agora você receberá nossas informações em primeira mão!`;
        setTimeout(() => (li.innerHTML = ''), 5000);
        nome.value = '';
        email.value = '';
        state.value = '';
        nome.focus();
    }
}
function verifEmail() {
    let def = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
    if (!def.test(email.value)) {
        alert('Insira um e-mail válido');
    } else {
        vEmail = true;
    }
}
function verifState() {
    if (state.value >= 0) {
        alert('Preencha corretamente o estado');
    } else {
        vState = true;
    }
}

// var botaoMenu = document.getElementById('botao-menu');
// var botaoMenuFechar = document.getElementById('botao-menu-fechar')
// var menu = document.getElementById('menu-nav');

// botaoMenu.addEventListener('click', mostraMenu);
// botaoMenuFechar.addEventListener('click', fechaMenu)

// function mostraMenu(){
//     if (window.matchMedia("(max-width:600px)").matches) {
//         menu.style.display = 'block';
//         botaoMenu.style.display = 'none'
//         botaoMenuFechar.style.display = 'block'
//       }
// }

// function fechaMenu(){
//     if (window.matchMedia("(max-width:600px)").matches) {
//         menu.style.display = 'none';
//         botaoMenu.style.display = 'block'
//         botaoMenuFechar.style.display = 'none'
//     }
// }




let nome = document.getElementById('name');
let email = document.getElementById('email');
let form = document.getElementById('form');
let users = document.getElementById('users');
let btn = document.getElementById('btn-form');
let bot = document.getElementById('bot');
let li = document.getElementById('complete');
let phone = document.getElementById('phone');

let vEmail = false;
let vBot = false;
let vPhone = false;

btn.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    verifEmail();
    verifBot();
    verifPhone();
    if (
        nome.value === '' &&
        email.value === '' &&
        phone.value === '' &&
        bot.value === ''
    ) {
        alert('Por favor preencha os dados');
        setTimeout(() => (msg.innerHTML = ''), 3000);
    } else if (vEmail === true && vBot === true && vPhone === true) {
        li.innerHTML = `Obrigado por se cadastrar ${nome.value}, agora você receberá todas as informações desse imovel.`;
        setTimeout(() => (li.innerHTML = ''), 5000);
        nome.value = '';
        email.value = '';
        bot.value = '';
        phone.value = '';
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
function verifBot() {
    if (phone.value > 10000000000) {
        vPhone = true;
    } else {
        alert('Preencha o número corretamente! Ex: 11987682312');
    }
}
function verifPhone() {
    if (bot.value == 'NÃO') {
        vBot = true;
    } else {
        alert('Você é um robo? Preencha NÃO');
    }
}

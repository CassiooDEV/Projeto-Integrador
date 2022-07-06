let buttons = document.getElementsByClassName('botaoForm');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', alert())
})
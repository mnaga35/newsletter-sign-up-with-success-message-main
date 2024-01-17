const email = document.querySelector('.input-field');
const subscribe = document.querySelector('button');
const errorMsg = document.querySelector('.email-error');
const success = document.querySelector('.success-message');
const givenEmail = document.querySelector('.given-email');
const main = document.querySelector('.main-section');

function validar(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarEmail() {
    if (validar(email.value) == false || email.value.length == 0) {
        errorMsg.style.display = 'block';
        email.style.background = '#ff625730';
        email.focus();
    } else {
        success.style.display = 'grid';
        main.style.display = 'none';
        givenEmail.innerHTML = `${email.value}`
    }
}

function dismiss() {
    success.style.display = 'none';
    main.style.display = '';
    errorMsg.style.display = '';
    email.style.background = '';
    email.value = '';
    email.focus();
}

subscribe.addEventListener('click', validarEmail);

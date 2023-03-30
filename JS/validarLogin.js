import { profileRequest } from "./profiles-requests.js";

const inputs = document.querySelectorAll('input');
const mensajeDeError = document.querySelector('.invalid');

inputs.forEach((input) => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    });
});

function validar(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
        input.classList.remove('form__input--invalid');
        input.parentElement.querySelector('.form__message--invalid').innerHTML = '';
    } else {
        input.classList.add('form__input--invalid');
        input.parentElement.querySelector('.form__message--invalid').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
]

const mensajesDeError = {
    correo: {
        valueMissing: "El campo de correo no puede estar vacío.",
        typeMismatch: "El correo ingresado no es válido.",
    },
    contraseña: {
        valueMissing: "El campo de contraseña no puede estar vacío.",
    }
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = '';
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje;
};

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuarioIn = document.querySelector('[data-correo]').value;
    const contraseñaIn = document.querySelector('[data-contraseña]').value;

    profileRequest
    .validarPerfil()
    .then((data) => {
        data.forEach(({usuario, contraseña}) => {
            if (usuarioIn == usuario) {
                if ( contraseñaIn == contraseña) {
                    window.location.href = '/productos.html';
                } else {
                    mensajeDeError.textContent = '* Contraseña incorrecta.';
                }
            } else {
                mensajeDeError.textContent = '* Usuario incorrecto.';
            }
        })
    })
    .catch((error) => {
    })
});
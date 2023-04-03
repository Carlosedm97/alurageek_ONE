const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    })
})

function validar(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
        console.log(input.validity)
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
    "tooLong",
    "patternMismatch"
]

const mensajesDeError = {
    imagen: {
        valueMissing: "El campo de imágen no puede estar vacío."
    },
    categoria: {
        valueMissing: "El campo de categoria no puede estar vacío."
    },
    nombre: {
        valueMissing: "El campo de nombre no puede estar vacío."
    },
    precio: {
        patternMismatch: "El campo de precio solo admite números.",
        valueMissing: "El campo de precio no puede estar vacío"
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
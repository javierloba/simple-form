const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const message = document.querySelector("#message")

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

const validateInputs = () => {
    // Recogemos los valores de los inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();

    // Validamos los inputs
    if(usernameValue === "") {
        setErrorFor(username, "Este campo es obligatorio")
    } else {
        setSuccessFor(username)
    }
    if(emailValue === "") {
        setErrorFor(email, "Este campo es obligatorio")
    } else if (!isValidEmail(emailValue)) {
        setErrorFor(email, "Este correo no es válido")
    } else {
        setSuccessFor(email)
    }

    if(phoneValue === "") {
        setErrorFor(phone, "Este campo es obligatorio")
    } else {
        setSuccessFor(phone)
    }
}

const setErrorFor = (input, message) => {
    // Aquí seleccionamos al padre (form-control) para añadirle la clase error
    const formControl = input.parentElement;
    const p = formControl.querySelector('p');

    p.innerText = message;

    formControl.className = 'form-control error'
}

const setSuccessFor = input => {
    // Aquí seleccionamos al padre (form-control) para añadirle la clase success
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

const isValidEmail = email => {
    const re = /^\S+@\S+\.\S+$/; // algo@algo.algo
    return re.test(String(email).toLowerCase());
}
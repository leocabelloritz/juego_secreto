let numeroSecreto = 0;
let intentos = 0;

// Seleccionamos los elementos del HTML
let titulo = document.querySelector('h1');
let parrafo = document.querySelector('.texto__parrafo');
let inputUsuario = document.querySelector('.container__input');

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 50) + 1;
}

function limpiarCaja() {
    inputUsuario.value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('.texto__parrafo', 'Indica un número del 1 al 50');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// Función principal de verificación
function verificarIntento() {
    let numeroDeUsuario = parseInt(inputUsuario.value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('h1', '¡Acertaste!');
        asignarTextoElemento('.texto__parrafo', `Lo lograste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('.texto__parrafo', 'El número secreto es menor');
        } else {
            asignarTextoElemento('.texto__parrafo', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

// Evento para el botón de Intentar
document.querySelector('.container__boton').addEventListener('click', verificarIntento);

// Evento para el botón de Nuevo Juego
document.getElementById('reiniciar').addEventListener('click', () => {
    limpiarCaja();
    condicionesIniciales();
});

// Iniciar el juego por primera vez
condicionesIniciales();
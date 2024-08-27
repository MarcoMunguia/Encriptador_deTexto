// Declaración de variables
let inputTexto = document.querySelector('textarea');
let btnEncriptar = document.querySelector('#encrypt');
let btnDesencriptar = document.querySelector('#decrypt');
let mensajeTitulo = document.querySelector('.message-title');
let mensajeTexto = document.querySelector('.message-text');
let btnCopiar = document.createElement('button');

// Configuración del botón de copiar
btnCopiar.textContent = "Copiar";
btnCopiar.style.padding = "10px 20px";
btnCopiar.style.borderRadius = "8px";
btnCopiar.style.border = "none";
btnCopiar.style.backgroundColor = "#0B24FB";
btnCopiar.style.color = "white";
btnCopiar.style.cursor = "pointer";

// Función de validación
function esValido(texto) {
    let regex = /^[a-z\s]*$/;  // Solo minúsculas y espacios
    return regex.test(texto);
}

// Función para mostrar el mensaje
function mostrarMensaje(texto) {
    mensajeTitulo.textContent = "Mensaje:";
    mensajeTexto.textContent = texto;
    document.querySelector('.right').appendChild(btnCopiar);
}

// Función de encriptado
function encriptarTexto() {
    let texto = inputTexto.value;
    if (esValido(texto)) {
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");
        mostrarMensaje(texto);
    } else {
        alert("El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas sin acentos.");
    }
}

// Función de desencriptado
function desencriptarTexto() {
    let texto = inputTexto.value;
    if (esValido(texto)) {
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");
        mostrarMensaje(texto);
    } else {
        alert("El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas sin acentos.");
    }
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    navigator.clipboard.writeText(mensajeTexto.textContent)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.log('Algo salió mal', err);
        });
}

// Conectando las funciones a los botones
btnEncriptar.addEventListener('click', encriptarTexto);
btnDesencriptar.addEventListener('click', desencriptarTexto);
btnCopiar.addEventListener('click', copiarTexto);

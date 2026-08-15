// Obtener el elemento donde se mostrará la hora
const reloj = document.getElementById("reloj");

// Función para actualizar la hora
function actualizarHora() {

    // Obtener la fecha y hora actual
    const ahora = new Date();

    // Obtener horas, minutos y segundos
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Agregar un cero cuando el número sea menor que 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Mostrar la hora
    reloj.textContent = horas + ":" + minutos + ":" + segundos;
}

// Ejecutar la función inmediatamente
actualizarHora();

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);
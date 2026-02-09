    const txtPuntaje = document.querySelector("#puntos");
    const nombre = document.querySelector("#nombre");
    const nombreJugador = document.querySelector("#nombre-jugador");
    const puntajeFinal = document.querySelector("#puntaje-final");
    const totalAcertadas = document.querySelector("#total-acertadas");
    const totalNoAcertadas = document.querySelector("#total-no-acertadas");
    const btnComenzar = document.querySelector("#btn-comenzar");
    const musicaFanfarria = document.getElementById("musica-victoria");
    const contenedorOscuro = document.getElementById("contenedor-oscuro");
    const btnFelicitaciones = document.getElementById("btn-felicitaciones");

    // Cargar nombre y puntaje
    nombre.innerHTML = localStorage.getItem("nombre");
    nombreJugador.innerHTML = localStorage.getItem("nombre");
    txtPuntaje.innerHTML = parseInt(localStorage.getItem("puntaje-total"));
    puntajeFinal.innerHTML = parseInt(localStorage.getItem("puntaje-total")) + " Puntos";

    const correctas = parseInt(localStorage.getItem("puntaje-total")) / 100;
    const incorrectas = 16 - correctas;
    totalAcertadas.innerHTML = correctas;
    totalNoAcertadas.innerHTML = incorrectas;

    // Ajustar el volumen de la música de fanfarria
    musicaFanfarria.volume = 0.5; // Establece el volumen a un nivel adecuado

    // Manejar el clic en el botón de felicitaciones
    btnFelicitaciones.addEventListener("click", () => {
        contenedorOscuro.style.display = "none"; // Ocultar el contenedor oscuro
        musicaFanfarria.play().catch(error => {
            console.log("Error al reproducir la música:", error);
        });
    });

    // Manejar el botón comenzar
    btnComenzar.addEventListener("click", () => {
        location.href = "index.html";
    });


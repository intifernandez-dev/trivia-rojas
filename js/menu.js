// Tomamos los elementos HTML
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");

// Mostrar el nombre y el puntaje
nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");

// Recuperar el puntaje
let puntajeTotal = parseInt(localStorage.getItem("puntaje-total")) || 0;
txtPuntaje.innerHTML = puntajeTotal;

const categoriasJugadas = JSON.parse(localStorage.getItem("categorias-jugadas")) || [];

// Agregar event listener a todas las opciones de categoría
function agregarEventListenerOpciones() {
    const categorias = document.querySelectorAll(".categoria");

    categorias.forEach(categoria => {
        // Deshabilitar categorías que ya se jugaron
        if (categoriasJugadas.includes(categoria.id)) {
            categoria.classList.add("desabilitada");
            categoria.classList.add("no-events");
        } else {
            // Agregar listener solo a categorías habilitadas
            categoria.addEventListener("click", (e) => {
                // Verificar si la categoría ya fue jugada
                if (categoriasJugadas.includes(e.currentTarget.id)) {
                    alert("Ya has jugado esta categoría.");
                    return; // No continuar
                }

                // Almaceno la categoría que se eligió en el Local Storage
                localStorage.setItem("categoria-actual", e.currentTarget.id);
                // Agrego al arreglo la categoría
                categoriasJugadas.push(e.currentTarget.id);
                localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas));

                // Deshabilitar la categoría seleccionada
                e.currentTarget.classList.add("desabilitada");
                e.currentTarget.classList.add("no-events");

                // Redirijo a la página del juego
                location.href = "juego.html";
            });
        }
    });
}

agregarEventListenerOpciones();

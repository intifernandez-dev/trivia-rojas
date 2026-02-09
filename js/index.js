const nombre = document.querySelector("#nombre");
const btnComenzar = document.querySelector("#comenzar");
const errorMensaje = document.querySelector("#error-mensaje"); // Asegúrate de tener un elemento en tu HTML para mostrar el mensaje de error.

btnComenzar.addEventListener("click", () => {
    // Limpio el mensaje de error
    errorMensaje.textContent = '';

    // Verifico si el nombre está vacío
    if (nombre.value.trim() === '') {
        errorMensaje.textContent = 'Por favor, ingresa un nombre válido.';
        return; // Detiene la ejecución si el nombre es inválido
    }

    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total", 0);
    localStorage.removeItem("categorias-jugadas");

    location.href = "menu.html";
});

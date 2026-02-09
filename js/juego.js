    // Arreglo que contiene las preguntas
    const preguntas = [
        {
            id:1,
            categoria: "HTML",
            titulo: "¿Qué es HTML?",
            opcionA: "Un lenguaje de maquetación que se utiliza para el diseño de páginas web",
            opcionB: "Un lenguaje de programación",
            opcionC: "Un servidor",
            opcionD: "Un programa de diseño grafico",
            correcta: "a"
        },
        {
            id:2,
            categoria: "HTML",
            titulo: "¿Qué etiqueta se utiliza para crear un párrafo?",
            opcionA: "&lt;p&gt;",
            opcionB: "&lt;div&gt;",
            opcionC: "&lt;h1&gt;",
            opcionD: "&lt;span&gt;",
            correcta: "a"
        },
        {
            id:3,
            categoria: "HTML",
            titulo: "¿Qué etiqueta HTML se utiliza para mostrar una imagen?",
            opcionA: "&lt;link&gt;",
            opcionB: "&lt;img   &gt;",
            opcionC: "&lt;url&gt;",
            opcionD: "&lt;href&gt;",
            correcta: "b"
        },
        {
            id:4,
            categoria: "HTML",
            titulo: "¿Qué se utiliza para crear una lista ordenada?",
            opcionA: "&lt;ul&gt;",
            opcionB: "&lt;ol&gt;",
            opcionC: "&lt;lan&gt;",
            opcionD: "&lt;len&gt;",
            correcta: "b"
        },
        {
            id:5,
            categoria: "CSS",
            titulo: "¿Cuál es el nombre del arroyo que atraviesa el partido de Morón?",
            opcionA: "Arroyo San Francisco",
            opcionB: "Arroyo Morón",
            opcionC: "Arroyo Santo Domingo",
            opcionD: "Arroyo del Rey",
            correcta: "b"
        },
        {
            id:6,
            categoria: "CSS",
            titulo: "¿En qué fecha se festeja el aniversario del partido de Morón?",
            opcionA: "5 de Octubre",
            opcionB: "9 de Julio",
            opcionC: "17 de Mayo",
            opcionD: "14 de Septiembre",
            correcta: "a"
        },
        {
            id:7,
            categoria: "CSS",
            titulo: "¿En qué año se inauguró el Centro Municipal de Formación Profesional “Ricardo Rojas”?",
            opcionA: "1948",
            opcionB: "2005",
            opcionC: "1990",
            opcionD: "1917",
            correcta: "a"
        },
        {
            id:8,
            categoria: "CSS",
            titulo: "¿En qué centro se encuentra el mejor curso de “Desarrollo Web” del municipio de Morón?",
            opcionA: "CMFP 1",
            opcionB: "CPUI 32",
            opcionC: "CPLL 232",
            opcionD: "CFKM 12",
            correcta: "a"
        },
    
        {
            id:9,
            categoria: "Wordpress",
            titulo: "¿Qué es WordPress?",
            opcionA: "Un lenguaje de programación",
            opcionB: "WordPress es un sistema de gestión de contenidos (CMS)",
            opcionC: "Un editor de imágenes",
            opcionD: "Un navegador web",
            correcta: "b"
        },
        {
            id:10,
            categoria: "Wordpress",
            titulo: "¿Wordpress es gratuito?",
            opcionA: "Si, es gratuito dependiendo de la version que elijas (.COM/.ORG)",
            opcionB: "Si, es gratuito y libre",
            opcionC: "No, tienes que pagar un arancel",
            opcionD: "Ninguna de las anteriores",
            correcta: "a"
        },
        {
            id:11,
            categoria: "Wordpress",
            titulo: "¿Qué es un plugin en WordPress?",
            opcionA: "Un tema",
            opcionB: "Un conjunto de funcionalidades adicionales",
            opcionC: "Un tipo de entrada",
            opcionD: "Un estilo CSS",
            correcta: "b"
        },
        {
            id:12,
            categoria: "Wordpress",
            titulo: "¿Qué tipo de contenido se puede crear en WordPress?",
            opcionA: "Solo páginas",
            opcionB: "Solo entradas de blog",
            opcionC: "Páginas y entradas de blog",
            opcionD: "Solo imágenes",
            correcta: "c"
        },

        {
            id:13,
            categoria: "Diseño Web",
            titulo: "¿Qué es un dominio?",
            opcionA: "Diseño que cambia de color",
            opcionB: "Una dirección que identifica a una página web",
            opcionC: "Una computadora",
            opcionD: "Un archivo almacenado en un servidor web",
            correcta: "b"
        },
        {
            id:14,
            categoria: "Diseño Web",
            titulo: "¿Qué herramienta se utiliza para crear prototipos de diseño?",
            opcionA: "Photoshop",
            opcionB: "Word",
            opcionC: "Excel",
            opcionD: "Notepad",
            correcta: "a"
        },
        {
            id:15,
            categoria: "Diseño Web",
            titulo: "¿Qué es un hosting?",
            opcionA: "Una computadora donde se guardan los archivos de tu web",
            opcionB: "Un lugar fisico, un servidor que se alquila donde se guardan los archivos de tu web",
            opcionC: "Un programa gratuito",
            opcionD: "Una base de datos",
            correcta: "b"
        },
        {
            id:16,
            categoria: "Diseño Web",
            titulo: "¿Qué es HTTP?",
            opcionA: " Es un protocolo de transferencia de archivos",
            opcionB: "Es un protocolo de transferencia de HIPERTEXTO",
            opcionC: "Un archivo de imagen",
            opcionD: "Un lenguaje de programación",
            correcta: "b"
        },
    ];



    //tomamos los elementos html
    const txtPuntaje = document.querySelector("#puntos");
    const nombre = document.querySelector("#nombre");
    // Tomamos el elemento de audio
    const musicaFondo = document.getElementById("musica-fondo");



    // Config Inicial
    nombre.innerHTML = localStorage.getItem("nombre");
    let numPreguntaActual = 0;

    //Recupero el puntaje en caso que ya este jugando
    let puntajeTotal = 0;
    if(!localStorage.getItem("puntaje-total")){
        puntajeTotal = 0;
        txtPuntaje.innerHTML = puntajeTotal
    }else{
        puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
        txtPuntaje.innerHTML = puntajeTotal;
    }



    //cargar las preguntas del tema que eligió
    const categoriaActual = localStorage.getItem("categoria-actual");
    const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);



    function cargarSiguientePregunta(num){
        //tomo los elementos donde se cargaran los datos de la pregunta
        const numPregunta = document.querySelector("#num-pregunta");
        const txtPregunta = document.querySelector("#txt-pregunta");
        const opcionA = document.querySelector("#a");
        const opcionB = document.querySelector("#b");
        const opcionC = document.querySelector("#c");
        const opcionD = document.querySelector("#d");

        numPregunta.innerHTML = num + 1;
        txtPregunta.innerHTML = preguntasCategoria[num].titulo;
        opcionA.innerHTML = preguntasCategoria[num].opcionA;
        opcionB.innerHTML = preguntasCategoria[num].opcionB;
        opcionC.innerHTML = preguntasCategoria[num].opcionC;
        opcionD.innerHTML = preguntasCategoria[num].opcionD;

        

        //Agrego un eventlistener a cada boton de respuesta
        const botonesRespuesta = document.querySelectorAll(".opcion");
        //Quito los eventListen y las clases
        botonesRespuesta.forEach(opcion=>{
            opcion.removeEventListener("click", (e)=>{});
            opcion.classList.remove("correcta");
            opcion.classList.remove("incorrecta");
            opcion.classList.remove("no-events");
        })

        botonesRespuesta.forEach(opcion=>{
            opcion.addEventListener("click", agregarEventListenerBoton);
        })

        txtPuntaje.classList.remove("efecto");
    }

    // Variable para verificar si se ha respondido
    let respuestaSeleccionada = false;

    function cargarSiguientePregunta(num) {
        const numPregunta = document.querySelector("#num-pregunta");
        const txtPregunta = document.querySelector("#txt-pregunta");
        const opcionA = document.querySelector("#a");
        const opcionB = document.querySelector("#b");
        const opcionC = document.querySelector("#c");
        const opcionD = document.querySelector("#d");

        numPregunta.innerHTML = num + 1;
        txtPregunta.innerHTML = preguntasCategoria[num].titulo;
        opcionA.innerHTML = preguntasCategoria[num].opcionA;
        opcionB.innerHTML = preguntasCategoria[num].opcionB;
        opcionC.innerHTML = preguntasCategoria[num].opcionC;
        opcionD.innerHTML = preguntasCategoria[num].opcionD;

        // Quitar event listeners anteriores
        const botonesRespuesta = document.querySelectorAll(".opcion");
        botonesRespuesta.forEach(opcion => {
            opcion.removeEventListener("click", agregarEventListenerBoton); // Quitar listeners
            opcion.classList.remove("correcta", "incorrecta", "no-events"); // Limpiar clases
        });

        // Agregar nuevo event listener a cada botón de respuesta
        botonesRespuesta.forEach(opcion => {
            opcion.addEventListener("click", agregarEventListenerBoton);
        });

        txtPuntaje.classList.remove("efecto");
        respuestaSeleccionada = false; // Reiniciar para la nueva pregunta
    }

    function agregarEventListenerBoton(e) {
        respuestaSeleccionada = true; // Establecer a true cuando se selecciona una respuesta
        if (e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta) {
            e.currentTarget.classList.add("correcta");
            puntajeTotal += 100;
            txtPuntaje.innerHTML = puntajeTotal;
            localStorage.setItem("puntaje-total", puntajeTotal);
            txtPuntaje.classList.add("efecto");
        } else {
            e.currentTarget.classList.add("incorrecta");
            const correcta = document.querySelector("#" + preguntasCategoria[numPreguntaActual].correcta);
            correcta.classList.add("correcta");
        }


        // Deshabilitar todas las respuestas después de responder
        const botonesRespuesta = document.querySelectorAll(".opcion");
        botonesRespuesta.forEach(opcion => {
            opcion.classList.add("no-events");
        });
    }


    // Cargar la primera pregunta
    cargarSiguientePregunta(numPreguntaActual);

    // Tomo el botón siguiente
    const btnSiguiente = document.querySelector("#siguiente");
    btnSiguiente.addEventListener("click", () => {
        if (!respuestaSeleccionada) {
            alert("Por favor, responde la pregunta antes de continuar.");
            return; // No avanzar si no se ha respondido
        }    

        numPreguntaActual++;
        if (numPreguntaActual < preguntasCategoria.length) {
            cargarSiguientePregunta(numPreguntaActual);
        } else {
            const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
            if (parseInt(categoriasJugadasLS.length) < 4) {
                location.href = "menu.html";
            } else {
                location.href = "final.html";
            }
        }
});


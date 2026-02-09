# 📝 Guía para Modificar el Proyecto

## Agregar Nuevas Preguntas

1. Abre el archivo `js/juego.js`
2. Localiza el array `preguntas`
3. Agrega un nuevo objeto siguiendo este formato:

```javascript
{
    id: 17, // Número consecutivo único
    categoria: "Nombre de la Categoría",
    titulo: "¿Tu pregunta aquí?",
    opcionA: "Primera opción",
    opcionB: "Segunda opción",
    opcionC: "Tercera opción",
    opcionD: "Cuarta opción",
    correcta: "b" // La letra de la opción correcta (a, b, c, o d)
}
```

## Cambiar Categorías

### 1. Actualizar el Menú
Edita `menu.html` y busca la sección de categorías:

```html
<div class="categoria" id="NombreCategoria">
    <img src="img/icono-categoria.png" alt="Categoría" class="foto-categoria">
    <h3>Nombre Visible</h3>
</div>
```

### 2. Actualizar las Preguntas
En `js/juego.js`, cambia la propiedad `categoria` de las preguntas para que coincida con el `id` del div de categoría.

### 3. Agregar Imagen
Coloca una imagen PNG (200x200px recomendado) en `/img/` y actualiza la ruta en el HTML.

## Personalizar Colores

Edita `css/estilo.css`:

- **Fondo principal:** línea 69 - `background: linear-gradient(...)`
- **Contenedor:** línea 89 - `background-color`
- **Botones:** línea 165 - `background-color`
- **Categorías:** línea 239 - `background-color`

## Modificar Puntuación

En `js/juego.js`, línea ~260:
```javascript
puntajeTotal += 100; // Cambia el valor aquí
```

## Cambiar Cantidad de Preguntas

El juego actualmente está configurado para 4 preguntas por categoría y 4 categorías.

Para cambiar esto:
1. Modifica el total de preguntas en `juego.html` (línea ~30)
2. Ajusta la validación en `js/final.js` (línea ~18) donde dice `16 - correctas`
3. Actualiza el texto en `menu.html` donde dice "completa las 4"

## Agregar Sonidos

1. Coloca archivos MP3 en `/audio/`
2. Agrega la etiqueta `<audio>` en el HTML correspondiente
3. Controla la reproducción con JavaScript:

```javascript
const miSonido = document.getElementById("mi-sonido");
miSonido.play();
```

## Testing

Antes de subir cambios:
1. Prueba todas las categorías
2. Verifica que todas las respuestas correctas funcionen
3. Completa el juego de principio a fin
4. Prueba en móvil
5. Limpia el LocalStorage y vuelve a probar

Para limpiar LocalStorage:
- Consola del navegador: `localStorage.clear()`
- O usa el botón "Comenzar de Nuevo"

## Problemas Comunes

### Las imágenes no cargan
- Verifica que las rutas sean correctas
- Asegúrate de que los archivos existan en `/img/`

### El puntaje no se guarda
- Verifica que el navegador permita LocalStorage
- Si abres el archivo directamente, usa un servidor local

### La música no suena
- Los navegadores bloquean autoplay
- El código actual requiere interacción del usuario (click en "Felicitaciones")

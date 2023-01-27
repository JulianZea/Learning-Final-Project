const title = document.createElement("h1")
title.innerText = "hola mundo desde JS"

/* innertext = para agregar texto a mostrar */

/* esto es para que lo muestre por consola */
console.log(title)

/* si queremos que se muestre en la pagina */
document.body.append(title)



/* Tambien podemos crear un boton desde JS */
const button = document.createElement("button")
button.innerText = "click"

document.body.append(button)
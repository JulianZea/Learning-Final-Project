const title = document.createElement("h1")
title.innerText = "hola mundo desde JS"

document.body.append(title)



const button = document.createElement("button")
button.innerText = "click"

/* Manejadores de eventos */
    /* Cuando queramos interactuar con la pagina */
    /* agregamos un evento de escucha  */
button.addEventListener("click", function() {
    title.innerText = "texto actualizado con JS"
    alert("se realizo un click")
})

document.body.append(button)
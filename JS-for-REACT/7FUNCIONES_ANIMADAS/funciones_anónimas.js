function start(){
    return "starting..."
}

console.log(start())


/* otra manera */

/* si queremos ejecutarlo le colocamos (), ya que en la consola sin los () 
    el programa lo muestra tal cual esta hecho*/
console.log(function start(){
    return "starting..."
}())


/* Función anonima */
/* si se da cuenta es casi lo mismo, pues solo le quitamos el nombre de
    de la función, pero el resultado es el mismo */
console.log(function (){
    return "starting..."
}())


/* con eventos */
const button = document.createElement("button")
button.innerText = "clicl me"

button.addEventListener("click", function(){
    alert("clicked")
})

document.body.append(button)


/* con eventos pero con la funcion afuera */

const button = document.createElement("button")
button.innerText = "clicl me"

function handlerClick(){
    alert("clicked")
}

button.addEventListener("click", handlerClick)

document.body.append(button)
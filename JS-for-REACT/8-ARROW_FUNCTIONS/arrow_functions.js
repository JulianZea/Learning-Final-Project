/* funcion normal */
function add(x, y){
    return x + y
}


/* funcion flecha (arrow =>) */
const add = (x, y) => {
    return x + y
}


const button = document.createElement("button")
button.innerText = "click me"

button.addEventListener("click", () => {
    alert("clicked")
})
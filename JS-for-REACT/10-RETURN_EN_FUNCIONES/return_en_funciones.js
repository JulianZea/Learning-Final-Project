const button = document.createElement("button")
button.innerText = "click me"

const isAuthorized = true /* o false */

button,addEventListener("click", () => {
    if (isAuthorized){
        alert("si esta autorizado")
    } else {
        alert("no esta autorizado")
    }
})

document.body.append(button)




button,addEventListener("click", () => {
    if (isAuthorized){
        return alert("esta autorizado");
    }
    alert("no esta autorizado");
});
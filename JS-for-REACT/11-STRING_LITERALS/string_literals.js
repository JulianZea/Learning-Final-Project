const background = "yellow"
const color = "red"
const isAthorized = true;


const button = document.createElement("button");
button.innerText = "click me";
button.style = "background: ; color: color;"
button.style = "background: ${isAuthorized ? background : 'red' ) }; color: ${color}"


button.addEventListener("click", () => {
    if (isAthorized) {
        return alert("esta autorizado");
    }

    alert("no esta autorizado");
});

document.body.append(button);
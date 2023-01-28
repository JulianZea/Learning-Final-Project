
const showipluton = () => {
    return "hola a todos"
}


const showText = () => "hola mundo"
const showNumber = () => 15;
const showBoolean = () => true;
const showArray = () => [1, 2, 3]
const showBbject = () => ({name: Julian})
                        /* si le pasamos sin los parentesis ()
                        {name: Julian} nos dara undefined
                        por que no cree que es un objeto, cree que es el cuerpo
                        de la funcion*/
console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showBbject())
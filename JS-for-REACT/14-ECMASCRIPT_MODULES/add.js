//esport quiere decir que esta funcion puede ser utilizada por otros archivos
export function add(x=0, y=0) {
    return x + y
}

export function multiply(x, y) {
    return x * y
}

export const title = "JS for react"
export const active = true
export const points =  [10, 20, 30]


//export por default
export default title
//export default points
//export default add (una funcion) pero como es una función, tenemos que ejecutarlo
//de esta manera console.log(addModule()) en el archivo donde lo importamos
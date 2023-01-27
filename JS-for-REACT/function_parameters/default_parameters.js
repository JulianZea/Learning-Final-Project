/* la manera larga*/
function add(x, y){

    if (y === undefined) {
        y = 0
    }

    if (x === undefined) {
        x = 0
    }
    return x + y
}

console.log(add(3, undefined))


/* la manera corta*/
    /* asignar valores por defecto*/
function add(x = 0, y = 0){
    return x + y
}

console.log(add(3))

function hello() {
    /* tambien no solo retorna un string, puede retornar números, booleanos*/
    return "hola mundo JS"
}

/* NUMEROS */
function hello() {
    return 3.14
}

/* BOOLEANOS */
function hello() {
    return true
}

function hello() {
    return false
}


/* ARREGLOS */
    /* vacio */
function hello() {
    return []
}

    /* con valores */
function hello() {
    return [1, 2, 3]
}


/* OBJETOS */
    /* vacio */
function hello() {
    return {}
}

    /* con valores */
function hello() {
    return {name: "Julian"}
}

/* FUNCION (programación funcional)*/
function hello() {
    return function () {
        return "hola mundo"
    }
}

console.log(hello()())


/*hay dos maneras*/

/*#1*/
const result = hello ()
console.log(result)

/*#2*/
console.log(hello())

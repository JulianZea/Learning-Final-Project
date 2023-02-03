const names = ["Cesar", "Julian", "Andre"]

//for (let i = 0; i < names.length; i++) {
//    const element = names[i];
//    console.log(element)
//}


//metodo forEach lo que espera es un parametro como funcion 
//forEach va a recorrer los elemnos del array
//es bueno colocarle los array en plural ya que en el momento de recorrerlos
//podemos usar el nombre en singular
//es más simple usar esta manera que el for 
names.forEach(function (name) {
    console.log(name)
})

//CON EL METODO "map" 
//lo que hace es que al momento de recorrer y lo guardamos
//nos produce el mismo resultado, pero no solo recorre sino que retorna un
// nuevo arreglo
// ["undefined", "undefined", "undefined"] la funcion nos devuelve undefined
// porque en este caso el metodo map, espero que retorne.
names.map(function (name) {
    console.log(name)
})

//aqui usamos el return
//nos devuelve el mismo objeto ["Cesar", "Julian", "Andre"]
const newNames = names.map(function (name) {
    return name
})
console.log(newNames)


//con string
//nos devuelve ["hola Cesar", "hola Julian", "hola Andre"]
const newNames2 = names.map(function (name) {
    return "hola ${name}"
})
console.log(newNames2)

conosle.log(names) //muestra el arreglo original
console.log(newNames) //muestra el modificado


//CON EL METODO "find"
//como su nombre lo dice es para buscar un elemento
const namefound = names.find(function (name) {
    if (name === "Julian") {
        return name
    }
})
//lo que devuelve  =  "Julian"
console.log(namefound)


//CON EL METODO "filter"
//nos permite crear un nuevo arreglo con elementos que hayamos filtrados
//es decir con elementos que cumplan una condición, el filter en una interfaz
// lo utilizamos para quitar el un elemento de un arreglo es como un delete

const namefilter = names.filter(function (name) {
    if (name === "Julian") {
        return name
    }
})
//devuelve ["Julian"] 
//se añade el un nuevo arreglo
console.log(namefilter)

//de caso que sea diferente
const namefilter2 = names.filter(function (name) {
    if (name !== "Julian") {
        return name
    }
})

//se añade los arreglos que sean diferentes al arreglo especifico
console.log(names)//original ["Cesar", "Julian", "Andre"]
console.log(namefilter2)//modificado ["Cesar", "Andre"]



//nuevos arreglos

const Newarreglo = ["Cesar", "Julian", "Andre"]
const Newarreglo2 = ["Briggite", "hally", "Blanca"]

//concat lo que hace es unir ambos arreglos
Newarreglo.concat(Newarreglo2)


console.log(Newarreglo)
console.log(Newarreglo2)
console.log(Newarreglo.concat(Newarreglo2))

//mas arrelos aqui 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
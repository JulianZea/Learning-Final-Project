const names = ["Cesar", "Julian", "Andre"]
const newNames = ["Briggite", "hally", "Blanca"]

console.log([]) //crear un nuevo arreglo
console.log([...names, ...newNames]) //con los (...) quiere decir que queremos copiar
//...names quiere decir que trae todos los elementos de este arreglo
//...newNames trae todos los elementos de este arreglo y crea un nuevo arreglo

console.log(names)
console.log(newNames)


//funciona con objetos

const user = {
    name: "Julian",
    lastname: "Zea"
}

const address={
    street: "main street 100",
    city: "Lima"
}

const userInfo = {
    ...user,
    ...address
}

console.log(user)
console.log(address)
console.log(userInfo)
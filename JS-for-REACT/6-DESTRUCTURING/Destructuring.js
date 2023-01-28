const user = {
    name: "Julian",
    age: 19
} 

function printinfo(user) {
    return "<h1>Hola " + user.name + "</h1>"
}

console.log(printinfo(user))

document.body.innerHTML = printinfo(user)
document.body.innerHTML = "<h2> hola mundo </h2>"
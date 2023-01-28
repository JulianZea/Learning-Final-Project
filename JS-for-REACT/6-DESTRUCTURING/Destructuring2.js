const user = {
    name: "Julian",
    age: 19
} 

function printinfo({age}) {
    return "<h1>Hola " + age + "</h1>"
}

console.log(printinfo(user))

document.body.innerHTML = printinfo(user)


/* otra manera de estructurar */


function printinfo(user) {
    /* extraemos los valores del objeto (user) su valores -name -age */
    const { name, age} = user;

    console.log(name, age);
    return "<h1>Hola " + name + "</h1>";
}
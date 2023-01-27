/* teoria */
const syntaxis = {
    key: value
}

const user = {
    name: "Julian",
    lastname: "Zea",
    age: "19",
    address:{
        country: "Perú",
        city: "Comas"
    },
    friends: ["Andre", "Briggitte"],
    active: true,
    sendMail() {
        return "sending email..."
    }
}

console.log(user)

/* acceder a un valor especifico */
console.log(user.name)
console.log(user.address.city)
console.log(user.friends)
console.log(user-active)
console.log(user.sendMail())




/*
const user = { 
*/
    /* 
    PROPERTIES

    name: "Julian",
    lastname: "Zea",
    age: "19",
    address:{
        country: "Perú",
        city: "Comas"
    },
    friends: ["Andre", "Briggitte"],
    active: true,
    */


    /*  METHODS
    
    sendMail() {
        return "sending email..."
    }
    */

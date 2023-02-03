import {add, multiply,active,points,title} from "./add.js"

console.log(active, points, title);
console.log(add(10, 20));
console.log(multiply(10, 10));


//por otro lado podemos export por default

import addModule from "./add.js"

console.log(addModule)
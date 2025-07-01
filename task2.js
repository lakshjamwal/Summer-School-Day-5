// Hoisting

console.log(a);
var a=100; // output:undefined

console.log(x);
let b=100;// ReferenceError: x is not defined

/*Reason for var =
Variables declared with var are hoisted to the top of their scope and initialized. Var is known to exist but hasn’t been assigned a value yet.

R for let =
Variables declared with let (and const) are also hoisted, but they are not initialized. They remain in a Temporal Dead Zone (TDZ) from the start of the block until the declaration is encountered. Accessing the variable in this zone causes a ReferenceError.*/
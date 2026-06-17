// =========================================
// B1 - var / let / const + Hoisting
// =========================================

// Part 1: Predict and Explain

/*
console.log(a); // undefined
Reason: var is hoisted and initialized with undefined.

console.log(b); // ReferenceError
Reason: let is hoisted but remains in Temporal Dead Zone (TDZ).

console.log(c); // ReferenceError
Reason: const is hoisted but remains in TDZ.
*/

// Original Code
/*
console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
*/


// =========================================
// Part 2: Re-declaration
// =========================================

/*
var a = 99; // Allowed

let b = 88; // Error
Reason: let cannot be re-declared in the same scope.

const c = 77; // Error
Reason: const cannot be re-declared in the same scope.
*/


// =========================================
// Part 3: const Object
// =========================================

/*
const user = { name: 'Asad' };

user.name = 'Ali';
Allowed because object properties can be modified.

user = {};
TypeError: Assignment to constant variable.
Reason: const prevents reassignment.
*/


// =========================================
// Corrected Version
// =========================================

var a = 10;
let b = 20;
const c = 30;

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);

// Re-assignment (Allowed)

a = 99;
b = 88;

console.log("Updated a =", a);
console.log("Updated b =", b);

// const object

const user = {
    name: "Asad"
};

user.name = "Ali";

console.log("Updated User =", user);

// Output:
// a = 10
// b = 20
// c = 30
// Updated a = 99
// Updated b = 88
// Updated User = { name: 'Ali' }

# js-fundamentals-assignment
# JavaScript Fundamentals Assignment

## A1. Difference Between var, let, and const

### Scope
- var is function-scoped.
- let is block-scoped.
- const is block-scoped.

```javascript
function test() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }

    console.log(a); // 10
}
```

### Hoisting
- var is hoisted and initialized with undefined.
- let and const are hoisted but remain in the Temporal Dead Zone (TDZ).

```javascript
console.log(x); // undefined
var x = 10;
```

```javascript
console.log(y); // ReferenceError
let y = 20;
```

### Temporal Dead Zone (TDZ)

TDZ is the period between hoisting and declaration where let and const cannot be accessed.

```javascript
console.log(age); // ReferenceError
let age = 25;
```

### Re-declaration and Re-assignment

| Keyword | Re-declare | Re-assign |
|----------|------------|------------|
| var | Yes | Yes |
| let | No | Yes |
| const | No | No |

```javascript
var a = 1;
var a = 2;

let b = 1;
b = 2;

const c = 1;
// c = 2; Error
```

### Modern JavaScript Recommendation

- Use const by default.
- Use let when value changes.
- Avoid var in modern JavaScript.

---

## A2. What is V8 Engine? What does Single-Threaded Mean?

### V8 Engine

V8 is Google's JavaScript engine.

It converts JavaScript code into machine code and executes it.

Used in:
- Google Chrome
- Node.js

### JIT Compilation

JIT (Just-In-Time) Compilation means JavaScript is compiled into machine code during execution.

### Single-Threaded JavaScript

JavaScript has one call stack and executes one task at a time.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

### Async Operations

JavaScript uses:

- Call Stack
- Web APIs
- Callback Queue
- Event Loop

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");
```

Output:

```text
Start
End
Timer
```

### Node.js

JavaScript execution is single-threaded but Node.js uses libuv for I/O operations.

---

## A3. JavaScript Data Types and Type Coercion

### JavaScript Data Types

#### Primitive Types

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

#### Non-Primitive Type

8. Object

```javascript
let name = "Ali";
let age = 20;
let isStudent = true;
let x;
let y = null;
let id = Symbol("id");
let big = 123456789n;
let person = {};
```

### typeof null Bug

```javascript
typeof null;
```

Output:

```text
object
```

This is a historical JavaScript bug.

### Implicit Coercion

```javascript
"5" + 2; // "52"
```

```javascript
"10" - 2; // 8
```

### Explicit Coercion

```javascript
Number("123");
String(100);
Boolean(1);
```

### == vs ===

```javascript
5 == "5"; // true
```

```javascript
5 === "5"; // false
```

=== is safer because it checks both value and data type.

---

## A4. Primitive vs Non-Primitive Data Types

### Primitive Types

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

Stored in Stack Memory.

### Non-Primitive Types

- Objects
- Arrays
- Functions

Stored in Heap Memory.

### Primitive Copy

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output:

```text
10
20
```

### Object Copy

```javascript
let user1 = {
    name: "Ali"
};

let user2 = user1;

user2.name = "Sara";

console.log(user1.name);
```

Output:

```text
Sara
```

### Object Mutation Example

```javascript
const person1 = {
    name: "Asad"
};

const person2 = person1;

person2.name = "Ahmed";

console.log(person1.name);
```

Output:

```text
Ahmed
```

---

## A5. Pass By Value vs Pass By Reference

### Primitive Example

```javascript
function changeValue(num) {
    num = 100;
}

let x = 50;

changeValue(x);

console.log(x);
```

Output:

```text
50
```

### Object Example

```javascript
function updateUser(user) {
    user.name = "Sara";
}

const person = {
    name: "Ali"
};

updateUser(person);

console.log(person.name);
```

Output:

```text
Sara
```

### Reference By Value

JavaScript passes the reference by value.

### Reassigning Object

```javascript
function replaceUser(user) {
    user = {
        name: "Ahmed"
    };
}

const obj = {
    name: "Ali"
};

replaceUser(obj);

console.log(obj.name);
```

Output:

```text
Ali
```

### Mutating Object

```javascript
function mutateUser(user) {
    user.name = "Sara";
}

const obj2 = {
    name: "Ali"
};

mutateUser(obj2);

console.log(obj2.name);
```

Output:

```text
Sara
```

---

## A6. Functions in JavaScript

### What is a Function?

A function is a reusable block of code that performs a specific task.

### Function Declaration Syntax

```javascript
function add(a, b) {
    return a + b;
}
```

### Hoisting

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

### Parameter vs Argument

Parameter:

```javascript
function greet(name) {}
```

Argument:

```javascript
greet("Ali");
```

### Return Value

If no return statement is used:

```javascript
function test() {}
```

Return value:

```javascript
undefined
```

### Real World Example

```javascript
function validateAge(age) {
    if (age >= 18) {
        return "Eligible";
    }

    return "Not Eligible";
}

console.log(validateAge(20));
console.log(validateAge(15));
```

Output:

```text
Eligible
Not Eligible
```

### Functions are Objects

```javascript
function demo() {}

console.log(typeof demo);
```

Output:

```text
function
```

```javascript
demo instanceof Object; // true
```

// =========================================
// C2 - User Registration Validator
// =========================================

function validateUser(data) {

    const errors = [];

    // Name

    if (
        typeof data.name !== "string" ||
        data.name.trim() === ""
    ) {
        errors.push(
            "Name cannot be empty"
        );
    }

    // Email

    if (
        typeof data.email !== "string" ||
        !data.email.includes("@") ||
        !data.email.includes(".")
    ) {
        errors.push(
            "Invalid email format"
        );
    }

    // Age

    const age = Number(data.age);

    if (isNaN(age)) {
        errors.push(
            "Age must be a valid number"
        );
    }
    else if (
        age < 13 ||
        age > 120
    ) {
        errors.push(
            "Age must be 13-120"
        );
    }

    // Password

    if (
        typeof data.password !== "string" ||
        data.password.length < 8
    ) {
        errors.push(
            "Password min 8 chars"
        );
    }

    // Role

    const role =
        data.role ?? "user";

    const validRoles =
        ["admin", "editor", "user"];

    if (
        !validRoles.includes(role)
    ) {
        errors.push(
            "Invalid role"
        );
    }

    // Final Result

    if (errors.length > 0) {
        return {
            valid: false,
            errors
        };
    }

    return {
        valid: true,
        user: {
            name: data.name,
            email: data.email,
            age,
            password: data.password,
            role
        }
    };
}


// Test 1

console.log(
    validateUser({
        name: "Ali",
        email: "ali@test.com",
        age: "25",
        password: "pass1234"
    })
);

// Test 2

console.log(
    validateUser({
        name: "",
        email: "notanemail",
        age: 10,
        password: "abc"
    })
);

// Test 3

console.log(
    validateUser({
        name: "Sara",
        email: "sara@x.io",
        age: 30,
        password: "secure99",
        role: "admin"
    })
);

// Test 4

console.log(
    validateUser({
        name: "X",
        email: "x@x.com",
        age: "17abc",
        password: "hello123"
    })
);

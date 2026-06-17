// =========================================
// B3 - calculateDiscount()
// =========================================

function calculateDiscount(price, userType, isMember) {

    if (typeof price !== "number" || price <= 0) {
        return "Invalid price";
    }

    let finalPrice = price;

    if (userType === "admin") {
        finalPrice = finalPrice * 0.5;
    }
    else if (price > 1000) {
        finalPrice = finalPrice * 0.8;
    }
    else if (price > 500) {
        finalPrice = finalPrice * 0.9;
    }

    if (isMember === true) {
        finalPrice = finalPrice * 0.95;
    }

    if (finalPrice < 1) {
        finalPrice = 1;
    }

    return finalPrice.toFixed(2);
}

// Required Test Cases

console.log(
    calculateDiscount(1200, "user", false)
);

console.log(
    calculateDiscount(1200, "user", true)
);

console.log(
    calculateDiscount(600, "admin", true)
);

console.log(
    calculateDiscount(-50, "user", false)
);

console.log(
    calculateDiscount("abc", "user", false)
);

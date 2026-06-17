// =========================================
// C1 - Shopping Cart System
// =========================================

// Original Code Analysis

/*
var cartA = { owner: 'Asad', items: [{ name: 'Laptop', price: 150000 }], total: 150000 };
var cartB = cartA;

cartB.items.push({ name: 'Mouse', price: 2500 });
cartB.total = cartB.total + 2500;

console.log('Tab 1 cart items:', cartA.items.length);
console.log('Tab 1 total:', cartA.total);

OUTPUT:
Tab 1 cart items: 2
Tab 1 total: 152500

Reason:
cartB = cartA does NOT create a copy.
Both variables point to the same object.
*/


/*
function applyPromo(cart, discount) {
    cart.total = cart.total - discount;
    cart.promoApplied = true;
    return cart;
}

const originalCart = { owner: 'Sara', items: ['Book'], total: 500 };

const discountedCart = applyPromo(originalCart, 50);

console.log(originalCart.total);

OUTPUT:
450

Reason:
Function mutates original object.
*/


// =========================================
// Fixed Version
// =========================================

const cartA = {
    owner: "Asad",
    items: [
        {
            name: "Laptop",
            price: 150000
        }
    ],
    total: 150000
};

// Deep Copy

const cartB = structuredClone(cartA);

cartB.items.push({
    name: "Mouse",
    price: 2500
});

cartB.total += 2500;

console.log("Tab 1 Items:", cartA.items.length);
console.log("Tab 1 Total:", cartA.total);

console.log("Tab 2 Items:", cartB.items.length);
console.log("Tab 2 Total:", cartB.total);


// Pure Function

function applyPromo(cart, discount) {
    return {
        ...cart,
        total: cart.total - discount,
        promoApplied: true
    };
}

const originalCart = {
    owner: "Sara",
    items: ["Book"],
    total: 500
};

const discountedCart =
    applyPromo(originalCart, 50);

console.log(
    "Original Total:",
    originalCart.total
);

console.log(
    "Discounted Total:",
    discountedCart.total
);


// Task 4

function addItem(cart, item) {

    return {
        ...cart,
        items: [...cart.items, item],
        total: cart.total + item.price
    };
}

const cartBefore = {
    owner: "Ali",
    items: [],
    total: 0
};

const cartAfter =
    addItem(cartBefore, {
        name: "Keyboard",
        price: 3000
    });

console.log("Before:", cartBefore);
console.log("After:", cartAfter);

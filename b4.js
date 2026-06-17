// =========================================
// B4 - Shallow Copy / Deep Copy Bugs
// =========================================

// -----------------------------------------
// Bug 1: Cart Duplication Bug
// -----------------------------------------

/*
BUG:
Spread operator creates a shallow copy.
The items array is still shared.

WRONG OUTPUT:
['JS Book', 'React Book', 'Node Book']

cart1 is also modified.
*/

const cart1 = {
    items: ['JS Book', 'React Book'],
    total: 150
};

const cart2 = {
    ...cart1,
    items: [...cart1.items]
};

cart2.items.push('Node Book');

console.log("cart1:", cart1.items);
console.log("cart2:", cart2.items);


// -----------------------------------------
// Bug 2: Function Mutating Original Object
// -----------------------------------------

/*
BUG:
Object mutation changes original object.

WRONG OUTPUT:
myOrder.total = 117
*/

function applyTax(order) {
    return {
        ...order,
        total: order.total * 1.17
    };
}

const myOrder = {
    id: 1,
    total: 100
};

const taxedOrder = applyTax(myOrder);

console.log("Original Order:", myOrder);
console.log("Taxed Order:", taxedOrder);


// -----------------------------------------
// Bug 3: Config Reset Bug
// -----------------------------------------

/*
BUG:
Reassigning parameter doesn't affect original object.

Nested object is still shared.
*/

const defaultConfig = {
    theme: 'dark',
    lang: 'en',
    nested: {
        fontSize: 14
    }
};

function resetConfig() {
    return structuredClone(defaultConfig);
}

const appConfig = {
    theme: 'light',
    lang: 'ur',
    nested: {
        fontSize: 20
    }
};

const newConfig = resetConfig();

console.log("Old Config:", appConfig);
console.log("Reset Config:", newConfig);

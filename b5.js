// =========================================
// B5 - Pure Function Library
// =========================================


// -----------------------------------------
// 1. addToCart()
// -----------------------------------------

function addToCart(cart, item) {
    return [...cart, item];
}

const cart = ['milk', 'eggs'];

const updatedCart = addToCart(
    cart,
    'bread'
);

console.log(updatedCart);
console.log(cart);


// -----------------------------------------
// 2. updateUserAge()
// -----------------------------------------

function updateUserAge(user, newAge) {
    return {
        ...user,
        age: newAge
    };
}

const user = {
    name: 'Ali',
    age: 25
};

const updatedUser = updateUserAge(
    user,
    26
);

console.log(updatedUser);
console.log(user);


// -----------------------------------------
// 3. incrementScore()
// -----------------------------------------

function incrementScore(scores, playerName) {
    return {
        ...scores,
        [playerName]:
            scores[playerName] + 1
    };
}

const scores = {
    Ali: 5,
    Sara: 3
};

const newScores =
    incrementScore(scores, 'Ali');

console.log(newScores);
console.log(scores);


// -----------------------------------------
// 4. reverseString()
// -----------------------------------------

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(
    reverseString('hello')
);


// -----------------------------------------
// 5. removeItem()
// -----------------------------------------

function removeItem(arr, index) {
    return arr.filter(
        (_, i) => i !== index
    );
}

const numbers = [1, 2, 3, 4];

const updatedNumbers =
    removeItem(numbers, 1);

console.log(updatedNumbers);
console.log(numbers);


// =========================================
// Expected Outputs
// =========================================

/*
addToCart(['milk','eggs'],'bread')
=> ['milk','eggs','bread']

Original:
=> ['milk','eggs']

----------------------------------

updateUserAge(
{name:'Ali',age:25},
26
)

=> {name:'Ali',age:26}

Original:
=> {name:'Ali',age:25}

----------------------------------

incrementScore(
{Ali:5,Sara:3},
'Ali'
)

=> {Ali:6,Sara:3}

Original:
=> {Ali:5,Sara:3}

----------------------------------

reverseString('hello')

=> 'olleh'

----------------------------------

removeItem(
[1,2,3,4],
1
)

=> [1,3,4]

Original:
=> [1,2,3,4]
*/

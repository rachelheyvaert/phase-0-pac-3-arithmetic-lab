let number = 5;

function add() {
    return (number += 5);
};

function subtract() {
    return (number -= 5);
}

function multiply() {
    return (number *= 5);
}

function divide() {
    return (number /= 5);
}

function add(a = 6,b = 2) {
    return (a + b);
}

function subtract(a = 6, b = 2) {
    return (a - b);
}

function multiply(a = 6, b = 2) {
    return (a * b);
}

function divide( a = 6, b = 2) {
    return (a / b);
}
function increment(a) {
    return (a +1 );
}

function decrement(a) {
    return (a - 1);
}

function makeInt(n)  {
return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}
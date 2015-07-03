// Functions

// Named function
function Hello(name) {
    // ...
}

// Unnamed function
var hello = function (name) {
    // ...
}

// IEFF function
(function () {
    // ...
})

// Example
function sayHello (name) {
    console.log('Hello ' + name);
}

var sayHello2 = function (name) {
    console.log('Hello ' + name + ' again.');
}

(function () {
    console.log('Hello too.')
})

(function (name) {
    console.log('Welcome ' + name); // Welcome Satit
})('Satit');

// Run
sayHello('Satit'); // Hello Satit
sayHello2('Satit'); // Hello Satit again.

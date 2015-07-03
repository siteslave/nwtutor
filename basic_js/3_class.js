// Class

var myClass = {
    hello: function (name) {
        //...
    },
    hi: function (name) {
        //...
    }
}
// same with
var myClass = {};
myClass.hello = function (name) {
    //...
}
myClass.hi = function (name) {
    //...
}

// Usage
var Car = {
    name: 'Benz',
    color: 'Red',
    setName: function (name) {
        this.name = name;
    },
    getName: function () {
        return 'Your car name: ' + this.name;
    },
    setColor: function (color) {
        this.color = color;
    },
    getColor: function () {
        return 'Your car color is: ' + this.color;
    }
};

Car.name; // Benz
Car.setName('Mazda');
Car.name; // Mazda
Car.getName(); // // Your car name: Mazda
Car.color; // Red
Car.setColor('Green');
Car.color; // Green
Car.getColor(); // Your car color is: Green

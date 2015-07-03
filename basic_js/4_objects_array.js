// Object and Array

// Object
var obj = {
    fname: 'Satit',
    lname: 'Rianpit',
    getFullname: function () {
        return this.fname + ' ' + this.lname;
    }
}
// Or
var obj = {};
obj.fname = 'Satit';
obj.lname = 'Rianpit';
obj.getFullname = function () {
    return obj.fname + ' ' + obj.lname;
}

// Array
var fruits = [];
fruits[0] = 'Apple';
fruits[1] = 'Banana';
fruits[3] = 'Pie Apple';

// or
var fruits = ['Apple', 'Banana', 'Pie Apple'];

// Get data in Array
var apple = fruits[0];
var banana = fruits[1];
var pie_apple = fruits[2];

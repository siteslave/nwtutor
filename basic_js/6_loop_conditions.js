// if-else
if (cond) {
    // true
} else {
    // false
}

// Example:
var a = 10;
var b = 5;

if (a > b) {
    console.log('A > B');
} else {
    console.log('A < B');
}
// Short if-else
var c = a > b ? 'A > B' : 'A < B'; // A > B
/******************************************************************
* switch
/*****************************************************************/
switch (expression) {
    case expression:
        //..
        break;
    default:
        // ..
}
// Example
var getSex = function (sex) {
    switch (sex) {
        case '1':
            return 'ชาย';
            break;
        case '2':
            return 'หญิง';
            break;
        default:
            return 'ไม่ทราบ';
            break;
    }
};

var man = getSex('1'); // ชาย
var women = getSex('2'); // หญิง

/******************************************************************
* for
/*****************************************************************/
for (var i = 0; i < array.length; i++) {
    array[i]
}
// Example
for (var i = 0; i <= 10; i++) {
    console.log(i); // 0, 1, 2, 3, ..., 10
}
// Array
var fruits = ['Apple', 'Banana', 'Pie Apple'];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Apple, Banana, Pie Apple
}

/******************************************************************
* for-in
/*****************************************************************/
for (var variable in object) {
    // variable
}

// Example
var fruits = ['Apple', 'Banana', 'Pie Apple'];
for (var idx in fruits) {
    console.log(fruits[idx]); // Apple, Banana, Pie Apple
}

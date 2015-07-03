// Callback function

var getData = function (callback) {
    var name = 'Steve Job';
    callback(name);
}

getData(function (name) {
    console.log(name); // Steve Job
});

// Callback with multiple result and multiple params
var getResult = function (id, callback) {
    if (id == '1') callback(null, 'John')
    else if (id == '2') callback(null, 'Marry')
    else callback('Error!');
};

getResult(1, function (err, name) {
    if (err) alert(err);
    else alert('Your name: ' + name); // John
});

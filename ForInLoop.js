'use strict';

const obj = {
    a: true,
    b: true,
    c: true
};
const funcs = [];
const keys = Object.keys(obj);
let i = 0;

for (var prop in obj) {
    funcs.push((function(value, index) {
        return function () {
            console.log(typeof value);
            console.log(value === keys[index]);
        };
    }(prop, i)));
    i++;
};

funcs.forEach(function (func) {
    func();
});

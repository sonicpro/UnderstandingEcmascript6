class MyArray extends Array {
    // empty
}

var colors = new MyArray();
colors[0] = 'red';
console.log(colors.length);	// 1

colors.length = 0;
console.log(colors[0]);	// undefined, correct behavior for Array.

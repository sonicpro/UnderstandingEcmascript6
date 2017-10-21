const condition = true;

console.log(typeof value);	// "undefined"

if (condition) {
    // console.log(typeof value);	This line causes ReferenceError.
    let value = 10;
}

if (condition) {
    console.log(typeof hoisted);
    var hoisted = 'text';
}

if (condition) {
    console.log(typeof abc);
}

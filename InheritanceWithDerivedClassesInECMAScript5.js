function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
};

// Derived class.
function Square(length) {
    Rectangle.call(this, length, length);
}

// Replace the constructor property of Rectangle.prototype.
Square.prototype =
    Object.create(Rectangle.prototype, {
        constructor: {
            value: Square,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

var square = new Square(3);
console.log(square.getArea());	// 9
console.log(square instanceof Square);	// true
console.log(square instanceof Rectangle);	// true

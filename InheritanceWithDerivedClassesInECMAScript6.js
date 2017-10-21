class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

// Derived class.
class Square extends Rectangle {
    constructor(length) {
        // Equivalent of Rectangle.call(this, length, length)
        super(length, length);
    }
}

var square = new Square(3);
console.log(square.getArea());	// 9
console.log(square instanceof Square);	// true
console.log(square instanceof Rectangle);	// true

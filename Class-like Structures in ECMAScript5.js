function PersonType(name) {
    // __proto__ property is set to this function prototype during the new Constructor() call.
    this.name = name;
}

PersonType.prototype.sayName = function() {
    console.log(this.name);
};

var person = new PersonType("Nicholas");
person.sayName();


console.log(person instanceof PersonType);	// true
console.log(person instanceof Object);	// true
console.log(person.__proto__ === PersonType.prototype);	// true
console.log(person.__proto__.constructor.prototype.__proto__ === Object.prototype);	// true
console.log(Object.prototype.__proto__ === null);	// true

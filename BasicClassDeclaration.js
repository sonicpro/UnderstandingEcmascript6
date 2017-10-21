class PersonClass {
    // Equivalent of the PersonType constructor
    constructor(name) {
        this.name = name;
    }

    // Equivalent of PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
}

let person = new PersonClass("Nicholas");
person.sayName();

console.log(person instanceof PersonClass);	// true
console.log(person instanceof Object);	// true
console.log(typeof PersonClass);	// function
console.log(typeof PersonClass.prototype.sayName);	// function
console.log(person.__proto__ === PersonClass.prototype);	// true, hence class declaration is a syntactic sugar on top of Constructor function.
console.log(person.__proto__.constructor.prototype.__proto__ === Object.prototype);	// true
console.log(Object.prototype.__proto__ === null);	// true

var person = {
    getGreeting() {
        return "Hello";
    }
};

var dog = {
    getGreeting() {
        return "Woof";
    }
};

// This object's prototype is supposed to be either a person or a dog.
var friend = {
    getGreeting() {
        // propotype implementation plus an additional string.
        return Object.getPrototypeOf(this).getGreeting.call(this) + ', hi!';
    }
};

// Set prototype to person.
Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting());	// "Hello, hi!"
console.log(Object.getPrototypeOf(friend) === person);	// true

// Set prototype to dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());	// "Woof, hi!"
console.log(Object.getPrototypeOf(friend) === dog);	// true

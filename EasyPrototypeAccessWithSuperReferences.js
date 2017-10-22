var person = {
    getGreeting: function() {
        return "Hello";
    }
};

var dog = {
    getGreeting: function() {
        return "Woof";
    }
};

var friend = {
    // function must be a concise method to access super reference from inside!
    getGreeting() {
        // At its simplest, super is a pointer to the current object's prototype (=== Object.getPrototypeOf(this)).
        return super.getGreeting() + ', hi!';
    }
};

// set prototype to person.
Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting());	// "Hello, hi!"
console.log(Object.getPrototypeOf(friend) === person);	// true

// set prototype to dog.
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());	// "Woof, hi!"
console.log(Object.getPrototypeOf(friend) === dog);	// true

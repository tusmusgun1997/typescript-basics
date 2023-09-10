"use strict";
// Let's start by defining a class called "Coder". This class represents a coder and has several properties and methods.
class Coder {
    // The constructor is a special method used to initialize the properties of the class.
    constructor(name, music, age, Lang = 'typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.Lang = Lang;
    }
    // We've defined a public method called "getAge" to retrieve the age of the coder.
    getAge() {
        return this.age;
    }
}
// Now, let's create an instance of the "Coder" class.
const coder = new Coder('John', 'Rock', 30);
// We can access the properties and methods of the instance like this:
// Accessing a public property
console.log(coder.name);
// Accessing a public method
console.log(coder.getAge());
// Moving on, we extend the "Coder" class to create a subclass called "WebDev".
class WebDev extends Coder {
    constructor(name, music, age, Lang = 'typescript') {
        // We use the "super" keyword to call the constructor of the parent class and pass in the required parameters.
        super(name, music, age, Lang);
    }
    // In the "WebDev" subclass, we have a public method "getLanguage" which accesses the protected property "Lang" from the parent class.
    getLanguage() {
        return this.Lang;
    }
}
// Now, let's create an instance of the "WebDev" class.
const webDev = new WebDev('Sarah', 'Rock', 25);
// We can access properties and methods of the subclass as well:
// Accessing a public property from the superclass
console.log(webDev.name);
// Accessing a public method from the subclass
console.log(webDev.getLanguage());
// We implement the "Musician" interface in the "Guitarist" class.
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    // The "play" method is required by the interface and is implemented here.
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
// Creating an instance of the "Guitarist" class.
const page = new Guitarist('Jimmy Page', 'guitar');
// We can access the implemented interface methods:
console.log(page.play('strums'));
// Next, we explore a class with a static property and method.
class Peeps {
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count; // Increment and assign ID
    }
    // A static method "getCount" to retrieve the count of instances.
    static getCount() {
        return Peeps.count;
    }
}
// Here, we have a static property "count" to keep track of instances.
Peeps.count = 0;
// Creating instances of the "Peeps" class.
const john = new Peeps('John');
const steve = new Peeps('Steve');
// We can access the static property and method:
console.log(Peeps.getCount()); // Outputs 2 (number of instances)
// Finally, let's explore a class with a getter and setter.
class Bands {
    constructor() {
        this.dataState = [];
    }
    // We define a getter to access the private property "data".
    get data() {
        return this.dataState;
    }
    // We also define a setter to modify the private property "data".
    set data(value) {
        if (Array.isArray(value) && value.every((element) => typeof element === 'string')) {
            this.dataState = value;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
// Creating an instance of the "Bands" class.
const myBands = new Bands();
// We can use the getter and setter to manipulate data:
myBands.data = ['Neil Young', 'Led Zeppelin'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'ZZ Top'];
console.log(myBands.data);
// Trying to set invalid data, which will throw an error
try {
    myBands.data = 'Van Halen'; // Throws an error
}
catch (error) {
    console.error(error.message);
}

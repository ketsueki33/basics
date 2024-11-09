// Ways to create objects

const obj1 = {
    key1: "value1",
    key2: "value2",
    method: function () {
        console.log("Hello!");
    },
};
console.log(obj1); // { key1: 'value1', key2: 'value2', method: [Function: method] }

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const obj2 = new Person("John", 30);
console.log(obj2); // Person { name: 'John', age: 30, greet: [Function] }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const obj3 = new Person("Jane", 25);
console.log(obj3); // Person { name: 'Jane', age: 25 }

function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        },
    };
}

const obj4 = createPerson("Bob", 40);
console.log(obj4); // { name: 'Bob', age: 40, greet: [Function: greet] }

const obj5 = new Object();
obj5.name = "Charlie";
obj5.age = 28;
console.log(obj5); // { name: 'Charlie', age: 28 }

// Acessing properties

console.log(obj5.name); // Charlie

console.log(obj5["age"]); // 28

// Call, apply, bind methods

const person = {
    name: "John",
    greet: function (message, punctuation) {
        return `${message}, I'm ${this.name}${punctuation}`;
    },
};

const anotherPerson = {
    name: "Jane",
};

console.log(person.greet.call(anotherPerson, "Hi", "!"));
// Output: "Hi, I'm Jane!"

console.log(person.greet.apply(anotherPerson, ["Hello", "?"]));
// Output: "Hello, I'm Jane?"

const janeGreet = person.greet.bind(anotherPerson);
console.log(janeGreet("Hey", "."));
// Output: "Hey, I'm Jane."

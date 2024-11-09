// Different ways to Create Functions:-

function f1() {
    console.log("Function Declaration");
}

var f2 = function () {
    console.log("Function Expression");
};

const f3 = () => {
    console.log("Arrow Function");
};

// Difference between Arrow and Regular Functions

// 1. `this` keyword

const obj1 = {
    name: "Carol",
    greet: function () {
        console.log(this.name);
    },
};

obj1.greet(); // Carol

const obj2 = {
    name: "Carol",
    greet: () => {
        console.log(this.name);
    },
};

obj2.greet(); // undefined

const obj3 = {
    name: "Carol",
    greet: function () {
        function innerFunc() {
            console.log(this.name);
        }
        innerFunc();
    },
};

obj3.greet(); // undefined

const obj4 = {
    name: "Carol",
    greet: function () {
        const innerFunc = () => {
            console.log(this.name);
        };
        innerFunc();
    },
};

obj4.greet(); // Carol

// 2. Consructors

function Car(color) {
    this.color = color;
}

const redCar = new Car("red");
console.log(redCar instanceof Car); // true

const Car = (color) => {
    this.color = color;
};

const blueCar = new Car("blue"); // TypeError: Car is not a constructor

// 3. arguments object

function myRegular() {
    console.log(arguments);
}

myRegular("a", "b"); // { 0: 'a', 1: 'b', length: 2 }

const myArrow = () => {
    console.log(arguments);
};

myArrow("a", "b"); // logs arguments resolved from outside scope

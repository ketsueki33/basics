function outerFunction() {
    let outerVariable = "I am outside!";

    function innerFunction() {
        console.log(outerVariable); // The inner function has access to the outer function's variable
    }

    return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Output: I am outside!

// private counter with closure
const privateCounter = () => {
    let private = 0;

    const show = () => {
        console.log(private);
    };

    const increment = () => {
        private++;
        console.log("1UP");
    };

    return [show, increment];
};

const [f1, f2] = privateCounter();

f1(); // 0
f2(); // 1UP
f1(); // 1
f2(); // 1UP
f2(); // 1UP
f1(); // 3

// Function that returns a custom greet function
const createGreeting = (name) => {
    return () => `Hello ${name}.. Welcome to JavaScript`;
};

const leclerc = createGreeting("Charles");
const piastri = createGreeting("Oscar");

console.log(leclerc()); // Hello Charles.. Welcome to JavaScript
console.log(piastri()); // Hello Oscar.. Welcome to JavaScript


// console.log(foo);
// foo = "foo";

// console.log(foo);
// Ootput:
// ƒ foo() {
//     console.log("foo");
// }

function foo() {
    console.log("foo");
}

console.log(expressionFunction()); // Throws: ReferenceError: Cannot access 'expressionFunction' before initialization

let expressionFunction = function () {
    return "I am a function expression.";
};

//----
foo();

function foo() {
    console.log(1);
}

let foo = function () {
    console.log(2);
};

foo();

function foo() {
    console.log(3);
}

foo();

// Soln
foo();

function foo() {
    console.log(1);
}

{
    let foo = function () {
        console.log(2);
    };

    foo();
}

foo = function () {
    console.log(3);
};

foo();

// ----------
{
    const arr = [1, 2, 3, 4, 5];

    function process(arr) {
        // for(let i = arr.length ; i >= 0 ; i-- ){
        //     const val = arr[i]*arr[i];

        //     if( val > 10 )
        //         arr[i] = val;
        // }

        for (let i = 0; i < arr.length; i++) {
            const val = arr[i] * arr[i];

            if (val > 10) arr[i] = val;
            // else{
            //     arr.unshift();
            //     i--;
            // }
        }
        return arr;
    }

    console.log(process(arr));
}
// soln
const arr = [1, 2, 3, 4, 5];

function process(arr) {
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i] * arr[i];

        arr[i] = val;
    }

    while (arr.length != 0 && arr[0] < 10) arr.shift();

    return arr;
}

console.log(process(arr));

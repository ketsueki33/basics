// Calbacks

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice!
// Goodbye!

// Callback Hell
fs.readFile("file1.txt", "utf8", (err, data1) => {
    if (err) {
        console.error(err);
        return;
    }
    processFile(data1, (err, data2) => {
        if (err) {
            console.error(err);
            return;
        }
        fs.writeFile("file2.txt", data2, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("File written successfully");
        });
    });
});

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation succeeded");
    } else {
        reject("Operation failed");
    }
});

// Promise Chain
function fetchData(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data " + x);
        }, 1500);
    });
}

fetchData(1)
    .then((result1) => {
        console.log(result1); // Logs: Data 1
        return fetchData(2);
    })
    .then((result2) => {
        console.log(result2); // Logs: Data 2
        return fetchData(3);
    })
    .then((result3) => {
        console.log(result3); // Logs: Data 3
        console.log("All data fetched");
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

//  Concurrent Promises

// 1. All
{
    const promise1 = new Promise((resolve) => setTimeout(() => resolve("one"), 1000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve("two"), 2000));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve("three"), 3000));

    Promise.all([promise1, promise2, promise3])
        .then((values) => {
            console.log(values); // ["one", "two", "three"]
        })
        .catch((error) => {
            console.error(error);
        });
}
// 2. Race
{
    const promise1 = new Promise((resolve) => setTimeout(() => resolve("one"), 1000));
    const promise2 = new Promise((resolve, reject) =>
        setTimeout(() => reject("error2"), 2000)
    );
    const promise3 = new Promise((resolve) => setTimeout(() => resolve("three"), 300));

    Promise.race([promise1, promise2, promise3])
        .then((value) => {
            console.log(value); // "three"
        })
        .catch((error) => {
            console.error(error);
        });
}

{
    const promise1 = new Promise((resolve) => setTimeout(() => resolve("one"), 1000));
    const promise2 = new Promise((resolve, reject) =>
        setTimeout(() => reject("error2"), 200)
    );
    const promise3 = new Promise((resolve) => setTimeout(() => resolve("three"), 3000));

    Promise.race([promise1, promise2, promise3])
        .then((value) => {
            console.log(value);
        })
        .catch((error) => {
            console.error(error); // error2
        });
}

// 3. Any
{
    const promise1 = new Promise((resolve, reject) =>
        setTimeout(() => reject("error1"), 100)
    );
    const promise2 = new Promise((resolve) => setTimeout(() => resolve("success2"), 200));
    const promise3 = new Promise((resolve, reject) =>
        setTimeout(() => reject("error3"), 300)
    );

    Promise.any([promise1, promise2, promise3])
        .then((value) => {
            console.log(value); // "success2"
        })
        .catch((error) => {
            console.error(error);
        });
}

// 4. All Settled
{
    const promise1 = new Promise((resolve) =>
        setTimeout(() => resolve("success1"), 1000)
    );
    const promise2 = new Promise((resolve, reject) =>
        setTimeout(() => reject("error2"), 2000)
    );
    const promise3 = new Promise((resolve) =>
        setTimeout(() => resolve("success3"), 3000)
    );

    Promise.allSettled([promise1, promise2, promise3])
        .then((values) => {
            console.log(values);
            // [
            //     { status: 'fulfilled', value: 'success1' },
            //     { status: 'rejected', reason: 'error2' },
            //     { status: 'fulfilled', value: 'success3' }
            //   ]
        })
        .catch((error) => {
            console.error(error);
        });
}

// Async Functions
async function fetchData() {
    let result = await somePromise;
    return "Data fetched!";
}

fetchData().then((data) => console.log(data)); // Output: Data fetched!

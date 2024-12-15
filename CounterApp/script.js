function initializeCounter(incrementButton, decrementButton) {
    let count = 0;

    const screen = document.querySelector(".counter-screen");
    const updateCount = () => (screen.innerText = count);

    decrementButton.disabled = true;

    // function increment() {
    //     count++;
    //     updateCount();
    // }

    // function decrement() {
    //     count--;
    //     updateCount();
    //     if (count === 0) this.disabled = true;
    // }

    incrementButton.addEventListener("click", () => {
        count++;
        updateCount();

        if (count > 0 && decrementButton.disabled) decrementButton.disabled = false;
    });

    decrementButton.addEventListener("click", () => {
        count--;
        updateCount();

        if (count === 0) decrementButton.disabled = true;
    });

    updateCount();
}

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

initializeCounter(incrementButton, decrementButton);

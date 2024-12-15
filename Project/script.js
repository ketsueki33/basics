document.getElementById("num-form").addEventListener("submit", (event) => {
    event.preventDefault();

    let num = document.getElementById("num-input").value;

    createList(num);
});

function createList(num) {
    const container = document.querySelector(".list");

    container.innerHTML = "";

    for (let i = 1; i <= num; i++) {
        const item = document.createElement("p");
        item.innerText = i;
        item.addEventListener("click", () => {
            item.innerText = i % 2 === 0 ? "even" : "odd";
        });

        container.append(item);
    }

    // list.addEventListener("click", (event) => {
    //     console.log(event);
    //     console.log(event.target.value);
    // });
}

document.getElementById("num-input").addEventListener("input", (event) => {
    console.log(event.target.value);

    const num = event.target.value;

    if (num !== "" && num <= 0) event.target.value = 1;
    else if (num > 30) event.target.value = 30;
});

const list = document.querySelector(".list");

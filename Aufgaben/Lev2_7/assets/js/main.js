

let button = document.querySelector("button");
let div = document.querySelector(".umwickeln");
let i = 0;
let a;
button.addEventListener("click", () => {
    a = document.createElement("p");
    a.textContent = i;
    div.appendChild(a);
    if (i == 0 || i % 10 == 0) {
        a.classList.add("weiss");
        a.classList.add("rechteck");
    } else {
        a.classList.add("rechteck");
    }
    i++;
});
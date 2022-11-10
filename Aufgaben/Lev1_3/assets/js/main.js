let div = document.querySelector(".unten");

let ul = document.querySelector("#myList");
let output = document.querySelector("output");
let outputTXT = document.createElement("p");
// let buttons = div.children;
let buttons = document.querySelectorAll("button");

for (let button of buttons) {

    button.addEventListener("click", () => {
        let index = button.innerHTML;
        console.log(index);
        switch (index) {
            case "# firstElementChild": outputTXT.textContent = ul.firstElementChild.innerHTML; break;
            case "# lastElementChild": outputTXT.innerHTML = ul.lastElementChild.innerHTML; break;
            case "# firstElementChild nextElementSibling": outputTXT.innerHTML = ul.firstElementChild.nextElementSibling.innerHTML; break;
            case "# lastElementChild previousElementSibling": outputTXT.innerHTML = ul.lastElementChild.previousElementSibling.innerHTML; break;
        }
        output.prepend(outputTXT);

    });
}



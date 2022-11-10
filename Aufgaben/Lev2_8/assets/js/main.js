let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let output;


button.addEventListener("click", add);

input.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        add();
    }
});


function add() {
    if (input.value == "") {
        alert("Bitte gib einen Text ein");
        return;
    }
    output = document.createElement("li");
    output.textContent = input.value;
    ul.appendChild(output);
    input.value = "";
}

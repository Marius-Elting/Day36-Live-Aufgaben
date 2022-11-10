let button = document.getElementById("button");
let select = document.getElementById("farbeAuswahlen");
let option = select.children;

button.addEventListener("click", (event) => {
    event.preventDefault();
    let index = select.selectedIndex;
    console.log(index);
    console.log(select.children);
    select.removeChild(option[index]);
});
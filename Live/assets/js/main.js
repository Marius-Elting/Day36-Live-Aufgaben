let liste = document.querySelector("#mylist");

// wie kommt man von der Liste auf die Kinderelemente

// unterschiedliche weisen vom Eltern aufs Kinder element


// Zugriff auf der erste Child Element
console.log(liste.firstElementChild.innerHTML); // erstes Element

// Zugriff auf das letzte Child Element
console.log(liste.lastElementChild.innerHTML); // drittes Element

// auf das nächste geschwister Elemente zugreifen
console.log(liste.firstElementChild.nextElementSibling.innerHTML); // zweites Element

// auf das vorherige geschwister Elemente zugreifen
console.log(liste.lastElementChild.previousElementSibling.innerHTML); // zweites Element

//gibt einen HTML Collection aller Kinder aus
console.log(liste.children);
// Umwandeln zu einem Array
console.log(Array.from(liste.children));


//gibt einen HTML Collection aller Kinder aus
let liElements = liste.children;

// wandelt die HTML Collection ein einene Arry um
let liElementsArray = Array.from(liElements);

liElementsArray.forEach((singleElement) => {
    singleElement.style.backgroundColor = "grey";
});
liElements[2].style.color = "red";

liElements[1].innerHTML = "Ersetztes Element";

// zugriff auf das Eltern Element
liste.parentElement.style.border = "1px solid black";
// zugriff auf das Eltern Element des Eletern Element
liste.parentElement.parentElement.style.border = "1px solid black";

//gibt eine Numbe aus wieviele Kinder Elemente vorhanden sind
console.log(liste.childElementCount);

//Spannend!

//neue ELemente erstellen

//erstellt ein leeres Li Element
const li = document.createElement("li");
console.log(li);

//Schreibe einen Text in das Li Element
li.innerHTML = "Viertes Element <script>console.log('pimmel')</script>";
console.log(li);

// Das Li im HTMl anzeigen
// fügt der Liste das Element hinzu
liste.appendChild(li);


const li2 = document.createElement("li");

//textContent hat den Vorteil, dass keine HTML Tags (z.B. <br>...) interpretiert wird
li2.textContent = "Fünftes Element";

liste.appendChild(li2);


const newFirstElement = document.createElement("li");

newFirstElement.textContent = "Nulltes Element";

// fügt ein ELement am Anfang hinzu
liste.prepend(newFirstElement);

//Wir wollen jetzt ein Bild erstellen und ins

let image = document.createElement("img");

// alternativ image.src ="https://unsplash.it/200"
image.setAttribute("src", "https://unsplash.it/200");
image.setAttribute("alt", "Ein Random Bild");


//greift auf den Body zu und fügt das Bild am Ende vom HTML hinzu
document.body.appendChild(image);

//prüft ob das Atribut vorhanden ist (gibt true oder False aus)
console.log(image.hasAttribute("src"));


console.log();
let section = document.querySelector("section");
console.log(section);
const colorS = getComputedStyle(section).color;


if (section.style.cssText === "color: white") {
    console.log("pimmel");
} else {
    console.log("penis");
}


let select = document.querySelector("select");

select.addEventListener("change", (e) => {
    console.log(e.target.value);
    //gibt den Index des ausgewählten Elements aus
    const index = select.selectedIndex;
    switch (index) {
        case 0: document.body.style.backgroundColor = "green";
            break;
        case 1: document.body.style.backgroundColor = "blue";
            break;
    }
})


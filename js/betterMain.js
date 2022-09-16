console.log("file loaded")

//Rekenen en Operatoren
const answers = document.querySelector(".answers");
const rekenen = document.querySelector(".rekenen");
const modulo = document.querySelector(".modulo");

let x, y, z, answerX, answerY, answerZ;
x = 2;
y = 5;
z = prompt("voer nummer in");

answerX = x+x;
answerY = y+y;
answerZ = z+z;

let v = prompt("wat is uw leeftijd?");
let w = 2;

let promptNumber = prompt("Voer willekeurig waarde in:");

console.log(answerX, answerY, answerZ);
console.log(2022 - v, 2022 - v-1);

answers.textContent = answerX + " " + answerY + " " + answerZ + " ";



rekenen.textContent += (v - w) + " " + (v + w) + " ";
rekenen.textContent += (v * w) + " ";
rekenen.textContent += (v / w) + " ";

modulo.textContent += promptNumber%2;

//If-statement
const opdracht1 = document.querySelector(".opdracht1");
const opdracht2 = document.querySelector(".opdracht2");

let hours = prompt("voer 0 tot 24 in (niet kleiner dan 0, en niet hoger dat 24):"); 

//Opdracht 1
if (hours >= 6 && hours <= 12) {
    opdracht1.textContent += ("het is ochtend");
} else if (hours > 12 && hours <= 18) {
    opdracht1.textContent += ("het is middag");
} else if (hours > 18 && hours <= 24) {
    opdracht1.textContent += ("het is avond");
} else {
    opdracht1.textContent += ("het is nacht");
}

//Opdracht 2
let price = prompt("Wat is de prijs (ZONDER BELASTING)")
let tax = prompt("HOOG, LAAG of GEEN belasting?")

opdracht2.innerHTML += "PRIJS ZONDER BTW: " + price + "<br>"

if (tax.toLowerCase() == "hoog") {
    opdracht2.innerHTML += "PRIJS MET HOOG BTW TARIEF: " + price * 1.21;
} else if (tax.toLowerCase() == "laag") {
    opdracht2.innerHTML += "PRIJS MET LAAG BTW TARIEF: " + price * 1.09;
} else {
    opdracht2.innerHTML += "PRIJS HEEFT GEEN BTW TARIEF, PRIJS VERANDERT NIET";
}

//Opdracht 3
let num1 = prompt("voer nummer in");
let num2 = prompt("voer nog een nummer in");
console.log(num1 > num2 ? num1 : num2);

//Opdracht 4
const opdracht4 = document.querySelector(".opdracht4");

let dier = prompt("voer een dier in: ");

switch (dier.toLowerCase()) {
    case "kikker":
        opdracht4.textContent = dier + " (kwaakt)";
        break;
    case "paard":
        opdracht4.textContent = dier + " (hinnikt)";
        break;
    case "koe":
        opdracht4.textContent = dier + " (loeit)";
        break;
    case "leeuw":
        opdracht4.textContent = dier + " (brult)";
        break;
    case "slang":
        opdracht4.textContent = dier + " (slist)";
        break;
    case "goudvis":
        opdracht4.textContent = dier + " (blubt)";
        break;
    default:
        opdracht4.textContent = "Dit dier staat niet in ons systeem."
}
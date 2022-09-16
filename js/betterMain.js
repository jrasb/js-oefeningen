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

answers.textContent += answerX + " ";
answers.textContent += answerY + " ";
answers.textContent += answerZ + " ";

rekenen.textContent += (v - w) + " ";
rekenen.textContent += (v + w) + " ";
rekenen.textContent += (v * w) + " ";
rekenen.textContent += (v / w) + " ";

modulo.textContent += promptNumber%2;

//If-statement
const opdracht1 = document.querySelector(".opdracht1");
const opdracht2 = document.querySelector(".opdracht2");

let hours = prompt("voer 0 tot 24 in (niet kleiner dan 0, en niet hoger dat 24):"); 

//Opdracht 1
if(hours >= 6 && hours <= 12) {
    opdracht1.textContent += ("het is ochtend");
} else if(hours > 12 && hours <= 18) {
    opdracht1.textContent += ("het is middag");
} else if(hours > 18 && hours <= 24) {
    opdracht1.textContent += ("het is avond");
} else if(hours < 6) {
    opdracht1.textContent += ("het is nacht");
}

//Opdracht 2
let price = prompt("Wat is de prijs (ZONDER BELASTING)")
let tax = prompt("HOOG, LAAG of GEEN belasting?")

opdracht2.innerHTML += "PRIJS ZONDER BTW: " + price + "<br>"

if(tax == "HOOG" | tax == "hoog") {
    opdracht2.innerHTML += "PRIJS MET HOOG BTW TARIEF: " + price*1.21;
} else if(tax == "LAAG" | tax == "laag") {
    opdracht2.innerHTML += "PRIJS MET LAAG BTW TARIEF: " + price*1.09;
} else {
    opdracht2.innerHTML += "PRIJS HEEFT GEEN BTW TARIEF, PRIJS VERANDERT NIET";
}

//Opdracht 3
let num1 = prompt("voer nummer in");
let num2 = prompt("voer nog een nummer in");
if(num1 > num2) {console.log(num1);} else {console.log(num2);}
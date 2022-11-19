console.log("OLAF KRYPCZYK");

// OPDRACHT 1
const sumTwoNumbers = (num1, num2) => {
    alert(num1 + num2);
}

// OPDRACHT 2
const calculateArea = (width, height) => {
    return width * height;
}

// OPDRACHT 3
const checkSpaceAvailibility = () => {
    const minimumRequiredSpace = 4; //GIGABYTES;

    let input = prompt("How much space space do you have on your computer (GB)?");

    input < 4 ? alert("not enough space for VSC") : alert("enough space for VSC");
}

// OPDRACHT 4
const solicitationCriteria = (age, level3, level4) => {
    /**
     * age is a mandatory argument.
     * level3 and level4 expect a boolean in the function.
     */
    if (age != 18) {
        return ("not old enough");
    }
    if (level3 != true && level4 != true) {
        return ("not experienced enough");
    }
    return ("experienced enough for an interview");
}

// OPDRACHT 5
const calculateCircleArea = (radius) => {
    return Math.PI * (radius * radius);
}

// OPDRACHT 6
const calculateFraction = (a, b) => {
    return (Math.pow((a + b), 2) / Math.pow((a - b), 2));
}

// OPDRACHT 7
const calculateFractionBetter = (a, b) => {
    if (a != Number || b != Number) {
        return ("Invalid input")
    }
    return (Math.pow((a + b), 2) / Math.pow((a - b), 2));
}

// OPDRACHT 8
const calculatePricePerChild = (children) => {
    if (children == 1) {
        return (300 + "EUR");
    }
    if (children <= 3) {
        return (250 + "EUR/CHILD");
    }
    if (children >= 4) {
        return (225 + "EUR/CHILD");
    }
}

// OPRDRACHT 9
const calculatePrintingCosts = (sides) => {
    const setCost = 75 // EUR
    const costPerPage = 0.05 // EUR

    // (Zetkosten + (Drukkosten * aantal zijdes))
    return ((setCost + costPerPage*sides)*1.21 + " EUR")
}
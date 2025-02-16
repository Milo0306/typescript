"use strict";
function calculate(num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num2 !== 0 ? num1 / num2 : "Nie można dzielić przez zero!";
        default:
            return "Nieznana operacja!";
    }
}
console.log(calculate(5, 3, "add")); // Output: 8
console.log(calculate(5, 3, "subtract")); // Output: 2
console.log(calculate(5, 3, "multiply")); // Output: 15
console.log(calculate(5, 0, "divide")); // Output: "Nie można dzielić przez zero!"
console.log(calculate(5, 3, "modulo")); // Output: "Nieznana operacja!"
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
function calculate2(liczba1, liczba2, operacja) {
    switch (operacja) {
        case "dodaj":
            return liczba1 + liczba2;
        case "odejmij":
            return liczba1 - liczba2;
        case "podziel":
            return liczba2 !== 0 ? liczba1 / liczba2 : "Nie mo\u017Cna dzieli\u0107 przez 0, elo ;d";
        case "pomn\u00F3\u017C":
            return liczba2 * liczba1;
        default:
            return ("Nie posz\u0142o po Twojej my\u015Bli");
    }
}
console.log(calculate2(7, 7, "dodaj"));
console.log(calculate2(7, 7, "odejmij"));
console.log(calculate2(10, 5, "podziel"));
console.log(calculate2(10, 0, "podziel"));
console.log(calculate2(10, 10, "pomn\u00F3\u017C"));
console.log(calculate2(7, 7, "xd"));
function zlacztext(tekst1, tekst2, separator, input) {
    switch (input) {
        case "po\u0142\u0105cz":
            return "".concat(tekst1, " ").concat(separator, " ").concat(tekst2);
        default:
            return "nie \u0142aczymy nic";
    }
}
console.log(zlacztext("tekst pierwszy", " ", "tekst drugi", "po\u0142\u0105cz"));
console.log(zlacztext("tekst pierwszy", " ", "tekst drugi", "xxx"));

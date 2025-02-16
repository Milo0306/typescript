"use strict";
function dodawanie(x, y, z) {
    return "Dodaj ".concat(x, " do ").concat(y, " oraz ").concat(z, " a otrzymasz ").concat(x + y + z);
}
console.log(dodawanie(11, 55, 124));
function liczydlo(x, y, z) {
    return x * y - z;
}
console.log((liczydlo(10, 550, 10)));
function liczipisz(person, x, y) {
    return "Mam na imi\u0119: ".concat(person, " i mam na koncie: ").concat(x * y, " $");
}
console.log(liczipisz("Mi\u0142osz", 55, 3));
function obytylko(person) {
    if (person === void 0) { person = "Ktoś"; }
    return "Oby tylko ".concat(person, ", zrobi\u0142 co\u015B bo jak nie to ja zrobie co\u015B");
}
console.log(obytylko());
console.log("Kwiatek");
function twoOne(person) {
    if (person === void 0) { person = "ty"; }
    person = "Amadeusz";
    return "Jeden dla ".concat(person, ", drugi dla mnie");
}
console.log(twoOne());
function twoFer3(person) {
    if (person === void 0) { person = "you"; }
    return "One for ".concat(person, ", one for me.");
}
console.log(twoFer3());
console.log(twoFer3("Elvis"));
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
// **********************************************
// ******************* PART 2 *******************
// **********************************************
/// Pomyśl sobie jakąś liczbę,
/// Mama ci dała tyle samo,
/// ja Ci daję 50
/// Połowę rzuć w błoto
/// Oddaj mamie dług
/// Zostało Ci 25
/// Napisz analogicznie kod
function zagadka(x, y) {
    return "Pomy\u015Bl sobie jak\u0105\u015B liczb\u0119 i podaj j\u0105 tu: ".concat(x, "\n    Mama Ci da\u0142a tyle samo ").concat(x, "\n    Ja Ci daj\u0119 ").concat(y, "\n    Po\u0142ow\u0119 rzu\u0107 w b\u0142oto ").concat((x + x + y) / 2, "\n    Oddaj mamie d\u0142ug ").concat(x * 2 / 2, "\n    Zosta\u0142o Ci ").concat(y / 2);
}
console.log(zagadka(121, 210));

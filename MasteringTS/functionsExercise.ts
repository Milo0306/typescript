function dodawanie(x: number, y: number, z: number) {
    return `Dodaj ${x} do ${y} oraz ${z} a otrzymasz ${x + y + z}`
}
console.log(dodawanie(11, 55, 124))

function liczydlo(x: number, y: number, z: number) {
    return x * y - z
}
console.log((liczydlo(10, 550, 10)))


function liczipisz(person: string, x: number, y: number): string {
    return `Mam na imię: ${person} i mam na koncie: ${x * y} $`;
}
console.log(liczipisz(`Miłosz`, 55, 3));


function obytylko(person: string = "Ktoś"): string {
    return `Oby tylko ${person}, zrobił coś bo jak nie to ja zrobie coś`;
}
console.log(obytylko());
console.log("Kwiatek");

function twoOne(person: string = "ty"): String {
    person = "Amadeusz"
    return `Jeden dla ${person}, drugi dla mnie`
}
console.log(twoOne());

function twoFer3(person: string = "you"): string {
    return `One for ${person}, one for me.`;
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

const isLeapYear = (year: number): boolean => {
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

function zagadka(x: number, y: number) {
    return `Pomyśl sobie jakąś liczbę i podaj ją tu: ${x}
    Mama Ci dała tyle samo ${x}
    Ja Ci daję ${y}
    Połowę rzuć w błoto ${(x+x+y)/2}
    Oddaj mamie dług ${x * 2 / 2}
    Zostało Ci ${y / 2}`
}

console.log(zagadka(100, 210))
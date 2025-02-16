function calculate(num1: number, num2: number, operation: string): number | string {
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
console.log(calculate(5, 3, "add"));        // Output: 8
console.log(calculate(5, 3, "subtract"));   // Output: 2
console.log(calculate(5, 3, "multiply"));   // Output: 15
console.log(calculate(5, 0, "divide"));     // Output: "Nie można dzielić przez zero!"
console.log(calculate(5, 3, "modulo"));     // Output: "Nieznana operacja!"

console.log (`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);

function calculate2(liczba1: number, liczba2: number, operacja: string): string | number  {
    switch (operacja){
        case `dodaj`:
            return liczba1 + liczba2;
        case `odejmij`:
            return liczba1 - liczba2;
        case `podziel`:
            return liczba2 !== 0? liczba1 / liczba2: `Nie można dzielić przez 0, elo ;d`
        case `pomnóż`:
            return liczba2 * liczba1;

    default:
        return(`Nie poszło po Twojej myśli`)
    }


}

console.log (calculate2(7,7,`dodaj`))
console.log (calculate2(7,7,`odejmij`))
console.log (calculate2(10,5,`podziel`))
console.log (calculate2(10,0,`podziel`))
console.log (calculate2(10,10,`pomnóż`))
console.log (calculate2(7,7,`xd`))



function zlacztext(tekst1: string, tekst2: string, separator: string, input: string): string {
    switch (input){
        case `połącz`:
        return `${tekst1} ${separator} ${tekst2}`;
        default: 
        return `nie łaczymy nic`;
    }

   
}

console.log(zlacztext(`tekst pierwszy`,` `,`tekst drugi`, `połącz`));
console.log(zlacztext(`tekst pierwszy`,` `,`tekst drugi`, `xxx`));
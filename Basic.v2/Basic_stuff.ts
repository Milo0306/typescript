// let FirstName: string = "Bartek";
// let LastName: string = "Nowak";
// let age: number = 35;
// let female: boolean = true;
// let male: boolean = false;
// let salary: number = 2_022_233_221;
// let salaryFormation: string = salary.toLocaleString();
// let description: string =
//     `Hello, your name is ${FirstName} ${LastName} 
// and your age is ${age}. 
// You only make ${salary} in a day.
// You only make ${salaryFormation} in a day.`


// console.log(description);


// function dodawanie1(x1: number, x2: number): number {
//     return (x1 + x2);
// }

// console.log(dodawanie1(100, 2));

// function odejmowanie(x3: number, x4: number): number {
//     return x3 - x4;
// }
// console.log(odejmowanie(10, 5))

// function dzielenie2(x5: number, x6: number): number | string {
//     return x6 !== 0 ? x5 / x6 : `Nie dziel cholero przez zero`;
// }
// console.log(dzielenie2(2, 2))
// console.log(dzielenie2(2, 155))
// console.log(dzielenie2(2, 0))

// function mnozenie2(x7: number, x8: number): number | string {
//     return x7 !== 0 ? x7 * x8 : `Jak pomnożysz coś przez zero to  i tak będziesz miał zero, omg....`
// }
// console.log(mnozenie2(0, 5))


function mnozenie0(x7: number, x8: number): number | string {
    return (x7 === 0 && x8 === 0) ? `Nie da się pomnożyć zera przez zero bo będzie to zero` :
        (x7 === 0) ? `Nie da się pomnożyć zera, bo zero razy zero równa się zero`:
        (x8 === 0) ? `Nie pomnożysz liczby przez zero`:
        x7 * x8;
}
console.log(mnozenie0(2, 100))
console.log(mnozenie0(0, 0))
console.log(mnozenie0(0, 2))
console.log(mnozenie0(2, 0))
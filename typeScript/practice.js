// let num: number = 5;
// let facto: number = 1;
// let i: number;
// if (num <= 0) {
//   console.log("negative number...");
// } else {
//   for (i = 1; i <= num; i++) {
//     facto *= i;
//   }
//   console.log(facto);
// }
// fibonaki
// let nums: number = 20,
//   t1: number = 0,
//   t2: number = 1,
//   nextterm: number = 0,
//   is: number = 0;
// console.log(`fibonacci series ${t1} ${t2}`);
// for (is = 3; is <= nums; is++) {
//   nextterm = t1 + t2;
//   console.log(nextterm);
//   t1 = t2;
//   t2 = nextterm;
// }
// palindrom
// let nume: number = 101,
//   orgi: number = nume,
//   rem: number = 0,
//   rev: number = 0;
// while (nume != 0) {
//   rem = nume % 10;
//   rev = rev * 10 + rem;
//   nume = Math.floor(nume / 10);
// }
// if (orgi == rev) {
//   console.log(`${orgi} palindrom number`);
// } else {
//   console.log(`${orgi} not palindrom number`);
// }
// function ispalindrom(input: number | string): boolean {
//   let str = input.toString().toLowerCase(); // Convert to string and lowercase
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(ispalindrom("101"));
// function isPrime(num: number): boolean {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// // Test the function
// let number: number = 35;
// if (isPrime(number)) {
//   console.log(`${number} is a prime number.`);
// } else {
//   console.log(`${number} is not a prime number.`);
// }
// function isArmstrom(num: number): boolean {
//   const numStr = num.toString();
//   const numDigits = numStr.length;
//   let sum = 0;
//   for (let i = 0; i < numDigits; i++) {
//     sum += Math.pow(parseInt(numStr[i]), numDigits);
//   }
//   return sum === sum;
// }
var number = 151;
// if (isArmstrom(number)) {
//   console.log(`${number} is an Armstrong number.`);
// } else {
//   console.log(`${number} is not an Armstrong number.`);
// }
function palindromCheck(numb) {
    var org = numb.toString().toLowerCase();
    var con = org.split("").reverse().join("");
    return org === con;
}
console.log(palindromCheck(number) ? "".concat(number, " is palindrom") : "".concat(number, " is not"));
var stud;
(function (stud) {
    stud[stud["nami"] = 0] = "nami";
    stud[stud["demo"] = 1] = "demo";
    stud["nm"] = "naruto";
    stud["ct"] = "lif village";
})(stud || (stud = {}));
console.log(stud.demo);

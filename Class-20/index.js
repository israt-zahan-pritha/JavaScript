//Round Number / Natural Number / Integer Number
const carModel = 2013;
console.log(carModel);
console.log(typeof carModel);

//Decimal Number / Floating Number
let decimalNumber = 100.234565;
let sum = decimalNumber + 400;
console.log(sum.toFixed(2));

//Dicimal to Round
let value = 99.44;
let roundNum = Math.round(value);
console.log(roundNum); //let roundNum = consolel.log(Math.round(value));

//Math.ceil:
let ceilNum = Math.ceil(99.08);
console.log("Ceil Number", ceilNum);

//Math.floor
let floorNum = Math.floor(99.08);
console.log("Floor Number", floorNum);

//Math.abs
let absValue = Math.abs(-45); // let absValue = -335;
console.log(absValue); // console.log("Absolute Value", Math.abs(absValue));

let productPrice = 400;
let VAT = 4.5;
let total = productPrice + VAT;
console.log(parseInt(total));

let productPricee = 400;
let VATT = (productPricee * 10) / 100;
let totall = productPricee + VAT;
console.log(VATT);

let ppPrice = 500;
let vat = 45.5555555555;
let newVAT = vat.toFixed(2);
let totalll = ppPrice + parseFloat(newVAT);
console.log(totalll);
console.log(parseInt(vat));

//To Generate Random Number Between (0-1)
const random = Math.random();
console.log(random);

//DICE - 1-6
/*let DICE = Math.random() * 6;
console.log(DICE); */

// 0-5 porjonto asbe
/*let DICE = Math.floor(Math.random() * 6);
console.log(DICE);*/

// 1-6 er number generate koro
let DICE = Math.floor(Math.random() * 6 + 1); // or const DICE = parseInt(Math.random() * 6 + 1);
console.log(DICE);

//generate 3 digit OTP
/*const OTP = Math.floor(Math.random() * 1000); //3 digit porjonto asbe => 899 porjonto asbe
console.log(OTP);*/

//generate 4 digit OTP
const OTP = Math.floor(Math.random() * 900 + 1000); //4 digit porjonto asbe
console.log(OTP);

//Find the smallest number in the list
const min = Math.min(1, 2, 3, 4, 5, 6, 7, 8);
console.log(min);

//Find the Largest number in the list
const max = Math.max(1, 2, 3, 4, 5, 6, 7, 8);
console.log(max);

//Checking and Condition
/*let newValue = 123;
console.log(Number.isInteger(newValue));*/

//Checking and Condition
/*let newValue = "123";
console.log(Number.isInteger(newValue));*/

//to check NAN
let newValue = "test" * 34;
console.log(Number.isNaN(newValue));
console.log(newValue);

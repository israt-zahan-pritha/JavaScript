//Variables🙂🙂🙂🙂🙂
let number;
number = 20;
console.log(number);
// ****************
let job = "Programmer";
job = "Web Developer"; //Reassigned/Mutable/Changeable
console.log(job);
// Scope
let carName = "BMW"; //Gloval Variable
{
  let carName = "Audi"; //Local Variable
  console.log(carName);
}
console.log(carName);
// Scope does not work for Var
var carModel = "2024"; //Gloval Variable
{
  var carModel = "2023"; //Local Variable
  console.log(carModel);
}
console.log(carModel);
// Const
const userName = "Pritha";
console.log(userName);
// userName = "Islam"; //(Not Reuseable)
// String - letters or characters or sentence or text
let landName = "Bangladesh";
let city = "Dhaka";
let speech = `${city} is the capital of ${landName}`; //template literal
console.log(speech);
// *****************
let countryName = "Bangladesh";
let capital = "Dhaka";
let sentence = `${capital} is 
the capital 
of ${countryName}`;
console.log(sentence); // I can use the space as needed
console.log(typeof countryName); //to find out the type of a variable
//Data types🙂🙂🙂🙂🙂
//Numbers
let age = 20;
let height = 5.5;
console.log(age);
console.log(typeof age);
//Boolean
let isHot = true;
const isCold = false;
console.log(typeof isHot);
//Undefined
let car;
console.log(car);
console.log(typeof car);
//Null
let house = null; //null means empty/ no value
console.log(typeof house); //object
//NaN - not a number
let counter = 35;
console.log(45 + 35);
console.log(45 + "35");
console.log(45 + "word");
console.log(45 * "word"); //Nan
//Operatiors🙂🙂🙂🙂🙂
//(Exponentiation)
console.log(3 ** 2);
console.log(4 ** 4);
console.log(5 ** 5);
//(Modulus)
console.log(10 / 2); //Divide
console.log(10 % 2); //Modulus
//Increment
let add = 20;
add++;
add++;
add++;
add++;
add++;
console.log(add); //25
//Decrement
add--;
add--;
add--;
add--;
add--;
console.log(add); //20
// +=
let digit = 24;
digit = digit + digit; // or digit += digit
console.log(digit);
// -=
digit -= digit;
console.log(digit);
// *=
let youth = 24;
// youth = youth * youth;
youth *= youth;
console.log(youth);
// ==
let marks = 100;
console.log(marks == 200); // false
console.log(marks == 100); // true
// Another Way
console.log(marks != 200); //true; Marks soman soman 200 na tarmane 100 or not equal
// ===
let value = "45";
console.log("===", value == 45); // Duble equal hole type chack kore na, string or number no metter
// ------
let markss = "45";
console.log("===", markss === 45); //Strict equality // Tripple equal type, string or number check kore // type or value equally important // strict equality
// -----------------------------------------
// < and >
console.log(10 < 20); //true
console.log(10 > 20); //false
console.log(10 <= 20); //true
console.log(10 >= 20); //false
console.log(20 >= 20); //true

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result); //Always true in String
let results = text1 >= text2; // in case looks false
console.log(results);

let man = "john";
let woman = "Pritha";
let sum = man + " " + woman;
console.log(sum);
//BODMAS🙂🙂🙂🙂🙂
let calculate = 24 + (34 * 3) / 10; //wrong approach
console.log(calculate);
calculate = ((24 + 34) * 3) / 10;
console.log(calculate); //Best approach

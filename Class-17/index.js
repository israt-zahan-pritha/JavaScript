// (1)
var name = "John";
console.log("Hello,", name, "!");
// *************
let Name = "John";
console.log("Hello," + Name + "!");
// (2)
console.log(40 + 34);
// *************
var a = 5;
var b = 10;
var addition = a + b;
console.log("Addition", addition);
// (3)
var age = 26;
console.log("My age is", age);
// *************
let Age = 25;
console.log("I am " + Age + " years old.");
//(4)
let math = 100;
let english = 100;
let physics = 100;
var totalMark = math + english + physics;
console.log("Total Mark:", totalMark);
var aveageMarks = totalMark / 3;
console.log("Total Average:", aveageMarks);
//(5)
let fristName = "Pritha";
let lastName = "Islam";
let user_name = 25;
let user_country = "Bangladesh";
console.log("Frist Name:" + fristName);
console.log("last Name:" + lastName);
console.log("User Age:" + user_name);
console.log("User Country:" + user_country);
//(6)
let sentence = "Hello how are you?";
let search = "Hello";
let searchValue = sentence.search(search);
console.log(searchValue);
if (searchValue === -1) {
  console.log(search, "Not found!");
} else {
  console.log(search, "has been found!");
}
//(7)
let greetingg = "Good Morning ";
let user = prompt("Enter your name: ");
let outputt = greetingg.concat(user.trim());
console.log(outputt);
//or
let greeting = "Good Morning";
let output = greeting.concat(", everyone");
let sentences = "   Bangladesh is a Independent Country  ";
console.log(sentences.trim());
let User = prompt("Enter your name: ");
console.log(User.trim());
//8
//Template Literals🙂🙂
let language = "Javascript";
let username = "Pritha";
let year = "1999";
let output2 = `Do you know ${username} ${language} is a popular programing language and it was introuded in the year of ${year}`;
console.log(output2);
//9
let emailAddress = "prithaislam@Yahoo.com";
let checkFor = "prithaislam@Yahoo.com";
let searchYahoo = emailAddress.toLowerCase().includes(checkFor.toLowerCase());
if (searchYahoo) {
  console.log(emailAddress, "is a valid address");
} else {
  console.log(emailAddress, "is not a valid address");
}
//10
let number = 50;
console.log(50 / 10); //Divide
console.log(50 % 10); //Modulus
if (number % 10 === 0) {
  console.log("The number is divisible by 10.");
} else {
  console.log("The number is not divisible by 10.");
}
//11
let numbers = 7;
// Check if the number is even or odd
if (numbers % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
//12
let input = "Hello";
// Check if the input is a string or a number
if (typeof input === "string") {
  console.log("The input is a string.");
} else if (typeof input === "number") {
  console.log("The input is a number.");
} else {
  console.log("The input is neither a string nor a number.");
}

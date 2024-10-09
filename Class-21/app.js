//Else IF
const average = 70;

if (average >= 90) {
  console.log("Grade A+");
} else if (average >= 80) {
  console.log("Grade A");
} else if (average >= 70) {
  console.log("Grade B");
} else if (average >= 60) {
  console.log("Grade C");
} else if (average >= 50) {
  console.log("Grade D");
} else {
  console.log("fail");
}
//Logical Operator
/* OR = || ; AND = && */
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log(true || false || false || false); //true
console.log(45 == 45);
//Example ( 1 )
let userName = "Pritha";
let password = "123456";
let pincode = "abcd";
if (userName === "Pritha124" || password === "123456" || pincode === "abcd") {
  console.log("user is logged in");
} else {
  console.log("Wrong credentials");
}
// (2)
let direction = "straight";
if (direction === "left" || direction === "right") {
  console.log("he is in the correct direction");
} else {
  console.log("he is in the wrong direction");
}
//AND
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log(true && true && true && false); //false
//Example ( 1 )
let name = "Pritha";
let age = "123456";
let ssc = "abcd";
if (name === "Pritha" && age === "123456" && ssc === "abcd") {
  console.log("user is logged in");
} else {
  console.log("Wrong credentials");
}

//(2)
let hsc = 2016;
if (hsc) {
  console.log("HSC is here");
} // Another mathod
if ((hsc = 2016)) {
  console.log("HSC is here");
}
//(3)
let msc = 0; // "" // Result are not published Because of Falsey Value
if (msc) {
  console.log("MSC is here");
}
// There are 6 number of falsey value:
/* undefined;
null;
0;
("");
NaN;
false; */

//Condition ? true : false
let darkmode = true;
darkmode ? console.log("Dark is on! 🤖") : console.log("Light mode is on! 🍁");
let personAge = 40;
personAge ? console.log("Elder Person! 🤖") : console.log("Younger Person! 🍁");
//Object
const car = {
  name: "BMW",
  model: 2014,
  weight: "800kg",
  color: "red",
  isNew: false,
};
console.log(typeof car);
console.log(car);
console.log(car.name, car.model);

let person = {
  name: "israt",
  age: 26,
  isMarried: false,
  isGraduated: true,
};
//Using Dot Notification
console.log(person.name);
console.log(person.age);
//Using Braket Notification
console.log(person["isGraduated"]);
//Adding & Modifing Propertise
(person.name = "Moon"), (person.address = "Dhaka"), console.log(person.name);
console.log(person.address);
//Deleting Propertise
delete person.address;
delete car.color;
console.log(person);
console.log(car);
//Function
function add() {
  console.log(300 + 400);
}
add();
//Example
function add(num1 = 0, num2 = 1, num3 = 2) {
  console.log("add:", num1 + num2 + num3);
  console.log("subtract:", num1 - num2);
  console.log("multiply:", num1 * num2 * num3);
  console.log("division:", num1 / num2);
}
add(80, 40, 40);
add(1600, 20, 20);
add(40, 40, 20);
add(20, 10, 10);
add();
//Another Example
function greetUser(name = "User", time = "Morning") {
  let sentence = `hello ${name} , Good ${time}`;
  console.log(sentence);
}
greetUser("Mahi", "Evening");
//Search
/*let nature = "Hello Nature";
let search = "nature";
let searchValue = nature.toLowerCase().search(search.toLowerCase());

if (searchValue !== -1) {
  console.log(search, "has been found!");
} else {
  console.log(search, "not found!");
}*/
function searchWord(search = "") {
  let nature = "Hello Nature";
  let searchValue = nature.toLowerCase().search(search.toLowerCase());

  if (searchValue !== -1 && search !== "") {
    console.log(search, "has been found!");
  } else {
    console.log(search, "not found!");
  }
}
searchWord("hello");
//Another Method
function searchWord(search = "", nature = "Hello world") {
  let searchValue = nature.toLowerCase().search(search.toLowerCase());
  if (searchValue !== -1 && search !== "") {
    console.log(search, "has been found!");
  } else {
    console.log(search, "not found!");
  }
}
searchWord("flood", "Bangladesh is currently flood affected!");
//Check is the email address by using function!
function searchWord(search = "", emailAddress = "prithaislam@gmail.com") {
  let searchGmail = emailAddress.toLowerCase().search(search.toLowerCase());
  if (searchGmail !== -1) {
    console.log(emailAddress, "is a valid gmail");
  } else {
    console.log(emailAddress, "is not a valid gmail");
  }
}
searchWord("prithaislam@gmail.com");
//Use Function
function myFunction(fullName, age, dateOfBirth = 2000) {
  console.log(
    "Hello " + fullName + "I am " + age + " My Date Of Birth " + dateOfBirth
  );
}
myFunction("Pritha. ", 25, 1999);
myFunction("Shimu.", 30, 1995);
//*********
function isSubscribed() {
  console.log("Subscribed");
}
document.getElementById("btn").addEventListener("click", isSubscribed);
// Self-Invoked Function
(function (message) {
  console.log("I am self-Invokeing Function", message);
})("Hello");

//Example (1)
let number = [4, 5, 6, 7, 8];
let sqNumber = number.map(function (number) {
  return number * number;
});
console.log(sqNumber);

//(2)
var add = function (x, y) {
  return x + y;
};
console.log(add(5, 6));
//Arrow Function =>
var add = (x, y) => x + y;
console.log(add(5, 6));
//Nextet Function
function greet(firstName) {
  function sayHello() {
    alert("Hello" + firstName);
  }
  return sayHello();
}
greet("Pritha");

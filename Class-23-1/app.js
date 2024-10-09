const frutis = ["orange", "kiwi", "apple", "banan", "guava"];
console.log(frutis);
console.log(frutis[2]);
console.log("fruits length:", frutis.length);

//Array Methods
frutis.pop(); //Remove an item from the last index
console.log(frutis);
frutis.push("straberry"); //Add an item on the last index of an array
console.log(frutis);
frutis.shift(); //Remove an item from the Frist index
console.log(frutis);
frutis.unshift("lichi"); //Add an item On the Frist index
console.log(frutis);

//Joining an Array
let moreFruits = ["apple", "banana", "watermelon"];
console.log(frutis.concat(moreFruits));

//Slicing an array
let animals = ["tiger", "cat", "dog", "lion", "cow"];
console.log(animals);
/*let slice = animals.slice(1, 4);
console.log(slice);*/

//Splice
/*let splice = animals.splice(1, 2);
console.log(splice);*/

//Splice
/*let splice = animals.splice(1, 2, "wolf", "pegion");
console.log(animals);*/
/*let splice = animals.splice(1, 0, "wolf", "pegion");
console.log(animals);*/
let splice = animals.splice(3, 1, "wolf", "pegion");
console.log(animals);

//alphabetically sort/reverse a-z
animals.sort();
animals.reverse();
console.log(animals);

//Function
/*let num1 = 40;
let num2 = 20;
function addition() {
  console.log(num1 + num2);
}
addition();*/
function addition(num1 = 1, num2 = 2, x) {
  console.log("addition:", num1 + num2 + x);
  console.log("subtraction:", num1 - num2);
  console.log("multiply:", num1 * num2);
}
addition(30, 40, 50);
addition(100, 50, 40);
function showUserName(user) {
  console.log("Hello", user, "Wellcome to the javascript Course");
}
showUserName("Pritha");

function multiply(num3, num4) {
  return num3 * num4;
}
let newMultiply = multiply(10, 2); //console.log(multiply(10, 20));
console.log(newMultiply);

function subtraction(x, y) {
  let substract = x - y; //return x-y;
  return substract;
}
console.log(subtraction(10, 5));

//Arrow Function
const division = () => 100 / 2;
console.log(division());

const divide = (num5, num6) => num5 / num6;
console.log(divide(500, 250));

const division1 = (num5, num6) => {
  let divide1 = num5 / num6;
  return divide1;
};
console.log(division1(50, 50));

//Immediate invoke function
(function () {
  console.log("new function is running....");
})();

const newSum = (function (a, b) {
  console.log(a + b);
})(20, 20);

const sum = (function (a, b) {
  return a / b;
})(50, 10);
console.log(sum);

//Check Email By Function
function gmailChecker(emailAddress) {
  const checkFor = "@gmail.com";
  if (emailAddress.toLowerCase().search(checkFor.toLocaleLowerCase()) !== -1) {
    console.log("Corret");
  } else {
    console.log(emailAddress, "False");
  }
}
gmailChecker("text@gmail.com");
gmailChecker("text@yahoo.com");

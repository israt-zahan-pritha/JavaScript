// String🙂🙂
let sentence = "Bangladesh is a Independent Country";
console.log(sentence);
//concatenation - join two or more strings🙂🙂
let greeting = "Good Morning";
let output = greeting.concat(", everyone"); // or let output = greeting + " " + "Pritha";
// console.log(output);
//trim - to remove add spacing🙂🙂
const sentences = "   Bangladesh is a Independent Country  ";
console.log(sentences.trim());
//Prompt🙂🙂
// let user = prompt("Enter your name: ");
// console.log(user.trim());
// let greetingg = "Good Morning ";
// let user = prompt("Enter your name: ");
// let outputt = greetingg.concat(user);
// console.log(outputt);
//Alert🙂🙂
// let notification = alert("You are learning JS"); // or alert(45+45)
//Template Literals🙂🙂
let language = "Javascript";
let username = "Pritha";
let year = "1999";
let output2 = `Do you know ${language} is a popular programing language and it was introuded in the year of ${year}`;
console.log(output2);
//Index & length🙂🙂
let text = "Hello World Work";
console.log(text.length);
console.log(text.indexOf("e"));
console.log(text.indexOf("E"));
console.log(text.indexOf("lo"));
console.log(text.lastIndexOf("l"));
console.log(text.charAt("6"));
console.log("index of Wor", text.indexOf("Work"));
//includes🙂🙂
let include = text.includes("Hello");
console.log(include);
//Search🙂🙂
// let search = text.search("Work");
console.log("Work");
//Uppercase🙂🙂
let upper = text.toUpperCase();
console.log(upper);
//Lowercase🙂🙂
let lowercase = text.toLocaleLowerCase();
console.log(lowercase);
//Substring🙂🙂
let quote = "Life is Short!";
let substring = quote.substring(4, 11);
console.log(substring);
let indexOf = quote.indexOf("ort");
console.log(indexOf);
//or
let lorem = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ex alias doloremque unde repudiandae et ut quas deserunt nobis doloribus natus distinctio ad, laborum blanditiis commodi illo perspiciatis eius perferendis?`;
console.log(lorem.substring(0, 50) + "..Read More");
//or
let shortText = lorem.substring(0, 20);
console.log(shortText + "..Read more");
//Slice🙂🙂
let sliceText = lorem.slice(10, 40);
console.log(sliceText + "...Read More");
//or
let word = "I love Pritha";
let sliceText1 = word.slice(-6, -1);
console.log(sliceText1);
//Basic If Statement🙂🙂
if (true) {
  console.log("I am Pritha Islam");
}
let number = 20;
console.log(number > 10);
if (number > 10) {
  console.log("number is greater than 10");
}
let numbers = 10;
console.log(numbers >= 10);
if (numbers >= 10) {
  console.log("number is greater than 10");
}
let isAdmin = true;
if (isAdmin === false) {
  console.log("Admin is logged in");
} else {
  console.log("Admin is not logged in");
}
//🙂🙂🙂🙂🙂🙂🙂
//Find if the word "Enjoy" present in the new given sentence
/*let nature = "Hello, i always love to enjoy the beauty of nature";
let search = "Love";
let searchValue = nature.search(search);
console.log(searchValue);*/
//🙂🙂🙂🙂🙂🙂🙂
let nature = "Hello, i always love to enjoy the beauty of nature";
let search = "aLwaYs";
let searchValue = nature.toLowerCase().search(search.toLowerCase());
console.log(searchValue);
if (searchValue) {
  console.log(search, "has been found!");
} else {
  console.log(search, "not found!");
}
//🙂🙂🙂🙂🙂🙂🙂
// let nature = "HELLO, MY NAME IS PRITHA";
// let search = "Love";
// let natureLowercase = nature.toLocaleLowerCase();
// console.log(natureLowercase);
// let searchValue = natureLowercase.search(search.toLocaleLowerCase());
//🙂🙂🙂🙂🙂🙂🙂
// let searchValue = nature.includes(search);
// console.log(searchValue);
//🙂🙂🙂🙂🙂🙂🙂
if (searchValue === -1) {
  console.log(search, "Not found!");
} else {
  console.log(search, "has been found!");
}
//🙂🙂🙂🙂🙂🙂🙂
//or
if (searchValue !== -1) {
  console.log(search, "has been found!");
} else {
  console.log(search, "not found!");
}
//Check is the email address is gmail or not!
let emailAddress = "prithaislam@gmil.com";
let checkFor = "prithaislam@gmail.com";
// let searchGmail = emailAddress.includes(checkFor);
let searchGmail = emailAddress.toLowerCase().includes(checkFor.toLowerCase());
console.log(searchGmail);
if (searchGmail === true) {
  console.log(emailAddress, "is a valid gmail");
} else {
  console.log(emailAddress, "is not a valid gmail");
}

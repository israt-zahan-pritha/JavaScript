//Write a function called reservseString that takes a string as an argument and returns the reverse of the string

//input - "hello"
//output - "olleh"

/*function reservseString(str) {
  let value = "Javascript Problem Solving";
  console.log(value);
  console.log(value.split(" "));
  console.log(value.split(""));
  console.log(value.split("").reverse());
  console.log(value.split("").reverse().join(""));
  console.log(value.split(" ").reverse().join(" "));
}
reservseString();*/
function reservseString(str) {
  return str.split("").reverse().join("");
  //   return str.split("").reverse().join("");
}
console.log(reservseString("JavaScript Problem Solving"));
console.log(reservseString("hello"));

//Write a function called wordExist that two String as an argument one of them is a sentence and a word. Now the function should search the word in the sentence and returns if it exists or not.

/*function wordExist(sentence, word) {
  const words = sentence.split(' ');
  return words.includes(word);
}
let sentence = "The quick brown fox jumps over the lazy dog";
let word = "fox";
console.log(wordExist(sentence, word));  
word = "cat";
console.log(wordExist(sentence, word)); */
function wordExist(searchWord, sentence) {
  let search = sentence.includes(searchWord);
  if (search) {
    return `${searchWord} is present in the sentence`;
  } else {
    return `${searchWord} not found!`;
  }
}
console.log(wordExist("python", "python is a populer programing language"));

//Create a function called getLongWords that takes a string (sentence) and a number n. It returns an aray of words that are longer than n character.
//input - python is a popular programing language, 8
//output - programing language

let sentence = "python is a popular programing language";
/*let split = sentence.split(" ");
console.log(split.filter((word) => word.length >= 7));
let value = "javascript";
console.log(value.length);*/
function getLongWords(sentence, n) {
  let array0Words = sentence.split(" ").filter((word) => word.length >= n);
  return array0Words;
}
console.log(getLongWords(sentence, 8));

//Create a function called removeCharacter, that takes a string and a letter to remove. The function should return the sentence / String with all occurences of the specified letter removed.

//input = input .p
//output = ython

/*let split = sentence.split("p").join("");
 console.log(split);*/

/*function removeCharacter(sentence, letter) {
  let split = sentence.split("p").join("");
  return split;
}
console.log(removeCharacter(sentence, "p"));*/

function removeCharacter(sentence, letter) {
  let split = sentence.toLowerCase().split(letter.toLowerCase()).join("");
  return split;
}
console.log(removeCharacter(sentence, "P"));

//Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.Examples
//matchHouses(1) ➞ 6
//matchHouses(4) ➞ 21
//matchHouses(87) ➞ 436

function matchHouses(step) {
  let totalStick = 6;
  if (step === 1) {
    return totalStick;
  } else if (step >= 2) {
    return step * totalStick - (step - 1);
  } else {
    return 0;
  }
}
//Arraay Methods
// এরে এর ভিতরে ডাটা গুলো প্রিন্ট করে দেখাও এবং এগুলো সামনে সো করে দেখাও
let array = [1, 2, 3, 4, 5, 6, 7, 8];
/*for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}*/
//Another Method
// *Map
//array.map((item) => console.log(item));
// *forEach
array.forEach((item) => console.log(item + 2));
// *filter
array.filter((data) => console.log(data % 2 == 0));

const evenNumber = array.filter((data) => data % 2 == 0);
console.log(evenNumber);

//remove a duplicate from a array
let fruits = ["apple", "orange", "kiwi", "guava", "apple"];
fruits.forEach((item, index) => console.log(item, index));
// ---------
let removeDuplicate = fruits.filter((item, index) => {
  return fruits.indexOf(item) === index;
});
console.log(removeDuplicate);

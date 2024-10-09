//****
function reversString(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reversString("Javascript Problem Solvign"));

//****
function wordExist(searchWord, sentence) {
  let search = sentence.includes(searchWord);
  if (search) {
    return `${searchWord} is present in the sentence`;
  } else {
    return `${searchWord} not found!`;
  }
}
console.log(wordExist("python", "python is a populer programing language"));

//****
let sentence = "python is a populer programing language";
let split = sentence.split(" ");
console.log(split.filter((word) => word.length == 6));
console.log(split.filter((word) => word.length >= 6));

//****
function getLongWords(sentence, n) {
  let arrayOfWords = sentence.split(" ").filter((word) => word.length >= n);
  return arrayOfWords;
}
console.log(getLongWords(sentence, 8));

//****
function removeCharacter(sentence, letter) {
  let split = sentence.split(letter).join("");
  return split;
}

//****
function matchHouses(step) {
  let totalSticks = 6;
  if (step === 1) {
    return totalSticks;
  } else if (step >= 2) {
    return step * totalSticks - (step - 1);
  } else {
    return 0;
  }
}

//*** */
let age = 10;
// let greet = age > 18 ? "Welcome" : "Get Out";
// console.log(greet);
//
if (age >= 18) {
  console.log("Welcome");
} else {
  console.log("Get out");
}
//
function checkAge(age) {
  if (age >= 18) {
    return "Welcome";
  } else {
    return "Get out";
  }
}

console.log(checkAge(age));
//Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

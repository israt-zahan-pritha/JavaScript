/*
One day, you find an ancient alien dictionary. Each word in the dictionary is spelled backward! Your job is to write a program that translates a message from alien to human language by reversing each word.
Write a function that takes a sentence as input, where each word is written backward, and returns the sentence with words spelled correctly (forward).
Input: "olleH dlroW"
Output: "Hello World"
 */
function reverseWords(sentence) {
  const words = sentence.split(" ");

  // Reverse each word and join them back into a sentence
  const correctedSentence = words
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
  return correctedSentence;
}

// Example usage:
const inputSentence = "olleH dlroW";
const outputSentence = reverseWords(inputSentence);
console.log(outputSentence);

/*
**Story:**
A treasure hunter found a sequence of numbers that supposedly leads to treasure. However, every second number is missing! You must help the hunter fill in the missing numbers by taking the average of the numbers before and after the gap.

**Task:**
Write a function that takes an array of numbers where every second number is `null` (words not in correct order) and replace those `null` values with the average of the two surrounding numbers.
*/
function fillMissingNumbers(arr) {
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === null) {
      // Calculate the average of the previous and next numbers
      arr[i] = (arr[i - 1] + arr[i + 1]) / 2;
    }
  }
  return arr;
}

// Example usage:
let inputArray = [10, null, 20, null, 30];
let outputArray = fillMissingNumbers(inputArray);
console.log(outputArray); // Output: [10, 15, 20, 25, 30]

/*
**Story:**
A pirate’s parrot went shopping, but being a parrot, it repeats every item in its list multiple times. You need to help the pirate remove the duplicates so he knows exactly what to buy!

**Task:**
Write a function that removes duplicate items from a shopping list (array of strings).
 */
function removeDuplicates(shoppingList) {
  // Use a Set to automatically remove duplicates and convert it back to an array
  return [...new Set(shoppingList)];
}

// Example usage:
let shoppingList = ["rum", "gold", "parrot food", "rum", "gold", "map"];
let uniqueList = removeDuplicates(shoppingList);
console.log(uniqueList); // Output: ["rum", "gold", "parrot food", "map"]

/*
**Story:**
A knight must climb a staircase to reach a dragon’s lair. The staircase has `n` steps, but the knight can only climb 1, 2, or 3 steps at a time. You need to count how many different ways the knight can climb the stairs.

**Task:**
Write a function to count how many unique ways the knight can reach the top of the stairs by taking 1, 2, or 3 steps at a time.
 */

function countWaysToClimb(n) {
  // If there are no steps, or negative steps, no way to climb
  if (n < 0) return 0;
  if (n === 0) return 1; // 1 way to stay at the bottom

  // Create an array to store the number of ways to reach each step
  let ways = new Array(n + 1).fill(0);

  // Base cases
  ways[0] = 1; // 1 way to be at the bottom (no steps)
  ways[1] = 1; // 1 way to reach step 1 (1 step)
  if (n >= 2) ways[2] = 2; // 2 ways to reach step 2 (1+1 or 2)

  // Fill the array for steps 3 and beyond
  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2] + ways[i - 3];
  }

  return ways[n];
}

// Example usage:
let steps = 4;
console.log(countWaysToClimb(steps)); // Output: 7

/*
Story:
A distracted chef made a list of ingredients for his special salad but forgot to add commas between the ingredients. You need to help the chef separate the ingredients and create a proper list.
Task:
Write a function that takes a string where ingredients are concatenated together without commas and returns an array of individual ingredients by splitting the string after each word.
 */

function splitIngredients(ingredients) {
  // Use a regular expression to split the string at each capital letter
  let separatedIngredients = ingredients.split(/(?=[A-Z])/);

  // Convert the first letter of each word to lowercase
  return separatedIngredients.map((ingredient) => ingredient.toLowerCase());
}

// Example usage:
let inputString = "TomatoesOnionsLettuce";
let ingredientsList = splitIngredients(inputString);
console.log(ingredientsList); // Output: ["tomatoes", "onions", "lettuce"]

/*
Story:
The king has a treasure of gold coins and wants to distribute them among his knights in a special pattern. He gives the first knight 1 coin, the second knight 2 coins, the third knight 3 coins, and so on. If he has n knights, calculate how many coins the king needs in total.
Task:
Write a function that takes the number of knights as input and returns the total number of gold coins needed to distribute in this pattern.
 */
function totalCoins(n) {
  // Use the formula for the sum of the first n natural numbers
  return (n * (n + 1)) / 2;
}

// Example usage:
let knights = 5;
console.log(totalCoins(knights)); // Output: 15

/*
Story:
A wise dragon is hiding its age in a series of riddles. The dragon gives you a number, and you need to find out if the number is a perfect square. If it is, that's the dragon's age. If it's not, the dragon laughs and says "Try again!"
Task:
Write a function that checks if a number is a perfect square. If it is, return the dragon’s age; otherwise, return "Try again!".
 */
function checkDragonAge(age) {
  // Calculate the square root of the age
  let sqrt = Math.sqrt(age);

  // Check if the square root is an integer (perfect square)
  if (Number.isInteger(sqrt)) {
    return age;
  } else {
    return "Try again!";
  }
}

// Example usage:
console.log(checkDragonAge(49)); // Output: 49
console.log(checkDragonAge(50)); // Output: "Try again!"

/*
Story:
A wizard created a magical phrase but wrote it all backward! You need to reverse the entire phrase, but only the words should be reversed, not the characters in the words.
Task:
Write a function that takes a phrase as input and returns the words in reverse order.
 */

function reverseWordsInPhrase(phrase) {
  // Split the phrase into words, reverse the array, and join them back into a string
  return phrase.split(" ").reverse().join(" ");
}

// Example usage:
let wizardPhrase = "The dragon breathes fire";
let reversedPhrase = reverseWordsInPhrase(wizardPhrase);
console.log(reversedPhrase); // Output: "fire breathes dragon The"

/*
Story:
Two adventurers have gone on separate journeys and found different items. Now they want to merge their inventories into one list of items. However, the items in their inventories may have duplicates, and they want to remove those.
Task:
Write a function that takes two arrays of items and returns one array containing all unique items from both inventories.
 */

function mergeInventories(inventory1, inventory2) {
  // Combine both inventories and use a Set to remove duplicates
  let mergedInventory = [...new Set([...inventory1, ...inventory2])];

  return mergedInventory;
}

// Example usage:
let inventory1 = ["sword", "shield", "potion"];
let inventory2 = ["potion", "ring", "shield"];
let uniqueInventory = mergeInventories(inventory1, inventory2);
console.log(uniqueInventory); // Output: ["sword", "shield", "potion", "ring"]

/*
Story:
A pirate has found pieces of a treasure map, but they are all mixed up! Each piece of the map has a number on it, which tells you the order in which it should appear. The pirate needs your help to rearrange the map pieces in the correct order.
Task:
Write a function that takes an array of numbers representing map fragment IDs and returns the array sorted in ascending order, so the pirate can see the correct order of the map.
 */

function sortMapFragments(fragments) {
  // Use the sort method to sort the array in ascending order
  return fragments.sort((a, b) => a - b);
}

// Example usage:
let mixedFragments = [9, 3, 5, 7, 1];
let sortedFragments = sortMapFragments(mixedFragments);
console.log(sortedFragments); // Output: [1, 3, 5, 7, 9]

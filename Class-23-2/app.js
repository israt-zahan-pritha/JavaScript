// For Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
/*for (let i = 40; i <= 80; i++) {
  if (i % 2 === 0) {
    console.log("Even Number", i);
  }
}
for (let i = 40; i <= 80; i++) {
  if (i % 2 !== 0) {
    console.log("Odd Number", i);
  }
}*/
for (let i = 40; i <= 80; i++) {
  if (i % 2 !== 0) {
    console.log("Odd Number", i);
  } else {
    console.log("Even Number", i);
  }
}
function showListOfNumber(strat, end) {
  for (let i = strat; i <= end; i++) {
    console.log(i);
  }
}
showListOfNumber(200, 300);

//Array with loop
let animals = ["bird", "cat", "dog", "parrot", "fox", "wolf"];
for (let animal = 0; animal < 10; animal++) {
  console.log(animals[animal]);
}

//While loop
let num = 10;
while (num <= 20) {
  console.log(num);
  num++;
}

//Use this Keyword
// Object with Function
let person = {
  name: "Travis",
  age: 17,
  profession: "cricketer",
  isMarried: false,
  showMessage: function () {
    console.log(this.name, "is a", this.profession);
  },
  showIfMarried: function () {
    if (this.isMarried) {
      console.log("Travis is unmarried");
    } else {
      console.log("Travis is unmarride");
    }
  },
  checkAdult: function () {
    if (this.age > 18) {
      console.log(this.name, "is an adult");
    } else {
      console.log(this.name, "is not adult");
    }
  },
};
person.showMessage();
person.showIfMarried();
person.checkAdult();

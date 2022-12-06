const { extend } = require("lodash");

console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
/**
 * Create some classes.
 * For inspiration what you can create, look around you 👀.
 * Some examples: furniture, animal, chair, teacher, student, person, tree, movie,...
 */
class Movie {
  constructor(title, rating) {
    this.title = title;
    this.leadRole = "";
    this.mainCharacter = "";
    this.rating = rating;
  }
  boostRating(number) {
    this.rating = this.rating + number;
  }
}
class Tea {
  constructor(kind, origin, price) {
    this.kind = kind;
    this.origin = origin;
    this.price = price;
  }
}
class Word {
  constructor(letterCount) {
    this.letterCount = letterCount;
  }
  checkValid() {}
  correct;
}
class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
  //   get name() {
  //     return this.name;
  //   }
}
class Cat extends Dog {
  constructor(name, breed, age) {
    super();
  }
  get catName() {
    return `${this.name} is a cat`;
  }
}
console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
/**
 * Initialize all those classes you defined above using the new keyword.
 * Like this you are creating class instances you can use further along in your code.
 */

console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
/**
 * Define some methods for the classes you defined above. Think of methods like actions
 * the class you defined can make. A pet can have a feed method, a tree a grow method, a person
 * can talk, etc. Make sure to use the this keyword to refer to properties you assigned to the
 * class.
 *
 * Call these methods here.
 */

console.log("~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~");
/**
 * Create a superclass for some of your classes above and extend the class.
 * Add some methods to the superclass and try to call them.
 * What happens when you create the same method in the superclass and the more specific
 * class?
 */

console.log("~~~~~~~~~~~~~~TASK 5~~~~~~~~~~~~~~");
/**
 * Implement some private methods in your classes and use them in your methods.
 */

console.log("~~~~~~~~~~~~~~TASK 6~~~~~~~~~~~~~~");
/**
 * Create a calculator class using a fluent API
 * that does something like this:
 * calc
    .add(1, 2)
    .square()
    .display();
 */
class Calculator {
  constructor() {
    this.total = 0;
  }
  add(number) {
    this.total += number;
    return this;
  }
  subtract(number) {
    this.total -= number;
    return this;
  }
  poweroftwo() {
    this.total *= this.total;
    return this;
  }
  square() {
    this.total /= this.total;
    return this;
  }
  isEven() {
    return this.total % 2 === 0;
  }
  display() {
    return this.total;
  }
}

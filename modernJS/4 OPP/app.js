// lesson #1
// Contractor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime(); // date.nowInMS from 1970 - date.birthday from 1970
    const ageDate = new Date(diff); //the difference is being passed to new Date to create a date
    return Math.abs(ageDate.getUTCFullYear() - 1970); // the age is being calculated
  };
}

// "this" keyword  refers to an instance of an object
// Lesson #2
const name1 = "Mike";
const name2 = new String("Mike");

// '==' operator compares by value; thus makes it equal. '===' operator, besides values also compares them by types
if (name2 == "Mike") {
  // console.log("yes");
} else {
  // console.log("no");
}

let sum = new Function("a", "b", "return a + b");

// lesson 3
// Each object in JS has a prototype and a prototype is an object itself. All objects inherit their properties and methoeds from their prototype
// Object.prototype
function Person2(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Get age
Person2.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// get full name
Person2.prototype.getFullname = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Get married
Person2.prototype.getMarried = function (newLastName) {
  this.lastName = newLastName;
};
const jessica = new Person2("Jessica", "Doe", "8-12-1992");

// Lesson #4
// Prototypal inheritance
function Person3(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person3.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

// A new contractor that inherits
function Customer(firstName, lastName, phone, membership) {
  Person3.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// inherit prototype greeting from the Person3
Customer.prototype = Object.create(Person3.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} weclome to our company.`;
};
const customer1 = new Customer("Mike", "Ion", "927", "forever");

// Lesson 5
//Using Object.create
const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 40 },
});

//Lesson #6
// ES6 Classes
class PersonOne {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  getAge() {
    const diff = Date.now() - this.birthday.getTime();
    const diffDate = new Date(diff);
    return Math.abs(diffDate.getUTCFullYear() - 1970);
  }
  // Static methods exixt on their own, an instantiantion doesn't have to take place to use one
  static addNums(x, y) {
    return x + y;
  }
}

// Lesson #7
// Inheritance or sub classes
class PersonTwo {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class CustomerTwo extends PersonTwo {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static multiplyTwoNums(a, b) {
    return a * b;
  }
}

"use strict";
let typly = require("typly");
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    typly.assertString(firstName);
    this._firstName = firstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    typly.assertString(lastName);
    this._lastName = lastName;
  }
}
// let somebody = new Person(null, null);   // Output: TypeError: string expected, but got null
typly.config({
  ignoreNullValues: true
});
let somebodyElse = new Person(null, null);  // Works

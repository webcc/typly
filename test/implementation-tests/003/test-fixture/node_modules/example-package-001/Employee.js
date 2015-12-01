"use strict";
const Person = require("./Person");

module.exports = class Employee extends Person {
    constructor(firstName, lastName, id) {
        super(firstName, lastName);
        this.id = id;
    }
}

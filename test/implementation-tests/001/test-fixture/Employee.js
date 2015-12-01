"use strict";
const Person = require("./Person");

function Employee() {

}
Employee.prototype = new Person();
module.exports = Employee;


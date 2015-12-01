"use strict";
const assert = require("assert");
const typly = require("../../..");
const Person = require("./test-fixture/Person");
const Employee = require("./test-fixture/Employee");

describe("typly#ImplementationTest", () =>
{
    describe("#isImplementationOf", () =>
    {
        it("should return true for instances using classes", () =>
        {
            let person = new Person('Max', 'Mustermann');
            assert(typly.isImplementationOf(person, Person));
        });
        it("should return true for instances of a subclass using classes", () =>
        {
            let employee = new Employee('Max', 'Mustermann', 4711);
            assert(typly.isImplementationOf(employee, Person));
        });
    });
    describe("#assertImplementationOf", () =>
    {
        it("should return true for instances using classes", () =>
        {
            let person = new Person('Max', 'Mustermann');
            assert(typly.assertImplementationOf(person, Person));
        });
        it("should return true for instances of a subclass using classes", () =>
        {
            let employee = new Employee('Max', 'Mustermann', 4711);
            assert(typly.assertImplementationOf(employee, Person));
        });
    });
});

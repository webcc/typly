"use strict";
const assert = require("assert");
const typly = require("../../..");
const Person = require("./test-fixture/Person");
const Employee = require("./test-fixture/Employee");

describe("typly#ImplementationTest", () =>
{
    describe("#isImplementationOf", () =>
    {
        it("should return true for instances using constructor functions", () =>
        {
            let person = new Person();
            assert(typly.isImplementationOf(person, Person));
        });
        it("should return true for instances of a subclass using constructor functions", () =>
        {
            let employee = new Employee();
            assert(typly.isImplementationOf(employee, Person));
        });
    });
    describe("#assertImplementationOf", () =>
    {
        it("should return true for instances using constructor functions", () =>
        {
            let person = new Person();
            assert(typly.assertImplementationOf(person, Person));
        });
        it("should return true for instances of a subclass using constructor functions", () =>
        {
            let employee = new Employee();
            assert(typly.assertImplementationOf(employee, Person));
        });
    });
});

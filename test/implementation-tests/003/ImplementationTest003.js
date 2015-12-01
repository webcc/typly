"use strict";
const assert = require("assert");
const typly = require("../../..");
const Person1 = require("./test-fixture/node_modules/example-package-001/Person");
const Person2 = require("./test-fixture/node_modules/example-package-002/Person");
const Employee1 = require("./test-fixture/node_modules/example-package-001/Employee");
const Employee2 = require("./test-fixture/node_modules/example-package-002/Employee");

describe("typly#ImplementationTest", () =>
{
    describe("#isImplementationOf", () =>
    {
        it("should return true for instances from other modules", () =>
        {
            let person1 = new Person1('Max', 'Mustermann');
            let person2 = new Person2('Max', 'Mustermann');
            assert(typly.isImplementationOf(person1, Person1));
            assert(typly.isImplementationOf(person1, Person2));
            assert(typly.isImplementationOf(person2, Person1));
            assert(typly.isImplementationOf(person2, Person2));
        });
        it("should return true for subclasses from other modules", () =>
        {
            let employee1 = new Employee1('Max', 'Mustermann', 4711);
            let employee2 = new Employee2('Max', 'Mustermann', 4711);
            assert(typly.isImplementationOf(employee1, Person1));
            assert(typly.isImplementationOf(employee1, Person2));
            assert(typly.isImplementationOf(employee1, Employee1));
            assert(typly.isImplementationOf(employee1, Employee2));
            assert(typly.isImplementationOf(employee2, Person1));
            assert(typly.isImplementationOf(employee2, Person2));
            assert(typly.isImplementationOf(employee2, Employee1));
            assert(typly.isImplementationOf(employee2, Employee2));
        });
    });
    describe("#isImplementationOf", () =>
    {
        it("should return true for instances from other modules", () =>
        {
            let person1 = new Person1('Max', 'Mustermann');
            let person2 = new Person2('Max', 'Mustermann');
            assert(typly.assertImplementationOf(person1, Person1));
            assert(typly.assertImplementationOf(person1, Person2));
            assert(typly.assertImplementationOf(person2, Person1));
            assert(typly.assertImplementationOf(person2, Person2));
        });
        it("should return true for subclasses from other modules", () =>
        {
            let employee1 = new Employee1('Max', 'Mustermann', 4711);
            let employee2 = new Employee2('Max', 'Mustermann', 4711);
            assert(typly.assertImplementationOf(employee1, Person1));
            assert(typly.assertImplementationOf(employee1, Person2));
            assert(typly.assertImplementationOf(employee1, Employee1));
            assert(typly.assertImplementationOf(employee1, Employee2));
            assert(typly.assertImplementationOf(employee2, Person1));
            assert(typly.assertImplementationOf(employee2, Person2));
            assert(typly.assertImplementationOf(employee2, Employee1));
            assert(typly.assertImplementationOf(employee2, Employee2));
        });
    });
});

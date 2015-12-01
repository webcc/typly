"use strict";
const assert = require("assert");
const typly = require("../../..");
const Person = require("./test-fixture/Person");
const Employee = require("./test-fixture/Employee");

describe("typly#ImplementationTest", () =>
{
    describe("#isImplementationOf", () =>
    {
        it("should return false for null", () =>
        {
            assert(!typly.isImplementationOf(null, Person));
        });
        it("should return false for primitive values", () =>
        {
            assert(!typly.isImplementationOf(4711, Person));
        });
    });
    describe("#isImplementationOf", () =>
    {
        it("should return false for null", () =>
        {
            assert.throws(() =>
            {
                typly.assertImplementationOf(null, Person)
            }, TypeError);
        });
        it("should return false for primitive values", () =>
        {
            assert.throws(() =>
            {
                typly.assertImplementationOf(4711, Person);
            }, TypeError);
        });
    });
});

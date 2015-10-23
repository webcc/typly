"use strict";

describe("typly#ObjectTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isInstanceOf", () =>
    {
        it("should return true for objects", () =>
        {
            assert(typly.isInstanceOf({}, Object));
            assert(typly.isInstanceOf(new Object(), Object));
        });
    });
    describe("#assertInstanceOf", () =>
    {
        it("should throw a TypeError for numbers", () =>
        {
            assert.throws(() =>
            {
                typly.assertInstanceOf(5, Object);
            }, TypeError);
        });
        it("should throw a TypeError for null", () =>
        {
            assert.throws(() =>
            {
                typly.assertInstanceOf(null, Object);
            }, TypeError);
        });
    });
});

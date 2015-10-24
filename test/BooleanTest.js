"use strict";

describe("typly#BooleanTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isBoolean", () =>
    {
        it("should return true for booleans", () =>
        {
            assert(typly.isBoolean(true));
            assert(typly.isBoolean(false));
        });
        it("should return false for objects", () =>
        {
            assert(!typly.isBoolean({}));
        });
    });
    describe("#assertBoolean", () =>
    {
        it("should return true for booleans", () =>
        {
            assert(typly.assertBoolean(true));
            assert(typly.assertBoolean(false));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertBoolean({});
            }, TypeError);
        });
    });
});

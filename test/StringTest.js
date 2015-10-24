"use strict";

describe("typly#StringTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isString", () =>
    {
        it("should return true for strings", () =>
        {
            assert(typly.isString("Example"));
        });
        it("should return true for empty strings", () =>
        {
            assert(typly.isString(""));
        });
        it("should return false for null", () =>
        {
            assert(!typly.isString(null));
        });
        it("should return false for arrays", () =>
        {
            assert(!typly.isString([]));
        });
    });
    describe("#assertString", () =>
    {
        it("should return true for a string", () =>
        {
            assert(typly.assertString("tests"));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertString({});
            }, TypeError);
        });
    });
});

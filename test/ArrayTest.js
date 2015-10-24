"use strict";

describe("typly#ArrayTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isArray", () =>
    {
        it("should return true for arrays", () =>
        {
            assert(typly.isArray([]));
            assert(typly.isArray(new Array()));
        });
    });
    describe("#assertArray", () =>
    {
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertArray({});
            }, TypeError);
        });
        it("should throw a TypeError for arrays that do not contain elements of the given type", () =>
        {
            let numbers = ["tests"];
            assert.throws(() =>
            {
                typly.assertArray(numbers, typly.isNumber);
            }, TypeError);
        });
        it("should throw a TypeError for arrays that do not contain elements of the given type", () =>
        {
            let numbers = [4, "tests"];
            assert.throws(() =>
            {
                typly.assertArray(numbers, typly.isNumber);
            }, TypeError);
        });
        it("should return true for arrays that contain only elements of the given type", () =>
        {
            let numbers = [2, 3, 4, 5];
            assert(typly.assertArray(numbers, typly.isNumber));
        });
    });
});

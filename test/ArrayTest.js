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
        it("should return true for integer arrays", () =>
        {
            assert(typly.isArray([4, 8, 66]));
        });
        it("should return true for integer arrays", () =>
        {
            assert(typly.isArray([4, 8, 66], typly.isInteger.bind(typly)));
        });
        it("should return false for non-integer arrays", () =>
        {
            assert(!typly.isArray([4, 8, "exit"], typly.isInteger.bind(typly)));
        });
    });
    describe("#assertArray", () =>
    {
        it("should return true for integer arrays", () =>
        {
            assert(typly.assertArray([4, 8, 66]));
        });
        it("should return true for integer arrays", () =>
        {
            assert(typly.assertArray([4, 8, 66], typly.isInteger.bind(typly)));
        });
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
                typly.assertArray(numbers, typly.isNumber.bind(typly));
            }, TypeError);
        });
        it("should throw a TypeError for arrays that do not contain elements of the given type", () =>
        {
            let numbers = [4, "tests"];
            assert.throws(() =>
            {
                typly.assertArray(numbers, typly.isNumber.bind(typly));
            }, TypeError);
        });
        it("should return true for arrays that contain only elements of the given type", () =>
        {
            let numbers = [2, 3, 4, 5];
            assert(typly.assertArray(numbers, typly.isNumber.bind(typly)));
        });
    });
});

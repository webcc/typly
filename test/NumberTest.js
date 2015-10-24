"use strict";

describe("typly#NumberTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isNumber", () =>
    {
        it("should return true for numbers", () =>
        {
            assert(typly.isNumber(5));
        });
        it("should return false for null", () =>
        {
            assert(!typly.isNumber(null));
        });
    });
    describe("#isInteger", () =>
    {
        it("should return true for integer numbers", () =>
        {
            assert(typly.isInteger(5));
        });
        it("should return true for integer numbers", () =>
        {
            assert(typly.isInteger(9.0));
        });
        it("should return false for double numbers", () =>
        {
            assert(!typly.isInteger(3.2));
        });
        it("should return false for null", () =>
        {
            assert(!typly.isInteger(null));
        });
    });
    describe("#assertNumber", () =>
    {
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertNumber({});
            }, TypeError);
        });
        it("should throw a TypeError for null", () =>
        {
            assert.throws(() =>
            {
                typly.assertNumber(null);
            }, TypeError);
        });
        it("should throw a TypeError with correct message", () =>
        {
            assert.throws(() =>
            {
                typly.assertNumber({});
            }, function (error)
            {
                return error.message === "[tiply] Expected type number, but got type Object";
            });
        });
    });
    describe("#assertInteger", () =>
    {
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertInteger({});
            }, TypeError);
        });
        it("should throw a TypeError for null", () =>
        {
            assert.throws(() =>
            {
                typly.assertInteger(null);
            }, TypeError);
        });
        it("should throw a TypeError with correct message", () =>
        {
            assert.throws(() =>
            {
                typly.assertInteger({});
            }, function (error)
            {
                return error.message === "[tiply] Expected type integer, but got type Object";
            });
        });
    });
    describe("#isInRange", () =>
    {
        it("should return true for a number in range", () =>
        {
            assert(typly.isInRange(2, 0, 5));
        });
        it("should return true for a number in range", () =>
        {
            assert(typly.isInRange(0, 0, 5));
        });
        it("should return true for a number in range", () =>
        {
            assert(typly.isInRange(Number.EPSILON, 0, 5));
        });
        it("should return true for a number in range", () =>
        {
            assert(typly.isInRange(5, 0, 5));
        });
        it("should return false for a number out of range", () =>
        {
            assert(!typly.isInRange(-5, 0, 5));
        });
    });
    describe("#assertRange", () =>
    {
        it("should throw a RangeError for an invalid range", () =>
        {
            assert.throws(() =>
            {
                typly.assertRange(9, 0, 5);
            }, RangeError);
        });
        it("should throw a RangeError for an invalid range", () =>
        {
            assert.throws(() =>
            {
                typly.assertRange(-Number.EPSILON, 0, 5);
            }, RangeError);
        });
    });
});

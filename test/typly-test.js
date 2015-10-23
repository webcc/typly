"use strict";

let assert = require("assert");
let uuid = require("uuid");
let typly = require("..");

describe("typly", () =>
{
    describe("#isNumber", () =>
    {
        it("should return true for numbers", () =>
        {
            assert.ok(typly.isNumber(5));
        });
        it("should return false for null", () =>
        {
            assert.ok(!typly.isNumber(null));
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
        it("should throw a RangeError for an invalid range", () =>
        {
            assert.throws(() =>
            {
                typly.assertNumber(9, {
                    min: 0,
                    max: 5
                });
            }, RangeError);
            assert.ok(typly.assertNumber(5, {
                min: 0,
                max: 5
            }));
        });
    });
    describe("#isInRange", () =>
    {
        it("should return true for a number in range", () =>
        {
            assert.ok(typly.isInRange(2, 0, 5));
        });
        it("should return false for a number out of range", () =>
        {
            assert.ok(!typly.isInRange(-5, 0, 5));
        });
    });
    describe("#isString", () =>
    {
        it("should return true for strings", () =>
        {
            assert.ok(typly.isString("Example"));
        });
    });
    describe("#assertString", () =>
    {
        it("should return true for a string", () =>
        {
            assert.ok(typly.assertString("tests"));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertString({});
            }, TypeError);
        });
    });
    describe("#isUri", () =>
    {
        it("should return true for valid uris", () =>
        {
            assert.ok(typly.isUri("http://www.example.com"));
        });
        it("should return false for invalid uris", () =>
        {
            assert.ok(!typly.isUri(":http://www.example.com"));
        });
        it("should return false for null", () =>
        {
            assert.ok(!typly.isUri(null));
        });
    });
    describe("#assertUri", () =>
    {
        it("should return true for valid uris", () =>
        {
            assert.ok(typly.assertUri("http://www.example.com"));
        });
    });
    describe("#assertUri", () =>
    {
        it("should throw a TypeError for invalid uris", () =>
        {
            assert.throws(() =>
            {
                assert.ok(typly.assertUri(":http://www.example.com"));
            }, TypeError);
        });
    });
    describe("#isArray", () =>
    {
        it("should return true for arrays", () =>
        {
            assert.ok(typly.isArray([]));
            assert.ok(typly.isArray(new Array()));
        });
        it("should return true for arrays", () =>
        {
            assert.ok(typly.isArray([]));
            assert.ok(typly.isArray(new Array()));
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
        it("should throw a TypeError for arrays that contain not only elements of the given type", () =>
        {
            let numbers = ["tests"];
            assert.throws(() =>
            {
                typly.assertArray(numbers, typly.isNumber);
            }, TypeError);
        });
        it("should return true for arrays that contain only the given type", () =>
        {
            let numbers = [2,3,4,5];
            assert.ok(typly.assertArray(numbers, typly.isNumber));
        });
        it("should return true for arrays that contain only elements of the given type", () =>
        {
            let numbers = [2, 3, 4, 5];
            assert.ok(typly.assertArray(numbers, typly.isNumber));
        });
    });
    describe("#isBoolean", () =>
    {
        it("should return true for booleans", () =>
        {
            assert.ok(typly.isBoolean(true));
            assert.ok(typly.isBoolean(false));
        });
    });
    describe("#assertBoolean", () =>
    {
        it("should return true for booleans", () =>
        {
            assert.ok(typly.assertBoolean(true));
            assert.ok(typly.assertBoolean(false));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertBoolean({});
            }, TypeError);
        });
    });
    describe("#isDateString", () =>
    {
        it("should return true for dates", () =>
        {
            assert.ok(typly.isDateString(new Date().toString()));
        });
    });
    describe("#assertDateString", () =>
    {
        it("should return true for dates", () =>
        {
            assert.ok(typly.assertDateString(new Date().toString()));
        });
        it("should throw a TypeError for not valid string", () =>
        {
            assert.throws(() =>
            {
                typly.assertDateString("20");
            }, TypeError);
        });
        it("should throw a TypeError for object", () =>
        {
            assert.throws(() =>
            {
                typly.assertDateString({});
            }, TypeError);
        });
    });
    describe("#isDate", () =>
    {
        it("should return true for dates", () =>
        {
            assert.ok(typly.isDate(new Date()));
        });
    });
    describe("#assertDate", () =>
    {
        it("should return true for dates", () =>
        {
            assert.ok(typly.assertDate(new Date()));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertDate({});
            }, TypeError);
        });
    });
    describe("#isError", () =>
    {
        it("should return true for errors", () =>
        {
            assert.ok(typly.isError(new Error()));
        });
    });
    describe("#assertError", () =>
    {
        it("should return true for errors", () =>
        {
            assert.ok(typly.assertError(new Error()));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertError({});
            }, TypeError);
        });
    });
    describe("#isRegExp", () =>
    {
        it("should return true for regular expressions", () =>
        {
            assert.ok(typly.isRegExp(/tests/));
        });
    });
    describe("#assertRegExp", () =>
    {
        it("should return true for regular expressions", () =>
        {
            assert.ok(typly.assertRegExp(/tests/));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertRegExp({});
            }, TypeError);
        });
    });
    describe("#isUUID", () =>
    {
        it("should return true for an UUID", () =>
        {
            assert.ok(typly.isUUID(uuid.v1()));
            assert.ok(typly.isUUID(uuid.v4()));
        });
        it("should return false for an invalid UUID", () =>
        {
            assert.ok(!typly.isUUID("tests"));
        });
        it("should return false for null", () =>
        {
            assert.ok(!typly.isUUID(null));
        });
    });
    describe("#assertUUID", () =>
    {
        it("should return true for an UUID", () =>
        {
            assert.ok(typly.assertUUID(uuid.v1()));
            assert.ok(typly.assertUUID(uuid.v4()));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertUUID({});
            }, TypeError);
        });
    });
    describe("#isEmail", () =>
    {
        it("should return true for an email", () =>
        {
            assert.ok(typly.isEmail("mustermann@example.com"));
        });
        it("should return false for an invalid email", () =>
        {
            assert.ok(!typly.isEmail("mustermann@@example.com"));
        });
    });
    describe("#assertEmail", () =>
    {
        it("should return true for an email", () =>
        {
            assert.ok(typly.assertEmail("mustermann@example.com"));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertEmail("mustermann@@example.com");
            }, TypeError);
        });
    });
});

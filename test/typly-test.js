"use strict";
let assert = require('assert');
let typly = require("../lib/typly").instance();
let types = require("../lib/typly").TYPES;
let uuid = require("uuid");

describe("typly", () =>
{
  describe("#isInstanceOf", () =>
  {
    it("should pass for objects", () =>
    {
      assert.ok(typly.isInstanceOf({}, Object));
      assert.ok(typly.isInstanceOf(new Object(), Object));
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
    it("should allow null as object", () =>
    {
      assert.ok(typly.assertInstanceOf(null, Object));
    });
  });
  describe("#isNumber", () =>
  {
    it("should pass for numbers", () =>
    {
      assert.ok(typly.isNumber(5));
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
    it("should throw a TypeError with correct message", () =>
    {
      assert.throws(() =>
      {
        typly.assertNumber({});
      }, function(error) {
        return error.message === "number expected, but got Object";
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
  describe("#isString", () =>
  {
    it("should pass for strings", () =>
    {
      assert.ok(typly.isString("Example"));
    });
  });
  describe("#assertString", () =>
  {
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
    it("should pass for uris", () =>
    {
      assert.ok(typly.isUri("http://www.example.com"));
    });
  });
  describe("#assertUri", () =>
  {
    it("should throw a TypeError for invalid uris", () =>
    {
      assert.throws(() =>
      {
        assert.ok(typly.assertUri("Example"));
      }, TypeError);
    });
  });
  describe("#isArray", () =>
  {
    it("should pass for arrays", () =>
    {
      assert.ok(typly.isArray([]));
      assert.ok(typly.isArray(new Array()));
    });
    it("should pass for arrays", () =>
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
    it("should throw a TypeError for arrays that contain not only the given type", () =>
    {
      let numbers = ["tests"];
      assert.throws(() =>
      {
        typly.assertArray(numbers, {
          type: types.NUMBER
        });
      }, TypeError);
    });
    it("should pass for arrays of certain type", () =>
    {
      let numbers = [2,3,4,5];
      assert.ok(typly.assertArray(numbers, {
        type: types.NUMBER
      }));
    });
  });
  describe("#isBoolean", () =>
  {
    it("should pass for booleans", () =>
    {
      assert.ok(typly.isBoolean(true));
      assert.ok(typly.isBoolean(false));
    });
  });
  describe("#assertBoolean", () =>
  {
    it("should throw a TypeError for objects", () =>
    {
      assert.throws(() =>
      {
        typly.assertBoolean({});
      }, TypeError);
    });
  });
  describe("#isDate", () =>
  {
    it("should pass for dates", () =>
    {
      assert.ok(typly.isDate(new Date()));
    });
  });
  describe("#assertDate", () =>
  {
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
    it("should pass for errors", () =>
    {
      assert.ok(typly.isError(new Error()));
    });
  });
  describe("#assertError", () =>
  {
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
    it("should pass for regular expressions", () =>
    {
      assert.ok(typly.isRegExp(/tests/));
    });
  });
  describe("#assertRegExp", () =>
  {
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
    it("should pass for an UUID", () =>
    {
      assert.ok(typly.isUUID(uuid.v1()));
      assert.ok(typly.isUUID(uuid.v4()));
    });
    it("should return false for an invalid UUID", () =>
    {
      assert.ok(!typly.isUUID("tests"));
    });
  });
  describe("#assertUUID", () =>
  {
    it("should throw a TypeError for objects", () =>
    {
      assert.throws(() =>
      {
        typly.assertIdUUID({});
      }, TypeError);
    });
  });
});

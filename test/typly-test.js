"use strict";
let assert = require('assert');
let typly = require("../lib/typly");

describe("typly", () =>
{
  describe("#isInstanceOf", () =>
  {
    it("should pass for objects", () =>
    {
      assert.ok(typly.isInstanceOf({}, Object));
      assert.ok(typly.isInstanceOf(new Object(), Object));
    });
    it("should return false for null", () =>
    {
      assert.ok(!typly.isInstanceOf(null, Object));
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
  describe("#isNumber", () =>
  {
    it("should pass for numbers", () =>
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
    it("should throw a TypeError for null", () =>
    {
      assert.throws(() =>
      {
        typly.assertNumber(null);
      }, TypeError);
    });
  });
  describe("#isString", () =>
  {
    it("should pass for strings", () =>
    {
      assert.ok(typly.isString("Example"));
    });
    it("should return false for null", () =>
    {
      assert.ok(!typly.isString(null));
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
    it("should throw a TypeError for null", () =>
    {
      assert.throws(() =>
      {
        typly.assertString(null);
      }, TypeError);
    });
  });
  describe("#isUri", () =>
  {
    it("should pass for uris", () =>
    {
      assert.ok(typly.isUri("http://www.example.com"));
    });
    it("should return false for null", () =>
    {
      assert.ok(!typly.isUri(null));
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
    it("should throw a TypeError for null", () =>
    {
      assert.throws(() =>
      {
        typly.assertUri(null);
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
    it("should return false for null", () =>
    {
      assert.ok(!typly.isArray(null));
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
    it("should throw a TypeError for null", () =>
    {
      assert.throws(() =>
      {
        typly.assertArray(null);
      }, TypeError);
    });
  });
  describe("#isBoolean", () =>
  {
    it("should pass for booleans", () =>
    {
      assert.ok(typly.isBoolean(true));
      assert.ok(typly.isBoolean(false));
    });
    it("should return false for null", () =>
    {
      assert.ok(!typly.isBoolean(null));
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
    it("should throw a TypeError for null", () =>
    {
      assert.throws(() =>
      {
        typly.assertBoolean(null);
      }, TypeError);
    });
  });
  describe("#isDate", () =>
  {
    it("should pass for dates", () =>
    {
      assert.ok(typly.isDate(new Date()));
    });
    it("should return false for null", () =>
    {
      assert.ok(!typly.isDate(null));
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
    it("should throw a TypeError for null", () =>
    {
      assert.throws(() =>
      {
        typly.assertDate(null);
      }, TypeError);
    });
  });
  describe("#config", () =>
  {
    it("should allow to set ignoring null values", () =>
    {
      assert.throws(() =>
      {
        typly.assertNumber(null);
      }, TypeError);
      typly.config({
        ignoreNullValues: true
      });
      assert.ok(typly.assertNumber(null));
      typly.config({
        ignoreNullValues: false
      });
      assert.throws(() =>
      {
        typly.assertNumber(null);
      }, TypeError);
    });
  });
});

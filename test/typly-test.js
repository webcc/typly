"use strict";
let assert = require('assert');
let typly = require("../lib/typly");

describe("typly", function ()
{
  describe("#isInstanceOf", function ()
  {
    it("should pass for objects", function ()
    {
      assert.ok(typly.isInstanceOf({}, Object));
      assert.ok(typly.isInstanceOf(new Object(), Object));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typly.isInstanceOf(null, Object));
    });
  });
  describe("#assertInstanceOf", function ()
  {
    it("should throw a TypeError for numbers", function ()
    {
      assert.throws(function ()
      {
        typly.assertInstanceOf(5, Object);
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typly.assertInstanceOf(null, Object);
      }, TypeError);
    });
  });
  describe("#isNumber", function ()
  {
    it("should pass for numbers", function ()
    {
      assert.ok(typly.isNumber(5));
    });
    it("should check if a number is in a given range", function ()
    {
      assert.ok(typly.isNumber(5, {
        min: 0,
        max: 5
      }));
      assert.ok(!typly.isNumber(-1, {
        min: 0,
        max: 5
      }));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typly.isNumber(null));
    });
  });
  describe("#assertNumber", function ()
  {
    it("should throw a TypeError for objects", function ()
    {
      assert.throws(function ()
      {
        typly.assertNumber({});
      }, TypeError);
    });
    it("should throw a RangeError for an invalid range", function ()
    {
      assert.throws(function ()
      {
        typly.assertNumber(9, {
          min: 0,
          max: 5
        });
      }, RangeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typly.assertNumber(null);
      }, TypeError);
    });
  });
  describe("#isString", function ()
  {
    it("should pass for strings", function ()
    {
      assert.ok(typly.isString("Example"));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typly.isString(null));
    });
  });
  describe("#assertString", function ()
  {
    it("should throw a TypeError for objects", function ()
    {
      assert.throws(function ()
      {
        typly.assertString({});
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typly.assertString(null);
      }, TypeError);
    });
  });
  describe("#isUri", function ()
  {
    it("should pass for uris", function ()
    {
      assert.ok(typly.isUri("http://www.example.com"));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typly.isUri(null));
    });
  });
  describe("#assertUri", function ()
  {
    it("should throw a TypeError for invalid uris", function ()
    {
      assert.throws(function ()
      {
        assert.ok(typly.assertUri("Example"));
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typly.assertUri(null);
      }, TypeError);
    });
  });
  describe("#isArray", function ()
  {
    it("should pass for arrays", function ()
    {
      assert.ok(typly.isArray([]));
      assert.ok(typly.isArray(new Array()));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typly.isArray(null));
    });
  });
  describe("#assertArray", function ()
  {
    it("should throw a TypeError for objects", function ()
    {
      assert.throws(function ()
      {
        typly.assertArray({});
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typly.assertArray(null);
      }, TypeError);
    });
  });
  describe("#isBoolean", function ()
  {
    it("should pass for booleans", function ()
    {
      assert.ok(typly.isBoolean(true));
      assert.ok(typly.isBoolean(false));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typly.isBoolean(null));
    });
  });
  describe("#assertBoolean", function ()
  {
    it("should throw a TypeError for objects", function ()
    {
      assert.throws(function ()
      {
        typly.assertBoolean({});
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typly.assertBoolean(null);
      }, TypeError);
    });
  });
  describe("#isDate", function ()
  {
    it("should pass for dates", function ()
    {
      assert.ok(typly.isDate(new Date()));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typly.isDate(null));
    });
  });
  describe("#assertDate", function ()
  {
    it("should throw a TypeError for objects", function ()
    {
      assert.throws(function ()
      {
        typly.assertDate({});
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typly.assertDate(null);
      }, TypeError);
    });
  });
  describe("#config", function ()
  {
    it("should allow to set ignoring null values", function ()
    {
      assert.throws(function ()
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
      assert.throws(function ()
      {
        typly.assertNumber(null);
      }, TypeError);
    });
  });
});

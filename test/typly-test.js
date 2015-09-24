"use strict";
let assert = require('assert');
let typr = require("../lib/typly");

describe("typly", function ()
{
  describe("#isInstanceOf", function ()
  {
    it("should pass for objects", function ()
    {
      assert.ok(typr.isInstanceOf({}, Object));
      assert.ok(typr.isInstanceOf(new Object(), Object));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typr.isInstanceOf(null, Object));
    });
  });
  describe("#assertInstanceOf", function ()
  {
    it("should throw a TypeError for numbers", function ()
    {
      assert.throws(function ()
      {
        typr.assertInstanceOf(5, Object);
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typr.assertInstanceOf(null, Object);
      }, TypeError);
    });
  });
  describe("#isNumber", function ()
  {
    it("should pass for numbers", function ()
    {
      assert.ok(typr.isNumber(5));
    });
    it("should check if a number is in a given range", function ()
    {
      assert.ok(typr.isNumber(5, {
        min: 0,
        max: 5
      }));
      assert.ok(!typr.isNumber(-1, {
        min: 0,
        max: 5
      }));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typr.isNumber(null));
    });
  });
  describe("#assertNumber", function ()
  {
    it("should throw a TypeError for objects", function ()
    {
      assert.throws(function ()
      {
        typr.assertNumber({});
      }, TypeError);
    });
    it("should throw a RangeError for an invalid range", function ()
    {
      assert.throws(function ()
      {
        typr.assertNumber(9, {
          min: 0,
          max: 5
        });
      }, RangeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typr.assertNumber(null);
      }, TypeError);
    });
  });
  describe("#isString", function ()
  {
    it("should pass for strings", function ()
    {
      assert.ok(typr.isString("Example"));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typr.isString(null));
    });
  });
  describe("#assertString", function ()
  {
    it("should throw a TypeError for objects", function ()
    {
      assert.throws(function ()
      {
        typr.assertString({});
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typr.assertString(null);
      }, TypeError);
    });
  });
  describe("#isUri", function ()
  {
    it("should pass for uris", function ()
    {
      assert.ok(typr.isUri("http://www.example.com"));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typr.isUri(null));
    });
  });
  describe("#assertUri", function ()
  {
    it("should throw a TypeError for invalid uris", function ()
    {
      assert.throws(function ()
      {
        assert.ok(typr.assertUri("Example"));
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typr.assertUri(null);
      }, TypeError);
    });
  });
  describe("#isArray", function ()
  {
    it("should pass for arrays", function ()
    {
      assert.ok(typr.isArray([]));
      assert.ok(typr.isArray(new Array()));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typr.isArray(null));
    });
  });
  describe("#assertArray", function ()
  {
    it("should throw a TypeError for objects", function ()
    {
      assert.throws(function ()
      {
        typr.assertArray({});
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typr.assertArray(null);
      }, TypeError);
    });
  });
  describe("#isBoolean", function ()
  {
    it("should pass for booleans", function ()
    {
      assert.ok(typr.isBoolean(true));
      assert.ok(typr.isBoolean(false));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typr.isBoolean(null));
    });
  });
  describe("#assertBoolean", function ()
  {
    it("should throw a TypeError for objects", function ()
    {
      assert.throws(function ()
      {
        typr.assertBoolean({});
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typr.assertBoolean(null);
      }, TypeError);
    });
  });
  describe("#isDate", function ()
  {
    it("should pass for dates", function ()
    {
      assert.ok(typr.isDate(new Date()));
    });
    it("should return false for null", function ()
    {
      assert.ok(!typr.isDate(null));
    });
  });
  describe("#assertDate", function ()
  {
    it("should throw a TypeError for objects", function ()
    {
      assert.throws(function ()
      {
        typr.assertDate({});
      }, TypeError);
    });
    it("should throw a TypeError for null", function ()
    {
      assert.throws(function ()
      {
        typr.assertDate(null);
      }, TypeError);
    });
  });
});

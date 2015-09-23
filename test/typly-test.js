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
  });
  describe("#isNumber", function ()
  {
    it("should pass for numbers", function ()
    {
      assert.ok(typr.isNumber(5));
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
        typr.assertNumber(9, 0, 5);
      }, RangeError);
    });
  });
  describe("#isString", function ()
  {
    it("should pass for strings", function ()
    {
      assert.ok(typr.isString("Example"));
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
  });
  describe("#isUri", function ()
  {
    it("should pass for uris", function ()
    {
      assert.ok(typr.isUri("http://www.example.com"));
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
  });
  describe("#isArray", function ()
  {
    it("should pass for arrays", function ()
    {
      assert.ok(typr.isArray([]));
      assert.ok(typr.isArray(new Array()));
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
  });
  describe("#isBoolean", function ()
  {
    it("should pass for booleans", function ()
    {
      assert.ok(typr.isBoolean(true));
      assert.ok(typr.isBoolean(false));
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
  });
  describe("#isDate", function ()
  {
    it("should pass for dates", function ()
    {
      assert.ok(typr.isDate(new Date()));
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
  });
});

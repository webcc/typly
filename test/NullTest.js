"use strict";

describe("typly#NullTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isNull", () =>
    {
        it("should return true for null", () =>
        {
            assert(typly.isNull(null));
        });
        it("should return false for not null", () =>
        {
            assert(!typly.isNull({}));
            assert(!typly.isNull([]));
            assert(!typly.isNull(0));
            assert(!typly.isNull(false));
            assert(!typly.isNull(new Map()));
        });
    });
    describe("#assertNull", () =>
    {
        it("should throw a TypeError for null", () =>
        {
            assert.throws(() =>
            {
                typly.assertNull({});
            }, TypeError);
            assert.throws(() =>
            {
                typly.assertNull([]);
            }, TypeError);
            assert.throws(() =>
            {
                typly.assertNull([]);
            }, TypeError);
            assert.throws(() =>
            {
                typly.assertNull([]);
            }, TypeError);
            assert.throws(() =>
            {
                typly.assertNull(false);
            }, TypeError);
            assert.throws(() =>
            {
                typly.assertNull(new Map());
            }, TypeError);
        });
        it("should return true for objects", () =>
        {
            assert(typly.assertNull(null));
        });
    });
    describe("#assertNotNull", () =>
    {
        it("should throw a TypeError for null", () =>
        {
            assert.throws(() =>
            {
                typly.assertNotNull(null);
            }, TypeError);
        });
        it("should return true for objects", () =>
        {
            assert(typly.assertNotNull({}));
            assert(typly.assertNotNull([]));
            assert(typly.assertNotNull(0));
            assert(typly.assertNotNull(false));
            assert(typly.assertNotNull(new Map()));
        });
    });
});

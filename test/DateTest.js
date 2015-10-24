"use strict";

describe("typly#DateTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isDate", () =>
    {
        it("should return true for dates", () =>
        {
            assert(typly.isDate(new Date()));
        });
        it("should return false for objects", () =>
        {
            assert(!typly.isDate({}));
        });
    });
    describe("#assertDate", () =>
    {
        it("should return true for dates", () =>
        {
            assert(typly.assertDate(new Date()));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertDate({});
            }, TypeError);
        });
    });
    describe("#isDateString", () =>
    {
        it("should return true for dates", () =>
        {
            assert(typly.isDateString(new Date().toString()));
        });
    });
    describe("#assertDateString", () =>
    {
        it("should return true for dates", () =>
        {
            assert(typly.assertDateString(new Date().toString()));
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
});

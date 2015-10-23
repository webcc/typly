"use strict";

describe("typly#FunctionTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isFunction", () =>
    {
        it("should return true for functions", () =>
        {
            assert(typly.isFunction(function(){}));
            assert(typly.isFunction(function(a){}));
        });
    });
    describe("#assertFunction", () =>
    {
        it("should throw a TypeError for numbers", () =>
        {
            assert.throws(() =>
            {
                typly.assertFunction(5);
            }, TypeError);
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertFunction({});
            }, TypeError);
        });
        it("should return true for functions", () =>
        {
            assert(typly.assertFunction(function(){}));
        });
    });
});

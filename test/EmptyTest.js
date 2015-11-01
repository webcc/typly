"use strict";

describe("typly#EmptyTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isEmpty", () =>
    {
        it("should return true for enumerable objects that contain no values", () =>
        {
            assert(typly.isEmpty({}));
            assert(typly.isEmpty([]));
            assert(typly.isEmpty(""));
            assert(typly.isEmpty(new Map()));
            assert(typly.isEmpty(new Set()));
            assert(typly.isEmpty(null));
            assert(typly.isEmpty(undefined));
        });
        it("should return true for primitives", () =>
        {
            assert(typly.isEmpty(5));
        });
    });
    describe("#assertEmpty", () =>
    {
        it("should throw an Error for non-empty array", () =>
        {
            assert.throws(() =>
            {
                typly.assertEmpty([5]);
            }, Error);
        });
        it("should return true for enumerable objects that contain no values", () =>
        {
            assert(typly.assertEmpty({}));
            assert(typly.assertEmpty([]));
            assert(typly.assertEmpty(""));
            assert(typly.assertEmpty(new Map()));
            assert(typly.assertEmpty(new Set()));
            assert(typly.assertEmpty(null));
            assert(typly.assertEmpty(undefined));
        });
        it("should return true for primitives", () =>
        {
            assert(typly.assertEmpty(5));
        });
    });
});

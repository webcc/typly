"use strict";

describe("typly#ErrorTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isError", () =>
    {
        it("should return true for errors", () =>
        {
            assert(typly.isError(new Error()));
        });
        it("should return false for objects", () =>
        {
            assert(!typly.isError({}));
        });
    });
    describe("#assertError", () =>
    {
        it("should return true for errors", () =>
        {
            assert(typly.assertError(new Error()));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertError({});
            }, TypeError);
        });
    });
});

"use strict";

describe("typly#RegExpTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isRegExp", () =>
    {
        it("should return true for regular expressions", () =>
        {
            assert(typly.isRegExp(/tests/));
        });
        it("should return false for objects", () =>
        {
            assert(!typly.isRegExp({}));
        });
    });
    describe("#assertRegExp", () =>
    {
        it("should return true for regular expressions", () =>
        {
            assert(typly.assertRegExp(/tests/));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertRegExp({});
            }, TypeError);
        });
    });
});

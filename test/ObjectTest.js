"use strict";

describe("typly#ObjectTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isObject", () =>
    {
        it("should return true for objects", () =>
        {
            assert(typly.isObject({}));
            assert(typly.isObject(new Object()));
        });
    });
    describe("#assertObject", () =>
    {
        it("should throw a TypeError for numbers", () =>
        {
            assert.throws(() =>
            {
                typly.assertObject(5);
            }, TypeError);
        });
        it("should return true for objects", () =>
        {
            assert(typly.assertObject({}));
            assert(typly.assertObject(new Object()));
        });
    });
});

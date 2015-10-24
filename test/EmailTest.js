"use strict";

describe("typly#Email", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isEmail", () =>
    {
        it("should return true for an email", () =>
        {
            assert(typly.isEmail("mustermann@example.com"));
        });
        it("should return true for an email", () =>
        {
            assert(typly.isEmail("mustermann@www.example.com"));
        });
        it("should return false for an invalid email", () =>
        {
            assert(!typly.isEmail("mustermann@@example.com"));
        });
        it("should return false for an invalid email", () =>
        {
            assert(!typly.isEmail("mustermann@@example.com/zz"));
        });
    });
    describe("#assertEmail", () =>
    {
        it("should return true for an email", () =>
        {
            assert(typly.assertEmail("mustermann@example.com"));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertEmail("mustermann@@example.com");
            }, TypeError);
        });
    });
});

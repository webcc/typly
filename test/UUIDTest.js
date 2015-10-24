"use strict";

describe("typly#UUIDTest", () =>
{
    let assert = require("assert");
    let uuid = require("uuid");
    let typly = require("..");

    describe("#isUUID", () =>
    {
        it("should return true for an UUID", () =>
        {
            assert(typly.isUUID(uuid.v1()));
            assert(typly.isUUID(uuid.v4()));
        });
        it("should return false for an invalid UUID", () =>
        {
            assert(!typly.isUUID("tests"));
        });
        it("should return false for null", () =>
        {
            assert(!typly.isUUID(null));
        });
    });
    describe("#assertUUID", () =>
    {
        it("should return true for an UUID", () =>
        {
            assert(typly.assertUUID(uuid.v1()));
            assert(typly.assertUUID(uuid.v4()));
        });
        it("should throw a TypeError for objects", () =>
        {
            assert.throws(() =>
            {
                typly.assertUUID({});
            }, TypeError);
        });
    });
});

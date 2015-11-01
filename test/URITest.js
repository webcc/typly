"use strict";

describe("typly#URITest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isUri", () =>
    {
        it("should return true for valid uris", () =>
        {
            assert(typly.isUri("http://www.example.com"));
        });
        it("should return true for absolute uri paths", () =>
        {
            assert(typly.isUri("/a/path"));
        });
        it("should return true for relative uri paths", () =>
        {
            assert(typly.isUri("./a/path"));
        });
        it("should return true for relative uri paths", () =>
        {
            assert(typly.isUri("../a/path"));
        });
        it("should return false for invalid uris", () =>
        {
            assert(!typly.isUri(":http://www.example.com"));
        });
        it("should return false for invalid uris", () =>
        {
            assert(!typly.isUri("http:// www.example.com"));
        });
        it("should return false for invalid uri schemes", () =>
        {
            assert(!typly.isUri("ht://www.example.com"));
        });
        it("should return false for null", () =>
        {
            assert(!typly.isUri(null));
        });
    });
    describe("#assertUri", () =>
    {
        it("should return true for valid uris", () =>
        {
            assert(typly.assertUri("http://www.example.com"));
        });
        it("should throw a TypeError for invalid uris", () =>
        {
            assert.throws(() =>
            {
                assert(typly.assertUri(":http://www.example.com"));
            }, TypeError);
        });
    });
});

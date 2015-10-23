"use strict";

describe("typly#UndefinedTest", () =>
{
    let assert = require("assert");
    let typly = require("..");

    describe("#isUndefined", () =>
    {
        it("should return true for undefined", () =>
        {
            assert(typly.isUndefined(undefined));
        });
        it("should return false for not undefined", () =>
        {
            assert(!typly.isUndefined({}));
            assert(!typly.isUndefined([]));
            assert(!typly.isUndefined(0));
            assert(!typly.isUndefined(false));
            assert(!typly.isUndefined(new Map()));
        });
    });
    describe("#assertUndefined", () =>
    {
        it("should throw a TypeError for undefined", () =>
        {
            assert.throws(() =>
            {
                typly.assertUndefined({});
            }, TypeError);
            assert.throws(() =>
            {
                typly.assertUndefined([]);
            }, TypeError);
            assert.throws(() =>
            {
                typly.assertUndefined([]);
            }, TypeError);
            assert.throws(() =>
            {
                typly.assertUndefined([]);
            }, TypeError);
            assert.throws(() =>
            {
                typly.assertUndefined(false);
            }, TypeError);
            assert.throws(() =>
            {
                typly.assertUndefined(new Map());
            }, TypeError);
        });
        it("should return true for objects", () =>
        {
            assert(typly.assertUndefined(undefined));
        });
    });
});

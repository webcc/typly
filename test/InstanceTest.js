"use strict";

describe("typly#ObjectTest", () =>
{
    let assert = require("assert");
    let typly = require("..");
    class FooClass {
        constructor(){
            this.test = "tttt";
        }
        run(param){
            return this.test + "Hallo";
        }
    }
    class DeepFooClass extends FooClass{
        constructor(){
            super();
            this.test = "tttt";
            this.myFoo = new FooClass();
        }
    }
    let FooFunc = function(){
        this.test="test";
        this.run = function(param){
            return this.test + "Hallo";
        }
    };
    describe("#isInstanceOf", () =>
    {
        it("should return true for objects", () =>
        {
            assert(typly.isInstanceOf({}, Object));
            assert(typly.isInstanceOf(new Object(), Object));
        });
        it("should find instance of FooFunc", function ()
        {
            let foo = new FooFunc();
            assert.equal(typly.isInstanceOf(foo, FooFunc), true);
        });
        it("should find instance of FooClass", function ()
        {
            let foo = new FooClass();
            assert.equal(typly.isInstanceOf(foo, FooClass), true);
        });
        it("should find instance of DeepFooClass", function ()
        {
            let foo = new DeepFooClass();
            assert.equal(typly.isInstanceOf(foo, DeepFooClass), true);
        });
    });
    describe("#assertInstanceOf", () =>
    {
        it("should throw a TypeError for numbers", () =>
        {
            assert.throws(() =>
            {
                typly.assertInstanceOf(5, Object);
            }, TypeError);
        });
        it("should throw a TypeError for null", () =>
        {
            assert.throws(() =>
            {
                typly.assertInstanceOf(null, Object);
            }, TypeError);
        });
    });
});

# Generic Javascript type checker

---

REPOSITORY NO LONGER MAINTAINED (ARCHIVE)

---

A module for checking types in JavaScript. The API has been built around a set of simple and clean `is*` and `assert*` functions emulating the philosophy of [underscore.js](http://underscorejs.org/). We wrap some of their `_.is*` functions. This utility was initially developed for the node modules of our [imergo® Web Compliance Suite](https://imergo.com/) as a way to ensure validity of the data passed to our ES6 class setters.

![ES6](https://img.shields.io/badge/es-6-brightgreen.svg)
![Build passing](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Code Coverage](https://img.shields.io/badge/coverage-100%-brightgreen.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Prerequisites
-  ES6 (Node.js >= 4.0.0)

## Features

- Checks JavaScript basic types like numbers, strings, booleans, arrays, dates or regular expressions
- Checks instance of prototypes
- Checks special types like integers, URIs, UUIDs or email addresses
- Checks ranges of numbers
- Two APIs: `is`-API for checking (returns `true` or `false`) and `assert`-API for assertions (returns `true` or throws an exception)

## Installation

Use `npm`:

```bash
$ npm install [-g] typly
```

## Basic usage

### Check types

```javascript
"use strict";
let typly = require("typly");
console.log(typly.isNumber(5));       // Output: true
console.log(typly.isNumber("5"));     // Output: false
```

### Assert types

```javascript
"use strict";
let typly = require("typly");
console.log(typly.assertNumber(5));   // Output: true
console.log(typly.assertNumber("5")); // Output: TypeError: [tiply] Expected type number, but got type string
```

### Use case: setter validation

See `examples` directory:

```javascript
"use strict";

let typly = require("typly");

class Person {
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName()
    {
        return this._firstName;
    }

    set firstName(firstName)
    {
        typly.assertString(firstName);
        this._firstName = firstName;
    }

    get lastName()
    {
        return this._lastName;
    }

    set lastName(lastName)
    {
        typly.assertString(lastName);
        this._lastName = lastName;
    }
}

let max = new Person("Max", "Mustermann");
let somebodyElse = new Person(4711, "Mustermann");
// Output: TypeError: [tiply] Expected type string, but got type number
```

## API

### Check types

| Method  | Description |
| ------------- | ------------- |
| `isArray(value[, fn])`  | Checks if a value is an array. Optionally a function can be passed that is applied to each item in the array and verifies the type of the item. In case of using other typly functions, bind its context. For example: `typly.assertArray([2,3,4,5], typly.isNumber.bind(typly))` |
| `isBoolean(value)`  | Checks if a value is a boolean.  |
| `isDate(value)`  | Checks if a value is a date.  |
| `isDateString(value)`  | Checks if a value is a date string.  |
| `isEmail(value)`  | Checks if a value is an email address.  |
| `isEmpty(value)`  | Checks if an enumerable object contains no values (no enumerable own-properties). For strings and array-like objects checks if the length property is 0. `undefined`, `null` and primitives return `true`. |
| `isError(value)`  | Checks if a value is a JavaScript error.  |
| `isFunction(value)`  | Checks if a value is function.  |
| `isInRange(value, min, max)`  | Checks if a numeric value is in the range [min, max].  |
| `isImplementationOf(value, prototype)`  | Checks if a value is an implementation of a given prototype.  |
| `isInteger(value)`  | Checks if a value is an integer number.  |
| `isNull(value)`  | Checks if a value is null.  |
| `isNumber(value)`  | Checks if a value is a number.  |
| `isObject(value)`  | Checks if a value is a JavaScript object.  |
| `isRegExp(value)`  | Checks if a value is a JavaScript regular expression.  |
| `isString(value)`  | Checks if a value is a string.  |
| `isUndefined(value)`  | Checks if a value is undefined.  |
| `isUri(value)`  | Checks if a value is an uri.  |
| `isUUID(value)`  | Checks if a value is an UUID.  |
  
### Assert types

| Method  | Description |
| ------------- | ------------- |
| `assertArray(value[, fn])`  | Asserts that a value is an array. Optionally a function can be passed that is applied to each item in the array and verifies the type of the item. In case of using other typly functions, bind its context. For example: `typly.assertArray([2,3,4,5], typly.isNumber.bind(typly))` |
| `assertBoolean(value)`  | Asserts that a value is a boolean.  |
| `assertDate(value)`  | Asserts that a value is a date.  |
| `assertDateString(value)`  | Asserts that a value is a date string.  |
| `assertEmail(value)`  | Asserts that a value is an email address.  |
| `assertEmpty(value)`  | Asserts that an enumerable object contains no values (no enumerable own-properties). For strings and array-like objects checks if the length property is 0. `undefined`, `null` and primitives return `true`. |
| `assertError(value)`  | Asserts that a value is a JavaScript error.  |
| `assertFunction(value)`  | Asserts that a value is function.  |
| `assertImplementationOf(value, prototype)`  | Asserts that a value is an implementation of a given prototype.  |
| `assertInteger(value)`  | Asserts that a value is an integer number.  |
| `assertNull(value)`  | Asserts that a value is null.  |
| `assertNumber(value)`  | Asserts that a value is a number.  |
| `assertObject(value)`  | Asserts that a value is a JavaScript object.  |
| `assertRange(value, min, max)`  | Asserts that a numeric value is in the range [min, max].  |
| `assertRegExp(value)`  | Asserts that a value is a JavaScript regular expression.  |
| `assertString(value)`  | Asserts that a value is a string.  |
| `assertUndefined(value)`  | Asserts that a value is undefined.  |
| `assertUri(value)`  | Asserts that a value is an uri.  |
| `assertUUID(value)`  | Asserts that a value is an UUID.  |

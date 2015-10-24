# Generic Javascript type checker

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
| ```isArray(value)```  | Check if a value is an array.  |
| ```isBoolean(value)```  | Check if a value is a boolean.  |
| ```isDate(value)```  | Check if a value is a date.  |
| ```isDateString(value)```  | Check if a value is a date string.  |
| ```isEmail(value)```  | Check if a value is an email address.  |
| ```isError(value)```  | Check if a value is a JavaScript error.  |
| ```isFunction(value)```  | Check if a value is function.  |
| ```isInRange(value, min, max)```  | Check if a numeric value is in the range [min, max].  |
| ```isInstanceOf(value, prototype)```  | Check if a value is an instance of a given prototype.  |
| ```isInteger(value)```  | Check if a value is an integer number.  |
| ```isNull(value)```  | Check if a value is null.  |
| ```isNumber(value)```  | Check if a value is a number.  |
| ```isObject(value)```  | Check if a value is a JavaScript object.  |
| ```isRegExp(value)```  | Check if a value is a JavaScript regular expression.  |
| ```isString(value)```  | Check if a value is a string.  |
| ```isUndefined(value)```  | Check if a value is undefined.  |
| ```isUri(value)```  | Check if a value is an uri.  |
| ```isUUID(value)```  | Check if a value is an UUID.  |
  
### Assert types

| Method  | Description |
| ------------- | ------------- |
| ```assertInstanceOf(value, prototype)```  | Assert that a value is an instance of a given prototype.  |
| ```assertFunction(value)```  | Assert that a value is function. |
| ```assertNull(value)```  | Assert that a value is null. |
| ```assertNumber(value)```  | Assert that a value is a number. |
| ```assertString(value)```  | Assert that a value is a string.  |
| ```assertUri(value)```  | Assert that a value is an uri.  |
| ```assertArray(value, fn?)```  | Assert that a value is an array. Optionally a function can be passed that is applied for each item in the array and verifies the type of the item, for example `typly.assertArray([2,3,4,5], typly.isNumber)`|
| ```assertBoolean(value)```  | Assert that a value is a boolean.  |
| ```assertDate(value)```  | Assert that a value is a date.  |
| ```assertDateString(value)```  | Assert that a value is a date string.  | 
| ```assertUUID(value)```  | Assert that a value is an UUID.  |
| ```assertEmail(value)```  | Assert that a value is an email address.  |

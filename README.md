# imergo JavaScript type checker

A module for checking types in JavaScript. The API has been built around a set of simple and clean `is*` and `assert*` functions emulating the philosophy of [underscore.js](http://underscorejs.org/). We wrap some of their `_.is*` functions.

![ES6](https://img.shields.io/badge/es-6-brightgreen.svg)
![Build passing](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Code Coverage](https://img.shields.io/badge/coverage-100%-brightgreen.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Prerequisites
-  ES6 (Node.js >= 4.0.0)

## Features

- Checks JavaScript basic types like numbers, strings, booleans, arrays, regular expressions
- Checks instance of prototypes
- Checks special types like dates, uris, UUIDs, email addresses
- Checks ranges of numbers
- Two APIs: `is`-API for checking (returns `true` or `false`) and `assert`-API for assertions (returns `true` or throws an exception)

## Installation

Install it locally:

```bash
$ npm install typly
```

Or install it globally:

```bash
$ npm install -g typly
```

## Getting Help

You can  [contact us directly!](http://www.imergo.com) or create an GitHub issue.

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
console.log(typly.assertNumber("5")); // Output: TypeError: number expected, but got string
```

### Use case: setter validation

```javascript
"use strict";
let typly = require("typly");
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    typly.assertString(firstName);
    this._firstName = firstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    typly.assertString(lastName);
    this._lastName = lastName;
  }
}
let max = new Person('Max', 'Mustermann');
let somebodyElse = new Person(4711, 'Mustermann');  // Output: TypeError: string expected, but got number
```

## API

### Check types

| Method  | Description |
| ------------- | ------------- |
| ```isInstanceOf(value, prototype)```  | Check if a value is an instance of a given prototype.  |
| ```isFunction(value)```  | Check if a value is function.  |
| ```isNull(value)```  | Check if a value is null.  |
| ```isNumber(value)```  | Check if a value is a number.  |
| ```isString(value)```  | Check if a value is a string.  |
| ```isUri(value)```  | Check if a value is an uri.  |
| ```isArray(value)```  | Check if a value is an array.  |
| ```isBoolean(value)```  | Check if a value is a boolean.  |
| ```isDate(value)```  | Check if a value is a date.  |
| ```isDateString(value)```  | Check if a value is a date string.  |
| ```isUUID(value)```  | Check if a value is an UUID.  |
| ```isEmail(value)```  | Check if a value is an email address.  |
  
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

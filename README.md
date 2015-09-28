# imergo JavaScript type checker

A module for checking types in JavaScript. Comes with two simple and clean APIs.

## Installation

Install it locally:

```bash
$ npm install typly
```

Or install it globally:

```bash
$ npm install -g typly
```

## Features

- Checks JavaScript basic types like numbers, strings, booleans, arrays, regular expressions
- Checks instance of prototypes
- Checks special types like dates, uris, UUIDs
- Checks ranges of numbers
- Optionally ignores `null` values
- Two APIs: `is`-API for checking (returns `true` or `false`) and `assert`-API for assertions (returns `true` or throws an exception)

## Getting Help

You can  [contact us directly!](http://www.imergo.com) or create an GitHub issue.

## Basic usage

### Check types

```javascript
"use strict";
let typly = require("typly").instance();
console.log(typly.isNumber(5));       // Output: true
console.log(typly.isNumber("5"));     // Output: false
```

### Assert types

```javascript
"use strict";
let typly = require("typly").instance();
console.log(typly.assertNumber(5));   // Output: true
console.log(typly.assertNumber("5")); // Output: TypeError: number expected, but got string
```

### Use case: setter validation

```javascript
"use strict";
let typly = require("typly").instance();
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
| ```isNumber(value)```  | Check if a value is a number.  |
| ```isString(value)```  | Check if a value is a string.  |
| ```isUri(value)```  | Check if a value is an uri.  |
| ```isArray(value)```  | Check if a value is an array.  |
| ```isBoolean(value)```  | Check if a value is a boolean.  |
| ```isDate(value)```  | Check if a value is a date.  |
| ```isUUID(value)```  | Check if a value is an UUID.  |
  
### Assert types

| Method  | Description |
| ------------- | ------------- |
| ```assertInstanceOf(value, prototype)```  | Assert that a value is an instance of a given prototype.  |
| ```assertNumber(value)```  | Assert that a value is a number. |
| ```assertString(value)```  | Assert that a value is a string.  |
| ```assertUri(value)```  | Assert that a value is an uri.  |
| ```assertArray(value, config?)```  | Assert that a value is an array. Optional properties in the `config`-parameter are: <ul><li>`type`: the type of the elements in the array (one of `require("typly").TYPES`)</li></ul> |
| ```assertBoolean(value)```  | Assert that a value is a boolean.  |
| ```assertDate(value)```  | Assert that a value is a date.  |
| ```assertUUID(value)```  | Assert that a value is an UUID.  |

# imergo JavaScript type checker


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

- Checks JavaScript basic types like numbers, strings, booleans, arrays
- Checks instance of prototypes
- Checks special types like dates, uris
- Checks ranges of numbers

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

### Ignoring null values
Sometimes you may want to allow null values for properties. In this case you can set the `ignoreNullValues` property in the config parameter of the `instance()` method to `true` as shown in the following code snippet:

```javascript
"use strict";
let typly = require("typly").instance(
  {
    ignoreNullValues: true              // This ignores null values when checking for types.
  }
);
class Person {
  ...
}
let max = new Person(null, 'Mustermann');
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
  
## Assert types

| Method  | Description |
| ------------- | ------------- |
| ```assertInstanceOf(value, prototype)```  | Assert that a value is an instance of a given prototype.  |
| ```assertNumber(value, config?)```  | Assert that a value is a number. Optional properties in the `config`-parameter are:  - `ignoreNullValues`: boolean, default set to `false` |
| ```assertString(value)```  | Assert that a value is a string.  |
| ```assertUri(value)```  | Assert that a value is an uri.  |
| ```assertArray(value)```  | Assert that a value is an array.  |
| ```assertBoolean(value)```  | Assert that a value is a boolean.  |
| ```assertDate(value)```  | Assert that a value is a date.  |

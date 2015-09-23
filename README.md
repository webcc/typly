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

- **isInstanceOf**: Check if a value is an instance of a given prototype.
- **isNumber**: Check if a value is a number.
- **isString**: Check if a value is a string.
- **isUri**: Check if a value is an uri.
- **isArray**: Check if a value is an array.
- **isBoolean**: Check if a value is a boolean.
- **isDate**: Check if a value is a date.
  
## Assert types

- **assertInstanceOf**: Assert that a value is an instance of a given prototype.
- **assertNumber**: Assert that a value is a number.
- **assertString**: Assert that a value is a string.
- **assertUri**: Assert that a value is an uri.
- **assertArray**: Assert that a value is an array.
- **assertBoolean**: Assert that a value is a boolean.
- **assertDate**: Assert that a value is a date.

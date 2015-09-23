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


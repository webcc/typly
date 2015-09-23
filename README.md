# imergo JavaScript type checker


## Installation

```bash
$ npm install typly
```

## Features

- Checks JavaScript basic types like numbers, strings, booleans, arrays
- Checks instance of prototypes
- Checks special types like dates, uris
- Checks ranges

## Getting Help

You can  [contact us directly!](http://www.imergo.com) or create an GiHub issue.

## Basic usage

### Import the cassandra-persistence module

```javascript
"use strict";
let typly = require("typly");
console.log(typly.isNumber(5));       // Output: true
console.log(typly.isNumber("5"));     // Output: false
console.log(typly.verifyNumber(5));   // Output: true
console.log(typly.verifyNumber("5")); // Output: TypeError: number expected, but got string
```

"use strict";
let _ = require("underscore");

function createErrorMessage(value, expectedType) {
  let actual = (value !== null && typeof value === 'object') ? value.constructor.name : typeof value;
  actual = (value === null) ? null : actual;
  let message = expectedType + " expected, but got " + actual;
  return message;
}

function createTypeError(value, expectedType) {
  return new TypeError(createErrorMessage(value, expectedType));
}

function getValue(config, property, defaultValue) {
  config = config || {};
  let result = config[property];
  return (result !== undefined) ? result : defaultValue;
}

let TYPES = {
  NUMBER: 'number'
}

function getCheckerForType(type, instance) {
  let checker;
  switch(type) {
    case TYPES.NUMBER:
      checker = instance.assertNumber;
      break;
  }
  return checker;
}

module.exports = {
  TYPES: TYPES,
  instance(config) {
    return {
        isInstanceOf(value, prototype) {
        if (value === null || (value && _.isFunction(prototype) && value instanceof prototype)) {
          return true;
        }
        return false;
      },
      assertInstanceOf(value, prototype) {
        if(!this.isInstanceOf(value, prototype)) {
          throw createTypeError(value, prototype.name);
        }
        return true;
      },
      isNumber(value) {
        return _.isNumber(value);
      },
      assertNumber(value, config) {
        if(!this.isNumber(value)) {
          throw createTypeError(value, 'number');
        }
        let min = getValue(config, 'min', Number.MIN_VALUE);
        let max = getValue(config, 'max', Number.MAX_VALUE);
        this.assertRange(value, min, max);
        return true;
      },
      isInRange(value, min, max) {
        let isInRange = true;
        if(typeof min === 'number' && value < min) {
          isInRange = false;
        }
        if(typeof max === 'number' && value > max) {
          isInRange = false;
        }
        return isInRange;
      },
      assertRange(value, min, max) {
        if(!this.isInRange(value, min, max)) {
          throw new RangeError();
        }
      },
      isString(value) {
        return _.isString(value);
      },
      assertString(value) {
        if(!this.isString(value)) {
          throw createTypeError(value, 'string');
        }
        return true;
      },
      isUri(value) {
        if(value !== undefined && value !== null) {
          // @see: https://mathiasbynens.be/demo/url-regex
          // @see: https://gist.github.com/dperini/729294
          var regex = new RegExp(
            "^" +
              // protocol identifier
            "(?:(?:https?|ftp)://)" +
              // user:pass authentication
            "(?:\\S+(?::\\S*)?@)?" +
            "(?:" +
              // IP address exclusion
              // private & local networks
            "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
            "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
            "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
              // IP address dotted notation octets
              // excludes loopback network 0.0.0.0
              // excludes reserved space >= 224.0.0.0
              // excludes network & broacast addresses
              // (first & last IP address of each class)
            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
            "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
            "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
            "|" +
              // host name
            "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
              // domain name
            "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
              // TLD identifier
            "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
              // TLD may end with dot
            "\\.?" +
            ")" +
              // port number
            "(?::\\d{2,5})?" +
              // resource path
            "(?:[/?#]\\S*)?" +
            "$", "i"
          );
          return value.match(regex);
        }
        return false;
      },
      assertUri(value) {
        if(!this.isUri(value)) {
          throw createTypeError(value, 'uri');
        }
        return true;
      },
      isArray(value) {
        return _.isArray(value);
      },
      assertArray(value, config) {
        if(!this.isArray(value)) {
          throw createTypeError(value, 'Array');
        }
        let type = getValue(config, 'type');
        if(type) {
          let checker = getCheckerForType(type, this);
          value.forEach((item) => {
            checker.apply(this, [item]);
          });
        }
        return true;
      },
      isBoolean(value) {
        return _.isBoolean(value);
      },
      assertBoolean(value) {
        if(!this.isBoolean(value)) {
          throw createTypeError(value, 'boolean');
        }
        return true;
      },
      isDate(value) {
        return _.isDate(value);
      },
      assertDate(value) {
        if(!this.isDate(value)) {
          throw createTypeError(value, 'Date');
        }
        return true;
      },
      isError(value) {
        return _.isError(value);
      },
      assertError(value) {
        if(!this.isError(value)) {
          throw createTypeError(value, 'Error');
        }
        return true;
      },
      isRegExp(value) {
        return _.isRegExp(value);
      },
      assertRegExp(value) {
        if(!this.isRegExp(value)) {
          throw createTypeError(value, 'RegExp');
        }
        return true;
      },
      isUUID(value) {
        if(value !== undefined && value !== null) {
          var regex = new RegExp(
            "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"
          );
          return value.match(regex);
        }
        return false;
      },
      assertUUID(value) {
        if(!this.isUUID(value)) {
          throw createTypeError(value, 'UUID');
        }
        return true;
      },
      isEmail(value) {
        var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!filter.test(value))
        {
          return false;
        }
        return true;
      },
      assertEmail(value) {
        if(!this.isEmail(value)) {
          throw createTypeError(value, 'Email');
        }
        return true;
      }
    }
  }
}

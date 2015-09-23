"use strict";
let _ = require("underscore");

function createErrorMessage(value, expectedType) {
  let actual = typeof value === 'object' ? value.constructor.name : typeof value;
  let message = expectedType + " expected, but got " + actual;
  return message;
}

function createTypeError(value, expectedType) {
  return new TypeError(createErrorMessage(value, expectedType));
}

module.exports = {

  /**
   * @param {any} value - The value to be tested.
   * @param {Object} prototype - The prototype to be tested against.
   */
  isInstanceOf: function(value, prototype) {
      if (value && _.isFunction(prototype) && value instanceof prototype) {
        return true;
      }
      return false;
  },
  verifyInstanceOf: function(value, prototype) {
    if(!this.isInstanceOf(value, prototype)) {
      throw createTypeError(value, prototype.name);
    }
    return true;
  },
  isNumber: function(value) {
    let isNumber = _.isNumber(value);
    if(isNumber) {

    }
    return isNumber;
  },
  verifyNumber: function(value, min, max) {
    if(!this.isNumber(value)) {
      throw createTypeError(value, 'number');
    }
    if(typeof min === 'number' && value < min) {
      throw new RangeError();
    }
    if(typeof max === 'number' && value > max) {
      throw new RangeError();
    }
    return true;
  },
  isString: function(value) {
    return _.isString(value);
  },
  verifyString: function(value) {
    if(!this.isString(value)) {
      throw createTypeError(value, 'string');
    }
    return true;
  },
  isUri: function(value) {
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
  },
  verifyUri: function(value) {
    if(!this.isUri(value)) {
      throw createTypeError(value, 'uri');
    }
    return true;
  },
  isArray: function(value) {
    return _.isArray(value);
  },
  verifyArray: function(value) {
    if(!this.isArray(value)) {
      throw createTypeError(value, 'Array');
    }
    return true;
  },
  isBoolean: function(value) {
    return _.isBoolean(value);
  },
  verifyBoolean: function(value) {
    if(!this.isBoolean(value)) {
      throw createTypeError(value, 'boolean');
    }
    return true;
  },
  isDate: function(value) {
    return _.isDate(value);
  },
  verifyDate: function(value) {
    if(!this.isDate(value)) {
      throw createTypeError(value, 'Date');
    }
    return true;
  }
}

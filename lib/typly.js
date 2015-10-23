"use strict";

let _ = require("underscore");

module.exports = {
    /* null & undefined */
    isNull: function (value) {
        return _.isNull(value);
    },
    isUndefined: function (value) {
        return _.isUndefined(value);
    },
    assertNull: function (value) {
        if (!this.isNull(value))
        {
            throw createTypeError(value, 'null');
        }
        return true;
    },
    assertNotNull: function (value) {
        if (this.isNull(value))
        {
            throw createTypeError(value, 'not null');
        }
        return true;
    },
    assertUndefined: function (value) {
        if (!this.isUndefined(value))
        {
            throw createTypeError(value, 'undefined');
        }
        return true;
    },

    /* function */
    isFunction: function (value) {
        return _.isFunction(value);
    },
    assertFunction: function (value) {
        if (!this.isFunction(value))
        {
            throw createTypeError(value, 'function');
        }
        return true;
    },

    /* objects & instances */
    isObject: function (value) {
        return _.isObject(value);
    },
    assertObject: function (value) {
        if (!this.isObject(value))
        {
            throw createTypeError(value, 'object');
        }
        return true;
    },
    isInstanceOf: function (value, prototype) {
        return (value && _.isFunction(prototype) && value instanceof prototype);
    },
    assertInstanceOf: function (value, prototype) {
        if (!this.isInstanceOf(value, prototype))
        {
            throw createTypeError(value, prototype.name);
        }
        return true;
    },

    /* numbers */
    isNumber: function (value) {
        return _.isNumber(value);
    },
    assertNumber: function (value, config) {
        if (!this.isNumber(value))
        {
            throw createTypeError(value, 'number');
        }
        let min = getValue(config, 'min', Number.MIN_VALUE);
        let max = getValue(config, 'max', Number.MAX_VALUE);
        this.assertRange(value, min, max);
        return true;
    },
    isInRange: function (value, min, max) {
        let isInRange = true;
        if (typeof min === 'number' && value < min)
        {
            isInRange = false;
        }
        if (typeof max === 'number' && value > max)
        {
            isInRange = false;
        }
        return isInRange;
    },
    assertRange: function (value, min, max) {
        if (!this.isInRange(value, min, max))
        {
            throw new RangeError();
        }
    },
    isString: function (value) {
        return _.isString(value);
    },
    assertString: function (value) {
        if (!this.isString(value))
        {
            throw createTypeError(value, 'string');
        }
        return true;
    },
    isUri: function (value) {
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
            return regex.test(value);
        }
        return false;
    },
    assertUri: function (value) {
        if (!this.isUri(value))
        {
            throw createTypeError(value, 'uri');
        }
        return true;
    },
    isArray: function (value) {
        return _.isArray(value);
    },
    assertArray: function (value, fn) {
        if (!this.isArray(value))
        {
            throw createTypeError(value, 'Array');
        }
        if(this.isFunction(fn))
        {
            try {
                if(!_.every(value, fn)) {
                    throw new TypeError('Invalid type used in array');
                }
            } catch(error) {
                throw new TypeError('Invalid type used in array');
            }
        }
        return true;
    },
    isBoolean: function (value) {
        return _.isBoolean(value);
    },
    assertBoolean: function (value) {
        if (!this.isBoolean(value))
        {
            throw createTypeError(value, 'boolean');
        }
        return true;
    },
    isDate: function (value) {
        return _.isDate(value);
    },
    assertDate: function (value) {
        if (!this.isDate(value))
        {
            throw createTypeError(value, 'Date');
        }
        return true;
    },
    isDateString: function (value) {
        return (new Date(value) !== "Invalid Date" && !isNaN(new Date(value)));
    },
    assertDateString: function (value) {
        if (!this.isDateString(value))
        {
            throw createTypeError(value, 'String representation of Date');
        }
        return true;
    },
    isError: function (value) {
        return _.isError(value);
    },
    assertError: function (value) {
        if (!this.isError(value))
        {
            throw createTypeError(value, 'Error');
        }
        return true;
    },
    isRegExp: function (value) {
        return _.isRegExp(value);
    },
    assertRegExp: function (value) {
        if (!this.isRegExp(value))
        {
            throw createTypeError(value, 'RegExp');
        }
        return true;
    },
    isUUID: function (value) {
        if (value !== undefined && value !== null)
        {
            var regex = new RegExp("^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$");
            return regex.test(value);
        }
        return false;
    },
    assertUUID: function (value) {
        if (!this.isUUID(value))
        {
            throw createTypeError(value, 'UUID');
        }
        return true;
    },
    isEmail: function (value) {
        var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!filter.test(value))
        {
            return false;
        }
        return true;
    },
    assertEmail: function (value) {
        if (!this.isEmail(value))
        {
            throw createTypeError(value, 'Email');
        }
        return true;
    }
};

function createTypeError(value, expectedType)
{
    let util = require("util");
    let msg = "[tiply] Expected type %s, but got type %s";
    let actual = (value !== null && typeof value === 'object') ? value.constructor.name : typeof value;
    actual = (value === null) ? null : actual;
    return new TypeError(util.format(msg, expectedType, actual));
}

function getValue(config, property, defaultValue)
{
    config = config || {};
    let result = config[property];
    return (result !== undefined) ? result : defaultValue;
}

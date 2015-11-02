"use strict";

let _ = require("underscore");
let URI = require("uri-js");

module.exports = {

    /* null & undefined */
    isNull: function (value)
    {
        return _.isNull(value);
    },
    isUndefined: function (value)
    {
        return _.isUndefined(value);
    },
    assertNull: function (value)
    {
        if (!this.isNull(value))
        {
            throw createTypeError(value, 'null');
        }
        return true;
    },
    assertNotNull: function (value)
    {
        if (this.isNull(value))
        {
            throw createTypeError(value, 'not null');
        }
        return true;
    },
    assertUndefined: function (value)
    {
        if (!this.isUndefined(value))
        {
            throw createTypeError(value, 'undefined');
        }
        return true;
    },

    /* function */
    isFunction: function (value)
    {
        return _.isFunction(value);
    },
    assertFunction: function (value)
    {
        if (!this.isFunction(value))
        {
            throw createTypeError(value, 'function');
        }
        return true;
    },

    /* errors */
    isError: function (value)
    {
        return _.isError(value);
    },
    assertError: function (value)
    {
        if (!this.isError(value))
        {
            throw createTypeError(value, 'Error');
        }
        return true;
    },

    /* objects & instances */
    isObject: function (value)
    {
        return _.isObject(value);
    },
    assertObject: function (value)
    {
        if (!this.isObject(value))
        {
            throw createTypeError(value, 'object');
        }
        return true;
    },
    isEmpty: function (value)
    {
        if(this.isUndefined(value) || this.isNull(value))
        {
            return true;
        }
        return _.isEmpty(value);
    },
    assertEmpty: function (value)
    {
        if (!this.isEmpty(value))
        {
            throw new Error(
                'Tested value is not undefined, null, or any type of empty object/iterable');
        }
        return true;
    },
    isInstanceOf: function (value, prototype)
    {
        return (value && _.isFunction(prototype) && value instanceof prototype);
    },
    assertInstanceOf: function (value, prototype)
    {
        if (!this.isInstanceOf(value, prototype))
        {
            throw createTypeError(value, prototype.name);
        }
        return true;
    },

    /* strings */
    isString: function (value)
    {
        return _.isString(value);
    },
    assertString: function (value)
    {
        if (!this.isString(value))
        {
            throw createTypeError(value, 'string');
        }
        return true;
    },

    /* arrays */
    isArray: function (value, fn)
    {
        if(arguments.length === 1)
        {
            return _.isArray(value);
        }
        return _.isArray(value) && this.isFunction(fn) && _.every(value, fn);
    },
    assertArray: function (value, fn)
    {
        if (!this.isArray(value, fn))
        {
            if(arguments.length === 1)
            {
                throw createTypeError(value, 'Array');
            }
            else
            {
                throw new TypeError('[typly] Invalid comparison function or type used in array');
            }
        }
        return true;
    },

    /* numbers */
    isNumber: function (value)
    {
        return _.isNumber(value);
    },
    assertNumber: function (value)
    {
        if (!this.isNumber(value))
        {
            throw createTypeError(value, 'number');
        }
        return true;
    },
    isInteger: function (value)
    {
        return _.isNumber(value) && value % 1 === 0;
    },
    assertInteger: function (value)
    {
        if (!this.isInteger(value))
        {
            throw createTypeError(value, 'integer');
        }
        return true;
    },
    isInRange: function (value, min, max)
    {
        return (!(typeof min === 'number' && value < min) &&
                !(typeof max === 'number' && value > max))
    },
    assertRange: function (value, min, max)
    {
        if (!this.isInRange(value, min, max))
        {
            throw new RangeError();
        }
    },

    /* booleans */
    isBoolean: function (value)
    {
        return _.isBoolean(value);
    },
    assertBoolean: function (value)
    {
        if (!this.isBoolean(value))
        {
            throw createTypeError(value, 'boolean');
        }
        return true;
    },

    /* regular expressions */
    isRegExp: function (value)
    {
        return _.isRegExp(value);
    },
    assertRegExp: function (value)
    {
        if (!this.isRegExp(value))
        {
            throw createTypeError(value, 'RegExp');
        }
        return true;
    },

    /* dates */
    isDate: function (value)
    {
        return _.isDate(value);
    },
    assertDate: function (value)
    {
        if (!this.isDate(value))
        {
            throw createTypeError(value, 'Date');
        }
        return true;
    },
    isDateString: function (value)
    {
        return (new Date(value) !== 'Invalid Date' && !isNaN(new Date(value)));
    },
    assertDateString: function (value)
    {
        if (!this.isDateString(value))
        {
            throw createTypeError(value, 'Invalid string representation of Date object');
        }
        return true;
    },

    /* URIs */
    isUri: function (value)
    {
        const SCHEMES = /https?|ftps?|urn|mailto|news|telnet|file/;
        if(!this.isString(value))
        {
            return false;
        }
        let uri = URI.parse(value);
        if(uri.scheme)
        {
            return SCHEMES.test(uri.scheme) && !uri.error;
        }
        return !uri.error;
    },
    assertUri: function (value)
    {
        if (!this.isUri(value))
        {
            throw createTypeError(value, 'URI');
        }
        return true;
    },

    /* UUIDs */
    isUUID: function (value)
    {
        const filter = new RegExp("^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$");
        return this.isString(value) && filter.test(value);
    },
    assertUUID: function (value)
    {
        if (!this.isUUID(value))
        {
            throw createTypeError(value, 'UUID');
        }
        return true;
    },

    /* emails */
    isEmail: function (value)
    {
        const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return this.isString(value) && filter.test(value);
    },
    assertEmail: function (value)
    {
        if (!this.isEmail(value))
        {
            throw createTypeError(value, 'email');
        }
        return true;
    }
};

function createTypeError(value, expectedType)
{
    let util = require("util");
    let msg = "[typly] Expected type %s, but got type %s";
    let actual = (value !== null && typeof value === 'object') ? value.constructor.name : typeof value;
    actual = (value === null) ? null : actual;
    return new TypeError(util.format(msg, expectedType, actual));
}

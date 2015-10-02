"use strict";

let typly = require("./lib/typly");

module.exports = Object.keys(typly).reduce((api, key) =>
{
    api[key] = typly[key];
    return api;
}, {});

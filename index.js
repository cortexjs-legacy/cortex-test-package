'use strict';

var aa = require('./lib/aa');
var bb = require('./lib/bb');

exports.index = function () {
    console.log('index.index', aa.aa(), bb.bb());
};
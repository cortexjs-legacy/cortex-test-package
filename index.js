'use strict';

var aa = require('./lib/aa');
var bb = require('./lib/bb');
var c = require('c');

exports.index = function () {
    require.async('./entries/b', callback);
    console.log('index.index', aa.aa(), bb.bb());
};
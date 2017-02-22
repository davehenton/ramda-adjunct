'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const Symbol = require('./shared/Symbol');
const args = require('./shared/arguments');

describe('isNotString', function() {
  it('tests a value for complement of `String`', function() {
    eq(RA.isNotString('abc'), false);
    eq(RA.isNotString(Object('abc')), false);

    eq(RA.isNotString(args), true);
    eq(RA.isNotString([1, 2, 3]), true);
    eq(RA.isNotString(true), true);
    eq(RA.isNotString(new Date()), true);
    eq(RA.isNotString(new Error()), true);
    eq(RA.isNotString(Array.prototype.slice), true);
    eq(RA.isNotString({ 0: 1, length: 1 }), true);
    eq(RA.isNotString(1), true);
    eq(RA.isNotString(/x/), true);
    eq(RA.isNotString(Symbol), true);
  });
});

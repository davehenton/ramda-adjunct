import { assert } from 'chai';

import * as RA from '../src/index';
import eq from './shared/eq';


describe('compact', function () {
  context('when list contains falsy values', function () {
    specify('should filter them', function () {
      eq(RA.compact([0, 1, false, 2, '', 3, null, undefined, NaN]), [1, 2, 3]);
    });
  });

  context('when list contains truthy values only', function () {
    specify('should not filter anything', function () {
      eq(RA.compact([1, 2, 3]), [1, 2, 3]);
    });

    specify('should return new list with exactly same items', function () {
      const list = [1, 2, 3];

      assert.notStrictEqual(RA.compact(list), list);
    });
  });

  context('when empty list', function () {
    specify('should return new empty list', function () {
      const list = [];

      assert.notStrictEqual(RA.compact(list), list);
    });
  });
});

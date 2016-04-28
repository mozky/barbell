/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { Records } from './records.js';

describe('Records collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Records, 'object');
  });
});

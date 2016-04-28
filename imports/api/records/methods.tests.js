/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Records } from './records.js';
import { insertRecord, updateRecord, removeRecord } from './methods.js';

describe('Records methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a record into the Records collection', function () {
    insertRecord.call({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    const getRecord = Records.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    assert.equal(getRecord.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('updates a record in the Records collection', function () {
    const { _id } = Factory.create('record');

    updateRecord.call({
      _id,
      update: {
        title: 'You can\'t arrest me, I\'m the Cake Boss!',
      },
    });

    const getRecord = Records.findOne(_id);
    assert.equal(getRecord.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('removes a record from the Records collection', function () {
    const { _id } = Factory.create('record');
    removeRecord.call({ _id });
    const getRecord = Records.findOne(_id);
    assert.equal(getRecord, undefined);
  });
});

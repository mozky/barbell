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
    insertRecord.call({
      username: 'Tester',
      exercise: 'clean',
      weight: 100,
      sets: 4,
      reps: 4,
      date: new Date(),
    });

    const getRecord = Records.findOne({ username: 'Tester' });
    assert.equal(getRecord.exercise, 'clean');
  });

  it('updates a record in the Records collection', function () {
    const { _id } = Factory.create('record');

    updateRecord.call({
      _id,
      update: {
        exercise: 'testExercise',
      },
    });

    const getRecord = Records.findOne(_id);
    assert.equal(getRecord.exercise, 'testExercise');
  });

  it('removes a record from the Records collection', function () {
    const { _id } = Factory.create('record');

    removeRecord.call({ _id });

    const getRecord = Records.findOne(_id);
    assert.equal(getRecord, undefined);
  });
});

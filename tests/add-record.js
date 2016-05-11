/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

describe('Add Record', function () {
  beforeEach(function () {
    server.execute(function () {
      // const { Meteor } = require('meteor/meteor');
      const { Records } = require('../imports/api/records/records.js');
      const record = Records.findOne({ });
      if (record) {
        Records.remove(record._id);
      }
    });
  });

  it('should create a new record and be able to find it @watch', function () {
    browser.url('http://localhost:3000/records')
           .setValue('[name="formExercise"]', 'Clean')
           .setValue('[name="formWeight"]', '234')
           .setValue('[name="formSets"]', '3')
           .setValue('[name="formReps"]', '6')
           .setValue('[name="formDate"]', '2016-05-05')
           .submitForm('form');

    // browser.waitForExist('.jumbotron');
    // expect(browser.getUrl()).to.equal('http://localhost:3000/');
  });
});

Records = new Mongo.Collection("records");
History = new Mongo.Collection("history");

Meteor.methods({
  addTask: function (exercise, weight, prDate) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    record = Records.findOne({"username" : Meteor.user().username});

    if (weight <= record[exercise].weight) {
      console.log("No PR, just adding to history.");
      History.upsert(
        {"username" : Meteor.user().username, "exercise" : exercise},
        {$push : {history: {weight : weight, date : new Date(prDate)}}}
      );
    } else {
      console.log("New PR, modifying and adding to history.");

      var query = {};
      query[exercise] = {"weight" : weight, "bestDate" : new Date(prDate)};

      Records.update(
        {"username" : Meteor.user().username},
        {
          $set: query
        }
      );

      History.upsert(
        {"username" : Meteor.user().username, "exercise" : exercise},
        {$push : {history: {weight : weight, date : new Date(prDate)}}}
      );
    }

  },
  deleteTask: function (prId) {
    Records.remove(prId);
  },
  setChecked: function (prId, setChecked) {
    Records.update(prId, { $set: { checked: setChecked} });
  }
});

if (Meteor.isClient) {
  // This code only runs on the client

  Template.test.helpers({
    records: function () {
      //TODO return only record of current user.
      return Records.find({});
    }
  });

  Template.test.events({
      "submit .new-pr": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get values from form
        var exercise = event.target.exercise.value;
        var weight = event.target.weight.value;
        weight = Number(weight);

        //Formats time to moment.js object, for easy time operations.
        var prDate = moment(event.target.date.value, "YYYY-MM-DD");
        prDate = prDate.toISOString();

        // Insert a task into the collection
        Meteor.call("addTask", exercise, weight, prDate);

        // Clear form
        // event.target.exercise.value = "Exercise...";
        // event.target.weight.value = "0";
        // event.target.date.value = "yyyy-MM-dd";
      },

      "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Meteor.call("setChecked", this._id, ! this.checked);
      },

      "click .delete": function () {
        Meteor.call("deleteTask", this._id);
      }
    });
}

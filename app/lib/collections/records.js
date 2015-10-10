Records = new Mongo.Collection("records");
History = new Mongo.Collection("history");

Meteor.methods({
  addRecord: function (exercise, weight, prDate) {
    // Make sure the user is logged in before inserting a record
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    record = Records.findOne({
      "_id" : Meteor.Meteor.userId(),
      "username" : Meteor.user().username
    });

    function addToHistory (exercise, weight, prDate) {
      History.upsert(
        {"_id": Meteor.userId(), "username" : Meteor.user().username, "exercise" : exercise},
        {$push : {history: {weight : weight, date : new Date(prDate)}}}
      );
    }

    function newPR (exercise, weight, prDate) {
      var query = {};
      query[exercise] = {"weight" : weight, "bestDate" : new Date(prDate)};

      Records.upsert(
        {"_id" : Meteor.userId(), "username" : Meteor.user().username},
        {
          $set: query
        }
      );
    }

    if(typeof record == 'undefined' || typeof record[exercise] == 'undefined'){
      console.log("First time adding a record for the exercise.");
      newPR (exercise, weight, prDate);
      addToHistory(exercise, weight, prDate);

    } else {
      if (weight <= record[exercise].weight) {
        console.log("No PR, just adding to history.");
        addToHistory(exercise, weight, prDate);
      } else {
        console.log("New PR, modifying and adding to history.");
        newPR (exercise, weight, prDate);
        addToHistory (exercise, weight, prDate);
      }
    }
  },

  deleteTask: function (prId) {
    Records.remove(prId);
  },

  setChecked: function (prId, setChecked) {
    Records.update(prId, { $set: { checked: setChecked} });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish records that belong to the current user
  Meteor.publish("records", function () {
    return Records.find({
      "_id": this.userId
    });
  });
}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("records");

  Template.home.helpers({
    records: function () {
      //TODO return only record of current user.
      return Records.find({});
    }
  });

  Template.home.events({
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

        // Insert a record into the collection
        Meteor.call("addRecord", exercise, weight, prDate);

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

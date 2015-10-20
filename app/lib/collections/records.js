Records = new Mongo.Collection("records");
History = new Mongo.Collection("history");

if (Meteor.isServer) {
  // Only publish records that belong to the current user
  Meteor.publish("records", function () {
    return Records.find({
      "userId": this.userId
    });
  });

  //Start of functions used.
  function addToHistory (exercise, weight, prDate) {
    History.upsert(
      {"userId": Meteor.userId(), "username" : Meteor.user().username, "exercise" : exercise},
      {
        $push : {history: {weight : weight, date : new Date(prDate)}}
      }
    );
  }

  function newPR (exercise, weight, prDate) {
    var query = {};
    query[exercise] = {"weight" : weight, "bestDate" : new Date(prDate)};

    Records.upsert(
      {"userId" : Meteor.userId(), "username" : Meteor.user().username},
      {
        $set: query
      }
    );
  }

  Meteor.methods({
    addRecord: function (exercise, weight, prDate) {
      // Make sure the user is logged in before inserting a record
      if (! Meteor.userId()) {
        throw new Meteor.Error("not-authorized");
      }

      record = Records.findOne({
        "userId" : Meteor.userId(),
        "username" : Meteor.user().username
      });

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
    }
  });

}

if (Meteor.isClient) {
  // Subscribe to records collection
  Meteor.subscribe("records");

  Template.home.helpers({
    records: function () {
      return Records.find({});
    }
  });

  Template.home.events({
      "submit .new-pr": function (event, template) {
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
        template.find("form").reset();
      }
    });
}

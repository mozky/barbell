Records = new Mongo.Collection("records");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.test.helpers({
    records: function () {
      return Records.find({});
    }
  });

  Template.test.events({
      "submit .new-pr": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var exercise = event.target.exercise.value;
        var weight = event.target.weight.value;

        // Insert a task into the collection
        Records.insert({
          username: Meteor.user().username,
          exercise: exercise,
          best: weight,
          bestDate: new Date() // current time
        });

        // Clear form
        event.target.text.value = "";
      }
    });

}

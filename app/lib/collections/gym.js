Gyms = new Mongo.Collection("gyms");
if (Meteor.isServer) {
  Meteor.publish("gyms", function(name) {
    // Try to find the gym by name
    console.log("Buscando gym: " + name);
    var gym = Gyms.findOne({
      name: name
    });
    // if we can't find it, mark the subscription as ready and quit
    if (!gym) {
      console.log("No encontramos ese gym");
      this.ready();
      return;
    } else {
      return Gyms.find({
        name: name
      });
    }

  });
}

if (Meteor.isClient) {

  Template.gymPage.helpers({
    gyms: function() {
      return Gyms.find({});
    }
  });

  Template._loginButtonsLoggedInDropdown.events({
    'click #gym': function(event) {
      Router.go('/gym/' + Meteor.user().profile.gym);
    }
  });
}

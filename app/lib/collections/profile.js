//TODO
//Fix filtering of data, cuando buscamos otro user, obtenemos todo el documento,
//solo queremos obtener username y profile.


if (Meteor.isServer) {
  Meteor.publish("profiles", function(username){
      // Try to find the user by username
      console.log("Buscando pagina de: " + username);
      var user = Meteor.users.findOne({
          username:username
      });
      // if we can't find it, mark the subscription as ready and quit
      if(!user){
          console.log("No encontramos user");
          this.ready();
          return;
      }
      // if the user we want to display the profile is the currently logged in user...
      if (this.userId == user._id) {
          console.log("Se ve a si mismo");
          return Meteor.users.find({username : this.userId}, { fields: {services:false}});
      }
      else {
          console.log("Viendo otro user, " + user.username);
          //Filtra datos sensibles
          return Meteor.users.find({username : user.username}, { fields: {username:true, profile:true}});
      }
  });

  Meteor.methods({
    //Enviar objeto en vez de cada valor por separado
    editProfile: function (username, name, sex, country, gym, age, weight, height) {
      // Make sure the user is logged in before inserting a record
      if (! Meteor.userId()) {
        throw new Meteor.Error("not-authorized");
      }

      Meteor.users.update(
        {"_id": Meteor.userId()},
        {
          $set : {
            "username" : username,
            "profile.name" : name,
            "profile.age" : age,
            "profile.country" : country,
            "profile.sex" : sex,
            "profile.weight" : weight,
            "profile.height" : height,
            "profile.gym" : gym
          }
        }
      );

      console.log("Se edito el profile correctamente.");

    }
  });

}

if (Meteor.isClient) {
  Template._loginButtonsLoggedInDropdown.events({
    'click #profile': function(event) {
        Router.go('/user/'+ Meteor.user().username);
    }
  });

  Template.profile.events({
      "submit #editProfileForm": function (event, template) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get values from form
        var username = event.target.username.value;
        var sex = event.target.sex.value;
        var name = event.target.name.value;
        var country = event.target.country.value;
        var gym = event.target.gym.value;
        var age = event.target.age.value;
        var weight = event.target.weight.value;
        var height = event.target.height.value;
        age = Number(age);
        weight = Number(weight);
        height = Number(height);

        // Edit user information
        Meteor.call("editProfile", username, name, sex, country, gym, age, weight, height);

        // Clear form
        template.find("form").reset();
        
      }
    });

}

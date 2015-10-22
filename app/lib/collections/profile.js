if (Meteor.isServer) {
  Meteor.publish("profiles",function(username){
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
      if(this.userId==user._id){
          // then we return the corresponding full document via a cursor
          console.log("Se ve a si mismo")
          return Meteor.users.find({username : this.userId});
      }
      else{
          // if we are viewing only the public part, strip the "profile"
          // property from the fetched document, you might want to
          // set only a nested property of the profile as private
          // instead of the whole property
          // return Meteor.users.find(user._id,{
          //     fields:{
          //         "profile":0
          //     }
          // });
          console.log("Viendo otro user.")
          //TODO Filtrar datos sensibles
          return Meteor.users.find({username : user.username});
      }
  });
}

if (Meteor.isClient) {
  Template.profile.helpers({
    profiles: function () {
      return Meteor.users.find({});
    }
  });
}

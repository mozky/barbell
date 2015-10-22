//TODO
//Fix filtering of data, cuando buscamos otro user, obtenemos todo el documento,
//solo queremos obtener username y profile.


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
}

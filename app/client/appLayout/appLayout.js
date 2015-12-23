if (Meteor.isClient) {
  Template.appLayout.events({
    'click .myProfile': function(event) {
      Router.go('/user/' + Meteor.user().username);
    }
  });
}

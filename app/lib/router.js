Router.configure({
  layoutTemplate: 'appLayout',
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/map.html', function () {
  this.render('map');
});

Router.route('/user/:username', {
  name: 'userPage',
  waitOn: function() {
    return [
      Meteor.subscribe('profiles', this.params.username),
      Meteor.subscribe('records', this.params.username)
    ];
  },
  data: function(){
    var username = this.params.username;
    return Meteor.users.findOne({username:username}, { fields: {services:false}});
  }
});

Router.route('/gym/:name', {
  name: 'gymPage',
  waitOn: function() {
    return Meteor.subscribe('gyms', this.params.name);
  }
});

//Add dataNotFound to gyms and all other necesary pages.
Router.onBeforeAction('dataNotFound', {only: 'userPage'});

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
    return Meteor.subscribe('profiles', this.params.username);
  },
    data:function(){
      //Meteor.subscribe("profiles",this.params.username);
      var username = this.params.username;
      return Meteor.users.findOne({
          username:username
      }, { fields: {services:false}});
    }
});

Router.onBeforeAction('dataNotFound', {only: 'userPage'});

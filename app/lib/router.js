Router.route('/', function () {
  this.render('home');
  this.layout('appLayout');
});

Router.route('/map.html', function () {
  this.render('map');
  this.layout('appLayout');
});

Router.route('/user/:username', function() {
  this.render('userPage');
  this.layout('appLayout', {
    // waitOn: function() {
    // },
    data:function(){
      Meteor.subscribe("profiles",this.params.username);
        var username = this.params.username;
        return Meteor.users.findOne({
            username:username
        });
    }
  });
});

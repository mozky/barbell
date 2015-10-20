Router.route('/', function () {
  this.render('home');
  this.layout('appLayout');
});

Router.route('/map.html', function () {
  this.render('map');
  this.layout('appLayout');
});

Router.route('/test.html', function() {
  this.render('test');
  this.layout('appLayout');
});

Router.route('user/:username', function() {
  this.render('user', {
    waitOn:function(){
        return Meteor.subscribe("userProfile",this.params.username);
    },
    data:function(){
        var username = this.params.username;
        return Meteor.users.findOne({
            username:username
        });
    }
  });
  this.layout('appLayout');
});

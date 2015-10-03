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
})

var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/models');
var views = require('./views/bookmarks');

var AppRouter = Backbone.Router.extend({
  routes :{
    '':'index',
    'social': 'social',

  },
  initialize: function(){
    // this.bookmarkList = new
    // this.
    console.log('router init');
  },
  index: function(){
    console.log('index start');
    // this
  },
  social: function(){
    console.log('social start');
  }
});

var router = new AppRouter();

module.exports = router;

var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/blog');
var models = require('./models/blog');

var Router = Backbone.Router.extend({
  routes:{
    '':'index',
    'blog:/id/':'viewPost'
  },
  initialize: function(){
    console.log(models.BlogCollection);
    this.blogListings = new models.BlogCollection();
  },
  index: function(){
    var blogList = new views.BlogList({collection: this.blogListings});

    this.blogListings.fetch();
    console.log(this.blogListings);
  },
  viewPost: function(id){

  }

});

var router = new Router();

module.exports = router;

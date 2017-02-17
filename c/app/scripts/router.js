var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/blog');
var models = require('./models/blog');

var Router = Backbone.Router.extend({
  routes:{
    '':'index',
    'home':'index',
    'blog/:id':'viewPost'
  },
  initialize: function(){
    this.blogListings = new models.BlogCollection();
  },
  index: function(){
    this.blogListings.fetch();
    var blogList = new views.BlogList({collection: this.blogListings});
    $('.row').html(blogList.render().el);
  },
  viewPost: function(id){
    console.log('method called');
    var post = this.blogListings.findWhere({'_id':id});
    var postDetails = new views.BlogPage({model: post});
    $('.row').html(postDetails.render().el);
  }

});

var router = new Router();

module.exports = router;

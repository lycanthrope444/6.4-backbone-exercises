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
    this.blogListings = new models.BlogCollection();
  },
  index: function(){
    this.blogListings.fetch();
    var blogList = new views.BlogList({collection: this.blogListings});

    $('.row').append(blogList.render().el);

    var listItems = new views.BlogListItem({model: this.blogListings});
    // console.log(listItems);
    $('.row').append(listItems.render().el);
  },
  viewPost: function(id){

  }

});

var router = new Router();

module.exports = router;

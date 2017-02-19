var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/views.js');
var models = require('./models/models.js');

var AppRouter = Backbone.Router.extend({
  routes:{
    '':'index',
    'post/:id/': 'showPost'
  },
  initialize: function(){
    // console.log('i live');
    this.blogCollection = new models.BlogPostCollection();
  },
  index: function(){

    var blogOptions = new views.BlogOptions();
    $('.blog-options').append(blogOptions.render().el);
  },
  showPost: function(){

  }

});

var appRouter = new AppRouter();
module.exports = appRouter;

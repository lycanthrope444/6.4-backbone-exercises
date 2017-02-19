var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/views.js');
var models = require('./models/models.js');

var AppRouter = Backbone.Router.extend({
  routes:{
    '':'index',
    'create':'createPost',
    'post/:id/': 'showPost',
    'edit/:id/': 'editPost'
  },
  initialize: function(){
    // console.log('i live');
    this.blogCollection = new models.BlogPostCollection();
  },
  index: function(){

    var blogOptions = new views.BlogOptions();
    $('.blog-options').append(blogOptions.render().el);

    var postList = new views.BlogPostList({collection: this.blogCollection});
    $('.blog-section').append(postList.render().el);

    this.blogCollection.fetch();
  },
  showPost: function(id){
    // console.log('linking to ', id);
    var postView = new views.BlogReadView();
  },
  editPost: function(id){
    var editView = new views.BlogEditView();
  }


});

var appRouter = new AppRouter();
module.exports = appRouter;

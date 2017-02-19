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
    var post = this.blogCollection.findWhere({'_id':id});
    var postView = new views.BlogReadView({model: post});
    $('.blog-section').html(postView.render().el);
  },
  editPost: function(id){
    console.log('edit post fired', id);
    var post = this.blogCollection.findWhere({'_id':id});
    var editView = new views.BlogEditView({model: post});
    $('.blog-section').html(editView.render().el);

    // this.blogCollection.fetch();
  },
  createPost: function(id){
    console.log('create post fired');
    var postForm = new views.BlogPostForm();
    $('.blog-section').html();
  }

});

var appRouter = new AppRouter();
module.exports = appRouter;

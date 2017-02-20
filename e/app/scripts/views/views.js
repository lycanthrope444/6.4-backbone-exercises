var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../models/models');
var blogOptionTemp = require('../../templates/blogoptions.hbs');
var blogEditTemplate = require('../../templates/blogedittemp.hbs');
var blogListItem = require('../../templates/bloglistitem.hbs');
var blogReadTemplate = require('../../templates/blogposttemplate.hbs');
var blogFormTemp = require('../../templates/blogformtemplate.hbs');

var BlogPostForm = Backbone.View.extend({
  tagName: 'form',
  events: {
    'submit': 'createPost'
  },
  template: blogFormTemp,
  initalize: function(){
    this.listenTo(this.collection, 'add', this.addPost);
  },
  render: function(){
    this.$el.html(blogFormTemp);
    return this;
  },
  createPost: function(event){
    event.preventDefault();

    var $title = $('#title');
    var $body = $('#body');

    this.collection.create({
      'title': $title.val(),
      'body': $body.val()
    });

    $title.val('');
    $body.val('');
  }
});

var BlogOptions = Backbone.View.extend({
  template: blogOptionTemp,
  events:{

  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var BlogPostList = Backbone.View.extend({
  tagName: 'ul',
  className: 'blogpost-list',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addPost);
  },
  render: function(){
    return this;
  },
  addPost: function(post){
    var newPost = new BlogPostListItem({model: post});
    this.$el.append(newPost.render().el);
  }
});

var BlogPostListItem = Backbone.View.extend({
  tagName: 'li',
  template: blogListItem,
  events: {
    'click .erase': 'nukeSelf',
  },
  initalize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function(){
    var listItem = this.template(this.model.toJSON());
    this.$el.html(listItem);
    return this;
  },
  nukeSelf: function(event){
    console.log(this);
    event.preventDefault();
    this.model.destroy();
  }
});

var BlogReadView = Backbone.View.extend({
  template: blogReadTemplate,
  render: function(){
    var viewPost = this.template(this.model.toJSON());
    this.$el.html(viewPost);
    return this;
  }
});

var BlogEditView = Backbone.View.extend({
  tagName: 'form',
  template: blogEditTemplate,
  events:{
    'submit':'editThisPost'
  },
  render: function(){
    var editPost = this.template(this.model.toJSON());
    this.$el.html(editPost);
    return this;
  },
  editThisPost: function(event){
    event.preventDefault();
    console.log(this.model.toJSON());
    var $title = $('#title');
    var $body = $('#body');

    this.model.set('title', $title.val());
    this.model.set('body', $body.val());
    console.log(this.model.toJSON());
    this.model.save();
  }
});

module.exports = {
  'BlogPostForm': BlogPostForm,
  'BlogPostList': BlogPostList,
  'BlogOptions': BlogOptions,
  'BlogPostListItem': BlogPostListItem,
  'BlogReadView': BlogReadView,
  'BlogEditView': BlogEditView
};

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

  template: blogFormTemp,

});

var BlogOptions = Backbone.View.extend({
  template: blogOptionTemp,
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
  render: function(){
    var listItem = this.template(this.model.toJSON());
    this.$el.html(listItem);
    return this;
  }
});

var BlogReadView = Backbone.View.extend({
  template: blogReadTemplate,

});

var BlogEditView = Backbone.View.extend({
  template: blogEditTemplate
});

module.exports = {
  'BlogPostForm': BlogPostForm,
  'BlogPostList': BlogPostList,
  'BlogOptions': BlogOptions,
  'BlogPostListItem': BlogPostListItem,
  'BlogReadView': BlogReadView,
  'BlogEditView': BlogEditView
};

var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../models/models');
var blogOptionTemp = require('../../templates/blogoptions.hbs');
var blogEditTemplate = require('../../templates/blogedittemp.hbs');
var blogListItem = require('../../templates/bloglistitem.hbs');
var blogReadTemplate = require('../../templates/blogposttemplate.hbs');
var blogFormTemp = require('../../templates/blogformtemplate.hbs');

var BlogPostForm = Backbone.View.extend({
  template: blogFormTemp,

});

var BlogOptions = Backbone.View.extend({
  template: blogOptionTemp,

});

var BlogPostList = Backbone.View.extend({

});

var BlogPostListItem = Backbone.View.extend({
  template: blogListItem,

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

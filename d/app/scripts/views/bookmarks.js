var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../models/models');
var bookmarkFormTemplate = require('../../templates/bookmarkform.hbs');

var BookmarkFormView = Backbone.View.extend({
  tagName:'form',
  template: bookmarkFormTemplate,
  attributes:{
    method: 'post'
  },
  events: {
    'submit': 'addBookmark'
  },
  initialize: function(){
    console.log('form init');
  },
  render: function(){

    console.log('form rendered');
    return this;
  },
  addBookmark: function(){
    console.log('addBookmark');
  }
});

var BookmarkItemView = Backbone.View.extend({
  tagName: 'li',

});

var BookmarkListView = Backbone.View.extend({
  tagName:'ul',

});

var TagButton = Backbone.View.extend({
  tagName:'a',

});

module.exports = {
  'BookmarkFormView' : BookmarkFormView,
  'BookmarkItemView' : BookmarkItemView,
  'BookmarkListView' : BookmarkListView,
  'TagButton' : TagButton
};

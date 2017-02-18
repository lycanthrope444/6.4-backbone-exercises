var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../models/models');
var bookmarkFormTemplate = require('../../templates/bookmarkform.hbs');
var bookmarkListItem = require('../../templates/urllistitem.hbs');

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
    console.log(this);
    this.listenTo(this.collection, 'add', this.displayBookmark());
    // console.log('form init');
  },
  render: function(){
    // console.log('form rendered');
    this.$el.html(this.template());
    return this;
  },
  addBookmark: function(event){
    event.preventDefault();
    console.log('addBookmark');

    var $title = $('#title');
    var $url = $('#url');
    var $tag = $('.tag-list');

    this.collection.create({
      title: $title.val(),
      url: $url.val(),
      tag: $tag
    });
  },
  displayBookmark: function(bookmarkItem){
    console.log(bookmarkItem);
    var bookmark = new BookmarkItemView({model: bookmarkItem});
    this.$el.append(bookmark.render().el);
  }
});

var BookmarkItemView = Backbone.View.extend({
  tagName: 'li',
  template: bookmarkListItem,
  render: function(){
    console.log('creating list item');
    console.log(this);
    var context = this.template(this.model.toJSON());
    this.$el.html(context);
    return this;
  },

});

var BookmarkListView = Backbone.View.extend({
  tagName:'ul',
  className: 'bookmark-ul'
});

var TagButton = Backbone.View.extend({
  tagName: 'button',
  className: 'btn',
  events: {
    'click':'addTag'
  },
  render: function(){
    console.log('button rendered');
    return this;
  },
  addTag: function(){
    console.log('Tag Added');
  }
});


var TagFilterButton = Backbone.View.extend({
  tagName:'a',

});

module.exports = {
  'BookmarkFormView' : BookmarkFormView,
  'BookmarkItemView' : BookmarkItemView,
  'BookmarkListView' : BookmarkListView,
  'TagButton' : TagButton
};

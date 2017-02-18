var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var models = require('../models/models');
var bookmarkFormTemplate = require('../../templates/bookmarkform.hbs');
var bookmarkListItem = require('../../templates/urllistitem.hbs');
var tagBtnTemplate = require('../../templates/tagbutton.hbs');

var BookmarkFormView = Backbone.View.extend({
  tagName:'form',
  className: 'bookmark-form',
  template: bookmarkFormTemplate,
  attributes:{
    method: 'post'
  },
  events: {
    'submit': 'addBookmark'
  },
  initialize: function(){
    this.listenTo(this.collection, 'add', this.displayBookmark);

    // console.log('form init');
  },
  render: function(){
    // console.log('form rendered');
    this.$el.html(this.template());
    return this;
  },
  addBookmark: function(event){
    event.preventDefault();
    // console.log('addBookmark');

    var $title = $('#title');
    var $url = $('#url');
    // var $tag = $('.tag-list');

    this.collection.create({
      title: $title.val(),
      url: $url.val(),
      // tag: $tag
    });

    $title.val('');
    $url.val('');
  },
  displayBookmark: function(bookmarkItem){
    // console.log('here', bookmarkItem);
    var bookmark = new BookmarkItemView({model: bookmarkItem});
    $('.bookmark-ul').append(bookmark.render().el);
  }
});

var BookmarkItemView = Backbone.View.extend({
  tagName: 'li',
  template: bookmarkListItem,
  events:{
    'click .erase': 'nukeSelf'
  },
  initialize: function(){
    // console.log('i live');
    this.listenTo(this.model, 'destroy', this.remove);

  },
  render: function(){
    // console.log('creating list item');
    // console.log(this);
    var context = this.template(this.model.toJSON());
    this.$el.html(context);
    return this;
  },
  nukeSelf: function(event){
    event.preventDefault();
    this.model.destroy();
  }

});

var BookmarkListView = Backbone.View.extend({
  tagName:'ul',
  className: 'bookmark-ul'
});

var TagButtonGroup = Backbone.View.extend({
  className: 'tag-group',
  initialize: function(){
    // console.log('tag group lives');
    // console.log(this.collection);
    _.each(this.collection.models, this.makeBtn);
  },
  render: function(){
    // console.log('tag group lives');
    return this;
  },
  makeBtn: function(context){
    // console.log(context);
    var tagButton = new TagButton({model: context});
    $('.tag-list').append(tagButton.render().el);
  }
});

var TagButton = Backbone.View.extend({
  tagName: 'button',
  className: 'btn',
  template: tagBtnTemplate,
  events: {
    'click':'addTag'
  },
  render: function(){
    var buttonize = this.template(this.model.toJSON());
    console.log(buttonize);
    this.$el.append(buttonize);
    // this.$el.append(this.template(buttonize));
    return this;
  },
  addTag: function(event){
    event.preventDefault();
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
  'TagButton' : TagButton,
  'TagButtonGroup' : TagButtonGroup
};

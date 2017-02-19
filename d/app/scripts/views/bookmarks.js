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
    var $tags =[];
    _.each($('.active'), function(context){
      $tags.push($(context).html());
    });
    console.log($tags);
    this.collection.create({
      title: $title.val(),
      url: $url.val(),
      tag: $tags
    });

    $title.val('');
    $url.val('');
    $('.active').addClass('disabled');
    $('.added-tags').html('');
    $tags=[];
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
    // console.log(this.model.toJSON());
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
  className: 'bookmark-ul',
  events: {

  },
  initialize: function(){
    console.log(this);
  }
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
  className: 'btn tagBtn disabled',
  template: tagBtnTemplate,
  events: {
    'click':'addTag'
  },
  render: function(){
    var buttonize = this.template(this.model.toJSON());
    this.$el.append(buttonize);
    // this.$el.append(this.template(buttonize));
    return this;
  },
  addTag: function(event){
    event.preventDefault();
    var $tagControl = $('.added-tags');
    $tagControl.append(this.model.get('type')+' ');
    this.$el.removeClass('disabled');
    this.$el.addClass('active');
    this.$el.addClass(this.model.get('type'));
  }
});


var TagFilterButton = Backbone.View.extend({
  tagName:'a',

});

var BookmarkSocialView = Backbone.View.extend({
  tagName: 'li',
  template: bookmarkListItem,
  initialize: function(){
    this.listenTo(this.collection, 'add', this.displayBookmark);

    // console.log('form init');
  },
  render: function(){
    // console.log('form rendered');
    this.$el.html(this.template());
    return this;
  },
  displayBookmark: function(bookmarkItem){

    var parser = bookmarkItem.toJSON();
    var filterArray = parser.tag;
    // console.log(filterArray);
    var search = false;
    _.each(filterArray, function(item){
      var stringified = item.toString().slice(0, -1);
      if (stringified === "social"){
        search = true;
      }
      // console.log(stringified);
      // console.assert(stringified==='social');
    });
    if (search){
      var bookmark = new BookmarkItemView({model: bookmarkItem});
      $('.bookmark-list').append(bookmark.render().el);
    }
  }
});

var BookmarkMusicView = Backbone.View.extend({
  tagName: 'li',
  template: bookmarkListItem,
  initialize: function(){
    this.listenTo(this.collection, 'add', this.displayBookmark);

    // console.log('form init');
  },
  render: function(){
    // console.log('form rendered');
    this.$el.html(this.template());
    return this;
  },
  displayBookmark: function(bookmarkItem){

    var parser = bookmarkItem.toJSON();
    var filterArray = parser.tag;
    // console.log(filterArray);
    var search = false;
    _.each(filterArray, function(item){
      var stringified = item.toString().slice(0, -1);
      if (stringified === "music"){
        search = true;
      }
      // console.log(stringified);
      // console.assert(stringified==='social');
    });
    if (search){
      var bookmark = new BookmarkItemView({model: bookmarkItem});
      $('.bookmark-list').append(bookmark.render().el);
    }
  }
});

module.exports = {
  'BookmarkFormView' : BookmarkFormView,
  'BookmarkItemView' : BookmarkItemView,
  'BookmarkListView' : BookmarkListView,
  'BookmarkSocialView' : BookmarkSocialView,
  'BookmarkMusicView' : BookmarkMusicView,
  'TagButton' : TagButton,
  'TagButtonGroup' : TagButtonGroup
};

var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/models');
var views = require('./views/bookmarks');

var AppRouter = Backbone.Router.extend({
  routes :{
    '':'index',
    'social': 'social',
    'music': 'music',
    'movies': 'movies',
    'games': 'games',
    'sports': 'sports',
    'finance':'finance',
    'coding':'coding'
  },
  initialize: function(){
    this.bookmarkList = new models.BookmarkCollection();
    this.tagButtons = models.activeTags;
    // this.
  },
  index: function(){
    // Demo Url
    // this.bookmarkList.add({'title': 'TIY', 'url':'theironyard.com'});

    var bookmarkForm = new views.BookmarkFormView({collection: this.bookmarkList});
    $('.bookmark-section').append(bookmarkForm.render().el);

    var bookmarkList = new views.BookmarkListView({collection: this.bookmarkList});
    $('.bookmark-list').append(bookmarkList.render().el);

    var tagButtonGrouping = new views.TagButtonGroup({collection: this.tagButtons});
    $('.bookmark-form').append(tagButtonGrouping.render().el);

    this.bookmarkList.fetch();
  },
  social: function(){
    console.log('social start');

    var bookmarkForm = new views.BookmarkFormView({collection: this.bookmarkList});
    $('.bookmark-section').append(bookmarkForm.render().el);

    var filteredList = new views.BookmarkListView({collection: this.bookmarkList});
    $('.bookmark-ul').replaceWith(filteredList.render().el);

    this.bookmarkList.fetch();
  },
  music: function(){
    console.log('music start');

    var bookmarkForm = new views.BookmarkFormView({collection: this.bookmarkList});
    $('.bookmark-section').append(bookmarkForm.render().el);

    var filteredList = new views.BookmarkListView({collection: this.bookmarkList});
    $('.bookmark-ul').replaceWith(filteredList.render().el);

    this.bookmarkList.fetch();
  },
  movies: function(){
    console.log('movies start');

    var filteredList = new views.BookmarkListView({collection: this.bookmarkList});
    $('.bookmark-list').replaceWith(filteredList.render().el);

    this.bookmarkList.fetch();
  },
  games: function(){
    console.log('games start');

    var filteredList = new views.BookmarkListView({collection: this.bookmarkList});
    $('.bookmark-list').replaceWith(filteredList.render().el);

    this.bookmarkList.fetch();
  },
  sports: function(){
    console.log('sports start');

    var filteredList = new views.BookmarkListView({collection: this.bookmarkList});
    $('.bookmark-list').replaceWith(filteredList.render().el);

    this.bookmarkList.fetch();
  },
  finance: function(){
    console.log('finance start');

    var filteredList = new views.BookmarkListView({collection: this.bookmarkList});
    $('.bookmark-list').replaceWith(filteredList.render().el);

    this.bookmarkList.fetch();
  },
  coding: function(){
    console.log('coding start');

    var filteredList = new views.BookmarkListView({collection: this.bookmarkList});
    $('.bookmark-list').replaceWith(filteredList.render().el);

    this.bookmarkList.fetch();
  }
});

var router = new AppRouter();

module.exports = router;

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
  },
  music: function(){
    console.log('music start');
  },
  movies: function(){
    console.log('movies start');
  },
  games: function(){
    console.log('games start');

  },
  sports: function(){
    console.log('sports start');
  },
  finance: function(){
    console.log('finance start');
  },
  coding: function(){
    console.log('coding start');
  }
});

var router = new AppRouter();

module.exports = router;

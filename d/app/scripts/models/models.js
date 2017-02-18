var $ = require('jquery');
var Backbone = require('backbone');

var Bookmark = Backbone.Model.extend({
  idAttribute: "_id",

});

var BookmarkCollection = Backbone.Collection.extend({
  model : Bookmark,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/nathanbookmark'
});

var Tag = Backbone.Model.extend({
  initialize: function(){
    // console.log(this, "created");
  }
});

var TagCollection = Backbone.Collection.extend({
  model: Tag,
  initialize: function(){
    // console.log('tag coll created');
  }
});

var socialTag = new Tag();
socialTag.set('type', 'social');
var musicTag = new Tag();
musicTag.set('type', 'music');
var moviesTag = new Tag();
moviesTag.set('type', 'movies');
var gamesTag = new Tag();
gamesTag.set('type', 'games');
var sportsTag = new Tag();
sportsTag.set('type', 'sports');
var financeTag = new Tag();
financeTag.set('type', 'finance');
var codingTag = new Tag();
codingTag.set('type', 'coding');

var currentTags = [socialTag, moviesTag, musicTag, gamesTag, sportsTag, financeTag, codingTag];

var activeTags = new TagCollection(currentTags);
console.log(activeTags);
module.exports = {
  'Bookmark' : Bookmark,
  'BookmarkCollection' : BookmarkCollection,
  'Tag': Tag,
  'TagCollection' : TagCollection,
  'activeTags': activeTags
};

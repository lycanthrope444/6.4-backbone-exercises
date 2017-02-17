var $ = require('jquery');
var Backbone = require('backbone');

var Bookmark = Backbone.model.extend({
  
});

var BookmarkCollection = Backbone.collection.extend({
  model : Bookmark,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/nathanbookmark'
});

module.exports = {
  'Bookmark' : Bookmark,
  'BookmarkCollection' : BookmarkCollection
};

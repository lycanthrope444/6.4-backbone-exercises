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

});

var TagCollection = Backbone.Collection.extend({
  model: Tag

});

module.exports = {
  'Bookmark' : Bookmark,
  'BookmarkCollection' : BookmarkCollection
};

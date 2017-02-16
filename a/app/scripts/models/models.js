var $ = require('jquery');
var Backbone = require('backbone');

var Post = Backbone.Model.extend({
  idAttribute: '_id',
  initialize: function(){
    console.log("i live");
  }
});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url : "https://tiny-lasagna-server.herokuapp.com/collections/nathanblog"
});

module.exports = {
  'Post' : Post,
  'PostCollection' : PostCollection
};

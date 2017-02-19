var Backbone = require('backbone');

var BlogPost = Backbone.Model.extend({
  idAttribute : '_id'
});

var BlogPostCollection = Backbone.Collection.extend({
  Model: BlogPost,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/nathanblog'
});

module.exports = {
  'BlogPost': BlogPost,
  'BlogPostCollection': BlogPostCollection
};

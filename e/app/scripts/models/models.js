var Backbone = require('backbone');

var BlogPost = Backbone.Model.extend({
  idAttribute : '_id'
});

var BlogPostCollection = Backbone.Collection.extend({
  Model: BlogPost
});

module.exports = {
  'BlogPost': BlogPost,
  'BlogPostCollection': BlogPostCollection
};

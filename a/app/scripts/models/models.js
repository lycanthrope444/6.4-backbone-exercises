var $ = require('jquery');
var Backbone = require('backbone');

var Post = Backbone.Model.extend({

});

var PostCollection = Backbone.Model.extend({
  model: Post,
  
});

module.exports = {
  'Post' : Post,
  'PostCollection' : PostCollection
};

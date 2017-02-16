var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../models/blog');

var BlogList = Backbone.View.extend({
  tagName: 'ul',

});

var BlogListItem = Backbone.View.extend({

});

var BlogPage = Backbone.View.extend({

});

module.exports = {
  'BlogList': BlogList,
  'BlogPage': BlogPage
};

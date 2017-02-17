var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../models/blog');
var listItemTemplate = require('../../templates/listedblog.hbs');

var BlogList = Backbone.View.extend({
  tagName: 'ul',
  className: "list-group col-sm-12",
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderBlogPost);
  },
  render: function(){
    return this;
  },
  renderBlogPost: function(post){
    var newBlogPost = new models.BlogPost({model: post});
    console.log(newBlogPost);
    // this.$el.append(newBlogPost.render().el);
  }
});

var BlogListItem = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: listItemTemplate,
  inialize: function(){
  },
  render: function(){
    console.log('list item firing');
    console.log(this);
    var newBlogPost = this.template(this.model.toJSON());

    this.$el.html(newBlogPost);
    return this;
  },
});

var BlogPage = Backbone.View.extend({
  className: 'col-sm-12',

});

module.exports = {
  'BlogList': BlogList,
  'BlogListItem': BlogListItem,
  'BlogPage': BlogPage
};

var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../models/blog');
var listItemTemplate = require('../../templates/listedblog.hbs');
var singleBlogTemplate = require('../../templates/singleblog.hbs');

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
    var newBlogPost = new BlogListItem({model: post});
    this.$el.append(newBlogPost.render().el);
  }
});

var BlogListItem = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: listItemTemplate,
  inialize: function(){
  },
  render: function(){
    var newBlogPost = this.template(this.model.toJSON());

    this.$el.html(newBlogPost);
    return this;
  },
});

var BlogPage = Backbone.View.extend({
  tagName: 'div',
  className: 'col-sm-12',
  template: singleBlogTemplate,
  render: function(){
    console.log('changed');
    var blogTemp = this.template(this.model.toJSON());
    this.$el.html(blogTemp);
    return this;
  }
});

module.exports = {
  'BlogList': BlogList,
  'BlogListItem': BlogListItem,
  'BlogPage': BlogPage
};

var $ = require('jquery');
var Backbone = require('backbone');

var postFormTemplate = require('../../templates/postform.hbs');

var PostView = Backbone.View.extend({
  tagName: 'form',
  className: "col-sm-12",
  template: postFormTemplate,
  events:{
    'submit': 'createPost'
  },
  attributes : {
    method: 'post'
  },
  render: function(){
    this.$el.html(postFormTemplate());
    return this;
  },
  createPost: function(event){
    event.preventDefault();
    var $title = $('#title');
    var $body = $('#body');
    console.log(this.collection);
    this.collection.create({
      title: $title.val(),
      body: $body.val()
    });

    $title.val('');
    $body.val('');
  }
});


module.exports = {
  'PostView': PostView
};

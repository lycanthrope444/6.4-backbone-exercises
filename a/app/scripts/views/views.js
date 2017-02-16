var $ = require('jquery');
var Backbone = require('backbone');

var postFormTemplate = require('../../templates/postform.hbs');

var PostView = Backbone.View.extend({
  tagName: 'form',
  className: "",
  template: postFormTemplate,
  render: function(){
    console.log("created");
    $('.container').append(postFormTemplate());
    return this;
  }
});


module.exports = {
  'PostView': PostView
};

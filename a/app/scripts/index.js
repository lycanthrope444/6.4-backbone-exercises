var $ = require('jquery');

var models = require('./models/models');
var views = require('./views/views');

$(function(){

  var postCollection = new models.PostCollection();

  var blogForm = new views.PostView({collection: postCollection});
  $('.row').append(blogForm.render().el);


  postCollection.fetch();
});

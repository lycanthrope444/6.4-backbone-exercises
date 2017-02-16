var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/models');
var views = require('./views/views');

$(function(){

  var myContacts = new models.ContactCollection();

  var contactForm = new views.ContactFormView({collection: myContacts});
  $('.row').append(contactForm.render().el);
});

var $ = require('jquery');
var Backbone = require('backbone');

var contactFormTemplate = require('../../templates/contact-info.hbs');

var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'col-sm-12',
  attributes:{
    method: 'post'
  },
  events: {
    'submit': 'addContact'
  },
  template : contactFormTemplate,
  render:function(){
    this.$el.html(contactFormTemplate);
    return this;
  },
  addContact: function(event){
    event.preventDefault();
    var $first = $('#first');
    var $last = $('#last');
    var $address = $('#address');
    var $phone = $('#phone');

    this.collection.create({
      first: $first.val(),
      last: $last.val(),
      address: $address.val(),
      phone: $phone.val()
    });

    $first.val('');
    $last.val('');
    $address.val('');
    $phone.val('');
  }
});

module.exports ={
  'ContactFormView': ContactFormView
};

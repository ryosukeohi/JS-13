// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "skippr.min";

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require('jquery')

var title = "javascriptが使えました";
alert(title);

$(document).ready(function(){
  $('.jquery').on('click', function(){
    $(this).css('color', 'red');
  });
});

$(document).ready(function(){
  $('#theTarget').skippr({
    transition: 'slide',
    speed: 1000,
    easing: 'easeOutQuart',
    navType: 'block',
    childrenElementType: 'div',
    arrows: true,
    autoPlay: true,
    autoPlayDuration: 3000,
    keyboardOnAlways: true,
    hidePrevious: false
  });
});
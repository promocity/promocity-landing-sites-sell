/*
 * promocity landing sites sell
 */


/*
 * libraries
 */
//= partials/jquery-2.1.4.min.js
//= partials/jquery.validate.min.js
//= partials/jquery.maskedinput.js
//= partials/owl.carousel.min.js

$(document).ready(function() {
 
  /* slider */
  $("#slider").owlCarousel({
    navigation: true,
    items : 1, 
    stopOnHover : true,
    lazyLoad : true,
    slideSpeed : 800,
    navigationText : false,
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover : true
  });

  $("#request-tel").mask("+7 (999) 999-9999");

  $('#request-form').validate({
   rules: {
     name: {
      required: true,
      minlength: 4    
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 4 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }

 });


});

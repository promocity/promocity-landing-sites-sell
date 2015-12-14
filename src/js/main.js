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
    lazyLoad : true,
    slideSpeed : 800,
    navigationText : false,
    autoplay: true,
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

  $('#call-request-form').validate({
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

  $("#header-call-request-btn").click(function(){
    $("#call-request-form").show();
    $(".forms__pop-up-overlay").show();
    return false;
  });

  $(".forms__pop-up-overlay").click(function(){
    $("#call-request-form").hide();
    $(".forms__pop-up-overlay").hide();
    $(".complete-window").hide();
    return false;
  });

  $(".forms-pop-up__close-btn").click(function(){
    $("#call-request-form").hide();
    $(".forms__pop-up-overlay").hide();
    $(".complete-window").hide();
    return false;
  });

  $("#pop-up-tel").mask("+7 (999) 999-9999");

});

  
  function compeliteWindow() {
    $(".forms__pop-up-overlay").show();
    $("#call-request-form").hide();
    $(".complete-window").show();
  }

  function siteVisitCheck1() { $('#request-checkbox-1').prop("checked",true); }
  function siteVisitCheck2() { $('#request-checkbox-2').prop("checked",true); }
  function siteVisitCheck3() { $('#request-checkbox-3').prop("checked",true); }
  function siteVisitCheck4() { $('#request-checkbox-5').prop("checked",true); }
  function siteVisitCheck5() { $('#request-checkbox-4').prop("checked",true); }

/* 27 = escape */
$(document).keyup(function(event){
    if (event.keyCode == 27) {
      $("#call-request-form").hide();
      $(".forms__pop-up-overlay").hide();
      $(".complete-window").hide();
    }
});
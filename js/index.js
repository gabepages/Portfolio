var $ = jQuery;

$(document).ready(function() {

  // Nav Background Change
  $(window).scroll( function(){
      var distanceScrolled = $(this).scrollTop();
      if(distanceScrolled > 90 || $("#mobile-menu").hasClass('open')){
        $('#nav-background').css('opacity', "1");
        $('.scroll-to-top').css('opacity', "1");
      }else {
        $('#nav-background').css('opacity', "0");
        $('.scroll-to-top').css('opacity', "0");
      }
  });

  // Anchor tag issue fix
  var $root = $('html, body');
  $('a.scroll-tag').click(function(){
    if ($(this).attr('href')[0] == "#"){
      event.preventDefault()
      $root.animate({
          scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 60
      }, 450);
      return false;
    }
  });

  // Underline in Nav
  $(document).on('scroll', function() {
    var scrollPosition = window.scrollY;
    if(scrollPosition > $("a[name=contact]").offset().top - 150){
      $('#nav-contact').siblings().removeClass('active')
      $('#nav-contact').addClass('active')
    }else if(scrollPosition > $("a[name=portfolio]").offset().top - 61){
      $('#nav-portfolio').siblings().removeClass('active')
      $('#nav-portfolio').addClass('active')
    }else if(scrollPosition > $("a[name=services]").offset().top - 61){
      $('#nav-services').siblings().removeClass('active')
      $('#nav-services').addClass('active')
    }else if(scrollPosition > $("a[name=about]").offset().top - 61){
      $('#nav-about').siblings().removeClass('active')
      $('#nav-about').addClass('active')
    }else{
      $('#nav-top').siblings().removeClass('active')
      $('#nav-top').addClass('active')
    }
  })

  // Magange "valign-wrapper" class
  if ($(window).width() <= 992) {
    $(".services-wrapper").removeClass('valign-wrapper');
  }

  $(window).resize(function () {
    if ($(window).width() <= 992) {
      $(".services-wrapper").removeClass('valign-wrapper');
    } else if(!$(".services-wrapper").hasClass('valign-wrapper')){
      $(".services-wrapper").addClass('valign-wrapper');
    }
  })


  $("#mobile-menu").on("click", function () {
    if ($("#mobile-menu").hasClass('closed')) {
      $("#mobile-menu.closed").removeClass("closed").addClass("open");
      $("#nav-background").css("height", "100vh");
      $("#nav-background").css("opacity", "1");
      $('.scroll-to-top').css('opacity', "0");
    }else{
      $(".mobile-menu-content").removeClass('active');
      $("#mobile-menu.open").removeClass("open").addClass("closed");
      $("#nav-background").css("height", "60px");
      if ($(window).scrollTop() < 90) {
        $("#nav-background").css("opacity", "0");
        $('.scroll-to-top').css('opacity', "0");
      }else {
        $('.scroll-to-top').css('opacity', "1");
      }
    }
  });


  $("#mobile-menu li a").on("click", function (event) {
    setTimeout(function(){
      $("#mobile-menu.open").removeClass("open").addClass("closed");
      $("#nav-background").css("height", "60px");
      $('.scroll-to-top').css('opacity', "1");
      if ($(window).scrollTop() < 90) {
        $("#nav-background").css("opacity", "0");
        $('.scroll-to-top').css('opacity', "0");
      }else {
        $('.scroll-to-top').css('opacity', "1");
      }
    },750)
  })

  // Form Submission
  $('#contact-form').on('submit', function() {
    $(this).css('opacity', 0);
    $('#form-submitted').css('opacity', 1)
  })

  // Initialize Modals
  $('.modal').modal({
    opacity: .6, // Opacity of modal background
    inDuration: 400, // Transition in duration
    outDuration: 300
  });


});

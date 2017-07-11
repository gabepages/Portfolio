var $ = jQuery;

$(document).ready(function() {
    $(window).scroll( function(){
        var distanceScrolled = $(this).scrollTop();
        if(distanceScrolled > 90){
          $('#nav-background').css('opacity', "1");
        }else {
          $('#nav-background').css('opacity', "0");
        }
    });
    var $root = $('html, body');
    $('a').click(function(){
      if ($(this).attr('href')[0] == "#"){
        event.preventDefault()
        $root.animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 60
        }, 450);
        return false;
      }

  });

  $('.modal').modal();


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
});

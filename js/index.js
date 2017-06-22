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
});

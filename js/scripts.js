$(document).ready(function() {
    $('.super-menu').hide();
    $(".datepicker").flatpickr();
    var viewPort = $(window).width();
   if(viewPort <= 600){


        $('.navbar-nav').removeClass('mr-auto');
        $('.main-section div').removeClass('text-left')
        $('.section-2 div').removeClass('text-left')
        $('.section-2').removeClass('footer-card')
        $("#items").owlCarousel({
            items: 1,
            singleItem: true,
            itemsScaleUp : true,
            slideSpeed: 500,
            autoPlay: 5000,
            stopOnHover: true
        });

        $("#testemony").owlCarousel({
            items: 1,
            singleItem: true,
            itemsScaleUp : true,
            slideSpeed: 500,
            autoPlay: 5000,
            stopOnHover: true
        });
   }

   $('#menu').click(function(){
        $('.super-menu').show();
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
   });

   $('.close-btn').click(function(){
       $('.super-menu').hide()
       $('html, body').css({
        overflow: 'visible',
        height: '100%'
    });
   })



  
});
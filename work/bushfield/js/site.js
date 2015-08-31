(function ($, ns, undefined) {
    
    var app = {}
    
    $(function () {
        resizeBg();
        
        $(window).on('scroll', function () {
            var scrollTop = $(this).scrollTop();
            var heroHeight = $('.hero').height();
            var opacityMod = scrollTop / heroHeight;
            $('.hero-overlay').css({'opacity': 0.2 + opacityMod});
            $('header').addClass('shadow');
        })
        
        $(window).bind('scroll', function(e) {
            window.scrollEvt;
            $(window).scroll(function()
            {
                clearTimeout(window.scrollEvt);
                window.scrollEvt = setTimeout(function()
                {
                    $('header').removeClass('shadow');
                }, 500);
            });
        });
        
        function resizeBg() {
            if ( ($(window).width() / $(window).height()) < $('.hero-image').width() / $('.hero-image').height() ) {
                $('.hero-image').removeClass('bgwidth').addClass('bgheight');
            } else {
                $('.hero-image').removeClass('bgheight').addClass('bgwidth');
            }
        }
        
        $(window).on('resize', function () {
            $('header').removeClass('shadow');
            resizeBg();
        })
        
        $('.read-on').on('click', function () {
            $('html,body').animate({scrollTop: $("main").offset().top - 80}, 1200);
        })
        
        $('#sidebar').on('change', function () {
            if ($(this).prop('checked') == false) {
                window.setTimeout(function () {
                    $('input[type=checkbox]').prop('checked', false);
                }, 300);
            }
        })
        
        $('nav input[type=checkbox]').on('change', function () {
            if ($(this).prop('checked') == true) {
                $(this).addClass('active');
                $('nav').find('input[type=checkbox]:not(.active)').prop('checked', false);
                $(this).removeClass('active');
            }
        })
        
        $('.cover').on('click', function () {
            $('#sidebar').prop('checked', false);
        })
        
        app.cycle = 13;
        window.setInterval(function(){
            var cycle = app.cycle % 12;
            var topMod = cycle * (0 - 80);
             $('.quotes').animate({opacity: 0}, 750, function () {
                $('.quotes').animate({top: topMod}, 0, function () {
                    $('.quotes').animate({opacity: 1}, 750);
                    app.cycle++;
                });
            });
        }, 5000);
        
        $(document).on('mouseover', function(e) {
            console.log(e.target);
        })
    })
    
}($, window || {}))
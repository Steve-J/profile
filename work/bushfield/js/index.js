(function ($, ns, undefined) {
    var app = {};
    app.opacityMod = 0;
    
    $(function () {
        
        $(window).on('scroll', function () {
            var scrollTop = $(this).scrollTop();
            var heroHeight = $('.hero-overlay').height();
            var opacityMod = scrollTop / heroHeight * 2;
            app.opacityMod = opacityMod;
            var topMod = 1100 * opacityMod;
            var widthMod = 350 + 1200 * opacityMod;
            if ($('#sidebar').prop('checked') == false) {
                $('header').css({'background': 'rgba(255,255,255,' + opacityMod * 2 + ')'});
                $('.menu-container').css({'background': 'rgba(51,51,51,' + opacityMod * 2 + ')'});
            }
            if (scrollTop > 200) {
                $('header').addClass('shadow');
                $('.logo, .quote-container').removeClass('hide-logo');
            } else {
                $('header').removeClass('shadow');
                $('.logo, .quote-container').addClass('hide-logo');
            }
            if (scrollTop <= heroHeight / 2) {
                $('.video-logo').css({
                    'opacity': 0.7 - opacityMod * 0.7,
                    'margin-top': topMod.toString() + 'px',
                    'width': widthMod.toString() + 'px'
                });
            }
        })
        
        $(window).on('resize', function () {
            $('.map-container iframe').attr('src', $('.map-container iframe').attr('src'));
        })
        
        $('#sidebar').on('change', function () {
            if ($(this).prop('checked') == true) {
                $('.menu-container').css({'background': '#333'});
                $('header').css({'background': '#fff'});
            } else {
                $('header').css({'background': 'rgba(255,255,255,' + app.opacityMod * 3 + ')'});
                $('.menu-container').css({'background': 'rgba(51,51,51,' + app.opacityMod * 3 + ')'});
            }
        })
        
        $('.map-cover').on('click', function () {
            $(this).fadeOut();
        })
        
        $('.find-us iframe').on('mouseleave', function () {
            $('.map-cover').fadeIn();
        })
        
        $('.cover').on('click', function () {
            $('header').css({'background': 'rgba(255,255,255,' + app.opacityMod * 3 + ')'});
            $('.menu-container').css({'background': 'rgba(51,51,51,' + app.opacityMod * 3 + ')'});
        })
    })
    
}($, window || {}))
(function ($, ns, undefined) {
    var app = {};
    $(function() {
        $(window).on('scroll', function () {
            app.scrollTop = $(this).scrollTop();
            app.heroHeight = $('.hero-image').height() - 150;
            app.opacityModifier = app.scrollTop / app.heroHeight;
            app.heightModifier = 1 - app.scrollTop / 1250;
            if (app.scrollTop > app.heroHeight) {
                $('nav').css('background', '#333');
            } else {
                $('nav').css('background', '');
            }
            $('.hero-image-cover').css({'opacity': app.opacityModifier});
            $('.toggle-back').css({'background': 'rgba(51, 51, 51,' + app.opacityModifier * 1.8 + ')'})
            if (app.heightModifier * 160 >= 80) {
                $('nav').height(app.heightModifier * 160);
                $('.nav-logo').css({'opacity': '0', 'left': '50px'});
                $('.nav-wrap').css({'margin-left': ''});
                $('.toggle span').fadeIn();
                $('.toggle').removeClass('toggle-round').addClass('toggle-square');
            } else {
                $('nav').height(80);
                $('.nav-logo').css({'opacity': 1, 'left': '90px'});
                $('.nav-wrap').css({'margin-left': '30px'});
                $('.toggle span').hide();
                $('.toggle').removeClass('toggle-square').addClass('toggle-round');
            }
            chair();
        })

        $(window).on('resize', function () {
            chair();
        })
        
        function chair () {
            var winWidth = $(window).innerWidth();
            var textWidth = $('.welcome-text').width();
            var chairRight = $(window).scrollTop() * 1.3 - 600;
            if (chairRight >= winWidth - textWidth - (winWidth * 0.25) - 200) {
                chairRight = winWidth - textWidth - (winWidth * 0.25) - 200;
            }
            if (winWidth > 699) {
                console.log(chairRight);
                $('.chair').css({'right': chairRight.toString() + 'px'});
            } else {
                $('.chair').css({'right': ''});
            }
        }

        $('#sidebar-toggler').on("change", function () {
            var width = $(window).width();
            if (this.checked && width < 500) {
                $(".nav-logo").fadeOut(100);
            };
            if (!this.checked && width < 500) {
                $(".nav-logo").delay(200).fadeIn(0);
            };
        });

        // close sidebar on page click
        $('.page-content').on('click', function (e) {
            var el = e.target;
            if (!$(el).hasClass('ignore')) {
                $('#sidebar-toggler').prop('checked', false);
                $(".nav-logo").delay(200).fadeIn(0);
            }
        });
    })

}($, window || {}))
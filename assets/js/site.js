(function ($) {

  $(function () {

    var topHeader;

    checkWidth();

    function checkWidth () {
        if ($(window).innerWidth() >= 1200) {
            topHeader = 0;
        } else {
            topHeader = 80;
        }
    }

    $('.dev').addClass('show');

    $(window).on('resize', function () {
        checkWidth();
    })

    $('.dev button, .hero').on('click', function () {
        $('.dev').removeClass('show');
    })

    $('.sj-box').on('click', function () {
        $('.dev').removeClass('show');
        $('html,body').animate({scrollTop: $('#about').offset().top - topHeader}, 2000);
    })

    $('.read-work').on('click', function () {
        $('html,body').animate({scrollTop: $('#work').offset().top}, 2000);
    })

    $('.about-box button').on('click', function () {
        var $container = $(this).parent().parent().parent();
        $container.addClass('animated flipOut');
        setTimeout(function () {
            $container.find('.back').show();
            $container.find('.front').hide();
            $container.removeClass('flipOut').addClass('flipIn');
        }, 300);
    })

    $('.what-btn').on('click', function () {
        setTimeout(function () {
            $('.bubble').addClass('enter');
            $('.what-circle').each(function (i) {
                setTimeout(function () {
                    $('.what-circle').eq(i).addClass('show-what');
                }, 300 * (i + 1));
            })
        }, 100);

        setTimeout(function () {
            $('.bubble .start').addClass('active');
        }, 1500);
    })

    $('.what-circle').on('click', function () {
        var $this = $(this),
            circle = '.' + $this.attr('id');

        $($this).find('div').addClass('clicked');
        setTimeout(function () {
            $($this).find('div').removeClass('clicked');
        }, 150);

        $('.what-circle').removeClass('active');
        $('.bubble div').removeClass('active');
        $('.bubble').removeClass('enter');
        $('.bubble').addClass('shrink');

        setTimeout(function () {
            $(circle).addClass('active');
            $('.bubble').removeClass('shrink');
            $($this).addClass('active');
        }, 400);
    })

    $('.where-btn').on('click', function () {
        setTimeout(function () {
            var sections = ['com', 'plan', 'vis', 'prog'];

            for (var i = 0; i < sections.length; i++) {
                activate(sections[i]);
            }
        }, 500);
    })

    function activate(className) {
        var fullClass = '.' + className + ' .skill';
        var elms = $(fullClass);

        elms.each(function (i) {
            setTimeout(function () {
                elms.eq(i).addClass('active');
            }, 150 * (i + 1));
        })
    }

    $(window).bind('scroll', function(e) {
        window.scrollEvt;
        $(window).scroll(function()
        {
            clearTimeout(window.scrollEvt);
            window.scrollEvt = setTimeout(function()
            {
                $('header').removeClass('scrolling');
            }, 500);
        });
    });

    $(window).on('scroll', function () {

      $('.dev').removeClass('show');

      if (topHeader > 0) {
          $('header').addClass('scrolling');
      }

      var scrollTop = $(this).scrollTop(),
          aboutTop = $('#about').offset().top - scrollTop,
          teachTop = $('#teach').offset().top - scrollTop,
          workTop = $('#work').offset().top - scrollTop,
          contactTop = $('#contact').offset().top - scrollTop;

      if (aboutTop <= 400) {
        $('#about h1').addClass('show-h1');
        $('header a').removeClass('active');
        $('#about-nav').addClass('active');
        $('#nav-triangle').removeClass().addClass('about-nav');
      }

      if (aboutTop <= 100) {
        $('header').addClass('show-header');
        $('#about h1').addClass('show-steve');
        $('.perspective-wrap').each(function (i) {
            setTimeout(function () {
                $('.perspective-wrap').eq(i).addClass('show-about animated swing');
            }, 300 * (i + 1));
        })
      } else {
        $('header').removeClass('show-header');
      }

      if (aboutTop <= 0) {
        $('#about .read-on').addClass('show-read');
      }

      if (workTop <= 400) {
        $('#work h1').addClass('show-h1');
        $('header a').removeClass('active');
        $('#work-nav').addClass('active');
        $('#nav-triangle').removeClass().addClass('work-nav');
      }

      if (workTop <= 100) {
        $('.work-logo').addClass('big');
        $('.work-box').each(function (i) {
            setTimeout(function () {
                $('.work-box').eq(i).addClass('show-work animated rubberBand');
            }, 250 * (i + 1));
        })
      }

      if (teachTop <= 400) {
        $('#teach h1').addClass('show-h1');
        $('header a').removeClass('active');
        $('#teach-nav').addClass('active');
        $('#nav-triangle').removeClass().addClass('teach-nav');
      }

      if (teachTop <= 80) {
        $('.logo').addClass('teach-nav');
      } else {
        $('.logo').removeClass('teach-nav');
      }

      if (contactTop <= 400) {
        $('#contact h1').addClass('show-h1');
        $('header a').removeClass('active');
        $('#contact-nav').addClass('active');
        $('#nav-triangle').removeClass().addClass('contact-nav');
      }

      if (contactTop <= 80) {
        $('.logo').addClass('contact-nav');
      } else {
        $('.logo').removeClass('contact-nav');
      }
    })
  })

}(jQuery));

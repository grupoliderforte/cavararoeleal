new WOW().init();

(function ($) {

    'use strict'

    $('a.smooth-scroll').on('click', function (e) {
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    })

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.navigation').addClass('header-white');
        } else {
            $('.navigation').removeClass('header-white');
        }

    });

    $('.navbar-collapse .navbar-nav a').on('click', function () {
        $('.navbar-toggler:visible').click();
    });

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

})(window.jQuery);
$(function() {
    $(window).on("scroll", function() {
        if($(window).width() > 999) {
            if($(window).scrollTop() > 50) {
                $(".header").addClass("header--hidden");
                $('.header__logo-image').addClass('hidden')
                $(".header__logo").addClass("hidden");
                $(".header__right").addClass("hidden");
            } else {
                $(".header").removeClass("header--hidden");
                $('.header__logo-image').removeClass('hidden')
                $('.header__logo').removeClass('hidden')
                $(".header__right").removeClass("hidden");
            }
        }
        else {
            if($(window).scrollTop() > 50) {
                $('.mobile__header').addClass('hidden')
            } else {
                $('.mobile__header').removeClass('hidden')
            }
        }
    });
});
$('.header__search-cat').click(() =>{
    if ($(window).width() > 999 && $(window).scrollTop() <= 50) {
        if ($('.hidden__catalog').css('display') == 'block'){
            $('#overlay').remove()
            $('html').css({
                overflow: 'visible'
            })
            $('.icon-frame-3295').removeClass('icon-frame-3295').addClass('icon-frame-3295-1')
        }
        else {
            $('html').append('<div id="overlay"></div>').css({
                overflow: 'hidden'
            })
            $('#overlay').css({
                top: $('.header').height() + 20
            })
            $('.hidden__catalog').css({
                zIndex: 5
            })
            $('.icon-frame-3295-1').removeClass('icon-frame-3295-1').addClass('icon-frame-3295')
            $('.header').css({
                zIndex: 5
            })
        }

        $('.hidden__catalog').slideToggle(200)
    }
    else {
        if ($(window).width() > 1480) {
            if ($('.hidden__catalog').css('display') == 'block'){
                $('#overlay').remove()
                $('html').css({
                    overflow: 'visible'
                })
                $('.icon-frame-3295').removeClass('icon-frame-3295').addClass('icon-frame-3295-1')
            }
            else {
                $('html').append('<div id="overlay"></div>').css({
                    overflow: 'hidden'
                })
                $('#overlay').css({
                    top: $('.header').height() - 62
                })
                $('.hidden__catalog').css({
                    top: '100%)'
                })
                $('.icon-frame-3295-1').removeClass('icon-frame-3295-1').addClass('icon-frame-3295')
                $('.header').css({
                    zIndex: 5
                })
            }

            $('.hidden__catalog').slideToggle(200)
        }
        if ($(window).width() > 1200 && $(window).width() <= 1480) {
            if ($('.hidden__catalog').css('display') == 'block'){
                $('#overlay').remove()
                $('html').css({
                    overflow: 'visible'
                })
                $('.icon-frame-3295').removeClass('icon-frame-3295').addClass('icon-frame-3295-1')
            }
            else {
                $('html').append('<div id="overlay"></div>').css({
                    overflow: 'hidden'
                })
                $('#overlay').css({
                    top: $('.header').height() - 112
                })
                $('.hidden__catalog').css({
                    top: '100%)'
                })
                $('.icon-frame-3295-1').removeClass('icon-frame-3295-1').addClass('icon-frame-3295')
                $('.header').css({
                    zIndex: 5
                })
            }

            $('.hidden__catalog').slideToggle(200)
        }
        if ($(window).width() > 999 && $(window).width() <= 1200) {
            if ($('.hidden__catalog').css('display') == 'block'){
                $('#overlay').remove()
                $('html').css({
                    overflow: 'visible'
                })
                $('.icon-frame-3295').removeClass('icon-frame-3295').addClass('icon-frame-3295-1')
            }
            else {
                $('html').append('<div id="overlay"></div>').css({
                    overflow: 'hidden'
                })
                $('#overlay').css({
                    top: $('.header').height() - 112
                })
                $('.hidden__catalog').css({
                    top: '100%)'
                })
                $('.icon-frame-3295-1').removeClass('icon-frame-3295-1').addClass('icon-frame-3295')
                $('.header').css({
                    zIndex: 5
                })
            }

            $('.hidden__catalog').slideToggle(200)
        }
    }

})

$(document).click(function (e) {
    if ($(window).width() > 999) {
        if ($(e.target).closest(".header__search").length) {

        }
        else {
            $('.hidden__catalog').slideUp(200)
            $('#overlay').remove()
            $('html').css({
                overflow: 'visible'
            })
            $('.icon-frame-3295').removeClass('icon-frame-3295').addClass('icon-frame-3295-1')
        }
    }
})

$('.hidden__catalog-item').click(function () {
    if ($(window).width() > 999) {
        $(this).addClass('active').siblings().removeClass('active')

        $('.hidden__under').css({
            opacity: 0,
            visibility: 'hidden'
        })
        if ($(this.lastElementChild).css('opacity') === '0') {
            $(this.lastElementChild).css({
                opacity: 1,
                visibility: 'visible'
            })
        }
        else {
            $(this.lastElementChild).css({
                opacity: 0,
                visibility: 'hidden'
            })
            $(this).removeClass('active')
        }
    }
    else {
        $('.hidden__catalog-item').css({
            position: 'unset'
        })

        $('.hidden__under').css({
            opacity: 0,
            visibility: 'hidden'
        })
        if ($(this.lastElementChild).css('opacity') === '0') {
            $(this.lastElementChild).css({
                opacity: 1,
                visibility: 'visible'
            })
        }
        else {
            $(this.lastElementChild).css({
                opacity: 0,
                visibility: 'hidden'
            })
            $(this).removeClass('active')
        }
    }
})
$('.hidden__under-button').click(function () {
    if ($(window).width() < 1000) {
        $('.hidden__catalog').removeClass('active')
    }
})
$('.hidden__catalog-item--link').click(function () {
    if ($(window).width() < 1000) {
        $('.hidden__catalog').addClass('active')
    }
})
$('.header__search-cat').click(() =>{
    if ($('.hidden__catalog').css('display') == 'block'){
        $('#overlay').remove()
        $('body').css({
            overflow: 'visible'
        })
    }
    else {
        $('body').append('<div id="overlay"></div>').css({
            overflow: 'hidden'
        })
        $('#overlay').css({
            top: $('.header').height() + 20
        })
        $('.hidden__catalog').css({
            zIndex: 5
        })
    }

    $('.hidden__catalog').slideToggle(200)
})

$(document).click(function (e) {
    if ($(e.target).closest(".header__search").length) {

    }
    else {
        $('.hidden__catalog').slideUp(200)
        $('#overlay').remove()
        $('body').css({
            overflow: 'visible'
        })
    }
})

$('.hidden__catalog-item').click(function () {
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
})
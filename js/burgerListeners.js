$('#mobile__header-burger').click(function () {
    $('#login, #success, #reg, #reset').removeClass('active')

    let openBurger = $('.header__right-top')

    $(this).toggleClass('open')

    if (openBurger.css('display') === 'none') {
        $('html').css({
            overflow: 'hidden'
        })

        $('.header__right-bottom').slideUp(200)
        $('.menu__item.active').removeClass('active')
    }
    else {
        $('html').css({
            overflow: 'visible'
        })
    }

    openBurger.slideToggle(200)
})

$('.menu__item:nth-child(3)').click(() => {
    $('.mobile__header').removeClass('hidden')
})
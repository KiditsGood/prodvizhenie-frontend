$('#mobile__header-burger').click(function () {
    let openBurger = $('.header__right-top')

    $(this).toggleClass('open')

    if (openBurger.css('display') === 'none') {
        $('body').css({
            overflow: 'hidden'
        })

        $('.header__right-bottom').slideUp(200)
        $('.menu__item.active').removeClass('active')
    }
    else {
        $('body').css({
            overflow: 'visible'
        })
    }

    openBurger.slideToggle(200)
})
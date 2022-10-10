$('.menu__item').click(function () {
    let currItem = $(this)


    if (currItem.hasClass('active')) {
        $('.menu__item').removeClass('active')
        currItem.removeClass('active')
    }
    else {
        $('.menu__item').removeClass('active')
        currItem.addClass('active')
    }
})

$('.menu__item:first-child').click(function () {
    let catMobile = $('.header__right-bottom')


    if (catMobile.css('display') === 'none'){
        $('body').css({
            overflow: 'hidden'
        })
        $('#mobile__header-burger').removeClass('open')
        $('.header__right-top').slideUp(200)
        $('.mobile__header').removeClass('hidden')
    }
    else {
        $('body').css({
            overflow: 'visible'
        })
    }


    catMobile.slideToggle(200)
})

$('.menu__item:not(:first-child)').click(function () {
    $('.header__right-bottom').slideUp(200)
})
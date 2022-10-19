if ($(window).width() > 999) {
    $('.unregistered--user').click(() => {
        $('#login').modal({
            fadeDuration: 200
        })
    })

    $('.login__form-forgot').click(() => {
        $('#reset').modal({
            fadeDuration: 200
        })
    })

    $('.login__form-cancel').click(() => {
        $('#login').modal({
            fadeDuration: 200
        })
    })

    $('.reset__form').on('submit', function (event) {
        event.preventDefault()

        //ajax(Если удачно, то открываем модалку в саксессе (на вёрстке просто некст строчка от этой))
        //ajax(Если неудачно, то подсвечиваем в самом окне, не открывая)

        $('#success').modal({
            fadeDuration: 200
        })
    })

    $('.login__form-text--again').click(() => {
        $('#reset').modal({
            fadeDuration: 200
        })
    })

    $('.reg').click(() => {
        $('#reg').modal({
            fadeDuration: 200
        })
    })

    $('.entry').click(() => {
        $('#login').modal({
            fadeDuration: 200
        })
    })

    $('.default').on($.modal.BEFORE_OPEN, function () {
        $('html').css({
            overflow: 'hidden'
        })
    })

    $('.default').on($.modal.AFTER_CLOSE, function () {
        $('html').css({
            overflow: 'visible'
        })
    })
    $('.order__item-title--exist').click(() => {
        $('#login').modal({
            fadeDuration: 200
        })
    })
}

else {
    $('.order__item-title--exist').click(() => {
        $('#login').addClass('active')
        $('html').css({
            overflow: 'hidden'
        })
        $('.menu__item:nth-child(3)').addClass('active')
    })

    $('.menu__item:nth-child(3)').click(() => {
        let loginModal = $('#login')
        let successModal = $('#success')
        let regModal = $('#reg')
        let resetModal = $('#reset')

        if (loginModal.hasClass('active')) {
            loginModal.removeClass('active')
            $('html').css({
                overflow: 'visible'
            })
        }
        else {
            loginModal.addClass('active')
            $('html').css({
                overflow: 'hidden'
            })
        }

        if (successModal.hasClass('active')) {
            successModal.removeClass('active')
            loginModal.removeClass('active')
            $('html').css({
                overflow: 'visible'
            })
        }

        if (regModal.hasClass('active')) {
            regModal.removeClass('active')
            loginModal.removeClass('active')
            $('html').css({
                overflow: 'visible'
            })
        }

        if (resetModal.hasClass('active')) {
            resetModal.removeClass('active')
            loginModal.removeClass('active')
            $('html').css({
                overflow: 'visible'
            })
        }
    })
    $('.menu__item:not(:nth-child(3))').click(() => {
        $('#login, #success, #reg, #reset').removeClass('active')
    })
    $('.reg').click(() => {
        $('#login').removeClass('active')
        $('#reg').addClass('active')
        $('.login__form').addClass('active')
    })
    $('.entry').click(() => {
        $('#reg').removeClass('active')
        $('#login').addClass('active')
    })
    $('.login__form-forgot').click(() => {
        $('#login').removeClass('active')
        $('#reset').addClass('active')
    })
    $('.login__form-cancel').click(() => {
        $('#login').addClass('active')
        $('#reset').removeClass('active')
    })
    $('.reset__form').on('submit', function (e) {
        e.preventDefault()

        $('#success').addClass('active')
        $('#reset').removeClass('active')
    })
    $('.login__form-text--again').click(() => {
        $('#success').removeClass('active')
        $('#reset').addClass('active')
    })
}

$('.login__switch-button').click(function () {
    $(this).addClass('active').siblings().removeClass('active')

    let hiddenInput = $('.yur')

    if ($(this).text() === 'Физическое лицо') {
        $('.login__hidden').css({
            display: 'none'
        })

        hiddenInput.attr('disabled', '')
    }
    else {
        $('.login__hidden').css({
            display: 'flex'
        })
        hiddenInput.removeAttr('disabled')
    }
})

$('.products__click, .mobile__click').click(() => {
    $('#click').modal({
        fadeDuration: 200
    })
})

$('.mobile--order').click(() => {
    $('#click').modal({
        fadeDuration: 200
    })
})
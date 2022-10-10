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

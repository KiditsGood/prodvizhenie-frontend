$(window).on('load', function () {
    if ($('body').height() < $(window).height()) {
        $('.footer').addClass('footer--height')
    }
})

$('.cart__del').click(() => {
    if ($('body').height() < $(window).height()) {
        $('.footer').addClass('footer--height')
    }
})
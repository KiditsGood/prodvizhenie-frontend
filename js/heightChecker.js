let footerSel = $('.footer')

$(window).on('load', function () {
    if ($('body').height() < $(window).height() - footerSel.height()) {
        footerSel.addClass('footer--height')
    }
})

$('.cart__del').click(() => {
    if ($('body').height() < $(window).height() - footerSel.height()) {
        footerSel.addClass('footer--height')
    }
})
$('.list__value').click(function () {
    $(this).toggleClass('active')

    $('.list__select').slideToggle(200)
})

$('.list__select-item').click(function () {
    $('.list__value').html($(this).text() + '<i class="list__value-icon icon-right"></i>').removeClass('active')

    $('.list__select').slideUp(200)
})

$('.view__item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.view__item:first-child').click(() => {
    $('.products__item').removeClass('line')
})

$('.view__item:last-child').click(() => {
    $('.products__item').addClass('line')
})

$('.mobile__filter').click(() => {
    $('.catalog__filter').addClass('active')
    $('html').css('overflow', 'hidden')
})

$('.filter--top--image').click(() => {
    $('.catalog__filter').removeClass('active')
    $('html').css('overflow', 'auto')
})

$('.filter__name').click(function () {
    if ($(window).width() < 1000) {
        $('.filter__check').slideUp(200)
        $('.filter__name').removeClass('active')

        if ($(this).parent().find('.filter__check').css('display') === 'none') {
            $(this).addClass('active').parent().find('.filter__check').slideDown(200)
        }
        else {
            $(this).removeClass('active').parent().find('.filter__check').slideUp(200)
        }
    }
})

$('.pref__button').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
    }
    else {
        $(this).addClass('active')
    }
})
$('.data__main-form--button').on('click',function (e) {
    if ($(this).text() === 'Сохранить') {
        $(this).text('Изменить данные')
        $(this).attr('type', 'submit')
    }
    else {
        $(this).attr('type', 'button')
        $(this).text('Сохранить')

        $('.data__main-form--input').removeAttr('disabled')
    }
})

$('.data__main-visible').click(function () {
    $(this).next().slideToggle(200)
})

$('.icon-eye').click(function () {
    if ($(this).prev().attr('type') === 'password') {
        $(this).prev().attr('type', 'text')
    }
    else {
        $(this).prev().attr('type', 'password')
    }
})

$('.lk .product__tabs-item').click(function () {
    if ($(this).attr('data-attr') === 'history') {
        $('.my').css('display', 'flex')
        $('.data, .password, .documents').css('display', 'none')
    } else if ($(this).attr('data-attr') === 'data') {
        $('.data').css('display', 'flex')
        $('.my, .password, .documents').css('display', 'none')
    } else if ($(this).attr('data-attr') === 'password') {
        $('.password').css('display', 'flex')
        $('.my, .data, .documents').css('display', 'none')
    } else if($(this).attr('data-attr') === 'documents') {
        $('.documents').css('display', 'flex')
        $('.data, .password, .my').css('display', 'none')
    }
})

$('.my__wrap-item--field').click(function () {
    if ($(this).next().css('display') === 'none') {
        $('.my__wrap-hidden').slideUp(200)

        $(this).next().slideDown(200)
    }
    else {
        $(this).next().slideUp(200)
    }
})

$('.data__main-org--add').click(function () {
    if ($('.hidden__create').css('display') === 'none') {
        $(this).text('Скрыть')
        $('.hidden__create *').removeAttr('disabled')
    }
    else {
        $('.hidden__create *').attr('disabled', '')
        $(this).text('Добавить организацию')
    }

    $('.hidden__create').slideToggle(200)
})

$('.hidden__buttons-item.green').click(function () {
    if ($(this).text() === 'Редактировать') {
        $(this).text('Сохранить')

        $('.data__main-hidden *').removeAttr('disabled')
    }
    else {
        $(this).text('Редактировать')
        $(this).attr('type', 'submit')
    }
})

$('.new__select').click(function() {

    if ($(this).next().css('display') === 'none') {
        $('.new__select').removeClass('active')
        $('.new__select-hidden').slideUp(200)

        $(this).next().slideDown(200)
    }
    else {
        $(this).next().slideUp(200)
    }

    $(this).toggleClass('active')
})

$('.new__select-hidden--item').click(function () {
    $(this).parent().slideUp(200)
    $(this).parent().prev().removeClass('active')
    $(this).parent().prev().find('p').text($(this).text())

    $(this).parent().find('.hidden__input').val($(this).attr('data-value'))
    console.log($(this).parent().find('.hidden__input').val())
})
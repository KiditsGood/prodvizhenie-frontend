$('.data__main-form--button').click(function () {
    if ($(this).attr('type') === 'button') {
        $(this).text('Сохранить')
        $(this).attr('type', 'submit')
    }
    else {
        $(this).attr('type', 'submit')
        $(this).text('Изменить данные')
    }
})
$('.products__buy').click(function () {
    let buyButton = $(this)
    let buyIcon = $(this.firstElementChild)
    let buyText = $(this.lastElementChild)

    buyButton.addClass('active')
    buyIcon.addClass('active icon-vector-stroke').removeClass('icon-group')
    buyText.text('В корзине')
    buyText.addClass('active')

    setTimeout(function () {
        buyButton.removeClass('active')
        buyIcon.removeClass('active icon-vector-stroke').addClass('icon-group')
        buyText.text('В корзину')
        buyText.removeClass('active')
    }, 2000)
})

$('.products__col-minus').click(function () {
    let counter = parseInt($(this).next().val())

    if (counter <= 1) {
        $(this).next().val(1)
    }
    else {
        $(this).next().val(counter - 1)
    }
})

$('.products__col-plus').click(function () {
    let counter = parseInt($(this).prev().val())

    if (counter >= 999) {
        $(this).prev().val(999)
    }
    else {
        $(this).prev().val(counter + 1)
    }
})

$(document).ready(function() {
    $(".products__col-input").on('blur', function () {
        if ($(this).val() === '' || $(this).val() == 0){
            $(this).val(1)
        }
    })

    $(".products__col-input").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {

            // Ничего не делаем
            return;
        } else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });
});

const swiper = new Swiper('.main__slider', {

})
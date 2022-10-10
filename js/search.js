$('.mobile__header-search').on('focus', function () {
    if ($(window).width() < 1000) {
        console.log(123)
        $('.search--container').addClass('active')
        $('#mobile__header-burger').html('<svg width="19" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M11 5L4 12L11 19M4 12H20" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n')

        $(this).on('keyup', function () {
            if ($(this).val().length > 2) {

            }
        })
    }
})

$('.mobile__header-search').on('blur', function () {
    if ($(window).width() < 1000) {
        $('.search--container').removeClass('active')
        $('#mobile__header-burger').html('<span></span>')
    }
})

$('.input_selector').on('keyup', function (){

})
$('.product__tabs-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.product__tabs-item:first-child').click(() => {
    $('.product__field').css('display', 'flex')
    $('.product__desc, .product__files, .product__videos').css('display', 'none')
})

$('.product__tabs-item:nth-child(2)').click(() => {
    $('.product__desc').css('display', 'flex')
    $('.product__field, .product__files, .product__videos').css('display', 'none')
})

$('.product__tabs-item:nth-child(3)').click(() => {
    $('.product__files').css('display', 'flex')
    $('.product__desc, .product__field, .product__videos').css('display', 'none')
})

$('.product__tabs-item:last-child').click(() => {
    $('.product__videos').css('display', 'flex')
    $('.product__desc, .product__files, .product__field').css('display', 'none')
})
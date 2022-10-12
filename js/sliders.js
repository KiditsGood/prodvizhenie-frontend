const swiper = new Swiper('.main__slider', {
    pagination: {
        el: ".main__slider-dots",
        clickable: true
    }
})

const prev = new Swiper('.previous', {
    navigation: {
        nextEl: '.previous--next',
        prevEl: '.previous--prev'
    },
    spaceBetween: 20,
    slidesPerView: 4
})

const withSect = new Swiper('.with', {
    navigation: {
        nextEl: '.with--next',
        prevEl: '.with--prev'
    },
    spaceBetween: 20,
    slidesPerView: 4
})

const same = new Swiper('.same', {
    navigation: {
        nextEl: '.same--next',
        prevEl: '.same--prev'
    },
    spaceBetween: 20,
    slidesPerView: 4
})

const popular = new Swiper('.popular', {
    navigation: {
        nextEl: '.popular--next',
        prevEl: '.popular--prev'
    },
    spaceBetween: 20,
    slidesPerView: 4
})
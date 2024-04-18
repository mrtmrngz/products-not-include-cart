const sliderProductContainer = document.querySelector('.products-slider .products-list')


export function swiperSlide1() {
    sliderProductContainer && new Swiper('.productSlider',  {
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        breakpoints: {
            996: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            566: {
                slidesPerView: 2,
            }
        }
    })
}
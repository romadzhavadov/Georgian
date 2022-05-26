const btnMenu = document.querySelector('.header__btn-menu');
const nav = document.querySelector('.header__nav');

btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('header__btn-menu--open');
    nav.classList.toggle('header__nav--open');
})

const swiper = new Swiper('.swiper', {
slidesPerView: "auto",
spaceBetween: 5,
loop: true,
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
},

});
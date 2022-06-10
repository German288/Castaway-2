$(function() {

    $('.menu__btn, .menu a').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

});
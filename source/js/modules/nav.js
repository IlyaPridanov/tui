'use strict';

(function () {
    const headerBtn = document.querySelector('.header__btn');
    const nav = document.querySelector('.js-nav-header');

    headerBtn.addEventListener('click' , function() {
        headerBtn.classList.toggle('header__btn--active');
        nav.classList.toggle('nav--inactive');
    });
})();

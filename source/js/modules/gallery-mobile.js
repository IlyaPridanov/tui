'use strict';

(function () {
    let mobile = window.matchMedia("(max-width: 767px)").matches;

    let button = document.querySelector('.gallery__btn');
    let row = document.querySelector('.gallery__row');
    let flag = true;

    let rowHeight = row.offsetHeight;

    if (mobile) {
        button.classList.remove('hidden');
        row.classList.add('gallery__row--inactive');
        button.addEventListener('click' , function () {
            if (flag) {
                row.classList.remove('gallery__row--inactive');
                row.style.maxHeight = rowHeight + 'px';
                button.textContent = 'Скрыть';
                flag = false;
            } else {
                row.classList.add('gallery__row--inactive');
                row.style.maxHeight = '';
                button.textContent = 'Посмотреть ещё';
                flag = true;
            }
        })
    }

})();

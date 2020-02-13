'use strict';

(function () {
    let template = document.querySelector('#gallery-template');
    let popup = document.querySelector('.gallery-popup');
    let popupList = document.querySelector('.gallery-popup__list');
    let buttonClose = document.querySelector('.gallery-popup__btn-close');

    let row = document.querySelector('.gallery__row');
    let card = document.querySelectorAll('.gallery__img');
    let button = document.querySelector('.gallery__btn');
    let flag = true;

    let mobile = window.matchMedia("(max-width: 767px)").matches;
    let rowHeight = row.offsetHeight;

    let open = function () {
        popup.classList.remove('hidden');
    }

    let close = function () {
        popup.classList.add('hidden');
    }

    card.forEach( function(item) {
        let cardPopup = template.content.cloneNode(true).querySelector('div');
        cardPopup.querySelector('img').setAttribute('src' , item.querySelector('img').getAttribute('src'));
        cardPopup.querySelector('source').setAttribute('srcset' , item.querySelector('source').getAttribute('srcset'));
        console.log(cardPopup);
        popupList.appendChild(cardPopup);
    })

    card.forEach( function(item) {
        item.addEventListener('click' , function() {
            open();
        })
    })

    // popup.addEventListener('click' , function (evt) {
    //     if ((evt.target === this)) {
    //         close();
    //     }
    // })

    buttonClose.addEventListener('click' , function () {
        close();
    })

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

// 'use strict';

// (function () {
//     let template = document.querySelector('#gallery-template');
//     let popup = document.querySelector('.gallery-popup');
//     let popupList = document.querySelector('.gallery-popup__list');
//     let buttonClose = document.querySelector('.gallery-popup__btn-close');
//     let sliderGallery = document.querySelector('.slider-gallery');

//     let card = document.querySelectorAll('.gallery__img');

//     // let sliderContainers = document.querySelector('.slider-popup');

//     let open = function () {
//         popup.classList.remove('visually-hidden');
//     }

//     let close = function () {
//         popup.classList.add('visually-hidden');
//         /*Удаляет все дочерние элементы у слайдера*/
//         while (popupList.firstChild) {
//             popupList.removeChild(popupList.firstChild);
//         }
//     }

//     /*Сортирует массив индексов - сначала идут все индексы после выбранного а
//     потом добавляются те что были до*/

//     let sort = function (arr , indexSort) {
//         let indexArr = [];
//         for (let j = 0;j < arr.length; j++) {
//             indexArr[j] = j;
//         }
//         let newIndex = indexArr.splice(indexSort,(indexArr.length - indexSort)).concat(indexArr.slice(0 , indexSort));

//         return newIndex;
//     }

//     /*при каждом клике сохдаёт новый массив слайдов
//     в зависимости от кликнутого
//     и запускает слайдер*/

//     card.forEach( function(item , index) {
//         item.addEventListener('click' , function() {
//             let newIndexArr = sort(card , index);
//             newIndexArr.forEach( function(indexItem) {
//                 let cardPopup = template.content.cloneNode(true).querySelector('div');
//                 cardPopup.querySelector('img').setAttribute('src' , card[indexItem].querySelector('img').getAttribute('src'));
//                 cardPopup.querySelector('source').setAttribute('srcset' , card[indexItem].querySelector('source').getAttribute('srcset'));
//                 popupList.appendChild(cardPopup);
//             })
//             window.getSlider(sliderGallery);
//             open();
//         })
//     })

//     // popup.addEventListener('click' , function (evt) {
//     //     if ((evt.target === this)) {
//     //         close();
//     //     }
//     // })

//     buttonClose.addEventListener('click' , function () {
//         close();
//     })
// })();

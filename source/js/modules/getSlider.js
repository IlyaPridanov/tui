'use strict';

(function () {
    var sliderContainers = document.querySelectorAll('.slider');

    var getSlider = function (slider) {
        if (slider) {
            var container = slider.querySelector('.swiper-container');
            var next = slider.querySelector('.js-btn-next');
            var prev = slider.querySelector('.js-btn-prev');
            var pagination = slider.querySelector('.swiper-pagination');
            var slidesPerView = 1;
            var spaceBetween = 20;
            return new window.Swiper(container, {
                loop: true,
                navigation: {
                nextEl: next,
                prevEl: prev,
                },
                pagination: {
                el: pagination,
                clickable: true,
                },
                slidesPerView: slidesPerView,
                spaceBetween: spaceBetween,
                // breakpoints: {
                //   320: {
                //     slidesPerView: 1,
                //     spaceBetween: spaceBetween,
                //   },
                //   600: {
                //     slidesPerView: slidesPerView600,
                //     spaceBetween: spaceBetween,
                //   },
                //   1000: {
                //     slidesPerView: slidesPerView,
                //     spaceBetween: spaceBetween,
                //   },
                // },
            });
        }
    };

    window.onload = function () {
        sliderContainers.forEach(function (currentValue) {
            getSlider(currentValue);
        });
    };

    window.getSlider = getSlider;
})();

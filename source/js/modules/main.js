'use strict';

(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const header = document.querySelector('.header');
        const main = document.querySelector('.main');

        let headerHeight = header.offsetHeight + 'px';

        main.style.marginTop = '-' + headerHeight;
        main.style.paddingTop = headerHeight;
        console.log(headerHeight);
    });
})();

'use strict';

(function () {
    let telInputs = document.querySelectorAll('.js-tel-input');

    let maskOptions = {
        mask: '+{7} (000) 000-00-00'
    };

    if (telInputs.length) {
        telInputs.forEach(function (tel) {
            return new window.IMask(tel, maskOptions);
        });
    }

    return null;
})();

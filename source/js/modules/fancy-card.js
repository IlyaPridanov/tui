$(document).ready(function() {
    let $box = $('.fancy-container');

    let $getFancy = function (container) {
        let $fancyContainer = container;
        let $card = $fancyContainer.find('.fancy-img');
        let $cardImg = $card.find('img');

        let $cardJson = [];

        $cardImg.each(function(i,value){
            $cardJson[i] = {
                src: value.getAttribute('src'),
                opts: {
                    thumb: value.getAttribute('src')
                }
            }
        });

        $card.on('click', function() {
            $.fancybox.open($cardJson,
            {
                loop : true,
                imageScale : true,
                thumbs : {
                    autoStart : true
                },
                index : $(this).data('index'),
                buttons: [
                    "slideShow",
                    "fullScreen",
                    "thumbs",
                    "close"
                ]
            });
        });
    };
    // $box.forEach(function (currentValue) {
    //     $getFancy(currentValue);
    // });

    $box.each(function(i,elem) {
        getFancy(elem);
        // console.log(elem);
    })
});

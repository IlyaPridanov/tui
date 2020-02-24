$(document).ready(function() {
    let $fancyContainer = $('.fancy-container');
    let $card = $fancyContainer.find('.catalog__img');
    let $cardImg = $card.find('img');

    console.log($cardImg);

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
});

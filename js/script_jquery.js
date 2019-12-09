$(document).ready(function () {
    $('.electronics-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 2500,
                    dots: false
                }
            }
        ]
    });
});

/*$(".electronics-card").on("appear", function(){
    $(this).addClass("fadeInRight");
})*/
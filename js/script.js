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

    
    var os = new OnScreen();

    os.on('enter', '.pros-card:nth-child(3n+2)', (element, event) => {
        element.classList.add('fadeInLeft');
    });
    os.on('enter', '.pros-card:nth-child(3n+1)', (element, event) => {
        element.classList.add('fadeInRight');
    });
    os.on('enter', '.pros-card:nth-child(3)', (element, event) => {
        element.classList.add('fadeInDown');
    });
    os.on('enter', '.pros-card:nth-child(6)', (element, event) => {
        element.classList.add('fadeInUp');
    });
});
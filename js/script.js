$(document).ready(function () {
    $('.electronics-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
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
/*
var os = new OnScreen({
    tolerance: 0,
    debounce: 100,
    container: window
});
os.on('enter', '.pros-card:nth-child(1)', (element, event) => {
    // makes's the element's text red
    element.style.right = 0;

    // `event` is a string that tells you what type of event it is.
    // in this case it would be 'enter'
});*/

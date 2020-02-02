// After page load
$(document).ready(function () {

    //Slider
    let slider = $('#lightSlider');
    slider.lightSlider({
        item: 6,
        slideMove: 3,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        controls: false,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });

    $('.prevBtn').click(function () {
        slider.goToPrevSlide();
    });

    $('.nextBtn').click(function () {
        slider.goToNextSlide();
    });

});
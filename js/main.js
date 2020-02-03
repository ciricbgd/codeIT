// After page load
$(document).ready(function () {

    //Slider
    let slider = $('#lightSlider');
    slider.lightSlider({
        item: 6,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        controls: false,
        responsive: [{
                breakpoint: 1700,
                settings: {
                    item: 5
                }
            },
            {
                breakpoint: 1450,
                settings: {
                    item: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    item: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
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


    //Hamburger menu

    let nav = $('#nav');
    let hamburgerOpenBtn = $('.hamburger-open');
    let hamburgerCloseBtn = $('.hamburger-close');

    function openNav() {
        nav.animate({
            left: "0"
        });
    }

    function closeNav() {
        nav.animate({
            left: "100vw"
        });
    }

    hamburgerOpenBtn.click(function () {
        openNav();
        $(this).hide();
    });

    hamburgerCloseBtn.click(function () {
        closeNav();
        hamburgerOpenBtn.show();
    });


});
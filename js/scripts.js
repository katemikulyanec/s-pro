$(document).ready(function () {

    //timer
    new TimezZ('.j-timer', {
        date: 'September 18, 2018 00:00:00',
        days: 'days',
        hours: 'hours',
        minutes: 'minutes',
        seconds: 'seconds',
        tagNumber: 'span',
        tagLetter: 'i',
        stop: false,
    });



    //slick slider
    $('.single-item').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        appendArrows: $('.reviews-arrow .container'),
        prevArrow: '<button id="prev" type="button" class="btn-reviews btn-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn-reviews btn-next"></button>'
    });

    //custom function showing current slide
    var $status = $('.paging-info');
    var $slickElement = $('.single-item');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' of ' + slick.slideCount);
    });

    $('.news-slider-btns .next-news').click(function () {
        slickk.slick('slickNext');
    });


    $(".togle-menu").click(function () {
        $(".site-navigation").slideToggle();
    });

});

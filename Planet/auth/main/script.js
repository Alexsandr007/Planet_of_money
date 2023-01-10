if($(window).width() > 720) {
    $(document).ready(function () {
        $('.slider').slick({
            arrows: true,
            dots: true
        });
    });
}
if ($(window).width() < 721) {
    $(document).ready(function () {
        $('.slider').slick({
            arrows: false,
            dots: true
        });
    });
}

$('.auth-header-notification').hide();
$(".auth-header__notification").click(function () {
    $(".auth-header-notification").slideToggle("200");
});
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $(".header_settings").addClass("header_scrolled");
    } else {
        $(".header_settings").removeClass("header_scrolled");
    }
});
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    let footer = $('.footer');
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu(){
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('.auth__content').addClass('auth__content_burger')
            $('.footer').addClass('footer_burger')
            $('body').css('overflow', 'hidden')
            $('.platforms-structures__programm').css('display', 'none');
            $('.platforms-structures__programm').css('display', 'none');
            $('.platforms-structures__programm').css('display', 'none');
        } else {
            $('.platforms-structures__programm').css('display', 'flex');
            $('.platforms-structures__programm').css('display', 'flex');
            $('.platforms-structures__programm').css('display', 'flex');
            $('body').css('overflow', 'visible');
            $('.auth__content').removeClass('auth__content_burger')
            $('.footer').removeClass('footer_burger')
        }
    }
}

burgerMenu('.burger-menu');


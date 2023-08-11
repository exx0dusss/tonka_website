$(document).ready(function () {
    $('#hamburger-button').click(function () {
        $(this).toggleClass('open');
        $('#hamburger-menu-wrapper').toggleClass('open');
        document.body.classList.toggle('no-scroll');
        $('.header-container').toggleClass('open');

    });
});


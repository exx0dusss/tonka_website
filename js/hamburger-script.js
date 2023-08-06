$(document).ready(function () {
    $('#hamburger-button').click(function () {
        $(this).toggleClass('open');
        $('#header-nav-container').toggleClass('open');
        document.body.classList.toggle('no-scroll')

    });
});


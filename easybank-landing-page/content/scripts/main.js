//Custom Scripts to be written here

$(document).ready(function () {
    /* mobile menu click function */
    $(".hamburger").click(function () {
        $(".mobile-menu").toggleClass("show-menu");
        $(this).toggleClass("close-icon");
        $('.menu-overlay').toggleClass("overlay");
        if ($(".mobile-menu").hasClass("show-menu")) {
            $(".mobile-banner").addClass("hide-banner");
        }
        else {
            $(".mobile-banner").removeClass("hide-banner");
        }
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        $current = $(this).scrollTop();
        if ($current > 0) {
            $("#topHeader").addClass("header-fixed")
        } else {
            $("#topHeader").removeClass("header-fixed")
        }
    })
})
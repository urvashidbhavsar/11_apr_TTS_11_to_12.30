$(document).ready(function () {
    $icon = $(".fa-bars");
    $(".tbtn").click(function () {
        $(".navbar").toggleClass("nav-toggle")
        if ($(".navbar").hasClass("nav-toggle") == true) {
            $icon.removeClass("fa-bars")
            $icon.addClass("fa-close");
        } else {
            $icon.removeClass("fa-close")
            $icon.addClass("fa-bars")
        }
    })
})



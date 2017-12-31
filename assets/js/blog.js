$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});
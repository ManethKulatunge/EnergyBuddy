$(document).ready(function () {
    $(".bot-image").mouseover(function () {
        $(this).css("transform", "scale(1.1)");
    });
    $(".bot-image").mouseleave(function () {
        $(this).css("transform", "scale(1)");
    })
});
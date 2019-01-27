/**
 * Function fetch results from api and elements are render elements dynamically
 * @param {*} cityName 
 */
function getSuggestion(cityName, handleData) {
    $.ajax({
        method: "GET",
        url: "http://172.30.149.122:5000/result?city=" + cityName,
        dataType: "json",
        beforeSend: function () {
            $(".preloader").css("display", "block");
        },
        success: function (data) {
            $(".preloader").css("display", "none");
            handleData(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}
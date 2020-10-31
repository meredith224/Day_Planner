$(document).ready(function () {

    var todayEl = $("#today");

    todayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    var inputEl = $(".time-block");
    var saveBtns = $(".saveBtn");
    var data = {};

    var update = function () {
        todayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var now = moment().hour(); 

    inputEl.each(function (i, element) {
        element = $(element);
        if (now > element.attr("data-hour")) {
            element.addClass("past").removeClass("future present");
            } 
        else if (now == element.attr("data-hour")) {
            element.addClass("present").removeClass("future past");
            }
        });
    }

    setInterval(update, 1000);

    saveBtns.on("click", function (event) {


        var button = $(this);

        var btnData = $(this).attr("data-time");
        console.log(btnData);


        var dTarget = $("#d" + btnData);
        console.log(dTarget);


        console.log(dTarget.val());

       
        localStorage.setItem(dTarget.attr("id"), dTarget.val());
    });


    $("#d1").text(localStorage.getItem("d1"));
    $("#d2").text(localStorage.getItem("d2"));
    $("#d3").text(localStorage.getItem("d3"));
    $("#d4").text(localStorage.getItem("d4"));
    $("#d5").text(localStorage.getItem("d5"));
    $("#d6").text(localStorage.getItem("d6"));
    $("#d7").text(localStorage.getItem("d7"));
    $("#d8").text(localStorage.getItem("d8"));
    $("#d9").text(localStorage.getItem("d9"));


    $("#clear").on("click", function () {
        console.log("clicked");
        localStorage.clear();
        window.location.reload();


    });

});


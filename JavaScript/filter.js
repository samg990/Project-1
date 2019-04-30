
// THIS JAVASCRIPT FILE ADDS JQUERY FUNCTIONALITY TO THE DONER PAGE FILTER
// this can be added to main javascript.

$(document).ready(function () {

    $("#filter-header").click(function () {
        $("#filter-toggle").toggle("slow", function () {
        });
    });

    $("#age-header").click(function () {
        $("#filter-box-age").toggle("slow", function () {
        });
    });

    $("#goal-header").click(function () {
        $("#filter-box-goal").toggle("slow", function () {
        });
    });

    $("#location-header").click(function () {
        $("#filter-box-location").toggle("slow", function () {
        });
    });

    $("#desc-header").click(function () {
        $("#filter-box-desc").toggle("slow", function () {
        });
    });
});

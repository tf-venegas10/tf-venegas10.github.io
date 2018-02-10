/* global $*/
/* global console*/
/* global WOW */

"use strict";


//Add wow animations
$(document).ready(function() {


    new WOW().init();

});

//JQuery hobbies


function callBackHobbies(data) {
    var hobbies = $("#hobbies > div:nth-child(2)");
    data.forEach(function (d) {

        var foto = $("<img class= \"col-sm-6 icon\" />")
            .attr("alt", d.alt)
            .attr("src", d.img);
        var title = $("<h5 class='col-sm-6'>")
            .text(d.nombre);
        var hobbie = $("<div class='interest col-sm-3 wow flipInY'>")
           .append($("<div class='row'>")
                .append("<div class='col-sm-3'>")
                .append(foto)
                .append("<div class='col-sm-3'>"))
           .append($("<div class='row'>")
                .append("<div class='col-sm-3'>")
                .append(title)
                .append("<div class='col-sm-3'>"));
        hobbies.append(hobbie);
    });
}

//JQuery interests


function callBackInterests(data) {
    var interests = $(".interestsRow > div:nth-child(2)");
    data.forEach(function (d) {

        var foto = $("<img class= \"col-sm-8 icon\" />")
            .attr("alt", d.alt)
            .attr("src", d.img);
        var title = $("<h5 class='col-sm-6'>")
            .text(d.nombre);
        var interest = $("<div class='interest col-sm-6 wow flipInY'>")
            .append($("<div class='row'>")
                .append("<div class='col-sm-2'>")
                .append(foto)
                .append("<div class='col-sm-2'>"))
            .append($("<div class='row'>")
                .append("<div class='col-sm-3'>")
                .append(title)
                .append("<div class='col-sm-3'>"));
        interests.append(interest);
    });
}

$.getJSON("JSON/hobbies.json", callBackHobbies);
$.getJSON("JSON/interests.json", callBackInterests);

function closeMenu() {
    $(".nav-link").on("click", function () {
        console.log("entereddd");
        $(".navbar-toggler").click();
        closeMenu();
    });
}
closeMenu();
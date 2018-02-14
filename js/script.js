/*global $ document console WOW*/

"use strict";


//Add wow animations
$(document).ready(function () {
    new WOW().init();
});

//JQuery callback function to add hobbies

function callBackHobbies(data) {
    var hobbies = $("#hobbies > div:nth-child(2)");
    data.forEach(function (d) {
        //add picture to hobbie
        var foto = $("<img class= \"col-sm-6 icon\" />")
            .attr("alt", d.alt)
            .attr("src", d.img);
        //add title
        var title = $("<h5 class='col-sm-6'>")
            .text(d.nombre);
        //consolidate hobbie
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

//JQuery callback function to add interests (images)
function callBackInterests(data) {
    var interests = $(".interestsRow > div:nth-child(2)");
    data.forEach(function (d) {
        //add picture
        var foto = $("<img class= \"col-sm-8 icon\" />")
            .attr("alt", d.alt)
            .attr("src", d.img);
        //add title
        var title = $("<h5 class='col-sm-6'>")
            .append($("<div>")
                .text(d.nombre.split(" ")[0]))
            .append(($("<div>"))
                .text(d.nombre.split(" ")[1]));
        //consolidate interest
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

//JQuery callback function to add projects in carousel and modals
function callbackProjects(data) {
    var items = 0;
    data.forEach(function(d){
        //add pictures that will go to modals
        var pics = $("<div class='row'>");
        d.pictures.forEach(
            function (p) {
                pics.append($("<img class='col-sm-6'>")
                    .attr("src", p.src)
                    .attr("alt",p.alt));
            }
        );
        //consolidate modal
        var modal=$("<div class=\"modal fade\" >")
            .attr("id",d.name)
            .append($("<div class=\"modal-dialog modal-lg\" >")
                .append($("<div class=\"modal-content\">")
                    .append($("<div class=\"modal-header\">")
                        .append($("<h4 class=\"modal-title\">")
                            .text(d.name))
                        .append($("<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>")))
                    .append($("<div class=\"modal-body\">")
                        .append($("<ul  class=\"list-group\">")
                            .append($("<li  class=\"list-group-item\">")
                                .text("Team members: " + d.teamMembers))
                            .append($("<li  class=\"list-group-item\">")
                                .text("Project emphasis: " + d.emphasis))
                            .append($("<li  class=\"list-group-item\">")
                                .text("Architecture: " + d.architecture))
                            .append($("<li  class=\"list-group-item\">")
                                .text("Duration: " + d.duration))
                            .append($("<li  class=\"list-group-item\">")
                                .text("Context: " + d.context))
                            .append($("<li  class=\"list-group-item\">")
                                .text("Made on: " + d.year))
                            .append($("<li  class=\"list-group-item\">")
                                .text("Link: ")
                                .append($("<a target=\"_blank\">")
                                    .attr("href",d.link)
                                    .text("external link"))))
                        .append(pics))
                    .append($("<div class=\"modal-footer\">")
                        .append($("<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">")
                            .text("Close")))));
        //append modal
        $("body").append(modal);
        $(".carousel-indicators").append($("<li data-target='#projectsCarousel' data-slide-to='" + items + "' >"));
        //Adding items to carousel
        $(".carousel-inner")
            .append($("<div class='carousel-item " + (items === 0? "active" : "") + "'>")
                .append($("<img>")
                    .attr("src", d.iconSrc)
                    .attr("alt", d.iconAlt))
                .append($("<div class=\"carousel-caption\">")
                    .append($("<h3>")
                        .text(d.name))
                    .append($("<p>"))
                    .text(d.smallDescription))
                .append($("<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" >")
                    .attr("data-target", "#" + d.name)
                    .text("Learn More")));
        items += 1;
    });
}
//call the 3 callback functions when jason are loaded
$.getJSON("JSON/hobbies.json", callBackHobbies);
$.getJSON("JSON/interests.json", callBackInterests);
$.getJSON("JSON/projects.json", callbackProjects);


//small script to close menu bar when one item is clicked
// language=JQuery-CSS
$(".nav-link").on("click", function () {
        $(".navbar-toggler").click();
});

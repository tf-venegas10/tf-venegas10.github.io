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
        var foto = $("<img class= \"col-8 icon  rounded-circle\" />")
            .attr("alt", d.alt)
            .attr("src", d.img);
        //add title
        var title = $("<h5 class='col-8'>")
            .text(d.nombre);
        //consolidate hobbie
        var hobbie = $("<div class='hobie col-6 col-sm-3 wow flipInY'>")
            .append($("<div class='row'>")
                .append("<div class='col-2'>")
                .append(foto)
                .append("<div class='col-2'>"))
            .append($("<div class='row'>")
                .append("<div class='col-2'>")
                .append(title)
                .append("<div class='col-2'>"));
        hobbies.append(hobbie);
    });
}

//JQuery callback function to add interests (images)
function callBackInterests(data) {
    var interests = $(".interestsRow > div:nth-child(2)");
    data.forEach(function (d) {
        //add picture
        var foto;
        foto = $("<img src='' class= \"col-8 icon\" />")
            .attr("alt", d.alt)
            .attr("src", d.img);
        //add title
        var title = $("<h5 class='col-8'>")
            .append($("<div>")
                .text(d.nombre.split(" ")[0]))
            .append(($("<div>"))
                .text(d.nombre.split(" ")[1]));
        //consolidate interest
        var interest = $("<div class='interest col-12 col-md-6 wow flipInY'>")
            .append($("<div class='row'>")
                .append("<div class='col-2'>")
                .append(foto)
                .append("<div class='col-2'>"))
            .append($("<div class='row'>")
                .append("<div class='col-2'>")
                .append(title)
                .append("<div class='col-2'>"));
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
                pics.append($("<img src='' class='col-12 col-sm-6 image-carousel'>")
                    .attr("src", p.src)
                    .attr("alt",p.alt));
            }
        );
        //name to show
        var namePieces = d.name.split("-");
        var name = "";
        namePieces.forEach(function(p){
            name += " " + p;
        });
        //consolidate modal
        var modal=$("<div class=\"modal fade\" >")
            .attr("id",d.name)
            .append($("<div class=\"modal-dialog modal-lg\" >")
                .append($("<div class=\"modal-content\">")
                    .append($("<div class=\"modal-header\">")
                        .append($("<h4 class=\"modal-title\">")
                            .text(name))
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
                .append($("<img src=''>")
                    .attr("src", d.iconSrc)
                    .attr("alt", d.iconAlt))
                .append($("<div class=\"carousel-caption\">")
                    .append($("<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" >")
                        .attr("data-target", "#" + d.name)
                        .text("Learn More"))
                    .append($("<h3 class='carousel-titles'>")
                        .text(name))
                    .append($("<p class='carousel-descriptions'>")
                        .text(d.smallDescription))));
        items += 1;
    });
}
//call the 3 callback functions when jason are loaded
$.getJSON("JSON/hobbies.json", callBackHobbies);
$.getJSON("JSON/interests.json", callBackInterests);
$.getJSON("JSON/projects.json", callbackProjects);

//This function replaces the marker on the nav bar that tells the user its location
function replaceActual (){
    var wannabe=$("a.active");
    console.log(wannabe);
    $("#actual").text(wannabe.text());
}

//small script to close menu bar when one item is clicked it also replaces actual marker
// language=JQuery-CSS
$(".nav-link").on("click", function () {
    $(".navbar-toggler").click();
    setTimeout(replaceActual, 100);
});

//this will change the actual marker when the home link is clicked
$(".navbar-brand").on("click", function () {
    setTimeout(replaceActual, 100);
});


//this create an event listener for every time we scroll to fix the location marker
//this uses the nav-bar that automatically adapts when changed
$(window).on("scroll", function(){
    replaceActual();
});

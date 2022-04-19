"use strict";

$(document).ready(function () {
  /* Källa till kod rad 8-29: https://codepen.io/acarlie/pen/LKmORw */
  var sectionIds = $("a.nav-link");

  $(document).scroll(function () {
    sectionIds.each(function () {
      var container = $(this).attr("href");
      var containerOffset = $(container).offset().top;
      var containerHeight = $(container).outerHeight();
      var containerBottom = containerOffset + containerHeight;
      var scrollPosition =
        $(document).scrollTop() +
        $(
          ".navbar"
        ).height(); /* +$(".navbar").height() för att scrollspy ska kicka in när sectionen börjar*/

      if (
        scrollPosition < containerBottom - 20 &&
        scrollPosition >= containerOffset - 20
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
  /*Källa: https://stackoverflow.com/questions/48141740/nav-bar-scrolling-too-far-on-my-page*/
  $(".navbar a").click(function (e) {
    e.preventDefault();
    var scrollToId = $(this.getAttribute("href"));
    $("html")
      .stop(true)
      .animate({
        scrollTop: scrollToId.position().top - $(".navbar").height(),
      });
  });
  /*****Källa: https://alvarotrigo.com/blog/css-animations-scroll *****/
  $(".navbar-default").removeClass("slideIn");
  function reveal() {
    var reveals = $(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  /*bestämmer hur modal ska bete sig när man trycker på buy eller close */
  $(".modal-footer .buy").click(function () {
    var input = $("input[type=email]");
    if (input.val().length === 0) {
      input.css("border-color", "red");
      input.attr("placeholder", "required area");
    }
    if (input.val().length !== 0) {
      input.css("border-color", "lightgrey");
      input.val("");
      input.attr("placeholder", "coffee@beanmail.com");
      $("#exampleModal").modal("hide");
      alert("Thanks for choosing Bean Mail!");
    }
  });
  $(".modal-footer .close").click(function () {
    $(".modal textarea").val("");
    $("input[type=email]").val("");
    $("input[type=email]").css("border-color", "lightgrey");
    $("#exampleModal").modal("hide");
  });
});

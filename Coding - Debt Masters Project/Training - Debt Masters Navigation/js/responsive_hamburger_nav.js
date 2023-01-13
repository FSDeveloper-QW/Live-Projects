// ========================================================
// TODO:  HAMBURGER - RESPONSIVE NAVIGATION
// ========================================================

$(document).ready(function () {
  // MAIN-MENU FUNCTIONALITIES
  $(".menu-toggle").click(function () {
    $("nav").toggleClass("active");
  });
  // SUB-MENU FUNCTIONALITIES
  $("ul li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
  });
});

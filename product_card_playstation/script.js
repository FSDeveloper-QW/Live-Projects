// ======================================================================================
// TODO:  PART 1 - SCRIPT TO ROTATE BETWEEN IMAGES ON THE FRONT OF A PRODUCT CARD
// ======================================================================================

// --------------------------------------------------------------------------------------
// FIXME:  SET VARIABLE - GET FIRST IMAGE BY ID FROM HTML
// --------------------------------------------------------------------------------------

var container = document.getElementById("featured__product__image");

// --------------------------------------------------------------------------------------
// FIXME:  FUNCTION TO CHANGE IMAGE IN THE VIARIABLE "CONTAINER"
// --------------------------------------------------------------------------------------

function change(image) {
  container.src = image.src;
}

// ======================================================================================
// TODO:  PART 2 - SCRIPT TO CHANGE TO COLOR OF THE "HEART" / WISH LIST ICON WHEN "LIKE"
// ======================================================================================

// $(document).ready(function () {
//   $(".add__wishlist").click(function () {
//     $(this).toggleClass("heart");
//   });
// });

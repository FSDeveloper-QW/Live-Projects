// =========================================================================================================
// TODO:  JAVASCRIPT 1 (OLD SEARCH BAR) - WITH CATEGORY DROP-DOWN LIST
// =========================================================================================================

$(document).ready(function () {
  // ==================================================================
  // FIXME:  PART 1A:  TO OPEN AND CLOSE THE CATEGORY DROP-DOWN LIST
  // ==================================================================

  $(".dropdown").click(function () {
    $(".dropdown_list ul").toggleClass("active");
  });

  // ========================================================================================================
  // FIXME:  PART 1B:  TO SELECT FROM THE CATEGORY DROP-DOWN LIST AND DISPLAY THAT ITEM AS THE DEFAULT OPTION
  // ========================================================================================================

  $(".dropdown_list ul li").click(function () {
    var icon_text = $(this).html();
    $(".default_option").html(icon_text);
  });

  // ========================================================================================================
  // FIXME:  PART 1C:  HIDE THE CATEGORY DROP-DOWN LIST WHEN CLICKING OUTSIDE THE SEARCH BAR OR DROP-DOWN
  // ========================================================================================================

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".dropdown_list ul").removeClass("active");
    }
  });
});

// =========================================================================================================
// TODO:  JAVASCRIPT 2 (NEW SEARCH BAR) - MAKING USE OF SUGGESSTION LIST (IN SEPERATE JAVASCRIPT FILE)
// =========================================================================================================

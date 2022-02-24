$(document).ready(function () {
  // To open and close the Category DropDown List
  $(".dropdown").click(function () {
    $(".dropdown_list ul").toggleClass("active");
  });

  // To select from the Dropdown Category List and display that item as the Default Option
  $(".dropdown_list ul li").click(function () {
    var icon_text = $(this).html();
    $(".default_option").html(icon_text);
  });

  // Hide Category Dropdown List when clicking outside the Search Bar or Dropdown List
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".dropdown_list ul").removeClass("active");
    }
  });
});

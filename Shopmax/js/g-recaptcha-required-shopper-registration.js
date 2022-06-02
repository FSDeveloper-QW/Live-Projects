// ================================================================================================
// TODO:  JAVASCRIPT CODE TO MAKE THE GOOGLE RECAPTCHA A REQUIRED SELECTION IN ANY FORM SUBMISSION
// ================================================================================================

window.onload = function () {
  var elShopper = document.getElementById("g-recaptcha-responses");
  if (elShopper) {
    elShopper.setAttribute("required", "required");
  }
};

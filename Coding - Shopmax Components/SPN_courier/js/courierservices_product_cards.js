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

// =======================================================================================
// TODO:  PART 2 -  SCRIPT TO FLIP A PROFILE OR PRODUCT CARD (AND BACK)
// =======================================================================================

// ---------------------------------------------------------------------------------------
// TODO: PRODUCT CARDS (COURIER SERVICES)
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 001 - 701_04_01 - MAIN TO MAIN
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_01").click(function () {
    $(".courierservices__product-card-701_04_01").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 002 - 701_04_02 - MAIN TO REGIONAL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_02").click(function () {
    $(".courierservices__product-card-701_04_02").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 003 - 701_04_03 - MAIN TO REMOTE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_03").click(function () {
    $(".courierservices__product-card-701_04_03").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 004 - 701_04_04 - REGIONAL TO MAIN
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_04").click(function () {
    $(".courierservices__product-card-701_04_04").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 005 - 701_04_05 - REGIONAL TO REGIONAL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_05").click(function () {
    $(".courierservices__product-card-701_04_05").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 006 - 701_04_06 - REGIONAL TO REMOTE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_06").click(function () {
    $(".courierservices__product-card-701_04_06").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 007 - 701_04_07 - REMOTE TO MAIN
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_07").click(function () {
    $(".courierservices__product-card-701_04_07").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 008 - 701_04_08 - REMOTE TO REGIONAL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_08").click(function () {
    $(".courierservices__product-card-701_04_08").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 009 - 701_04_09 - REMOTE TO REMOTE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_09").click(function () {
    $(".courierservices__product-card-701_04_09").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 010 - 701_04_10 - MAIN TO INTERNATIONAL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_10").click(function () {
    $(".courierservices__product-card-701_04_10").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 011 - 701_04_11 - REGIONAL TO INTERNATIONAL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_11").click(function () {
    $(".courierservices__product-card-701_04_11").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 012 - 701_04_12 - REMOTE TO INTERNATIONAL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_12").click(function () {
    $(".courierservices__product-card-701_04_12").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 013 - 701_04_13 - INTERNATIONAL TO MAIN
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_13").click(function () {
    $(".courierservices__product-card-701_04_13").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 014 - 701_04_14 - INTERNATIONAL TO REGIONAL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_14").click(function () {
    $(".courierservices__product-card-701_04_14").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 015 - 701_04_15 - INTERNATIONAL TO REMOTE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_15").click(function () {
    $(".courierservices__product-card-701_04_15").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 016 - 701_04_16 - INTERNATIONAL TO INTERNATIONAL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_04_16").click(function () {
    $(".courierservices__product-card-701_04_16").toggleClass("animated");
    return false;
  });
});

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
// TODO:  PART 2 -  SCRIPT TO ADD COUNTER TO SHOPPING CART WHEN "ADD TO CART" IS CLICKED
// =======================================================================================

let count = 0;

const counter = document.getElementById("counter");
document.getElementById("add-animation").addEventListener("click", (event) => {
  const cl = counter.classList;
  const c = "animated-counter";
  count++;

  counter.innerText = count;
  cl.remove(c, cl.contains(c));
  setTimeout(() => counter.classList.add("animated-counter"), 1);
});

// =======================================================================================
// TODO:  PART 3 -  SCRIPT TO ADD COUNTER TO WISH LIST WHEN "ADD TO WISH LIST" IS CLICKED
// =======================================================================================

let countWish = 0;

const wishListCounter = document.getElementById("wishlist-counter");
document
  .getElementById("wishlist-add-animation")
  .addEventListener("click", (event) => {
    const cl = wishListCounter.classList;
    const c = "wishlist-animated-counter";
    count++;

    wishListCounter.innerText = countWish;
    cl.remove(c, cl.contains(c));
    setTimeout(
      () => wishListCounter.classList.add("wishlist-animated-counter"),
      1
    );
  });

// =======================================================================================
// TODO:  PART 4 -  SCRIPT TO FLIP A PROFILE OR PRODUCT CARD (AND BACK)
// =======================================================================================

// ---------------------------------------------------------------------------------------
// TODO: PRODUCT CARDS (PROFESSIONAL PROPERTY SERVICES)
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 001 - 701_05_01 - PROPERTY DEVELOPERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_01").click(function () {
    $(".product-card-701_05_01").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 002 - 701_05_02 - PROPERTY & FACILITIES MANAGEMENT
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_02").click(function () {
    $(".product-card-701_05_02").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 003 - 701_05_03 - PROJECT MANAGEMENT
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_03").click(function () {
    $(".product-card-701_05_03").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 004 - 701_05_04 - ARCHITECTS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_04").click(function () {
    $(".product-card-701_05_04").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 005 - 701_05_05 - TECHNICAL DRAFTSMEN
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_05").click(function () {
    $(".product-card-701_05_05").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 006 - 701_05_06 - TOWN PLANNERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_06").click(function () {
    $(".product-card-701_05_06").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 007 - 701_05_07 - CIVIL ENGINEERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_07").click(function () {
    $(".product-card-701_05_07").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 008 - 701_05_08 - ELECTRICAL ENGINEERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_08").click(function () {
    $(".product-card-701_05_08").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 009 - 701_05_09 - STRUCTURAL ENGINEERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_09").click(function () {
    $(".product-card-701_05_09").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 010 - 701_05_10 - ENVIRONMENTAL ENGINEERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_10").click(function () {
    $(".product-card-701_05_10").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 011 - 701_05_11 - OCCUPATIONAL HEALTH AND SAFETY (OHS)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_11").click(function () {
    $(".product-card-701_05_11").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 012 - 701_05_12 - QUANTITY / LAND SURVEYORS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_12").click(function () {
    $(".product-card-701_05_12").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 013 - 701_05_13 - ESTATE AGENTS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_05_13").click(function () {
    $(".product-card-701_05_13").toggleClass("animated");
    return false;
  });
});

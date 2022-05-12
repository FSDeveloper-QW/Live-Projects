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
// TODO: PRODUCT CARDS (PROPERTY MAINTENANCE SERVICES)
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 001 - 701_06_01 - GENERAL HANDYMEN (ALL TRADES)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_06_01").click(function () {
    $(".product-card-701_06_01").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 002 - 701_06_02 - PROPERTY CLEANING SERVICES
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_06_02").click(function () {
    $(".product-card-701_06_02").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 003 - 701_06_03 - PROPERTY SECURITY SERVICES
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_06_03").click(function () {
    $(".product-card-701_06_03").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 004 - 701_06_04 - BUILDERS & BRICK LAYERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_06_04").click(function () {
    $(".product-card-701_06_04").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 005 - 701_06_05 - ELECTRICIANS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_06_05").click(function () {
    $(".product-card-701_06_05").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 006 - 701_06_06 - PLUMBERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_06_06").click(function () {
    $(".product-card-701_06_06").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 007 - 701_06_07 - CARPENTERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_06_07").click(function () {
    $(".product-card-701_06_07").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 008 - 701_06_08 - PAINTERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_06_08").click(function () {
    $(".product-card-701_06_08").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 009 - 701_06_09 - OFFICE AND HOME MOVERS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_06_09").click(function () {
    $(".product-card-701_06_09").toggleClass("animated");
    return false;
  });
});

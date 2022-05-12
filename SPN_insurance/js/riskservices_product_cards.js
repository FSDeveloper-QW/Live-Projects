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
// TODO: PRODUCT CARDS (FINANCIAL PLANNING, INSURANCE & RISK SERVICES)
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 001 - 701_03_01 - FINANCIAL PLANNING
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_01").click(function () {
    $(".product-card-701_03_01").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 002 - 701_03_02 - BUSINESS INSURANCE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_02").click(function () {
    $(".product-card-701_03_02").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 003 - 701_03_03 - PERSONAL INSURANCE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_03").click(function () {
    $(".product-card-701_03_03").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 004 - 701_03_04 - HEALTH & MEDICAL INSURANCE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_04").click(function () {
    $(".product-card-701_03_04").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 005 - 701_03_05 - LIFE & RETIREMENT INSURANCE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_05").click(function () {
    $(".product-card-701_03_05").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 006 - 701_03_06 - FUNERAL INSURANCE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_06").click(function () {
    $(".product-card-701_03_06").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 007 - 701_03_07 - LEGAL INSURANCE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_07").click(function () {
    $(".product-card-701_03_07").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 008 - 701_03_08 - RISK AND ASSET MANAGEMENT
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_08").click(function () {
    $(".product-card-701_03_08").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 009 - 701_03_09 - PRIVATE INVESTIGATIONS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_09").click(function () {
    $(".product-card-701_03_09").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 010 - 701_03_10 - FORENSIC INVESTIGATIONS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_10").click(function () {
    $(".product-card-701_03_10").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 011 - 701_03_11 - WHISTLEBLOWING SOLUTIONS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_03_11").click(function () {
    $(".product-card-701_03_11").toggleClass("animated");
    return false;
  });
});

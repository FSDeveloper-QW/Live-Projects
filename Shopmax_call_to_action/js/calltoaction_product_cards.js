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
// TODO: PRODUCT CARDS (LEGAL SERVICES)
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 001 - 701_07_01 - LEGAL BOOKKEEPING SERVICES
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_01").click(function () {
    $(".product-card-701_07_01").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 002 - 701_07_02 - ATTORNEY (CIVIL / LITIGATION)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_02").click(function () {
    $(".product-card-701_07_02").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 003 - 701_07_03 - ADVOCATE (CIVIL / LITIGATION)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_03").click(function () {
    $(".product-card-701_07_03").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 004 - 701_07_04 - ATTORNEY (LABOUR)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_04").click(function () {
    $(".product-card-701_07_04").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 005 - 701_07_05 - ADVOCATE (LABOUR)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_05").click(function () {
    $(".product-card-701_07_05").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 006 - 701_07_06 - ATTORNEY (CRIMINAL)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_06").click(function () {
    $(".product-card-701_07_06").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 007 - 701_07_07 - ADVOCATE (CRIMINAL)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_07").click(function () {
    $(".product-card-701_07_07").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 008 - 701_07_08 - ATTORNEY (PROPERTY)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_08").click(function () {
    $(".product-card-701_07_08").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 009 - 701_07_09 - ADVOCATE (PROPERTY)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_09").click(function () {
    $(".product-card-701_07_09").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 010 - 701_07_10 - ATTORNEY (COMMERCIAL)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_10").click(function () {
    $(".product-card-701_07_10").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 011 - 701_07_11 - ADVOCATE (COMMERCIAL)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_11").click(function () {
    $(".product-card-701_07_11").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 012 - 701_07_12 - ATTORNEY (FAMILY)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_12").click(function () {
    $(".product-card-701_07_12").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 013 - 701_07_13 - ADVOCATE (FAMILY)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_13").click(function () {
    $(".product-card-701_07_13").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 014 - 701_07_14 - ATTORNEY (PERSONAL INJURY)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_14").click(function () {
    $(".product-card-701_07_14").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 015 - 701_07_15 - ADVOCATE (PERSONAL INJURY)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_15").click(function () {
    $(".product-card-701_07_15").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 016 - 701_07_16 - ATTORNEY (SUCCESSION)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_16").click(function () {
    $(".product-card-701_07_16").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 017 - 701_07_17 - ADVOCATE (SUCCESSION)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_17").click(function () {
    $(".product-card-701_07_17").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 018 - 701_07_18 - ATTORNEY (INTELLECTUAL PROPERTY)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_18").click(function () {
    $(".product-card-701_07_18").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 019 - 701_07_19 - ADVOCATE (INTELLECTUAL PROPERTY)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_19").click(function () {
    $(".product-card-701_07_19").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 020 - 701_07_20 - INDEPENDENT CHAIRMAN
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_07_20").click(function () {
    $(".product-card-701_07_20").toggleClass("animated");
    return false;
  });
});
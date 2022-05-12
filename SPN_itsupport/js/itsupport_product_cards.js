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
// TODO: PRODUCT CARDS (IT, CLOUD & WEB SERVICES)
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 001 - 701_02_01 - IT SUPPORT (REMOTE)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_01").click(function () {
    $(".product-card-701_02_01").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 002 - 701_02_02 - IT SUPPORT (ON-SITE)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_02").click(function () {
    $(".product-card-701_02_02").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 003 - 701_02_03 - OFFICE AUTOMATION
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_03").click(function () {
    $(".product-card-701_02_03").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 004 - 701_02_04 - SECURITY & SURVEILLANCE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_04").click(function () {
    $(".product-card-701_02_04").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 005 - 701_02_05 - CABLING & NETWORKING
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_05").click(function () {
    $(".product-card-701_02_05").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 006 - 701_02_06 - POINT-OF-SALE (POS)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_06").click(function () {
    $(".product-card-701_02_06").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 007 - 701_02_07 - VOIP / CLOUD TELEPHONY
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_07").click(function () {
    $(".product-card-701_02_07").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 008 - 701_02_08 - DISASTER RECOVERY & BACKUPS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_08").click(function () {
    $(".product-card-701_02_08").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 009 - 701_02_09 - CLOUD SERVICES
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_09").click(function () {
    $(".product-card-701_02_09").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 010 - 701_02_10 - DSTV / AV INSTALLATIONS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_10").click(function () {
    $(".product-card-701_02_10").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 011 - 701_02_11 - BLOCKCHAIN / CRYPTO CURRENCIES
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_11").click(function () {
    $(".product-card-701_02_11").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 012 - 701_02_12 - WEB DEVELOPMENT (BASIC)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_12").click(function () {
    $(".product-card-701_02_12").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 013 - 701_02_13 - WEB DEVELOPMENT (ADVANCE)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_13").click(function () {
    $(".product-card-701_02_13").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 014 - 701_02_14 - WEB DEVELOPMENT (INTRANETS)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_14").click(function () {
    $(".product-card-701_02_14").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 015 - 701_02_15 - WEB DEVELOPMENT (E-COMMERCE)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_15").click(function () {
    $(".product-card-701_02_15").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 016 - 701_02_16 - MOBILE APP DEVELOPMENT
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_16").click(function () {
    $(".product-card-701_02_16").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 017 - 701_02_17 - SOFTWARE DEVELOPMENT
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_17").click(function () {
    $(".product-card-701_02_17").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 018 - 701_02_18 - GRAPHICS DESIGN
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_18").click(function () {
    $(".product-card-701_02_18").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 019 - 701_02_19 - DOMAIN REGISTRATIONS & HOSTING
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-701_02_19").click(function () {
    $(".product-card-701_02_19").toggleClass("animated");
    return false;
  });
});

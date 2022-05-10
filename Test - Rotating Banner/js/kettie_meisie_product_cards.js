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
// TODO: PRODUCT CARDS
// ---------------------------------------------------------------------------------------

// =======================================================================================
// =======================================================================================
// TODO:  START OF STYWE PAS
// =======================================================================================
// =======================================================================================

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 001 - STYWE PAS - EK IS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-001").click(function () {
    $(".product-card-001").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 002 - STYWE PAS - JOU STORIE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-002").click(function () {
    $(".product-card-002").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 003 - STYWE PAS - SONSKYN
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-003").click(function () {
    $(".product-card-003").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 004 - STYWE PAS - SPATSEL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-004").click(function () {
    $(".product-card-004").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 005 - STYWE PAS - ELEGANT
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-005").click(function () {
    $(".product-card-005").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 006 - STYWE PAS - REBEL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-006").click(function () {
    $(".product-card-006").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 007 - STYWE PAS - TBA
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 008 - STYWE PAS - TBA
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 009 - STYWE PAS - TBA
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 010 - STYWE PAS - TBA
// ---------------------------------------------------------------------------------------

// =======================================================================================
// =======================================================================================
// TODO:  END OF STYWE PAS
// =======================================================================================
// =======================================================================================

// =======================================================================================
// =======================================================================================
// TODO:  START OF T-SHIRTS
// =======================================================================================
// =======================================================================================

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 101 - T-SHIRTS - EK IS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-101").click(function () {
    $(".product-card-101").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 102 - T-SHIRTS - JOU STORIE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-102").click(function () {
    $(".product-card-102").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 103 - T-SHIRTS - LUKRAAK
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-103").click(function () {
    $(".product-card-103").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 104 - T-SHIRTS - SONSKYN
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-104").click(function () {
    $(".product-card-104").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 105 - T-SHIRTS - VREES LAAT JOU UITMIS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-105").click(function () {
    $(".product-card-105").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 106 - T-SHIRTS - SPATSEL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-106").click(function () {
    $(".product-card-106").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 107 - T-SHIRTS - ELEGANT
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-107").click(function () {
    $(".product-card-107").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 108 - T-SHIRTS - BLARE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-108").click(function () {
    $(".product-card-108").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 109 - T-SHIRTS - REBEL
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-109").click(function () {
    $(".product-card-109").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 110 - T-SHIRTS - TBA
// ---------------------------------------------------------------------------------------

// =======================================================================================
// =======================================================================================
// TODO:  END OF T-SHIRTS
// =======================================================================================
// =======================================================================================

// =======================================================================================
// =======================================================================================
// TODO:  START OF WINTER
// =======================================================================================
// =======================================================================================

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 201 - WINTER - SWART KAPPIE (DAMES)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-201").click(function () {
    $(".product-card-201").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 202 - WINTER - WIT KAPPIE (DAMES)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-202").click(function () {
    $(".product-card-202").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 203 - WINTER - WARM TOP (DAMES)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-203").click(function () {
    $(".product-card-203").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 204 - WINTER - SWART KAPPIE (KINDERS)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-204").click(function () {
    $(".product-card-204").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 205 - WINTER - WIT KAPPIE (KINDERS)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-205").click(function () {
    $(".product-card-205").toggleClass("animated");
    return false;
  });
});

// =======================================================================================
// =======================================================================================
// TODO:  END OF WINTER
// =======================================================================================
// =======================================================================================

// =======================================================================================
// =======================================================================================
// TODO:  START OF SPORT
// =======================================================================================
// =======================================================================================

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 301 - SPORT - KOMPAS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-301").click(function () {
    $(".product-card-301").toggleClass("animated");
    return false;
  });
});

// =======================================================================================
// =======================================================================================
// TODO:  END OF SPORT
// =======================================================================================
// =======================================================================================

// =======================================================================================
// =======================================================================================
// TODO:  START OF KINDERS
// =======================================================================================
// =======================================================================================

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 401 - KINDERS - SKOENLAPPER
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-401").click(function () {
    $(".product-card-401").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 402 - KINDERS - BLOMMETJIE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-402").click(function () {
    $(".product-card-402").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 403 - KINDERS - ELEGANTJIE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-403").click(function () {
    $(".product-card-403").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 404 - KINDERS - NAALDEKOKER
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-404").click(function () {
    $(".product-card-404").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 405 - KINDERS - KUNS
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-405").click(function () {
    $(".product-card-405").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 406 - KINDERS - SWART KAPPIE (WINTER)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-406").click(function () {
    $(".product-card-406").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 407 - KINDERS - WIT KAPPIE (WINTER)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-407").click(function () {
    $(".product-card-407").toggleClass("animated");
    return false;
  });
});

// =======================================================================================
// =======================================================================================
// TODO:  END OF KINDERS
// =======================================================================================
// =======================================================================================

// =======================================================================================
// =======================================================================================
// TODO:  START OF HOEDJIES
// =======================================================================================
// =======================================================================================

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 501 - HOEDJIES - NONNATJIE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-501").click(function () {
    $(".product-card-501").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 502 - HOEDJIES - SARAH DE JAGER
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-502").click(function () {
    $(".product-card-502").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 503 - HOEDJIES - KATRIEN
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-503").click(function () {
    $(".product-card-503").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 504 - HOEDJIES - VOSHAARNOOI
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-504").click(function () {
    $(".product-card-504").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 505 - HOEDJIES - SPOOKMEISIE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-505").click(function () {
    $(".product-card-505").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 506 - HOEDJIES - SPROETJIES
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-506").click(function () {
    $(".product-card-506").toggleClass("animated");
    return false;
  });
});

// =======================================================================================
// =======================================================================================
// TODO:  END OF HOEDJIES
// =======================================================================================
// =======================================================================================

// =======================================================================================
// =======================================================================================
// TODO:  START OF WENNERS
// =======================================================================================
// =======================================================================================

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 601 - WENNERS - JANIEN (DAMES)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-601").click(function () {
    $(".product-card-601").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 602 - WENNERS - AYLEN (DAMES)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-602").click(function () {
    $(".product-card-602").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 603 - WENNERS - JANIEN (KIDS)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-603").click(function () {
    $(".product-card-603").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 604 - WENNERS - AYLEN (KIDS)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-604").click(function () {
    $(".product-card-604").toggleClass("animated");
    return false;
  });
});

// =======================================================================================
// =======================================================================================
// TODO:  END OF WENNERS
// =======================================================================================
// =======================================================================================

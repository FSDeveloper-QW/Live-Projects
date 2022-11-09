// ======================================================================================
// TODO:  PART 1 - SCRIPT TO ROTATE BETWEEN IMAGES ON THE FRONT OF A PRODUCT CARD
// ======================================================================================

// --------------------------------------------------------------------------------------
// FIXME:  SET VARIABLE - GET FIRST IMAGE BY ID FROM HTML
// --------------------------------------------------------------------------------------

var container001 = document.getElementById("featured__product__image__01");
var container002 = document.getElementById("featured__product__image__02");
var container003 = document.getElementById("featured__product__image__03");
var container004 = document.getElementById("featured__product__image__04");
var container005 = document.getElementById("featured__product__image__05");
var container006 = document.getElementById("featured__product__image__06");
var container007 = document.getElementById("featured__product__image__07");
var container008 = document.getElementById("featured__product__image__08");
var container009 = document.getElementById("featured__product__image__09");
var container010 = document.getElementById("featured__product__image__10");
var container011 = document.getElementById("featured__product__image__11");
var container012 = document.getElementById("featured__product__image__12");
var container013 = document.getElementById("featured__product__image__13");
var container014 = document.getElementById("featured__product__image__14");
var container015 = document.getElementById("featured__product__image__15");

// --------------------------------------------------------------------------------------
// FIXME:  FUNCTION TO CHANGE IMAGE IN THE VARIABLE "CONTAINER"
// --------------------------------------------------------------------------------------

function product001(image) {
  container001.src = image.src;
}

function product002(image) {
  container002.src = image.src;
}

function product003(image) {
  container003.src = image.src;
}

function product004(image) {
  container004.src = image.src;
}

function product005(image) {
  container005.src = image.src;
}

function product006(image) {
  container006.src = image.src;
}

function product007(image) {
  container007.src = image.src;
}

function product008(image) {
  container008.src = image.src;
}

function product009(image) {
  container009.src = image.src;
}

function product010(image) {
  container010.src = image.src;
}

function product011(image) {
  container011.src = image.src;
}

function product012(image) {
  container012.src = image.src;
}

function product013(image) {
  container013.src = image.src;
}

function product014(image) {
  container014.src = image.src;
}

function product015(image) {
  container015.src = image.src;
}

// =======================================================================================
// TODO:  PART 2 -  SCRIPT TO FLIP A PROFILE OR PRODUCT CARD (AND BACK)
// =======================================================================================

// ---------------------------------------------------------------------------------------
// TODO: PRODUCT CARDS (15 LATEST PRODUCT RELEASES / PROMOTIONS)
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 001 - main_product_promos_01 - APPLE IPAD MINI (5G)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-01").click(function () {
    $(".product-card-01").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 002 - main_product_promos_02 - APPLE MACBOOK M1 PRO 16” LAPTOP
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-02").click(function () {
    $(".product-card-02").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 003 - main_product_promos_03 - DELL 32” 4K MONITOR
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-03").click(function () {
    $(".product-card-03").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 004 - main_product_promos_04 - DELL XPS 15 9520 LAPTOP
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-04").click(function () {
    $(".product-card-04").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 005 - main_product_promos_05 - HP 290 G4 PC & MONITOR BUNDLE
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-05").click(function () {
    $(".product-card-05").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 006 - main_product_promos_06 - HP ZBOOK FURY 15 G8 LAPTOP
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-06").click(function () {
    $(".product-card-06").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 007 - main_product_promos_07 - HUAWEI MATEBOOK X PRO
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-07").click(function () {
    $(".product-card-07").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 008 - main_product_promos_08 - HUAWEI MATEVIEW GT
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-08").click(function () {
    $(".product-card-08").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 009 - main_product_promos_09 - HUAWEI P50 PRO
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-09").click(function () {
    $(".product-card-09").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 010 - main_product_promos_10 - HUAWEI WATCH 3 GT RUNNER
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-10").click(function () {
    $(".product-card-10").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 011 - main_product_promos_11 - LENOVO TAB P11
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-11").click(function () {
    $(".product-card-11").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 012 - main_product_promos_12 - LENOVO THINKPAD P15V (GEN 2)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-12").click(function () {
    $(".product-card-12").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 013 - main_product_promos_13 - SAMSUNG GALAXY S22 ULTRA (5G)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-13").click(function () {
    $(".product-card-13").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 014 - main_product_promos_14 - SAMSUNG GALAXY TAB S8 ULTRA (5G)
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-14").click(function () {
    $(".product-card-14").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  CARD 015 - main_product_promos_15 - SAMSUNG GALAXY WATCH 4 CLASSIC (LTE) – 46MM
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-15").click(function () {
    $(".product-card-15").toggleClass("animated");
    return false;
  });
});

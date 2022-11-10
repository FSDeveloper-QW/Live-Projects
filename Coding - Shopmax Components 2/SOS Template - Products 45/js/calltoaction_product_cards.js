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
var container016 = document.getElementById("featured__product__image__16");
var container017 = document.getElementById("featured__product__image__17");
var container018 = document.getElementById("featured__product__image__18");
var container019 = document.getElementById("featured__product__image__19");
var container020 = document.getElementById("featured__product__image__20");
var container021 = document.getElementById("featured__product__image__21");
var container022 = document.getElementById("featured__product__image__22");
var container023 = document.getElementById("featured__product__image__23");
var container024 = document.getElementById("featured__product__image__24");
var container025 = document.getElementById("featured__product__image__25");
var container026 = document.getElementById("featured__product__image__26");
var container027 = document.getElementById("featured__product__image__27");
var container028 = document.getElementById("featured__product__image__28");
var container029 = document.getElementById("featured__product__image__29");
var container030 = document.getElementById("featured__product__image__30");
var container031 = document.getElementById("featured__product__image__31");
var container032 = document.getElementById("featured__product__image__32");
var container033 = document.getElementById("featured__product__image__33");
var container034 = document.getElementById("featured__product__image__34");
var container035 = document.getElementById("featured__product__image__35");
var container036 = document.getElementById("featured__product__image__36");
var container037 = document.getElementById("featured__product__image__37");
var container038 = document.getElementById("featured__product__image__38");
var container039 = document.getElementById("featured__product__image__39");
var container040 = document.getElementById("featured__product__image__40");
var container041 = document.getElementById("featured__product__image__41");
var container042 = document.getElementById("featured__product__image__42");
var container043 = document.getElementById("featured__product__image__43");
var container044 = document.getElementById("featured__product__image__44");
var container045 = document.getElementById("featured__product__image__45");

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

function product016(image) {
  container016.src = image.src;
}

function product017(image) {
  container017.src = image.src;
}

function product018(image) {
  container018.src = image.src;
}

function product019(image) {
  container019.src = image.src;
}

function product020(image) {
  container020.src = image.src;
}

function product021(image) {
  container021.src = image.src;
}

function product022(image) {
  container022.src = image.src;
}

function product023(image) {
  container023.src = image.src;
}

function product024(image) {
  container024.src = image.src;
}

function product025(image) {
  container025.src = image.src;
}

function product026(image) {
  container026.src = image.src;
}

function product027(image) {
  container027.src = image.src;
}

function product028(image) {
  container028.src = image.src;
}

function product029(image) {
  container029.src = image.src;
}

function product030(image) {
  container030.src = image.src;
}

function product031(image) {
  container031.src = image.src;
}

function product032(image) {
  container032.src = image.src;
}

function product033(image) {
  container033.src = image.src;
}

function product034(image) {
  container034.src = image.src;
}

function product035(image) {
  container035.src = image.src;
}

function product036(image) {
  container036.src = image.src;
}

function product037(image) {
  container037.src = image.src;
}

function product038(image) {
  container038.src = image.src;
}

function product039(image) {
  container039.src = image.src;
}

function product040(image) {
  container040.src = image.src;
}

function product041(image) {
  container041.src = image.src;
}

function product042(image) {
  container042.src = image.src;
}

function product043(image) {
  container043.src = image.src;
}

function product044(image) {
  container044.src = image.src;
}

function product045(image) {
  container045.src = image.src;
}

// =======================================================================================
// TODO:  PART 2 - SCRIPT TO FLIP A PROFILE OR PRODUCT CARD (AND BACK)
// =======================================================================================

// ---------------------------------------------------------------------------------------
// TODO:  ALL PRODUCT CARDS
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 001
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-01").click(function () {
    $(".product-card-01").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 002
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-02").click(function () {
    $(".product-card-02").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 003
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-03").click(function () {
    $(".product-card-03").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 004
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-04").click(function () {
    $(".product-card-04").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 005
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-05").click(function () {
    $(".product-card-05").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 006
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-06").click(function () {
    $(".product-card-06").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 007
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-07").click(function () {
    $(".product-card-07").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 008
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-08").click(function () {
    $(".product-card-08").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 009
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-09").click(function () {
    $(".product-card-09").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 010
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-10").click(function () {
    $(".product-card-10").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 011
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-11").click(function () {
    $(".product-card-11").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 012
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-12").click(function () {
    $(".product-card-12").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 013
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-13").click(function () {
    $(".product-card-13").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 014
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-14").click(function () {
    $(".product-card-14").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 015
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-15").click(function () {
    $(".product-card-15").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 016
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-16").click(function () {
    $(".product-card-16").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 017
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-17").click(function () {
    $(".product-card-17").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 018
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-18").click(function () {
    $(".product-card-18").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 019
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-19").click(function () {
    $(".product-card-19").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 020
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-20").click(function () {
    $(".product-card-20").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 021
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-21").click(function () {
    $(".product-card-21").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 022
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-22").click(function () {
    $(".product-card-22").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 023
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-23").click(function () {
    $(".product-card-23").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 024
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-24").click(function () {
    $(".product-card-24").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 025
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-25").click(function () {
    $(".product-card-25").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 026
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-26").click(function () {
    $(".product-card-26").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 027
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-27").click(function () {
    $(".product-card-27").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 028
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-28").click(function () {
    $(".product-card-28").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 029
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-29").click(function () {
    $(".product-card-29").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 030
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-30").click(function () {
    $(".product-card-30").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 031
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-31").click(function () {
    $(".product-card-31").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 032
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-32").click(function () {
    $(".product-card-32").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 033
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-33").click(function () {
    $(".product-card-33").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 034
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-34").click(function () {
    $(".product-card-34").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 035
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-35").click(function () {
    $(".product-card-35").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 036
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-36").click(function () {
    $(".product-card-36").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 037
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-37").click(function () {
    $(".product-card-37").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 038
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-38").click(function () {
    $(".product-card-38").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 039
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-39").click(function () {
    $(".product-card-39").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 040
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-40").click(function () {
    $(".product-card-40").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 041
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-41").click(function () {
    $(".product-card-41").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 042
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-42").click(function () {
    $(".product-card-42").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 043
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-43").click(function () {
    $(".product-card-43").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 044
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-44").click(function () {
    $(".product-card-44").toggleClass("animated");
    return false;
  });
});

// ---------------------------------------------------------------------------------------
// FIXME:  PRODUCT CARD 045
// ---------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".animate-card-flip-45").click(function () {
    $(".product-card-45").toggleClass("animated");
    return false;
  });
});

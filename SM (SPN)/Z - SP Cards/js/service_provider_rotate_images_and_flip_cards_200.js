// ========================================================================================
// TODO:  PART 1 - SCRIPT TO ROTATE BETWEEN IMAGES ON THE FRONT OF A SERVICE PROVIDER CARD
// ========================================================================================

// ========================================================================================
// FIXME:  SET VARIABLE - GET FIRST IMAGE BY ID FROM HTML
// ========================================================================================

var container001 = document.getElementById(
  "featured__service__provider__logo__01"
);
var container002 = document.getElementById(
  "featured__service__provider__logo__02"
);
var container003 = document.getElementById(
  "featured__service__provider__logo__03"
);
var container004 = document.getElementById(
  "featured__service__provider__logo__04"
);
var container005 = document.getElementById(
  "featured__service__provider__logo__05"
);
var container006 = document.getElementById(
  "featured__service__provider__logo__06"
);

// ========================================================================================
// FIXME:  FUNCTION TO CHANGE IMAGE IN THE VARIABLE "CONTAINER"
// ========================================================================================

function serviceproviderlogo001(image) {
  container001.src = image.src;
}

function serviceproviderlogo002(image) {
  container002.src = image.src;
}

function serviceproviderlogo003(image) {
  container003.src = image.src;
}

function serviceproviderlogo004(image) {
  container004.src = image.src;
}

function serviceproviderlogo005(image) {
  container005.src = image.src;
}

function serviceproviderlogo006(image) {
  container006.src = image.src;
}

// ========================================================================================
// TODO:  PART 2 - SCRIPT TO FLIP A SERVICE PROVIDER CARD (AND BACK)
// ========================================================================================

// ========================================================================================
// TODO:  ALL SERVICE PROVIDER CARDS
// ========================================================================================

// ========================================================================================
// FIXME:  SERVICE PROVIDER CARD 001
// ========================================================================================

$(document).ready(function () {
  $(".animate-card-flip-01").click(function () {
    $(".service-provider-card-01").toggleClass("animated");
    return false;
  });
});

// ========================================================================================
// FIXME:  SERVICE PROVIDER CARD 002
// ========================================================================================

$(document).ready(function () {
  $(".animate-card-flip-02").click(function () {
    $(".service-provider-card-02").toggleClass("animated");
    return false;
  });
});

// ========================================================================================
// FIXME:  SERVICE PROVIDER CARD 003
// ========================================================================================

$(document).ready(function () {
  $(".animate-card-flip-03").click(function () {
    $(".service-provider-card-03").toggleClass("animated");
    return false;
  });
});

// ========================================================================================
// FIXME:  SERVICE PROVIDER CARD 004
// ========================================================================================

$(document).ready(function () {
  $(".animate-card-flip-04").click(function () {
    $(".service-provider-card-04").toggleClass("animated");
    return false;
  });
});

// ========================================================================================
// FIXME:  SERVICE PROVIDER CARD 005
// ========================================================================================

$(document).ready(function () {
  $(".animate-card-flip-05").click(function () {
    $(".service-provider-card-05").toggleClass("animated");
    return false;
  });
});

// ========================================================================================
// FIXME:  SERVICE PROVIDER CARD 006
// ========================================================================================

$(document).ready(function () {
  $(".animate-card-flip-06").click(function () {
    $(".service-provider-card-06").toggleClass("animated");
    return false;
  });
});

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

// ------------------
// FIXME:  CARD 001 - STYWE PAS
// ------------------

$(document).ready(function () {
  $(".animate-01").click(function () {
    $(".product-card-01").toggleClass("animated");
    return false;
  });
});

// ------------------
// FIXME:  CARD 002 - STYWE PAS
// ------------------

$(document).ready(function () {
  $(".animate-02").click(function () {
    $(".product-card-02").toggleClass("animated");
    return false;
  });
});

// ------------------
// FIXME:  CARD 003 - STYWE PAS
// ------------------

$(document).ready(function () {
  $(".animate-03").click(function () {
    $(".product-card-03").toggleClass("animated");
    return false;
  });
});

// ------------------
// FIXME:  CARD 004 - STYWE PAS
// ------------------

$(document).ready(function () {
  $(".animate-04").click(function () {
    $(".product-card-04").toggleClass("animated");
    return false;
  });
});

// ------------------
// FIXME:  CARD 005 - STYWE PAS
// ------------------

$(document).ready(function () {
  $(".animate-05").click(function () {
    $(".product-card-05").toggleClass("animated");
    return false;
  });
});

// ------------------
// FIXME:  CARD 006 - STYWE PAS
// ------------------

$(document).ready(function () {
  $(".animate-06").click(function () {
    $(".product-card-06").toggleClass("animated");
    return false;
  });
});

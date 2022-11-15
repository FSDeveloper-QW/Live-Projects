// ===================================================================================
// TODO: JAVASCRIPT SCRIPT - HERO / CAROUSEL ROTATING BANNER (FUNCTIONALITY)
// TODO: FOR THE KETTIE MEISIE SECTION ON SHOPMAX WEBSITE
// ===================================================================================

let slideIndex = 0;
let slider = document.querySelector(".kettie__meisie__slider");
let slides = document.querySelector(".kettie__meisie__slides");
let slide = document.querySelectorAll(".kettie__meisie__slide");
let dots = document.querySelectorAll(".kettie__meisie__dots span");

showslide();

function plusslide(position) {
  slideIndex += position;

  if (slideIndex > slide.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slide.length;
  }

  // ===================================================================================
  //  SET AS DEFAULT: THAT THE ACTIVE CLASS IS REMOVED FROM ALL DOTS
  // ===================================================================================

  for (let i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.classList.remove("kettie__meisie__dot-active");
  }

  slides.style.left = `-${slideIndex - 1}00%`;
  dots[slideIndex - 1].classList.add("kettie__meisie__dot-active");
}

function currentslide(index) {
  if (index > slide.length) {
    index = 1;
  } else if (index < 1) {
    index = slide.length;
  }

  // ===================================================================================
  //  SET AS DEFAULT: THAT THE ACTIVE CLASS IS REMOVED FROM ALL DOTS
  // ===================================================================================

  for (let i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.classList.remove("kettie__meisie__dot-active");
  }

  slides.style.left = `-${index - 1}00%`;
  dots[index - 1].classList.add("kettie__meisie__dot-active");

  slideIndex = index;
}

function showslide() {
  slideIndex++;

  if (slideIndex > slide.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slide.length;
  }

  // ===================================================================================
  //  SET AS DEFAULT: THAT THE ACTIVE CLASS IS REMOVED FROM ALL DOTS
  // ===================================================================================

  for (let i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.classList.remove("kettie__meisie__dot-active");
  }

  slides.style.left = `-${slideIndex - 1}00%`;
  dots[slideIndex - 1].classList.add("kettie__meisie__dot-active");
}

// ===================================================================================
// FIXME:  SET THE "TIME INTERVAL" BETWEEN EACH SLIDES [ 1000ms = 1 Second ]
// ===================================================================================

// =================================================
// SETTING THE TIME THAT SLIDES CHANGE TO 6 SECONDS
// =================================================

let interval = setInterval(() => {
  showslide();
}, 6000);

// ===================================================================================
// WHEN MOUSE HOVER ON SLIDE ("MOUSE-OVER") STOP CHANGING EVERY SLIDE AFTER 6 SECONDS
// ===================================================================================

slider.addEventListener("mouseover", () => {
  clearInterval(interval);
});

// ===================================================================================
// WHEN MOVING MOUSE AWAY FROM SLIDE ("MOUSE-OUT") START CHANGING SLIDES AGAIN AFTER 6 SECONDS
// ===================================================================================

slider.addEventListener("mouseout", () => {
  interval = setInterval(() => {
    showslide();
  }, 6000);
});

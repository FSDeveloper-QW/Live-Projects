// ===================================================================================
// TODO: JAVASCRIPT PROGRAM - TO GIVE FUNCTIONALITY TO A CAROUSEL BANNER
// ===================================================================================

let slideIndex = 0;
let slider = document.querySelector(".slider");
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots span");

showslide();

function plusslide(position) {
  slideIndex += position;

  if (slideIndex > slide.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slide.length;
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.classList.remove("dot-active");
  }

  slides.style.left = `-${slideIndex - 1}00%`;
  dots[slideIndex - 1].classList.add("dot-active");
}

function currentslide(index) {
  if (index > slide.length) {
    index = 1;
  } else if (index < 1) {
    index = slide.length;
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.classList.remove("dot-active");
  }

  slides.style.left = `-${index - 1}00%`;
  dots[index - 1].classList.add("dot-active");

  slideIndex = index;
}

function showslide() {
  slideIndex++;

  if (slideIndex > slide.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slide.length;
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.classList.remove("dot-active");
  }

  slides.style.left = `-${slideIndex - 1}00%`;
  dots[slideIndex - 1].classList.add("dot-active");
}

// FIXME:  Set the TIME INTERVAL between each Slide: 1000ms = 1 Second
// So in this situation the images will change every 3 seconds
let interval = setInterval(() => {
  showslide();
}, 10000);

// on HOVER ("Mouseover") stop changing every time after 3 seconds
slider.addEventListener("mouseover", () => {
  clearInterval(interval);
});

// When moving mouse away on ("Mouseout") then again start changing every image after 3 seconds
slider.addEventListener("mouseout", () => {
  interval = setInterval(() => {
    showslide();
  }, 10000);
});

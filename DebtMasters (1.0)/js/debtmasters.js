// =============================================================================
// TODO:  JAVASCRIPT TO OPEN AND CLOSE THE ACCORDIAN HEADER ON CLICK-EVENT
// =============================================================================

const accordianItemHeaders = document.querySelectorAll(
  ".debt__masters__accordian-item-header"
);

accordianItemHeaders.forEach((accordianItemHeader) => {
  accordianItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordianItemHeader = document.querySelector(
      ".debt__masters__accordian-item-header.active"
    );
    if (
      currentlyActiveAccordianItemHeader &&
      currentlyActiveAccordianItemHeader !== accordianItemHeader
    ) {
      currentlyActiveAccordianItemHeader.classList.toggle("active");
      currentlyActiveAccordianItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordianItemHeader.classList.toggle("active");
    const accordianItemBody = accordianItemHeader.nextElementSibling;
    if (accordianItemHeader.classList.contains("active")) {
      accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    } else {
      accordianItemBody.style.maxHeight = 0;
    }
  });
});

// ============================================================================
// TODO:  SCRIPT FOR DISPLAYING SELECTED FILE NAME TO BE UPLOADED
// ============================================================================

var inputs = document.querySelectorAll(".debt__masters__file-input");

for (var i = 0, len = inputs.length; i < len; i++) {
  customInput(inputs[i]);
}

function customInput(el) {
  const fileInput = el.querySelector('[type="file"]');
  const label = el.querySelector("[data-js-label]");

  fileInput.onchange = fileInput.onmouseout = function () {
    if (!fileInput.value) return;

    var value = fileInput.value.replace(/^.*[\\\/]/, "");
    el.className += " -chosen";
    label.innerText = value;
  };
}

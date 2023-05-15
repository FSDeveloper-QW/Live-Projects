// JAVASCRIPT TO OPEN AND CLOSE THE ACCORDIAN HEADER ON CLICK-EVENT

const accordianItemHeaders = document.querySelectorAll(
  ".spn_regional_area_accordian_item_header"
);

accordianItemHeaders.forEach((accordianItemHeader) => {
  accordianItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordianItemHeader = document.querySelector(
      ".spn_regional_area_accordian_item_header.active"
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

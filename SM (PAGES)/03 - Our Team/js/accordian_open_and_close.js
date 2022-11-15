// JAVASCRIPT TO OPEN AND CLOSE THE ACCORDIAN HEADER ON CLICK-EVENT

const accordianItemHeaders = document.querySelectorAll(
  ".offices-accordian-item-header"
);

accordianItemHeaders.forEach((accordianItemHeader) => {
  accordianItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordianItemHeader = document.querySelector(
      ".offices-accordian-item-header.active"
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

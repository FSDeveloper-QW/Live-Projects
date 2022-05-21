// ====================================================================================================
// TODO:  JAVASCRIPT TO OPEN AND CLOSE THE ACCORDIAN HEADER ON A CLICK-EVENT (FOR KETTIE MEISIE)  TODO:
// ====================================================================================================

const accordianItemHeadersKM = document.querySelectorAll(
  ".kettie__meisie-accordian-item-header"
);

accordianItemHeadersKM.forEach((accordianItemHeader) => {
  accordianItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordianItemHeaderKM = document.querySelector(
      ".kettie__meisie-accordian-item-header.active"
    );
    if (
      currentlyActiveAccordianItemHeaderKM &&
      currentlyActiveAccordianItemHeaderKM !== accordianItemHeader
    ) {
      currentlyActiveAccordianItemHeaderKM.classList.toggle("active");
      currentlyActiveAccordianItemHeaderKM.nextElementSibling.style.maxHeight = 0;
    }

    accordianItemHeader.classList.toggle("active");
    const accordianItemBodyKM = accordianItemHeader.nextElementSibling;
    if (accordianItemHeader.classList.contains("active")) {
      accordianItemBodyKM.style.maxHeight =
        accordianItemBodyKM.scrollHeight + "px";
    } else {
      accordianItemBodyKM.style.maxHeight = 0;
    }
  });
});

// JAVASCRIPT TO OPEN AND CLOSE THE ACCORDIAN HEADER ON CLICK-EVENT

// TODO:TODO:  MARKETPLACE GENERAL SERVICES  TODO:TODO:

const accordianItemHeadersMp = document.querySelectorAll(
  ".spn_select_services_accordian_item_header_marketplace"
);

accordianItemHeadersMp.forEach((accordianItemHeaderMp) => {
  accordianItemHeaderMp.addEventListener("click", (event) => {
    const currentlyActiveAccordianItemHeaderMp = document.querySelector(
      ".spn_select_services_accordian_item_header_marketplace.active"
    );
    if (
      currentlyActiveAccordianItemHeaderMp &&
      currentlyActiveAccordianItemHeaderMp !== accordianItemHeaderMp
    ) {
      currentlyActiveAccordianItemHeaderMp.classList.toggle("active");
      currentlyActiveAccordianItemHeaderMp.nextElementSibling.style.maxHeight = 0;
    }

    accordianItemHeaderMp.classList.toggle("active");
    const accordianItemBodyMp = accordianItemHeaderMp.nextElementSibling;
    if (accordianItemHeaderMp.classList.contains("active")) {
      accordianItemBodyMp.style.maxHeight =
        accordianItemBodyMp.scrollHeight + "px";
    } else {
      accordianItemBodyMp.style.maxHeight = 0;
    }
  });
});

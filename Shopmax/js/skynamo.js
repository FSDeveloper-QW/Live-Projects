// JAVASCRIPT TO OPEN AND CLOSE THE ACCORDIAN HEADER ON CLICK-EVENT

const accordianItemHeadersSkynamo = document.querySelectorAll(
  ".skynamo-accordian-item-header"
);

accordianItemHeadersSkynamo.forEach((accordianItemHeader) => {
  accordianItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordianItemHeaderSkynamo = document.querySelector(
      ".skynamo-accordian-item-header.active"
    );
    if (
      currentlyActiveAccordianItemHeaderSkynamo &&
      currentlyActiveAccordianItemHeaderSkynamo !== accordianItemHeader
    ) {
      currentlyActiveAccordianItemHeaderSkynamo.classList.toggle("active");
      currentlyActiveAccordianItemHeaderSkynamo.nextElementSibling.style.maxHeight = 0;
    }

    accordianItemHeader.classList.toggle("active");
    const accordianItemBodySkynamo = accordianItemHeader.nextElementSibling;
    if (accordianItemHeader.classList.contains("active")) {
      accordianItemBodySkynamo.style.maxHeight =
        accordianItemBodySkynamo.scrollHeight + "px";
    } else {
      accordianItemBodySkynamo.style.maxHeight = 0;
    }
  });
});

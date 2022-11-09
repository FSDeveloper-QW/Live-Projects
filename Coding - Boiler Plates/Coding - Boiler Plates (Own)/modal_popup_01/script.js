// =========================================================================================================
//   TODO:  This is the SCRIPT for OPENING and CLOSING a POPUP MODAL
// =========================================================================================================

// =========================================================================================================
//   TODO:  NOTES
//   01.  Link to the DATA SELECTORS that was setup in HTML - "data-modal-target" and "data-close-button"
//   02.  Set the MODAL-OVERLAY to hide and close the MODAL as needed
// =========================================================================================================

// =========================================================================================================
// FIXME:  Set the Constants for OPEN, CLOSE and OVERLAY
// =========================================================================================================

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll(
  "[data-modal-close-button]"
);
const modalOverlay = document.getElementById("modal__overlay");

// =========================================================================================================
// FIXME:  Script for Constant - openModalButtons
// =========================================================================================================

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal__container = document.querySelector(button.dataset.modalTarget);
    openModal(modal__container);
  });
});

function openModal(modal__container) {
  if (modal__container == null) return;
  modal__container.classList.add("active");
  modalOverlay.classList.add("active");
}

// =========================================================================================================
// FIXME:  Script for Constant - closeModalButtons
// =========================================================================================================

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal__container = button.closest(".modal__container");
    closeModal(modal__container);
  });
});

function closeModal(modal__container) {
  if (modal__container == null) return;
  modal__container.classList.remove("active");
  modalOverlay.classList.remove("active");
}

// =========================================================================================================
// FIXME:  Add EventListener for all Overlays, that when you click on the overlay it also closes the modal
// =========================================================================================================

modalOverlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal__container.active");
  modals.forEach((modal__container) => {
    closeModal(modal__container);
  });
});

// =========================================================================================================
//                                                                                    END OF JAVASCRIPT CODE
// =========================================================================================================

// =========================================================================================
// SCRIPT FOR ADVANCE DROP-DOWN MENU (SIDE WAY SCROLL)
// =========================================================================================

// =========================================================================================
// TODO:  DECLARING CONSTANTS FOR EACH LEVEL OF THE NAVIGATION
// =========================================================================================

// =========================================================================================
// FIXME:  TOP LEVEL - CONSTANTS FOR THE TOP LEVEL NAVIGATION (AND DROP-DOWN MENU)
// =========================================================================================

const drop_btn = document.querySelector(".drop-btn");
const tooltip = document.querySelector(".tooltip");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");

// =========================================================================================
// FIXME:  lEVEL 1 - CONSTANTS FOR THE 1ST LEVEL ITEMS (WITH DROPDOWNS TO 2ND LEVEL ITEMS)
// =========================================================================================

// ================================
// ITEM 1 - MARKETPLACE PRODUCTS
// ================================

const marketplaceproducts_drop = document.querySelector(
  ".marketplaceproducts-drop"
);
const marketplaceproducts_item = document.querySelector(
  ".marketplaceproducts-item"
);
const back_marketplaceproducts_btn = document.querySelector(
  ".back-marketplaceproducts-btn"
);

// ================================
// ITEM 2 - GENERAL SERVICES
// ================================

const generalservices_drop = document.querySelector(".generalservices-drop");
const generalservices_item = document.querySelector(".generalservices-item");
const back_generalservices_btn = document.querySelector(
  ".back-generalservices-btn"
);

// ================================
// ITEM 3 - PROFESSIONAL SERVICES
// ================================

const professionalservices_drop = document.querySelector(
  ".professionalservices-drop"
);
const professionalservices_item = document.querySelector(
  ".professionalservices-item"
);
const back_professionalservices_btn = document.querySelector(
  ".back-professionalservices-btn"
);

// ================================
// ITEM 4 - SKYNAMO CRM
// ================================

const skynamo_drop = document.querySelector(".skynamo-drop");
const skynamo_item = document.querySelector(".skynamo-item");
const back_skynamo_btn = document.querySelector(".back-skynamo-btn");

// ================================
// ITEM 5 - A TO Z WHISTLEBLOWING
// ================================

const whistleblowing_drop = document.querySelector(".whistleblowing-drop");
const whistleblowing_item = document.querySelector(".whistleblowing-item");
const back_whistleblowing_btn = document.querySelector(
  ".back-whistleblowing-btn"
);

// =========================================================================================
// FIXME:  LEVEL 2 - CONSTANTS FOR THE 2ND LEVEL ITEMS (WITH DROPDOWNS TO 3RD LEVEL ITEMS)
// =========================================================================================

// =========================================================================================
// FIXME:  LEVEL 3 - CONSTANTS FOR THE 3RD LEVEL ITEMS (WITH DROPDOWNS TO 4TH LEVEL ITEMS)
// =========================================================================================

// =========================================================================================
// FIXME:  LEVEL 4 - CONSTANTS FOR THE 4TH LEVEL ITEMS (WITH DROPDOWNS TO 5TH LEVEL ITEMS)
// =========================================================================================

// =========================================================================================
// FIXME:  LEVEL 5 - CONSTANTS FOR THE 5TH LEVEL ITEMS (NO FURTHER LEVELS)
// =========================================================================================

// =========================================================================================
// TODO:  INDICATE WHAT HAPPENS ON "BUTTON-CLICKS" TO ACCESS EACH LEVEL OF THE NAVIGATION
// =========================================================================================

// ====================================================
// FIXME:  BUTTON-CLICK ACTIONS - TOP lEVEL NAVIGATION
// ====================================================

drop_btn.onclick = () => {
  menu_wrapper.classList.toggle("show");
  tooltip.classList.toggle("show");
};

// ===================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 1 NAVIGATION
// ===================================================

// ================================
// ITEM 1 - MARKETPLACE PRODUCTS
// ================================

marketplaceproducts_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    marketplaceproducts_drop.style.display = "block";
  }, 100);
};

back_marketplaceproducts_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  marketplaceproducts_drop.style.display = "none";
};

// ================================
// ITEM 2 - GENERAL SERVICES
// ================================

generalservices_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    generalservices_drop.style.display = "block";
  }, 100);
};

back_generalservices_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  generalservices_drop.style.display = "none";
};

// ================================
// ITEM 3 - PROFESSIONAL SERVICES
// ================================

professionalservices_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    professionalservices_drop.style.display = "block";
  }, 100);
};

back_professionalservices_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  professionalservices_drop.style.display = "none";
};

// ================================
// ITEM 4 - SKYNAMO CRM
// ================================

skynamo_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    skynamo_drop.style.display = "block";
  }, 100);
};

back_skynamo_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  skynamo_drop.style.display = "none";
};

// ================================
// ITEM 5 - A TO Z WHISTLEBLOWING
// ================================

whistleblowing_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    whistleblowing_drop.style.display = "block";
  }, 100);
};

back_whistleblowing_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  whistleblowing_drop.style.display = "none";
};

// ===================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 2 NAVIGATION
// ===================================================

// ===================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 3 NAVIGATION
// ===================================================

// ===================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 4 NAVIGATION
// ===================================================

// ===================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 5 NAVIGATION
// ===================================================

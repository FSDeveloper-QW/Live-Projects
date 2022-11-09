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
// ITEM 1 - SELLING PLANS
// ================================

const sellingplans_drop = document.querySelector(".sellingplans-drop");
const sellingplans_item = document.querySelector(".sellingplans-item");
const back_sellingplans_btn = document.querySelector(".back-sellingplans-btn");

// ================================
// ITEM 2 - INVESTING PLANS
// ================================

const investingplans_drop = document.querySelector(".investingplans-drop");
const investingplans_item = document.querySelector(".investingplans-item");
const back_investingplans_btn = document.querySelector(
  ".back-investingplans-btn"
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
// ITEM 1 - SELLING PLANS
// ================================

sellingplans_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    sellingplans_drop.style.display = "block";
  }, 100);
};

back_sellingplans_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  sellingplans_drop.style.display = "none";
};

// ================================
// ITEM 2 - INVESTING PLANS
// ================================

investingplans_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    investingplans_drop.style.display = "block";
  }, 100);
};

back_investingplans_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  investingplans_drop.style.display = "none";
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

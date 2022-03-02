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

// =========================
// ITEM 1 - SHOPPER ZONE
// =========================

const shopper_drop = document.querySelector(".shopper-drop");
const shopper_item = document.querySelector(".shopper-item");
const back_shopper_btn = document.querySelector(".back-shopper-btn");

// ========================
// ITEM 2 - SELLER ZONE
// ========================

const seller_drop = document.querySelector(".seller-drop");
const seller_item = document.querySelector(".seller-item");
const back_seller_btn = document.querySelector(".back-seller-btn");

// ========================
// ITEM 3 - INVESTOR ZONE
// ========================

const investor_drop = document.querySelector(".investor-drop");
const investor_item = document.querySelector(".investor-item");
const back_investor_btn = document.querySelector(".back-investor-btn");

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

// =========================
// ITEM 1 - SHOPPER ZONE
// =========================

shopper_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    shopper_drop.style.display = "block";
  }, 100);
};

back_shopper_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  shopper_drop.style.display = "none";
};

// ========================
// ITEM 2 - SELLER ZONE
// ========================

seller_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    seller_drop.style.display = "block";
  }, 100);
};

back_seller_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  seller_drop.style.display = "none";
};

// ========================
// ITEM 3 - INVESTOR ZONE
// ========================

investor_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    investor_drop.style.display = "block";
  }, 100);
};

back_investor_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  investor_drop.style.display = "none";
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

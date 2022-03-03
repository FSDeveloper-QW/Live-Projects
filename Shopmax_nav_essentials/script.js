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

// =====================================
// ITEM 1 - COVID-19, CLEANING AND PPE
// =====================================

const covid19_drop = document.querySelector(".covid19-drop");
const covid19_item = document.querySelector(".covid19-item");
const back_covid19_btn = document.querySelector(".back-covid19-btn");

/// =====================================
// ITEM 2 - EMERGENCY
// ======================================

const emergency_drop = document.querySelector(".emergency-drop");
const emergency_item = document.querySelector(".emergency-item");
const back_emergency_btn = document.querySelector(".back-emergency-btn");

// =====================================
// ITEM 3 - ENERGY
// =====================================

const energy_drop = document.querySelector(".energy-drop");
const energy_item = document.querySelector(".energy-item");
const back_energy_btn = document.querySelector(".back-energy-btn");

// =====================================
// ITEM 4 - FOOD, BEVERAGES & GROCERIES
// =====================================

const groceries_drop = document.querySelector(".groceries-drop");
const groceries_item = document.querySelector(".groceries-item");
const back_groceries_btn = document.querySelector(".back-groceries-btn");

// =====================================
// ITEM 5 - CLOTHING & FOOTWEAR
// =====================================

const clothingfootwear_drop = document.querySelector(".clothingfootwear-drop");
const clothingfootwear_item = document.querySelector(".clothingfootwear-item");
const back_clothingfootwear_btn = document.querySelector(
  ".back-clothingfootwear-btn"
);

// =========================================================================================
// FIXME:  LEVEL 2 - CONSTANTS FOR THE 2ND LEVEL ITEMS (WITH DROPDOWNS TO 3RD LEVEL ITEMS)
// =========================================================================================

// =====================================
// MAIN: FOOD, BEVERAGES & GROCERIES
// =====================================

// =====================================
// ITEM 1 - FRESH PRODUCE
// =====================================

const freshproduce_drop = document.querySelector(".freshproduce-drop");
const freshproduce_item = document.querySelector(".freshproduce-item");
const back_freshproduce_btn = document.querySelector(".back-freshproduce-btn");

// =====================================
// ITEM 2 - BAKERY
// =====================================

const bakery_drop = document.querySelector(".bakery-drop");
const bakery_item = document.querySelector(".bakery-item");
const back_bakery_btn = document.querySelector(".back-bakery-btn");

// =====================================
// ITEM 3 - DAIRY & EGGS
// =====================================

const dairyeggs_drop = document.querySelector(".dairyeggs-drop");
const dairyeggs_item = document.querySelector(".dairyeggs-item");
const back_dairyeggs_btn = document.querySelector(".back-dairyeggs-btn");

// =====================================
// ITEM 4 - DELI & PARTY
// =====================================

const deliparty_drop = document.querySelector(".deliparty-drop");
const deliparty_item = document.querySelector(".deliparty-item");
const back_deliparty_btn = document.querySelector(".back-deliparty-btn");

// =====================================
// ITEM 5 - MEATS, POULTRY & FISH
// =====================================

const meatspoultryfish_drop = document.querySelector(".meatspoultryfish-drop");
const meatspoultryfish_item = document.querySelector(".meatspoultryfish-item");
const back_meatspoultryfish_btn = document.querySelector(
  ".back-meatspoultryfish-btn"
);

// =====================================
// ITEM 6 - FROZEN FOODS
// =====================================

const frozenfoods_drop = document.querySelector(".frozenfoods-drop");
const frozenfoods_item = document.querySelector(".frozenfoods-item");
const back_frozenfoods_btn = document.querySelector(".back-frozenfoods-btn");

// =====================================
// ITEM 7 - BEVERAGES
// =====================================

const beveragesall_drop = document.querySelector(".beveragesall-drop");
const beveragesall_item = document.querySelector(".beveragesall-item");
const back_beveragesall_btn = document.querySelector(".back-beveragesall-btn");

// =====================================
// ITEM 8 - TOBACCO
// =====================================

const tabacco_drop = document.querySelector(".tabacco-drop");
const tabacco_item = document.querySelector(".tabacco-item");
const back_tabacco_btn = document.querySelector(".back-tabacco-btn");

// =====================================
// ITEM 9 - BEERS, CIDER & SELTZER
// =====================================

const beercider_drop = document.querySelector(".beercider-drop");
const beercider_item = document.querySelector(".beercider-item");
const back_beercider_btn = document.querySelector(".back-beercider-btn");

// =====================================
// ITEM 10 - WINES
// =====================================

const winesall_drop = document.querySelector(".winesall-drop");
const winesall_item = document.querySelector(".winesall-item");
const back_winesall_btn = document.querySelector(".back-winesall-btn");

// =====================================
// ITEM 11 - SPIRITS
// =====================================

const spiritsall_drop = document.querySelector(".spiritsall-drop");
const spiritsall_item = document.querySelector(".spiritsall-item");
const back_spiritsall_btn = document.querySelector(".back-spiritsall-btn");

// =====================================
// ITEM 12 - SNACKS
// =====================================

const snacks_drop = document.querySelector(".snacks-drop");
const snacks_item = document.querySelector(".snacks-item");
const back_snacks_btn = document.querySelector(".back-snacks-btn");

// =====================================
// ITEM 13 - FOOD CUPBOARD
// =====================================

const foodcupboard_drop = document.querySelector(".foodcupboard-drop");
const foodcupboard_item = document.querySelector(".foodcupboard-item");
const back_foodcupboard_btn = document.querySelector(".back-foodcupboard-btn");

// =====================================
// ITEM 14 - BABY CARE
// =====================================

const babycare_drop = document.querySelector(".babycare-drop");
const babycare_item = document.querySelector(".babycare-item");
const back_babycare_btn = document.querySelector(".back-babycare-btn");

// =====================================
// ITEM 15 - PET CARE
// =====================================

const petcare_drop = document.querySelector(".petcare-drop");
const petcare_item = document.querySelector(".petcare-item");
const back_petcare_btn = document.querySelector(".back-petcare-btn");

// =====================================
// ITEM 16 - BRAAI & OUTDOORS
// =====================================

const braaioutdoors_drop = document.querySelector(".braaioutdoors-drop");
const braaioutdoors_item = document.querySelector(".braaioutdoors-item");
const back_braaioutdoors_btn = document.querySelector(
  ".back-braaioutdoors-btn"
);

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

// =====================================
// ITEM 1 - COVID-19, CLEANING AND PPE
// =====================================

covid19_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    covid19_drop.style.display = "block";
  }, 100);
};

back_covid19_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  covid19_drop.style.display = "none";
};

/// =====================================
// ITEM 2 - EMERGENCY
// ======================================

emergency_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    emergency_drop.style.display = "block";
  }, 100);
};

back_emergency_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  emergency_drop.style.display = "none";
};

// =====================================
// ITEM 3 - ENERGY
// =====================================

energy_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    energy_drop.style.display = "block";
  }, 100);
};

back_energy_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  energy_drop.style.display = "none";
};

// =====================================
// ITEM 4 - FOOD, BEVERAGES & GROCERIES
// =====================================

groceries_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    groceries_drop.style.display = "block";
  }, 100);
};

back_groceries_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  groceries_drop.style.display = "none";
};

// =====================================
// ITEM 5 - CLOTHING & FOOTWEAR
// =====================================

clothingfootwear_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    clothingfootwear_drop.style.display = "block";
  }, 100);
};

back_clothingfootwear_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  clothingfootwear_drop.style.display = "none";
};

// ===================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 2 NAVIGATION
// ===================================================

// =====================================
// MAIN: FOOD, BEVERAGES & GROCERIES
// =====================================

// =====================================
// ITEM 1 - FRESH PRODUCE
// =====================================

freshproduce_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    freshproduce_drop.style.display = "block";
  }, 100);
};

back_freshproduce_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  freshproduce_drop.style.display = "none";
};

// =====================================
// ITEM 2 - BAKERY
// =====================================

bakery_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    bakery_drop.style.display = "block";
  }, 100);
};

back_bakery_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  bakery_drop.style.display = "none";
};

// =====================================
// ITEM 3 - DAIRY & EGGS
// =====================================

dairyeggs_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    dairyeggs_drop.style.display = "block";
  }, 100);
};

back_dairyeggs_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  dairyeggs_drop.style.display = "none";
};

// =====================================
// ITEM 4 - DELI & PARTY
// =====================================

deliparty_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    deliparty_drop.style.display = "block";
  }, 100);
};

back_deliparty_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  deliparty_drop.style.display = "none";
};

// =====================================
// ITEM 5 - MEATS, POULTRY & FISH
// =====================================

meatspoultryfish_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    meatspoultryfish_drop.style.display = "block";
  }, 100);
};

back_meatspoultryfish_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  meatspoultryfish_drop.style.display = "none";
};

// =====================================
// ITEM 6 - FROZEN FOODS
// =====================================

frozenfoods_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    frozenfoods_drop.style.display = "block";
  }, 100);
};

back_frozenfoods_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  frozenfoods_drop.style.display = "none";
};

// =====================================
// ITEM 7 - BEVERAGES
// =====================================

beveragesall_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    beveragesall_drop.style.display = "block";
  }, 100);
};

back_beveragesall_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  beveragesall_drop.style.display = "none";
};

// =====================================
// ITEM 8 - TOBACCO
// =====================================

tabacco_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    tabacco_drop.style.display = "block";
  }, 100);
};

back_tabacco_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  tabacco_drop.style.display = "none";
};

// =====================================
// ITEM 9 - BEERS, CIDER & SELTZER
// =====================================

beercider_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    beercider_drop.style.display = "block";
  }, 100);
};

back_beercider_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  beercider_drop.style.display = "none";
};

// =====================================
// ITEM 10 - WINES
// =====================================

winesall_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    winesall_drop.style.display = "block";
  }, 100);
};

back_winesall_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  winesall_drop.style.display = "none";
};

// =====================================
// ITEM 11 - SPIRITS
// =====================================

spiritsall_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    spiritsall_drop.style.display = "block";
  }, 100);
};

back_spiritsall_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  spiritsall_drop.style.display = "none";
};

// =====================================
// ITEM 12 - SNACKS
// =====================================

snacks_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    snacks_drop.style.display = "block";
  }, 100);
};

back_snacks_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  snacks_drop.style.display = "none";
};

// =====================================
// ITEM 13 - FOOD CUPBOARD
// =====================================

foodcupboard_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    foodcupboard_drop.style.display = "block";
  }, 100);
};

back_foodcupboard_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  foodcupboard_drop.style.display = "none";
};

// =====================================
// ITEM 14 - BABY CARE
// =====================================

babycare_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    babycare_drop.style.display = "block";
  }, 100);
};

back_babycare_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  babycare_drop.style.display = "none";
};

// =====================================
// ITEM 15 - PET CARE
// =====================================

petcare_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    petcare_drop.style.display = "block";
  }, 100);
};

back_petcare_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  petcare_drop.style.display = "none";
};

// =====================================
// ITEM 16 - BRAAI & OUTDOORS
// =====================================

braaioutdoors_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    braaioutdoors_drop.style.display = "block";
  }, 100);
};

back_braaioutdoors_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  braaioutdoors_drop.style.display = "none";
};

// ===================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 3 NAVIGATION
// ===================================================

// ===================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 4 NAVIGATION
// ===================================================

// ===================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 5 NAVIGATION
// ===================================================

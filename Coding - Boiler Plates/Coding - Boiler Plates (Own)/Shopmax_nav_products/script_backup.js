// =========================================================================================
// SCRIPT FOR ADVANCE DROP-DOWN MENU (SIDE WAY SCROLL)
// =========================================================================================

// =================================================================================================================================
// ========================================================================================  FIXME:  PART 1 - DECLARING CONSTANTS
// =================================================================================================================================

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

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// =====================================
// ITEM 1 - MOBILE
// =====================================

// =====================================
// ITEM 2 - OFFICE
// =====================================

// =====================================
// ITEM 3 - HOME & LIVING
// =====================================

// =====================================
// ITEM 4 - HOBBIES
// =====================================

// =====================================
// ITEM 5 - OUTDOORS
// =====================================

// =====================================
// ITEM 6 - SPORTS
// =====================================

// =====================================
// ITEM 7 - DIY, TOOLS & MATERIALS
// =====================================

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// =====================================
// ITEM 1 - COVID-19, CLEANING AND PPE
// =====================================

const covid19_drop = document.querySelector(".covid19-drop");
const covid19_item = document.querySelector(".covid19-item");
const back_covid19_btn = document.querySelector(".back-covid19-btn");

// =====================================
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

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

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

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

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

// ==============================================================  TODO:  CLIENT ZONE  TODO:

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

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// ============================================================
// MAIN - MOBILE
// ============================================================

// =====================================
// ITEM 1 - LAPTOPS
// =====================================

// =====================================
// ITEM 2 - PHONES
// =====================================

// =====================================
// ITEM 3 - TABLETS
// =====================================

// =====================================
// ITEM 4 - WATCHES
// =====================================

// =====================================
// ITEM 5 - DATA & AIRTIME
// =====================================

// =====================================
// ITEM 6 - MOBILE ACCESSORIES
// =====================================

// ============================================================
// MAIN - OFFICE
// ============================================================

// =====================================
// ITEM 1 - DESKTOP PC'S
// =====================================

// =====================================
// ITEM 2 - PC COMPONENTS
// =====================================

// =====================================
// ITEM 3 - PC PERIPHERALS
// =====================================

// =====================================
// ITEM 4 - SERVERS
// =====================================

// =====================================
// ITEM 5 - OFFICE STATIONERY
// =====================================

// =====================================
// ITEM 6 - OFFICE FURNITURE
// =====================================

// =====================================
// ITEM 7 - POINT-OF-SALES (POS)
// =====================================

// =====================================
// ITEM 8 - SECURITY & SURVEILLANCE
// =====================================

// =====================================
// ITEM 9 - PRINTERS
// =====================================

// =====================================
// ITEM 10 - PROJECTORS
// =====================================

// =====================================
// ITEM 11 - SOFTWARE
// =====================================

// ============================================================
// MAIN - HOME & LIVING
// ============================================================

// =====================================
// ITEM 1 - BATHROOMS
// =====================================

// =====================================
// ITEM 2 - BEDROOMS
// =====================================

// =====================================
// ITEM 3 - COOKWARE
// =====================================

// =====================================
// ITEM 4 - DINING ROOMS
// =====================================

// =====================================
// ITEM 5 - KITCHEN
// =====================================

// =====================================
// ITEM 6 - LAUNDRY
// =====================================

// =====================================
// ITEM 7 - LOUNGE
// =====================================

// =====================================
// ITEM 8 - PATIO & POOLS
// =====================================

// =====================================
// ITEM 9 - HOME ACCESSORIES
// =====================================

// =====================================
// ITEM 10 - TELEVISION
// =====================================

// ============================================================
// MAIN - HOBBIES
// ============================================================

// =====================================
// ITEM 1 - BOOKS
// =====================================

// =====================================
// ITEM 2 - CAMERAS
// =====================================

// =====================================
// ITEM 3 - GAMING
// =====================================

// =====================================
// ITEM 4 - RADIO CONTROL
// =====================================

// =====================================
// ITEM 5 - TOYS
// =====================================

// ============================================================
// MAIN - OUTDOORS
// ============================================================

// =====================================
// ITEM 1 - CAMPING
// =====================================

// =====================================
// ITEM 2 - OFF-ROAD VEHICLES
// =====================================

// =====================================
// ITEM 3 - OUTDOOR GEAR
// =====================================

// =====================================
// ITEM 4 - SHOOT & HUNT
// =====================================

// =====================================
// ITEM 5 - WATER SPORTS
// =====================================

// ============================================================
// MAIN - SPORTS
// ============================================================

// =====================================
// ITEM 1 - INDOOR TABLE SPORTS
// =====================================

// ============================================================
// MAIN - DIY, TOOLS & MATERIALS
// ============================================================

// =====================================
// ITEM 1 - GARDENING
// =====================================

// =====================================
// ITEM 2 - BUILDING MATERIALS
// =====================================

// =====================================
// ITEM 3 - TOOLS
// =====================================

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ============================================================
// MAIN: FOOD, BEVERAGES & GROCERIES
// ============================================================

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

// ============================================================
// MAIN: CLOTHING & FOOTWEAR                     FIXME:  LADIES
// ============================================================

const ladiesgroup_drop = document.querySelector(".ladiesgroup-drop");
const ladiesgroup_item = document.querySelector(".ladiesgroup-item");
const back_ladiesgroup_btn = document.querySelector(".back-ladiesgroup-btn");

// ============================================================
// MAIN: CLOTHING & FOOTWEAR                       FIXME:  MENS
// ============================================================

const mensgroup_drop = document.querySelector(".mensgroup-drop");
const mensgroup_item = document.querySelector(".mensgroup-item");
const back_mensgroup_btn = document.querySelector(".back-mensgroup-btn");

// ============================================================
// MAIN: CLOTHING & FOOTWEAR                       FIXME:  KIDS
// ============================================================

const kidsgroup_drop = document.querySelector(".kidsgroup-drop");
const kidsgroup_item = document.querySelector(".kidsgroup-item");
const back_kidsgroup_btn = document.querySelector(".back-kidsgroup-btn");

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  LEVEL 3 - CONSTANTS FOR THE 3RD LEVEL ITEMS (WITH DROPDOWNS TO 4TH LEVEL ITEMS)
// =========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ============================================================
// SUB: CLOTHING & FOOTWEAR                      FIXME:  LADIES
// ============================================================

// ============================================
// SUB-ITEM 1 - SHOES
// ============================================

const ladiesshoes_drop = document.querySelector(".ladiesshoes-drop");
const ladiesshoes_item = document.querySelector(".ladiesshoes-item");
const back_ladiesshoes_btn = document.querySelector(".back-ladiesshoes-btn");

// ============================================
// SUB-ITEM 2 - BOTTOMS
// ============================================

const ladiesbottoms_drop = document.querySelector(".ladiesbottoms-drop");
const ladiesbottoms_item = document.querySelector(".ladiesbottoms-item");
const back_ladiesbottoms_btn = document.querySelector(
  ".back-ladiesbottoms-btn"
);

// ============================================
// SUB-ITEM 3 - DRESSES
// ============================================

const ladiesdresses_drop = document.querySelector(".ladiesdresses-drop");
const ladiesdresses_item = document.querySelector(".ladiesdresses-item");
const back_ladiesdresses_btn = document.querySelector(
  ".back-ladiesdresses-btn"
);

// ============================================
// SUB-ITEM 4 - TOPS
// ============================================

const ladiestops_drop = document.querySelector(".ladiestops-drop");
const ladiestops_item = document.querySelector(".ladiestops-item");
const back_ladiestops_btn = document.querySelector(".back-ladiestops-btn");

// ============================================
// SUB-ITEM 5 - JACKETS & COATS
// ============================================

const ladiesjackets_drop = document.querySelector(".ladiesjackets-drop");
const ladiesjackets_item = document.querySelector(".ladiesjackets-item");
const back_ladiesjackets_btn = document.querySelector(
  ".back-ladiesjackets-btn"
);

// ============================================
// SUB-ITEM 6 - LINGERIE & SLEEPWEAR
// ============================================

const ladieslingerie_drop = document.querySelector(".ladieslingerie-drop");
const ladieslingerie_item = document.querySelector(".ladieslingerie-item");
const back_ladieslingerie_btn = document.querySelector(
  ".back-ladieslingerie-btn"
);

// ============================================
// SUB-ITEM 7 - SPORTS
// ============================================

const ladiessports_drop = document.querySelector(".ladiessports-drop");
const ladiessports_item = document.querySelector(".ladiessports-item");
const back_ladiessports_btn = document.querySelector(".back-ladiessports-btn");

// ============================================
// SUB-ITEM 8 - SWIMWEAR
// ============================================

const ladiesswimwear_drop = document.querySelector(".ladiesswimwear-drop");
const ladiesswimwear_item = document.querySelector(".ladiesswimwear-item");
const back_ladiesswimwear_btn = document.querySelector(
  ".back-ladiesswimwear-btn"
);

// ============================================
// SUB-ITEM 9 - LADIES ACCESSORIES
// ============================================

const ladiesaccessories_drop = document.querySelector(
  ".ladiesaccessories-drop"
);
const ladiesaccessories_item = document.querySelector(
  ".ladiesaccessories-item"
);
const back_ladiesaccessories_btn = document.querySelector(
  ".back-ladiesaccessories-btn"
);

// ============================================
// SUB-ITEM 10 - BEAUTY PRODUCTS
// ============================================

const ladiesbeauty_drop = document.querySelector(".ladiesbeauty-drop");
const ladiesbeauty_item = document.querySelector(".ladiesbeauty-item");
const back_ladiesbeauty_btn = document.querySelector(".back-ladiesbeauty-btn");

// ============================================================
// SUB: CLOTHING & FOOTWEAR                        FIXME:  MENS
// ============================================================

// ============================================
// SUB-ITEM 1 - SHOES
// ============================================

const mensshoes_drop = document.querySelector(".mensshoes-drop");
const mensshoes_item = document.querySelector(".mensshoes-item");
const back_mensshoes_btn = document.querySelector(".back-mensshoes-btn");

// ============================================
// SUB-ITEM 2 - BOTTOMS
// ============================================

const mensbottoms_drop = document.querySelector(".mensbottoms-drop");
const mensbottoms_item = document.querySelector(".mensbottoms-item");
const back_mensbottoms_btn = document.querySelector(".back-mensbottoms-btn");

// ============================================
// SUB-ITEM 3 - FORMAL WEAR
// ============================================

const mensformalwear_drop = document.querySelector(".mensformalwear-drop");
const mensformalwear_item = document.querySelector(".mensformalwear-item");
const back_mensformalwear_btn = document.querySelector(
  ".back-mensformalwear-btn"
);

// ============================================
// SUB-ITEM 4 - TOPS
// ============================================

const menstops_drop = document.querySelector(".menstops-drop");
const menstops_item = document.querySelector(".menstops-item");
const back_menstops_btn = document.querySelector(".back-menstops-btn");

// ============================================
// SUB-ITEM 5 - JACKETS & COATS
// ============================================

const mensjackets_drop = document.querySelector(".mensjackets-drop");
const mensjackets_item = document.querySelector(".mensjackets-item");
const back_mensjackets_btn = document.querySelector(".back-mensjackets-btn");

// ============================================
// SUB-ITEM 6 - UNDERWEAR & SLEEPWEAR
// ============================================

const mensunderwear_drop = document.querySelector(".mensunderwear-drop");
const mensunderwear_item = document.querySelector(".mensunderwear-item");
const back_mensunderwear_btn = document.querySelector(
  ".back-mensunderwear-btn"
);

// ============================================
// SUB-ITEM 7 - SPORTS
// ============================================

const menssports_drop = document.querySelector(".menssports-drop");
const menssports_item = document.querySelector(".menssports-item");
const back_menssports_btn = document.querySelector(".back-menssports-btn");

// ============================================
// SUB-ITEM 8 - SWIMWEAR
// ============================================

const mensswimwear_drop = document.querySelector(".mensswimwear-drop");
const mensswimwear_item = document.querySelector(".mensswimwear-item");
const back_mensswimwear_btn = document.querySelector(".back-mensswimwear-btn");

// ============================================
// SUB-ITEM 9 - MENS ACCESSORIES
// ============================================

const mensaccessories_drop = document.querySelector(".mensaccessories-drop");
const mensaccessories_item = document.querySelector(".mensaccessories-item");
const back_mensaccessories_btn = document.querySelector(
  ".back-mensaccessories-btn"
);

// ============================================
// SUB-ITEM 10 - MENS GROOMING PRODUCTS
// ============================================

const mensgrooming_drop = document.querySelector(".mensgrooming-drop");
const mensgrooming_item = document.querySelector(".mensgrooming-item");
const back_mensgrooming_btn = document.querySelector(".back-mensgrooming-btn");

// ============================================================
// SUB: CLOTHING & FOOTWEAR - FIXME:  KIDS
// ============================================================

// ============================================
// SUB-ITEM 1 - BABY GIRLS (0-2 YEARS)
// ============================================

const babygirls_drop = document.querySelector(".babygirls-drop");
const babygirls_item = document.querySelector(".babygirls-item");
const back_babygirls_btn = document.querySelector(".back-babygirls-btn");

// ============================================
// SUB-ITEM 2 - BABY BOYS (0-2 YEARS)
// ============================================

const babyboys_drop = document.querySelector(".babyboys-drop");
const babyboys_item = document.querySelector(".babyboys-item");
const back_babyboys_btn = document.querySelector(".back-babyboys-btn");

// ============================================
// SUB-ITEM 3 - GIRLS (2-8 YEARS)
// ============================================

const girlstwoeight_drop = document.querySelector(".girlstwoeight-drop");
const girlstwoeight_item = document.querySelector(".girlstwoeight-item");
const back_girlstwoeight_btn = document.querySelector(
  ".back-girlstwoeight-btn"
);

// ============================================
// SUB-ITEM 4 - BOYS (2-8 YEARS)
// ============================================

const boystwoeight_drop = document.querySelector(".boystwoeight-drop");
const boystwoeight_item = document.querySelector(".boystwoeight-item");
const back_boystwoeight_btn = document.querySelector(".back-boystwoeight-btn");

// ============================================
// SUB-ITEM 5 - GIRLS (8 - 16 YEARS)
// ============================================

const girlseightsixteen_drop = document.querySelector(
  ".girlseightsixteen-drop"
);
const girlseightsixteen_item = document.querySelector(
  ".girlseightsixteen-item"
);
const back_girlseightsixteen_btn = document.querySelector(
  ".back-girlseightsixteen-btn"
);

// ============================================
// SUB-ITEM 6 - BOYS (8 - 16 YEARS)
// ============================================

const boyseightsixteen_drop = document.querySelector(".boyseightsixteen-drop");
const boyseightsixteen_item = document.querySelector(".boyseightsixteen-item");
const back_boyseightsixteen_btn = document.querySelector(
  ".back-boyseightsixteen-btn"
);

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  LEVEL 4 - CONSTANTS FOR THE 4TH LEVEL ITEMS (WITH DROPDOWNS TO 5TH LEVEL ITEMS)
// =========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  LEVEL 5 - CONSTANTS FOR THE 5TH LEVEL ITEMS (NO FURTHER LEVELS)
// =========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

// =================================================================================================================================
// ========================================================================================  FIXME:  PART 2 - BUTTON CLICK ACTIONS
// =================================================================================================================================

// =========================================================================================
// TODO:  INDICATE WHAT HAPPENS ON "BUTTON-CLICKS" TO ACCESS EACH LEVEL OF THE NAVIGATION
// =========================================================================================

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - TOP lEVEL NAVIGATION
// =========================================================================================

drop_btn.onclick = () => {
  menu_wrapper.classList.toggle("show");
  tooltip.classList.toggle("show");
};

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 1 NAVIGATION
// =========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// =====================================
// ITEM 1 - MOBILE
// =====================================

// =====================================
// ITEM 2 - OFFICE
// =====================================

// =====================================
// ITEM 3 - HOME & LIVING
// =====================================

// =====================================
// ITEM 4 - HOBBIES
// =====================================

// =====================================
// ITEM 5 - OUTDOORS
// =====================================

// =====================================
// ITEM 6 - SPORTS
// =====================================

// =====================================
// ITEM 7 - DIY, TOOLS & MATERIALS
// =====================================

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

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

// =====================================
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

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

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

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

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

// ==============================================================  TODO:  CLIENT ZONE  TODO:

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

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 2 NAVIGATION
// =========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// ============================================================
// MAIN - MOBILE
// ============================================================

// =====================================
// ITEM 1 - LAPTOPS
// =====================================

// =====================================
// ITEM 2 - PHONES
// =====================================

// =====================================
// ITEM 3 - TABLETS
// =====================================

// =====================================
// ITEM 4 - WATCHES
// =====================================

// =====================================
// ITEM 5 - DATA & AIRTIME
// =====================================

// =====================================
// ITEM 6 - MOBILE ACCESSORIES
// =====================================

// ============================================================
// MAIN - OFFICE
// ============================================================

// =====================================
// ITEM 1 - DESKTOP PC'S
// =====================================

// =====================================
// ITEM 2 - PC COMPONENTS
// =====================================

// =====================================
// ITEM 3 - PC PERIPHERALS
// =====================================

// =====================================
// ITEM 4 - SERVERS
// =====================================

// =====================================
// ITEM 5 - OFFICE STATIONERY
// =====================================

// =====================================
// ITEM 6 - OFFICE FURNITURE
// =====================================

// =====================================
// ITEM 7 - POINT-OF-SALES (POS)
// =====================================

// =====================================
// ITEM 8 - SECURITY & SURVEILLANCE
// =====================================

// =====================================
// ITEM 9 - PRINTERS
// =====================================

// =====================================
// ITEM 10 - PROJECTORS
// =====================================

// =====================================
// ITEM 11 - SOFTWARE
// =====================================

// ============================================================
// MAIN - HOME & LIVING
// ============================================================

// =====================================
// ITEM 1 - BATHROOMS
// =====================================

// =====================================
// ITEM 2 - BEDROOMS
// =====================================

// =====================================
// ITEM 3 - COOKWARE
// =====================================

// =====================================
// ITEM 4 - DINING ROOMS
// =====================================

// =====================================
// ITEM 5 - KITCHEN
// =====================================

// =====================================
// ITEM 6 - LAUNDRY
// =====================================

// =====================================
// ITEM 7 - LOUNGE
// =====================================

// =====================================
// ITEM 8 - PATIO & POOLS
// =====================================

// =====================================
// ITEM 9 - HOME ACCESSORIES
// =====================================

// =====================================
// ITEM 10 - TELEVISION
// =====================================

// ============================================================
// MAIN - HOBBIES
// ============================================================

// =====================================
// ITEM 1 - BOOKS
// =====================================

// =====================================
// ITEM 2 - CAMERAS
// =====================================

// =====================================
// ITEM 3 - GAMING
// =====================================

// =====================================
// ITEM 4 - RADIO CONTROL
// =====================================

// =====================================
// ITEM 5 - TOYS
// =====================================

// ============================================================
// MAIN - OUTDOORS
// ============================================================

// =====================================
// ITEM 1 - CAMPING
// =====================================

// =====================================
// ITEM 2 - OFF-ROAD VEHICLES
// =====================================

// =====================================
// ITEM 3 - OUTDOOR GEAR
// =====================================

// =====================================
// ITEM 4 - SHOOT & HUNT
// =====================================

// =====================================
// ITEM 5 - WATER SPORTS
// =====================================

// ============================================================
// MAIN - SPORTS
// ============================================================

// =====================================
// ITEM 1 - INDOOR TABLE SPORTS
// =====================================

// ============================================================
// MAIN - DIY, TOOLS & MATERIALS
// ============================================================

// =====================================
// ITEM 1 - GARDENING
// =====================================

// =====================================
// ITEM 2 - BUILDING MATERIALS
// =====================================

// =====================================
// ITEM 3 - TOOLS
// =====================================

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ============================================================
// MAIN: FOOD, BEVERAGES & GROCERIES
// ============================================================

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

// ============================================================
// MAIN: CLOTHING & FOOTWEAR                     FIXME:  LADIES
// ============================================================

ladiesgroup_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    ladiesgroup_drop.style.display = "block";
  }, 100);
};

back_ladiesgroup_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  ladiesgroup_drop.style.display = "none";
};

// ============================================================
// MAIN: CLOTHING & FOOTWEAR                       FIXME:  MENS
// ============================================================

mensgroup_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    mensgroup_drop.style.display = "block";
  }, 100);
};

back_mensgroup_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  mensgroup_drop.style.display = "none";
};

// ============================================================
// MAIN: CLOTHING & FOOTWEAR                       FIXME:  KIDS
// ============================================================

kidsgroup_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    kidsgroup_drop.style.display = "block";
  }, 100);
};

back_kidsgroup_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  kidsgroup_drop.style.display = "none";
};

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 3 NAVIGATION
// =========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ============================================================
// SUB: CLOTHING & FOOTWEAR                      FIXME:  LADIES
// ============================================================

// ============================================
// SUB-ITEM 1 - SHOES
// ============================================

ladiesshoes_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    ladiesshoes_drop.style.display = "block";
  }, 100);
};

back_ladiesshoes_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  ladiesshoes_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 2 - BOTTOMS
// ============================================

ladiesbottoms_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    ladiesbottoms_drop.style.display = "block";
  }, 100);
};

back_ladiesbottoms_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  ladiesbottoms_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 3 - DRESSES
// ============================================

ladiesdresses_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    ladiesdresses_drop.style.display = "block";
  }, 100);
};

back_ladiesdresses_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  ladiesdresses_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 4 - TOPS
// ============================================

ladiestops_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    ladiestops_drop.style.display = "block";
  }, 100);
};

back_ladiestops_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  ladiestops_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 5 - JACKETS & COATS
// ============================================

ladiesjackets_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    ladiesjackets_drop.style.display = "block";
  }, 100);
};

back_ladiesjackets_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  ladiesjackets_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 6 - LINGERIE & SLEEPWEAR
// ============================================

ladieslingerie_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    ladieslingerie_drop.style.display = "block";
  }, 100);
};

back_ladieslingerie_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  ladieslingerie_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 7 - SPORTS
// ============================================

ladiessports_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    ladiessports_drop.style.display = "block";
  }, 100);
};

back_ladiessports_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  ladiessports_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 8 - SWIMWEAR
// ============================================

ladiesswimwear_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    ladiesswimwear_drop.style.display = "block";
  }, 100);
};

back_ladiesswimwear_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  ladiesswimwear_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 9 - LADIES ACCESSORIES
// ============================================

ladiesaccessories_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    ladiesaccessories_drop.style.display = "block";
  }, 100);
};

back_ladiesaccessories_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  ladiesaccessories_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 10 - BEAUTY PRODUCTS
// ============================================

ladiesbeauty_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    ladiesbeauty_drop.style.display = "block";
  }, 100);
};

back_ladiesbeauty_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  ladiesbeauty_drop.style.display = "none";
};

// ============================================================
// SUB: CLOTHING & FOOTWEAR                        FIXME:  MENS
// ============================================================

// ============================================
// SUB-ITEM 1 - SHOES
// ============================================

mensshoes_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    mensshoes_drop.style.display = "block";
  }, 100);
};

back_mensshoes_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  mensshoes_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 2 - BOTTOMS
// ============================================

mensbottoms_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    mensbottoms_drop.style.display = "block";
  }, 100);
};

back_mensbottoms_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  mensbottoms_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 3 - FORMAL WEAR
// ============================================

mensformalwear_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    mensformalwear_drop.style.display = "block";
  }, 100);
};

back_mensformalwear_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  mensformalwear_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 4 - TOPS
// ============================================

menstops_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    menstops_drop.style.display = "block";
  }, 100);
};

back_menstops_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  menstops_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 5 - JACKETS & COATS
// ============================================

mensjackets_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    mensjackets_drop.style.display = "block";
  }, 100);
};

back_mensjackets_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  mensjackets_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 6 - UNDERWEAR & SLEEPWEAR
// ============================================

mensunderwear_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    mensunderwear_drop.style.display = "block";
  }, 100);
};

back_mensunderwear_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  mensunderwear_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 7 - SPORTS
// ============================================

menssports_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    menssports_drop.style.display = "block";
  }, 100);
};

back_menssports_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  menssports_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 8 - SWIMWEAR
// ============================================

mensswimwear_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    mensswimwear_drop.style.display = "block";
  }, 100);
};

back_mensswimwear_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  mensswimwear_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 9 - MENS ACCESSORIES
// ============================================

mensaccessories_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    mensaccessories_drop.style.display = "block";
  }, 100);
};

back_mensaccessories_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  mensaccessories_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 10 - MENS GROOMING PRODUCTS
// ============================================

mensgrooming_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    mensgrooming_drop.style.display = "block";
  }, 100);
};

back_mensgrooming_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  mensgrooming_drop.style.display = "none";
};

// ============================================================
// SUB: CLOTHING & FOOTWEAR - FIXME:  KIDS
// ============================================================

// ============================================
// SUB-ITEM 1 - BABY GIRLS (0-2 YEARS)
// ============================================

babygirls_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    babygirls_drop.style.display = "block";
  }, 100);
};

back_babygirls_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  babygirls_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 2 - BABY BOYS (0-2 YEARS)
// ============================================

babyboys_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    babyboys_drop.style.display = "block";
  }, 100);
};

back_babyboys_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  babyboys_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 3 - GIRLS (2-8 YEARS)
// ============================================

girlstwoeight_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    girlstwoeight_drop.style.display = "block";
  }, 100);
};

back_girlstwoeight_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  girlstwoeight_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 4 - BOYS (2-8 YEARS)
// ============================================

boystwoeight_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    boystwoeight_drop.style.display = "block";
  }, 100);
};

back_boystwoeight_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  boystwoeight_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 5 - GIRLS (8 - 16 YEARS)
// ============================================

girlseightsixteen_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    girlseightsixteen_drop.style.display = "block";
  }, 100);
};

back_girlseightsixteen_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  girlseightsixteen_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 6 - BOYS (8 - 16 YEARS)
// ============================================

boyseightsixteen_item.onclick = () => {
  menu_bar.style.marginLeft = "-120rem";
  setTimeout(() => {
    boyseightsixteen_drop.style.display = "block";
  }, 100);
};

back_boyseightsixteen_btn.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  boyseightsixteen_drop.style.display = "none";
};

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 4 NAVIGATION
// =========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 5 NAVIGATION
// =========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

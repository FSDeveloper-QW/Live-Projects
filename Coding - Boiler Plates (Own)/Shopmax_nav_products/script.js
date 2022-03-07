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

const mobile_drop = document.querySelector(".mobile-drop");
const mobile_item = document.querySelector(".mobile-item");
const back_mobile_btn = document.querySelector(".back-mobile-btn");

// =====================================
// ITEM 2 - OFFICE
// =====================================

const office_drop = document.querySelector(".office-drop");
const office_item = document.querySelector(".office-item");
const back_office_btn = document.querySelector(".back-office-btn");

// =====================================
// ITEM 3 - HOME & LIVING
// =====================================

const homeliving_drop = document.querySelector(".homeliving-drop");
const homeliving_item = document.querySelector(".homeliving-item");
const back_homeliving_btn = document.querySelector(".back-homeliving-btn");

// =====================================
// ITEM 4 - HOBBIES
// =====================================

const hobbies_drop = document.querySelector(".hobbies-drop");
const hobbies_item = document.querySelector(".hobbies-item");
const back_hobbies_btn = document.querySelector(".back-hobbies-btn");

// =====================================
// ITEM 5 - OUTDOORS
// =====================================

const outdoors_drop = document.querySelector(".outdoors-drop");
const outdoors_item = document.querySelector(".outdoors-item");
const back_outdoors_btn = document.querySelector(".back-outdoors-btn");

// =====================================
// ITEM 6 - SPORTS
// =====================================

const sports_drop = document.querySelector(".sports-drop");
const sports_item = document.querySelector(".sports-item");
const back_sports_btn = document.querySelector(".back-sports-btn");

// =====================================
// ITEM 7 - DIY, TOOLS & MATERIALS
// =====================================

const diyall_drop = document.querySelector(".diyall-drop");
const diyall_item = document.querySelector(".diyall-item");
const back_diyall_btn = document.querySelector(".back-diyall-btn");

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

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

const laptops_drop = document.querySelector(".laptops-drop");
const laptops_item = document.querySelector(".laptops-item");
const back_laptops_btn = document.querySelector(".back-laptops-btn");

// =====================================
// ITEM 2 - PHONES
// =====================================

const phones_drop = document.querySelector(".phones-drop");
const phones_item = document.querySelector(".phones-item");
const back_phones_btn = document.querySelector(".back-phones-btn");

// =====================================
// ITEM 3 - TABLETS
// =====================================

const tablets_drop = document.querySelector(".tablets-drop");
const tablets_item = document.querySelector(".tablets-item");
const back_tablets_btn = document.querySelector(".back-tablets-btn");

// =====================================
// ITEM 4 - WATCHES
// =====================================

const watches_drop = document.querySelector(".watches-drop");
const watches_item = document.querySelector(".watches-item");
const back_watches_btn = document.querySelector(".back-watches-btn");

// =====================================
// ITEM 5 - DATA & AIRTIME
// =====================================

const data_drop = document.querySelector(".data-drop");
const data_item = document.querySelector(".data-item");
const back_data_btn = document.querySelector(".back-data-btn");

// =====================================
// ITEM 6 - MOBILE ACCESSORIES
// =====================================

const mobileaccessories_drop = document.querySelector(
  ".mobileaccessories-drop"
);
const mobileaccessories_item = document.querySelector(
  ".mobileaccessories-item"
);
const back_mobileaccessories_btn = document.querySelector(
  ".back-mobileaccessories-btn"
);

// =====================================  FIXME:  END OF MOBILE

// ============================================================
// MAIN - OFFICE
// ============================================================

// =====================================
// ITEM 1 - DESKTOP PC'S
// =====================================

const desktoppc_drop = document.querySelector(".desktoppc-drop");
const desktoppc_item = document.querySelector(".desktoppc-item");
const back_desktoppc_btn = document.querySelector(".back-desktoppc-btn");

// =====================================
// ITEM 2 - PC COMPONENTS
// =====================================

const pccomponents_drop = document.querySelector(".pccomponents-drop");
const pccomponents_item = document.querySelector(".pccomponents-item");
const back_pccomponents_btn = document.querySelector(".back-pccomponents-btn");

// =====================================
// ITEM 3 - PC PERIPHERALS
// =====================================

const pcperipherals_drop = document.querySelector(".pcperipherals-drop");
const pcperipherals_item = document.querySelector(".pcperipherals-item");
const back_pcperipherals_btn = document.querySelector(
  ".back-pcperipherals-btn"
);

// =====================================
// ITEM 4 - SERVERS
// =====================================

const servers_drop = document.querySelector(".servers-drop");
const servers_item = document.querySelector(".servers-item");
const back_servers_btn = document.querySelector(".back-servers-btn");

// =====================================
// ITEM 5 - POINT-OF-SALES (POS)
// =====================================

const pointofsale_drop = document.querySelector(".pointofsale-drop");
const pointofsale_item = document.querySelector(".pointofsale-item");
const back_pointofsale_btn = document.querySelector(".back-pointofsale-btn");

// =====================================
// ITEM 6 - SECURITY & SURVEILLANCE
// =====================================

const securitysurveillance_drop = document.querySelector(
  ".securitysurveillance-drop"
);
const securitysurveillance_item = document.querySelector(
  ".securitysurveillance-item"
);
const back_securitysurveillance_btn = document.querySelector(
  ".back-securitysurveillance-btn"
);

// =====================================
// ITEM 7 - PRINTERS
// =====================================

const printers_drop = document.querySelector(".printers-drop");
const printers_item = document.querySelector(".printers-item");
const back_printers_btn = document.querySelector(".back-printers-btn");

// =====================================
// ITEM 8 - PROJECTORS
// =====================================

const projectors_drop = document.querySelector(".projectors-drop");
const projectors_item = document.querySelector(".projectors-item");
const back_projectors_btn = document.querySelector(".back-projectors-btn");

// =====================================
// ITEM 9 - SOFTWARE
// =====================================

const software_drop = document.querySelector(".software-drop");
const software_item = document.querySelector(".software-item");
const back_software_btn = document.querySelector(".back-software-btn");

// =====================================
// ITEM 10 - OFFICE STATIONERY
// =====================================

const officestationery_drop = document.querySelector(".officestationery-drop");
const officestationery_item = document.querySelector(".officestationery-item");
const back_officestationery_btn = document.querySelector(
  ".back-officestationery-btn"
);

// =====================================
// ITEM 11 - OFFICE FURNITURE
// =====================================

const officefurniture_drop = document.querySelector(".officefurniture-drop");
const officefurniture_item = document.querySelector(".officefurniture-item");
const back_officefurniture_btn = document.querySelector(
  ".back-officefurniture-btn"
);

// =====================================  FIXME:  END OF OFFICE

// ============================================================
// MAIN - HOME & LIVING
// ============================================================

// =====================================
// ITEM 1 - BATHROOMS
// =====================================

const bathrooms_drop = document.querySelector(".bathrooms-drop");
const bathrooms_item = document.querySelector(".bathrooms-item");
const back_bathrooms_btn = document.querySelector(".back-bathrooms-btn");

// =====================================
// ITEM 2 - BEDROOMS
// =====================================

const bedrooms_drop = document.querySelector(".bedrooms-drop");
const bedrooms_item = document.querySelector(".bedrooms-item");
const back_bedrooms_btn = document.querySelector(".back-bedrooms-btn");

// =====================================
// ITEM 3 - COOKWARE
// =====================================

const cookware_drop = document.querySelector(".cookware-drop");
const cookware_item = document.querySelector(".cookware-item");
const back_cookware_btn = document.querySelector(".back-cookware-btn");

// =====================================
// ITEM 4 - DINING ROOMS
// =====================================

const diningrooms_drop = document.querySelector(".diningrooms-drop");
const diningrooms_item = document.querySelector(".diningrooms-item");
const back_diningrooms_btn = document.querySelector(".back-diningrooms-btn");

// =====================================
// ITEM 5 - KITCHEN
// =====================================

const kitchen_drop = document.querySelector(".kitchen-drop");
const kitchen_item = document.querySelector(".kitchen-item");
const back_kitchen_btn = document.querySelector(".back-kitchen-btn");

// =====================================
// ITEM 6 - LAUNDRY
// =====================================

const laundry_drop = document.querySelector(".laundry-drop");
const laundry_item = document.querySelector(".laundry-item");
const back_laundry_btn = document.querySelector(".back-laundry-btn");

// =====================================
// ITEM 7 - LOUNGE
// =====================================

const lounge_drop = document.querySelector(".lounge-drop");
const lounge_item = document.querySelector(".lounge-item");
const back_lounge_btn = document.querySelector(".back-lounge-btn");

// =====================================
// ITEM 8 - PATIO & POOLS
// =====================================

const patiopools_drop = document.querySelector(".patiopools-drop");
const patiopools_item = document.querySelector(".patiopools-item");
const back_patiopools_btn = document.querySelector(".back-patiopools-btn");

// =====================================
// ITEM 9 - HOME ACCESSORIES
// =====================================

const homeaccessories_drop = document.querySelector(".homeaccessories-drop");
const homeaccessories_item = document.querySelector(".homeaccessories-item");
const back_homeaccessories_btn = document.querySelector(
  ".back-homeaccessories-btn"
);

// =====================================
// ITEM 10 - TELEVISION
// =====================================

const television_drop = document.querySelector(".television-drop");
const television_item = document.querySelector(".television-item");
const back_television_btn = document.querySelector(".back-television-btn");

// ==============================  FIXME:  END OF HOME & LIVING

// ============================================================
// MAIN - HOBBIES
// ============================================================

// =====================================
// ITEM 1 - BOOKS
// =====================================

const booksall_drop = document.querySelector(".booksall-drop");
const booksall_item = document.querySelector(".booksall-item");
const back_booksall_btn = document.querySelector(".back-booksall-btn");

// =====================================
// ITEM 2 - CAMERAS
// =====================================

const camerasall_drop = document.querySelector(".camerasall-drop");
const camerasall_item = document.querySelector(".camerasall-item");
const back_camerasall_btn = document.querySelector(".back-camerasall-btn");

// =====================================
// ITEM 3 - GAMING
// =====================================

const gamingall_drop = document.querySelector(".gamingall-drop");
const gamingall_item = document.querySelector(".gamingall-item");
const back_gamingall_btn = document.querySelector(".back-gamingall-btn");

// =====================================
// ITEM 4 - RADIO CONTROL
// =====================================

const radiocontrol_drop = document.querySelector(".radiocontrol-drop");
const radiocontrol_item = document.querySelector(".radiocontrol-item");
const back_radiocontrol_btn = document.querySelector(".back-radiocontrol-btn");

// =====================================
// ITEM 5 - TOYS
// =====================================

const toysall_drop = document.querySelector(".toysall-drop");
const toysall_item = document.querySelector(".toysall-item");
const back_toysall_btn = document.querySelector(".back-toysall-btn");

// ====================================  FIXME:  END OF HOBBIES

// ============================================================
// MAIN - OUTDOORS
// ============================================================

// =====================================
// ITEM 1 - CAMPING
// =====================================

const camping_drop = document.querySelector(".camping-drop");
const camping_item = document.querySelector(".camping-item");
const back_camping_btn = document.querySelector(".back-camping-btn");

// =====================================
// ITEM 2 - OFF-ROAD VEHICLES
// =====================================

const offroadvehicles_drop = document.querySelector(".offroadvehicles-drop");
const offroadvehicles_item = document.querySelector(".offroadvehicles-item");
const back_offroadvehicles_btn = document.querySelector(
  ".back-offroadvehicles-btn"
);

// =====================================
// ITEM 3 - OUTDOOR GEAR
// =====================================

const outdoorgear_drop = document.querySelector(".outdoorgear-drop");
const outdoorgear_item = document.querySelector(".outdoorgear-item");
const back_outdoorgear_btn = document.querySelector(".back-outdoorgear-btn");

// =====================================
// ITEM 4 - SHOOT & HUNT
// =====================================

const shoothunt_drop = document.querySelector(".shoothunt-drop");
const shoothunt_item = document.querySelector(".shoothunt-item");
const back_shoothunt_btn = document.querySelector(".back-shoothunt-btn");

// =====================================
// ITEM 5 - WATER SPORTS
// =====================================

const watersports_drop = document.querySelector(".watersports-drop");
const watersports_item = document.querySelector(".watersports-item");
const back_watersports_btn = document.querySelector(".back-watersports-btn");

// ===================================  FIXME:  END OF OUTDOORS

// ============================================================
// MAIN - SPORTS
// ============================================================

// =====================================
// ITEM 1 - INDOOR TABLE SPORTS
// =====================================

const tablesports_drop = document.querySelector(".tablesports-drop");
const tablesports_item = document.querySelector(".tablesports-item");
const back_tablesports_btn = document.querySelector(".back-tablesports-btn");

// =====================================  FIXME:  END OF SPORTS

// ============================================================
// MAIN - DIY, TOOLS & MATERIALS
// ============================================================

// =====================================
// ITEM 1 - GARDENING
// =====================================

const diygardening_drop = document.querySelector(".diygardening-drop");
const diygardening_item = document.querySelector(".diygardening-item");
const back_diygardening_btn = document.querySelector(".back-diygardening-btn");

// =====================================
// ITEM 2 - BUILDING MATERIALS
// =====================================

const diymaterials_drop = document.querySelector(".diymaterials-drop");
const diymaterials_item = document.querySelector(".diymaterials-item");
const back_diymaterials_btn = document.querySelector(".back-diymaterials-btn");

// =====================================
// ITEM 3 - TOOLS & MACHINERY
// =====================================

const diytools_drop = document.querySelector(".diytools-drop");
const diytools_item = document.querySelector(".diytools-item");
const back_diytools_btn = document.querySelector(".back-diytools-btn");

// =====================================   FIXME:  END OF DIY

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  LEVEL 3 - CONSTANTS FOR THE 3RD LEVEL ITEMS (WITH DROPDOWNS TO 4TH LEVEL ITEMS)
// =========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

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

// ========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 1 NAVIGATION
// ========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// =====================================
// ITEM 1 - MOBILE
// =====================================

mobile_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    mobile_drop.style.display = "block";
  }, 100);
};

back_mobile_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  mobile_drop.style.display = "none";
};

// =====================================
// ITEM 2 - OFFICE
// =====================================

office_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    office_drop.style.display = "block";
  }, 100);
};

back_office_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  office_drop.style.display = "none";
};

// =====================================
// ITEM 3 - HOME & LIVING
// =====================================

homeliving_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    homeliving_drop.style.display = "block";
  }, 100);
};

back_homeliving_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  homeliving_drop.style.display = "none";
};

// =====================================
// ITEM 4 - HOBBIES
// =====================================

hobbies_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    hobbies_drop.style.display = "block";
  }, 100);
};

back_hobbies_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  hobbies_drop.style.display = "none";
};

// =====================================
// ITEM 5 - OUTDOORS
// =====================================

outdoors_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    outdoors_drop.style.display = "block";
  }, 100);
};

back_outdoors_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  outdoors_drop.style.display = "none";
};

// =====================================
// ITEM 6 - SPORTS
// =====================================

sports_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    sports_drop.style.display = "block";
  }, 100);
};

back_sports_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  sports_drop.style.display = "none";
};

// =====================================
// ITEM 7 - DIY, TOOLS & MATERIALS
// =====================================

diyall_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    diyall_drop.style.display = "block";
  }, 100);
};

back_diyall_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  diyall_drop.style.display = "none";
};

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

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

laptops_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    laptops_drop.style.display = "block";
  }, 100);
};

back_laptops_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  laptops_drop.style.display = "none";
};

// =====================================
// ITEM 2 - PHONES
// =====================================

phones_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    phones_drop.style.display = "block";
  }, 100);
};

back_phones_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  phones_drop.style.display = "none";
};

// =====================================
// ITEM 3 - TABLETS
// =====================================

tablets_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    tablets_drop.style.display = "block";
  }, 100);
};

back_tablets_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  tablets_drop.style.display = "none";
};

// =====================================
// ITEM 4 - WATCHES
// =====================================

watches_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    watches_drop.style.display = "block";
  }, 100);
};

back_watches_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  watches_drop.style.display = "none";
};

// =====================================
// ITEM 5 - DATA & AIRTIME
// =====================================

data_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    data_drop.style.display = "block";
  }, 100);
};

back_data_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  data_drop.style.display = "none";
};

// =====================================
// ITEM 6 - MOBILE ACCESSORIES
// =====================================

mobileaccessories_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    mobileaccessories_drop.style.display = "block";
  }, 100);
};

back_mobileaccessories_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  mobileaccessories_drop.style.display = "none";
};

// =====================================  FIXME:  END OF MOBILE

// ============================================================
// MAIN - OFFICE
// ============================================================

// =====================================
// ITEM 1 - DESKTOP PC'S
// =====================================

desktoppc_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    desktoppc_drop.style.display = "block";
  }, 100);
};

back_desktoppc_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  desktoppc_drop.style.display = "none";
};

// =====================================
// ITEM 2 - PC COMPONENTS
// =====================================

pccomponents_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    pccomponents_drop.style.display = "block";
  }, 100);
};

back_pccomponents_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  pccomponents_drop.style.display = "none";
};

// =====================================
// ITEM 3 - PC PERIPHERALS
// =====================================

pcperipherals_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    pcperipherals_drop.style.display = "block";
  }, 100);
};

back_pcperipherals_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  pcperipherals_drop.style.display = "none";
};

// =====================================
// ITEM 4 - SERVERS
// =====================================

servers_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    servers_drop.style.display = "block";
  }, 100);
};

back_servers_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  servers_drop.style.display = "none";
};

// =====================================
// ITEM 5 - POINT-OF-SALES (POS)
// =====================================

pointofsale_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    pointofsale_drop.style.display = "block";
  }, 100);
};

back_pointofsale_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  pointofsale_drop.style.display = "none";
};

// =====================================
// ITEM 6 - SECURITY & SURVEILLANCE
// =====================================

securitysurveillance_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    securitysurveillance_drop.style.display = "block";
  }, 100);
};

back_securitysurveillance_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  securitysurveillance_drop.style.display = "none";
};

// =====================================
// ITEM 7 - PRINTERS
// =====================================

printers_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    printers_drop.style.display = "block";
  }, 100);
};

back_printers_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  printers_drop.style.display = "none";
};

// =====================================
// ITEM 8 - PROJECTORS
// =====================================

projectors_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    projectors_drop.style.display = "block";
  }, 100);
};

back_projectors_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  projectors_drop.style.display = "none";
};

// =====================================
// ITEM 9 - SOFTWARE
// =====================================

software_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    software_drop.style.display = "block";
  }, 100);
};

back_software_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  software_drop.style.display = "none";
};

// =====================================
// ITEM 10 - OFFICE STATIONERY
// =====================================

officestationery_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    officestationery_drop.style.display = "block";
  }, 100);
};

back_officestationery_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  officestationery_drop.style.display = "none";
};

// =====================================
// ITEM 11 - OFFICE FURNITURE
// =====================================

officefurniture_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    officefurniture_drop.style.display = "block";
  }, 100);
};

back_officefurniture_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  officefurniture_drop.style.display = "none";
};

// =====================================  FIXME:  END OF OFFICE

// ============================================================
// MAIN - HOME & LIVING
// ============================================================

// =====================================
// ITEM 1 - BATHROOMS
// =====================================

bathrooms_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    bathrooms_drop.style.display = "block";
  }, 100);
};

back_bathrooms_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  bathrooms_drop.style.display = "none";
};

// =====================================
// ITEM 2 - BEDROOMS
// =====================================

bedrooms_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    bedrooms_drop.style.display = "block";
  }, 100);
};

back_bedrooms_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  bedrooms_drop.style.display = "none";
};

// =====================================
// ITEM 3 - COOKWARE
// =====================================

cookware_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    cookware_drop.style.display = "block";
  }, 100);
};

back_cookware_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  cookware_drop.style.display = "none";
};

// =====================================
// ITEM 4 - DINING ROOMS
// =====================================

diningrooms_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    diningrooms_drop.style.display = "block";
  }, 100);
};

back_diningrooms_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  diningrooms_drop.style.display = "none";
};

// =====================================
// ITEM 5 - KITCHEN
// =====================================

kitchen_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    kitchen_drop.style.display = "block";
  }, 100);
};

back_kitchen_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  kitchen_drop.style.display = "none";
};

// =====================================
// ITEM 6 - LAUNDRY
// =====================================

laundry_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    laundry_drop.style.display = "block";
  }, 100);
};

back_laundry_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  laundry_drop.style.display = "none";
};

// =====================================
// ITEM 7 - LOUNGE
// =====================================

lounge_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    lounge_drop.style.display = "block";
  }, 100);
};

back_lounge_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  lounge_drop.style.display = "none";
};

// =====================================
// ITEM 8 - PATIO & POOLS
// =====================================

patiopools_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    patiopools_drop.style.display = "block";
  }, 100);
};

back_patiopools_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  patiopools_drop.style.display = "none";
};

// =====================================
// ITEM 9 - HOME ACCESSORIES
// =====================================

homeaccessories_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    homeaccessories_drop.style.display = "block";
  }, 100);
};

back_homeaccessories_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  homeaccessories_drop.style.display = "none";
};

// =====================================
// ITEM 10 - TELEVISION
// =====================================

television_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    television_drop.style.display = "block";
  }, 100);
};

back_television_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  television_drop.style.display = "none";
};

// ==============================  FIXME:  END OF HOME & LIVING

// ============================================================
// MAIN - HOBBIES
// ============================================================

// =====================================
// ITEM 1 - BOOKS
// =====================================

booksall_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    booksall_drop.style.display = "block";
  }, 100);
};

back_booksall_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  booksall_drop.style.display = "none";
};

// =====================================
// ITEM 2 - CAMERAS
// =====================================

camerasall_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    camerasall_drop.style.display = "block";
  }, 100);
};

back_camerasall_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  camerasall_drop.style.display = "none";
};

// =====================================
// ITEM 3 - GAMING
// =====================================

gamingall_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    gamingall_drop.style.display = "block";
  }, 100);
};

back_gamingall_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  gamingall_drop.style.display = "none";
};

// =====================================
// ITEM 4 - RADIO CONTROL
// =====================================

radiocontrol_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    radiocontrol_drop.style.display = "block";
  }, 100);
};

back_radiocontrol_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  radiocontrol_drop.style.display = "none";
};

// =====================================
// ITEM 5 - TOYS
// =====================================

toysall_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    toysall_drop.style.display = "block";
  }, 100);
};

back_toysall_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  toysall_drop.style.display = "none";
};

// ====================================  FIXME:  END OF HOBBIES

// ============================================================
// MAIN - OUTDOORS
// ============================================================

// =====================================
// ITEM 1 - CAMPING
// =====================================

camping_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    camping_drop.style.display = "block";
  }, 100);
};

back_camping_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  camping_drop.style.display = "none";
};

// =====================================
// ITEM 2 - OFF-ROAD VEHICLES
// =====================================

offroadvehicles_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    offroadvehicles_drop.style.display = "block";
  }, 100);
};

back_offroadvehicles_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  offroadvehicles_drop.style.display = "none";
};

// =====================================
// ITEM 3 - OUTDOOR GEAR
// =====================================

outdoorgear_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    outdoorgear_drop.style.display = "block";
  }, 100);
};

back_outdoorgear_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  outdoorgear_drop.style.display = "none";
};

// =====================================
// ITEM 4 - SHOOT & HUNT
// =====================================

shoothunt_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    shoothunt_drop.style.display = "block";
  }, 100);
};

back_shoothunt_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  shoothunt_drop.style.display = "none";
};

// =====================================
// ITEM 5 - WATER SPORTS
// =====================================

watersports_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    watersports_drop.style.display = "block";
  }, 100);
};

back_watersports_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  watersports_drop.style.display = "none";
};

// ===================================  FIXME:  END OF OUTDOORS

// ============================================================
// MAIN - SPORTS
// ============================================================

// =====================================
// ITEM 1 - INDOOR TABLE SPORTS
// =====================================

tablesports_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    tablesports_drop.style.display = "block";
  }, 100);
};

back_tablesports_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  tablesports_drop.style.display = "none";
};

// =====================================  FIXME:  END OF SPORTS

// ============================================================
// MAIN - DIY, TOOLS & MATERIALS
// ============================================================

// =====================================
// ITEM 1 - GARDENING
// =====================================

diygardening_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    diygardening_drop.style.display = "block";
  }, 100);
};

back_diygardening_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  diygardening_drop.style.display = "none";
};

// =====================================
// ITEM 2 - BUILDING MATERIALS
// =====================================

diymaterials_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    diymaterials_drop.style.display = "block";
  }, 100);
};

back_diymaterials_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  diymaterials_drop.style.display = "none";
};

// =====================================
// ITEM 3 - TOOLS
// =====================================

diytools_item.onclick = () => {
  menu_bar.style.marginLeft = "-80rem";
  setTimeout(() => {
    diytools_drop.style.display = "block";
  }, 100);
};

back_diytools_btn.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  diytools_drop.style.display = "none";
};

// =====================================   FIXME:  END OF DIY

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

// ==============================================  TODO:  SHOP MARKETPLACE & SERVICES  TODO:

// ================================================  TODO:  SELLING & INVESTING PLANS  TODO:

// ==============================================================  TODO:  CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 3 NAVIGATION
// =========================================================================================

// ============================================================  TODO:  SHOP PRODUCTS  TODO:

// ==========================================================  TODO:  SHOP ESSENTIALS  TODO:

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

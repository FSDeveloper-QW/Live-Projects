// SCRIPT FOR ADVANCE DROP-DOWN MENU (SIDE WAYS)

// TODO:  DECLARING CONSTANTS FOR TOP MENU BAR AND DROP-DOWN MENU BUTTONS

// MAIN & SUB-NAVIGATION
const drop_btn = document.querySelector(".drop-btn");
const tooltip = document.querySelector(".tooltip");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
// MARKETPLACE
const marketplace_drop = document.querySelector(".marketplace-drop");
const marketplace_item = document.querySelector(".marketplace-item");
const back_marketplace_btn = document.querySelector(".back-marketplace-btn");
// MOBILE
const mobile_drop = document.querySelector(".mobile-drop");
const mobile_item = document.querySelector(".mobile-item");
const back_mobile_btn = document.querySelector(".back-mobile-btn");
// LAPTOPS
const sub_menu_bar = document.querySelector(".sub-menu-bar");
const laptops_drop = document.querySelector(".laptops-drop");
const laptops_item = document.querySelector(".laptops-item");
const back_laptops_btn = document.querySelector(".back-laptops-btn");

// TODO:  WHAT HAPPENS ON BUTTON CLICKS

// MAIN & SUB-NAVIGATION
drop_btn.onclick = () => {
  menu_wrapper.classList.toggle("show");
  tooltip.classList.toggle("show");
};

// MARKETPLACE
marketplace_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    marketplace_drop.style.display = "block";
  }, 100);
};

back_marketplace_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  marketplace_drop.style.display = "none";
};

// MOBILE

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

// LAPTOPS
laptops_item.onclick = () => {
  sub_menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    laptops_drop.style.display = "block";
  }, 100);
};

back_laptops_btn.onclick = () => {
  sub_menu_bar.style.marginLeft = "0rem";
  laptops_drop.style.display = "none";
};

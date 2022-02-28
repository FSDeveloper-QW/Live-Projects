// SCRIPT FOR ADVANCE DROP-DOWN MENU (SIDE WAYS)

// Declaring the Constants and functions for the Top Menu Bar and Drop-down Buttons

const drop_btn = document.querySelector(".drop-btn");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
const settings_drop = document.querySelector(".settings-drop");
const settings_item = document.querySelector(".settings-item");
const back_settings_btn = document.querySelector(".back-settings-btn");
const help_drop = document.querySelector(".help-drop");
const help_item = document.querySelector(".help-item");
const back_help_btn = document.querySelector(".back-help-btn");

drop_btn.onclick = () => {
  menu_wrapper.classList.toggle("show");
};

settings_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    settings_drop.style.display = "block";
  }, 100);
};

help_item.onclick = () => {
  menu_bar.style.marginLeft = "-40rem";
  setTimeout(() => {
    help_drop.style.display = "block";
  }, 100);
};

back_settings_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  settings_drop.style.display = "none";
};

back_help_btn.onclick = () => {
  menu_bar.style.marginLeft = "0rem";
  help_drop.style.display = "none";
};

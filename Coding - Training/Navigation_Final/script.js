// --------------------------------------------------------------------------------
// TODO:  JAVASCRIPT CODE 1  FIXME: TOGGLE FUNCTION OF THE HAMBURGER MENU
// When "Toggle Button" is click it Opens "navbar-links" and click again to "close"
// --------------------------------------------------------------------------------

// const toggleButton = document.getElementsByClassName("toggle-button")[0];
// const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// toggleButton.addEventListener("click", () => {
//   navbarLinks.classList.toggle("active");
// });

// --------------------------------------------------------------------------------
// TODO:  JAVASCRIPT CODE 2  FIXME: DROPDOWN-MENUES
// --------------------------------------------------------------------------------

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document
    .querySelectorAll("[data-dropdown].active")
    .forEach((navbarDropdown) => {
      if (navbarDropdown === currentDropdown) return;
      navbarDropdown.classList.remove("active");
    });
});

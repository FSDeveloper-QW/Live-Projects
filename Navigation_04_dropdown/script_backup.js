// TODO: JavaScript Code - For DROPDOWN-MENUES

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

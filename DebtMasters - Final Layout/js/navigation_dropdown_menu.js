// ============================================================================
// TODO: JAVASCRIPT CODE FOR DROP-DOWN NAVIGATION MENU
// ============================================================================

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[dropdown-button-activator]");
  if (
    !isDropdownButton &&
    e.target.closest("[dropdown-menu-activator]") != null
  )
    return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[dropdown-menu-activator]");
    currentDropdown.classList.toggle("active");
  }

  document
    .querySelectorAll("[dropdown-menu-activator].active")
    .forEach((navigation__dropdown) => {
      if (navigation__dropdown === currentDropdown) return;
      navigation__dropdown.classList.remove("active");
    });
});

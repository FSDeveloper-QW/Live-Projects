// --------------------------------------------------------------------------------
// TODO: JavaScript is used to implement the Toggle-Function of the Hamburger Icon
// When "Toggle Button" is click it Opens "navbar-links" and click again to "close"
// --------------------------------------------------------------------------------

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

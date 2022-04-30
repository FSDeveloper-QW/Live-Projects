// ==========================================================================
// TODO:  SCRIPT FOR SEARCH BAR TO DISPLAY PRODUCTS MATCHING THE SEARCH
// ==========================================================================

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("search-bar-product-list");
  const product = document.querySelectorAll(".search-bar-single-product");
  const pname = storeitems.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

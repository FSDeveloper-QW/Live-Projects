// -----------------------------------------------------------------------------
// TODO:  SCRIPT TO ADD COUNTER TO WISH LIST WHEN "ADD TO WISH LIST" IS CLICKED
// -----------------------------------------------------------------------------

let count = 0;

const counter = document.getElementById("wishlist-counter");
document
  .getElementById("wishlist-add-animation")
  .addEventListener("click", (event) => {
    const cl = counter.classList;
    const c = "wishlist-animated-counter";
    count++;

    counter.innerText = count;
    cl.remove(c, cl.contains(c));
    setTimeout(() => counter.classList.add("wishlist-animated-counter"), 1);
  });

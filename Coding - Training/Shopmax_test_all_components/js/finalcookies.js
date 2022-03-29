//  =============================================================================
//  TODO:  Javascript Code for COOKIE POPUP MODAL
//  =============================================================================

//  =============================================================================
//  TODO:  STEP 1 - Set the Constants
//  =============================================================================

const cookieBox = document.querySelector(".modal-cookie-container"),
  acceptBtn = cookieBox.querySelector(".buttons button");

//  =============================================================================
//  TODO:  STEP 2 - Set the functioing of the ACCEPT Button
//  (It will either set the cookies and close the box OR log and ERROR Message)
//  =============================================================================

//  ====================  EXPLANATION  ==========================================
//  FIXME:  MAX-AGE (1st Value):  1 MIN = 60 SEC
//  FIXME:  MAX-AGE (2nd Value):  1 HOUR = 60 min
//  FIXME:  MAX-AGE (3rd Value):  60 MIN x 24 = 1 DAY
//  FIXME:  MAX-AGE (4th Value):  1 DAY x 30 = 1 MONTH
//  This sets the Cookie for 1 Month, after that the cookie will
//  be expired automatically
//  =============================================================================

acceptBtn.onclick = () => {
  document.cookie = "CookieBy=; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    //   Meaning of Statement: if the cookie is set, then hide the cookie box
    //   (The "hide" is linked to the CSS Style Sheet)
    cookieBox.classList.add("hide");
  } else {
    //   Meaning of Statement: If Cookie can't be set, then ALERT an error!
    alert("Cookie can't be set!");
  }
};

//  =============================================================================
//  TODO:  STEP 3 - Hide the Cookie Box if cookie is set and not expired
//  =============================================================================

let checkCookie = document.cookie.indexOf("CookieBy=");
checkCookie != -1
  ? cookieBox.classList.add("hide")
  : cookieBox.classList.remove("hide");

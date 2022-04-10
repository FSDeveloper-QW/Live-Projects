// TODO:  SCRIPT FOR MULTIPLE FILE-UPLOADS IN FORMS [INPUT type="file"]

const form = document.querySelector("form"),
  fileInput = form.querySelector(".file-input"),
  progressArea = document.querySelector(".progress-area"),
  uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", () => {
  fileInput.click();
});

fileInput.onchange = ({ target }) => {
  // getting file and [0] this means if user has selected multiple files then only get the first one
  let file = target.files[0];
  // if file is selected
  if (file) {
    // getting selected file name
    let fileName = file.name;
    // calling uploadFile with passing file name as an argument
    uploadFile(fileName);
  }
};

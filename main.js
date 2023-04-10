let features = document.querySelector(".features");
let company = document.querySelector(".company");
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let display = document.querySelector(".nav");

//Dropdown for features nav
features.addEventListener("click", function () {
  toggle();
  features.classList.toggle("features-margin-bottom");
  document
    .querySelector(".dropdown-container1")
    .classList.toggle("features-bg");

  document.querySelector(".arrow").classList.toggle("src");

  // if ((document.querySelector(".arrow").src = "./images/icon-arrow-down.svg")) {
  //   document.querySelector(".arrow").src = "./images/icon-arrow-up.svg";
  // }
});

//Dropdown for company nav
company.addEventListener("click", function () {
  toggle2();

  company.classList.toggle("company-margin-bottom");
  document.querySelector(".dropdown-container2").classList.toggle("company-bg");

  document.querySelector(".arrow2").classList.toggle("src");
});

//Dropdown function for features nav
function toggle() {
  document.querySelector(".dropdown-container1").classList.toggle("hide");
}

//Dropdown function for company nav
function toggle2() {
  document.querySelector(".dropdown-container2").classList.toggle("hide");
}

open.addEventListener("click", function () {
  display.classList.toggle("display");
  open.style.zIndex = "0";
});

close.addEventListener("click", function () {
  display.classList.toggle("display");
  // open.style.display = "block";
});

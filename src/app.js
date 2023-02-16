"use strict";
// ADD POPUP WINDOW

//  Step 1. We define the variables you can check the class in html document
const overlay = document.querySelector(".overlay");
const variable = document.querySelector(".brejj");
const popup = document.querySelector(".popup");
const iframe = document.querySelector("iframe");

//  Step 2.
// We add function and we take the documents and add the HIDDEN CLASS => Property TOGGLE what means in this case
//  (if on Iframe or popup ... element  is a class hidden REMOVE IT, and if there if no class HIDDEN add to the element)
// you can check from inspect in browser when you click on the button how the class disappear from the place where is added :D
const openClose = function () {
  iframe.classList.toggle("hidden");
  popup.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

// STEP 3.
// We add addEventListener on click on the element we want to add click to happen  and we pass as argument the function without ()
// I added also on overlay (popup background) eventListener becouse when someone click on the background to exit from the popUp :D
variable.addEventListener("click", openClose);
overlay.addEventListener("click", openClose);

"use strict";

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// ^ this symbol represents beginning of input
//  \w  this means any upperCase character, lowerCase character, number or underscore
//  +   means: one or more characters
// ([\.-]?\w)  means, a dot '.' or hyphen '- '.  ('?' means: but there must be a character after it)
//  *   means: zero or more combinations of ([\.-]?\w)
// @\w+  means: @ and one or more characters after it
// (\.\w{2,3})+$  this means at the end, there must be a dot, then, 2-3 characters like .com, .eg, uk or .net
// $ this represents end of the input

const form = document.querySelector("form");
const email = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", (e) => {
  // prevent from submitting
  e.preventDefault();

  if (email.value === "") {
    errorMessage.classList.remove("hidden");
    errorMessage.innerText =
      "Whoops! It looks like you forgot to add your email";
  } else if (!email.value.match(regexEmail)) {
    errorMessage.classList.remove("hidden");
    email.style.borderColor = "hsl(354, 100%, 66%)";
    errorMessage.innerText = "Please provide a valid email address";
  } else {
    errorMessage.classList.add("hidden");
  }
});

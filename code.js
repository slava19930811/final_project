"use strict";

// Проверка пароля
const password = document.querySelector(".password");
const repeatPassword = document.querySelector(".repeat-password");

repeatPassword.addEventListener("input", () => {
  if (password.value === repeatPassword.value) {
    password.style.outline = "1px solid green";
    repeatPassword.style.outline = "1px solid green";
  } else {
    password.style.outline = "1px solid red";
    repeatPassword.style.outline = "1px solid red";
  }
});

// Звездный рейтинг
const formEl = document.querySelector(".form");
const btmEls = document.querySelectorAll(".rating__sign_input");

btmEls.forEach((radio) => {
  radio.addEventListener("change", () => {
    const checkedNumber = document.querySelector(
      ".rating__sign_input:checked"
    ).value;
    btmEls.forEach((item) => {
      const currentLabel = item.previousElementSibling;
      if (item.value <= checkedNumber) {
        currentLabel.classList.add("check");
      } else {
        currentLabel.classList.remove("check");
      }
    });
  });
});

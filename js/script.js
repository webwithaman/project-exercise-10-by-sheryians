let myForm = document.getElementById("myForm");
let nameField = document.getElementById("name-field");
let emailField = document.getElementById("email-field");
let passwordField = document.getElementById("password-field");
let nameWarning = document.querySelector(".name-warning");
let emailWarning = document.querySelector(".email-warning");
let passwordWarning = document.querySelector(".password-warning");
let inputFields = document.querySelectorAll("input:not(.submit-btn)");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let nameValue = nameField.value.trim();
  if (nameValue.length === 0) {
    nameWarning.textContent = "📝 Please enter your Name";
    nameWarning.style.maxHeight = nameWarning.scrollHeight + "px";
  } else {
    let regex = /^[A-Za-z]+$/;
    if (!regex.test(nameValue)) {
      nameWarning.textContent =
        "🆎 Only letters & spaces allowed (no digits and special symbols)";
      nameWarning.style.maxHeight = nameWarning.scrollHeight + "px";
    } else if (nameValue.length < 3) {
      nameWarning.textContent = "📏 Name must be at least 3 characters";
      nameWarning.style.maxHeight = nameWarning.scrollHeight + "px";
    }
  }
});

inputFields.forEach((element) => {
  element.addEventListener("focus", function () {
    document.querySelectorAll(".warning").forEach((element) => {
      element.style.maxHeight = 0 + "px";
    });
  });
});

// Get Elements
let myForm = document.getElementById("myForm");
let usernameField = document.getElementById("username-field");
let emailField = document.getElementById("email-field");
let passwordField = document.getElementById("password-field");
let nameWarning = document.querySelector(".name-warning");
let emailWarning = document.querySelector(".email-warning");
let passwordWarning = document.querySelector(".password-warning");
let inputFields = document.querySelectorAll("input:not(.submit-btn)");

const isValidUsername = (usernameValue) => {
  let isValid = true,
    warningMessage,
    minLength = 3,
    maxLength = 30;

  usernameValue = usernameValue.trim();

  if (usernameValue.length === 0) {
    isValid = false;
    warningMessage = "📝 Please enter Username";
  } else {
    let regex = /^[a-z0-9]{3,30}$/;
    if (!regex.test(usernameValue)) {
      isValid = false;
      warningMessage =
        "⚠️ Username must be 3-30 chars, lowercase letters and numbers only (no special characters)";
    }
  }

  return { isValid, warningMessage };
};

const isValidEmail = (emailValue) => {
  let isValid = true,
    warningMessage;

  emailValue = emailValue.trim();

  if (emailValue.length === 0) {
    isValid = false;
    warningMessage = "📝 Please enter Email";
  } else {
    let regex =
      /^[a-zA-Z0-9]+(?:[._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(emailValue)) {
      isValid = false;
      warningMessage = "Please enter email in valid format";
    }
  }

  return { isValid, warningMessage };
};

const isValidPassword = (passwordValue) => {
  let isValid = true,
    warningMessage;

  passwordValue = passwordValue.trim();

  if (passwordValue.length === 0) {
    isValid = false;
    warningMessage = "📝 Please enter Password";
  } else {
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,}$/;
    if (!regex.test(passwordValue)) {
      isValid = false;
      warningMessage =
        "⚠️ Password must be 8+ chars with at least 1 uppercase, 1 lowercase, 1 number & 🔒 1 special (@#*%).";
    }
  }

  return { isValid, warningMessage };
};

const isValidForm = () => {
  let validityStatus = isValidUsername(usernameField.value);

  if (!validityStatus.isValid) {
    nameWarning.textContent = validityStatus.warningMessage;
    nameWarning.style.maxHeight = nameWarning.scrollHeight + "px";
    return false;
  }

  validityStatus = isValidEmail(emailField.value);
  if (!validityStatus.isValid) {
    emailWarning.textContent = validityStatus.warningMessage;
    emailWarning.style.maxHeight = emailWarning.scrollHeight + "px";
    return false;
  }

  validityStatus = isValidPassword(passwordField.value);
  if (!validityStatus.isValid) {
    passwordWarning.textContent = validityStatus.warningMessage;
    passwordWarning.style.maxHeight = passwordWarning.scrollHeight + "px";
    return false;
  }

  return true;
};

let formFeedbackIndicator = document.querySelector(".form-feedback-indicator");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  formFeedbackIndicator.style.display = "flex";

  if (isValidForm()) {
    formFeedbackIndicator.lastElementChild.classList.add("fa-check");
    formFeedbackIndicator.lastElementChild.classList.remove("fa-xmark");
    formFeedbackIndicator.lastElementChild.firstElementChild = "success";
    formFeedbackIndicator.lastElementChild.lastElementChild =
      "form successfully sumitted";
    formFeedbackIndicator.classList.add("animate-form-feedback-indicator");
    formFeedbackIndicator.style.setProperty("--color", "rgb(0, 236, 0)");
    inputFields.forEach((element) => {
      element.value = "";
    });
  } else {
    formFeedbackIndicator.lastElementChild.classList.add("fa-xmark");
    formFeedbackIndicator.lastElementChild.classList.remove("fa-check");
    formFeedbackIndicator.lastElementChild.firstElementChild = "error";
    formFeedbackIndicator.lastElementChild.lastElementChild =
      "form submission unsuccessful";
    formFeedbackIndicator.classList.add("animate-form-feedback-indicator");
    formFeedbackIndicator.style.setProperty("--color", "rgb(236, 0, 0)");
  }

  setTimeout(() => {
    formFeedbackIndicator.classList.remove("animate-form-feedback-indicator");
    formFeedbackIndicator.style.display = "none";
  }, 2300);
});

inputFields.forEach((element) => {
  element.addEventListener("focus", function () {
    document.querySelectorAll(".warning").forEach((element) => {
      element.style.maxHeight = 0 + "px";
    });
  });
});

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
    let regex = /^[A-Za-z]+$/;
    if (!regex.test(usernameValue)) {
      isValid = false;
      warningMessage =
        "🆎 Only letters & spaces allowed (no digits and special symbols)";
    } else if (usernameValue.length < minLength) {
      isValid = false;
      warningMessage = "📏 Username must be at least 3 characters";
    } else if (usernameValue.length > maxLength) {
      isValid = false;
      warningMessage = "📏 Username cannot be larger than 30 characters";
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
  }
  // else {
  //   let regex = /[A-Za-z]/;
  //   if (!regex.test(emailValue)) {
  //     isValid = false;
  //     warningMessage = "Please enter Valid Email";
  //   }
  // }

  return { isValid, warningMessage };
};

const isValidPassword = (passwordValue) => {
  let isValid = true,
    warningMessage;

  passwordValue = passwordValue.trim();

  if (passwordValue.length === 0) {
    isValid = false;
    warningMessage = "📝 Please enter Password";
  }
  // else {
  //   let regex = /^[A-Za-z]+$/;
  //   if (!regex.test(usernameValue)) {
  //     isValid = false;
  //     warningMessage =
  //       "🆎 Only letters & spaces allowed (no digits and special symbols)";
  //   } else if (usernameValue.length < minLength) {
  //     isValid = false;
  //     warningMessage = "📏 Name must be at least 3 characters";
  //   } else if (usernameValue.length > maxLength) {
  //     isValid = false;
  //     warningMessage = "📏 Name cannot be larger than 30 characters";
  //   }
  // }

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

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isValidForm()) console.log("valid");
  else console.log("not valid");
});

inputFields.forEach((element) => {
  element.addEventListener("focus", function () {
    document.querySelectorAll(".warning").forEach((element) => {
      element.style.maxHeight = 0 + "px";
    });
  });
});

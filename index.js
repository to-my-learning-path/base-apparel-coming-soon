var form = document.getElementById("email-subscribe");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var emailInputELement = form.elements["email"];
  var emailValue = emailInputELement.value;
  var emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  var isValid = emailRegex.test(emailValue);

  var invalidText = document.querySelector(".invalid-text");
  var invalidIcon = document.querySelector(".invalid-icon");

  if (isValid) {
    invalidText.classList.remove("toggle-visibility");
    invalidIcon.classList.remove("toggle-visibility");
    alert("Email submitted. Thank you!");
  } else {
    invalidText.classList.add("toggle-visibility");
    invalidIcon.classList.add("toggle-visibility");
  }
});

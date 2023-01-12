const submitButton = document.getElementById("submitButton");

const templateParams = {
  name: "James",
  notes: "Check this out!",
};
submitButton.addEventListener("click", function () {
  const nameField = document.getElementById("contactName");
  const emailField = document.getElementById("contactEmail");
  const messageField = document.getElementById("contactMessage");
  const errorText = document.getElementById("error-text");
  const submitText = document.getElementById("submitted");

  const nameValue = nameField.value;
  const emailValue = emailField.value;
  const messageValue = messageField.value;

  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    messageValue: messageValue,
  };

  if (nameValue && emailValue && messageValue) {
    errorText.innerHTML = "";
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
    submitText.innerText = "Form Sumitted Succesfully!";
    console.log(nameValue, emailValue, messageValue);
    emailjs.send(
      "service_fmuoobf",
      "template_zuf2zpu",
      templateParams,
      "4N_z4c-ySbObriCiv"
    );
  } else {
    errorText.innerHTML = "Please Fill the Form Correctly!";
    submitText.innerText = "";
  }
});

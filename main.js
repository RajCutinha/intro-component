const trialForm = document.getElementById("trial-form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

trialForm.addEventListener("submit", formhandle);

function formhandle(e) {
  e.preventDefault();

  checkNoValue([firstname, lastname, password], 4);
  checkPassLength(password, 6);
  checkEmail(email);
}

function checkNoValue(inputArr, min) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showInputError(input, `${input.placeholder} cannot be empty`);
    } else if (input.value.length == 1 || input.value.length < min) {
      showInputError(
        input,
        `${input.placeholder} must be at least ${min} characters`
      );
    } else {
      showInputSuccess(input);
    }
  });
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  if (re.test(String(input.value.trim()).toLowerCase())) {
    showInputSuccess(input);
  } else {
    showInputError(input, `${input.placeholder} is not valid`);
  }
}

function checkPassLength(input, min) {
  if (input.value.length < min) {
    showInputError(
      input,
      `${input.placeholder} must be at least ${min} characters`
    );
  } else {
    showInputSuccess(input);
  }
}

function showInputError(input, msg) {
  const inputWrap = input.parentElement;
  inputWrap.className = "input-wrap error";
  const errorMsg = inputWrap.querySelector(".errorTxt");
  errorMsg.innerText = msg;
}

function showInputSuccess(input) {
  const inputWrap = input.parentElement;
  inputWrap.className = "input-wrap success";
}

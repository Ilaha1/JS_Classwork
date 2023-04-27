<<<<<<< HEAD
const section = document.querySelector("section");
const form = document.querySelector("form");
const nameInput = document.querySelector(".nameInput");
const surnameInput = document.querySelector(".surnameInput");
const passwordInput = document.querySelector(".passwordInput");
const emailInput = document.querySelector(".emailInput");
const checkBox = document.querySelector("#checkBox");
const labelcheck = document.querySelector("#labelcheck");
const submitBtn = document.querySelector(".submitBtn");
const radio = document.querySelectorAll(".radio");



nameInput.addEventListener("focus", function () {
    nameInput.style.backgroundColor = "gray";
});
nameInput.addEventListener("blur", function () {
    nameInput.style.backgroundColor = "transparent";
});

surnameInput.addEventListener("mouseover", function () {
    surnameInput.style.backgroundColor = "green";
});

surnameInput.addEventListener("mouseout", function () {
    surnameInput.style.backgroundColor = "transparent";
});
emailInput.addEventListener("contextmenu", function () {
    emailInput.style.backgroundColor = "transparent";
});
emailInput.addEventListener("contextmenu", function () {
    emailInput.style.backgroundColor = "red";
});
emailInput.addEventListener("blur", function () {
    emailInput.style.backgroundColor = "";
});
passwordInput.addEventListener("focus", function () {
    passwordInput.value = "123357869";
});
passwordInput.addEventListener("blur", function () {
    passwordInput.value = "";
});
checkBox.addEventListener("click", function () {
    if (checkBox.checked) {
        labelcheck.style.visibility = "visible";
    } else {
        labelcheck.style.visibility = "hidden";
    }
});

radio.forEach((item) => {
    item.addEventListener("click", function () {
        this.style.accentColor = "blue"
    })
});
radio.forEach((item) => {
    item.addEventListener("click", function () {
        alert("Thanks")
    })
});

submitBtn.disabled="true";

checkBox.addEventListener("click",function(){
    if(nameInput.value&&surnameInput.value&&emailInput.value){
    submitBtn.removeAttribute("disabled")
    }
    else{
        submitBtn.disabled="true"
    }
});

submitBtn.addEventListener("click", function () {
    window.location.reload();
});
=======
const section = document.querySelector("section");
const form = document.querySelector("form");
const nameInput = document.querySelector(".nameInput");
const surnameInput = document.querySelector(".surnameInput");
const passwordInput = document.querySelector(".passwordInput");
const emailInput = document.querySelector(".emailInput");
const checkBox = document.querySelector("#checkBox");
const labelcheck = document.querySelector("#labelcheck");
const submitBtn = document.querySelector("submitBtn");
let radio = document.querySelectorAll(".radio");

nameInput.addEventListener("focus", function () {
  nameInput.style.backgroundColor = "gray";
});
nameInput.addEventListener("blur", function () {
  nameInput.style.backgroundColor = "transparent";
});

surnameInput.addEventListener("mouseover", function () {
  surnameInput.style.backgroundColor = "green";
});

surnameInput.addEventListener("mouseout", function () {
  surnameInput.style.backgroundColor = "transparent";
});
emailInput.addEventListener("contextmenu", function () {
  emailInput.style.backgroundColor = "transparent";
});
emailInput.addEventListener("contextmenu", function () {
  emailInput.style.backgroundColor = "red";
});
emailInput.addEventListener("blur", function () {
  emailInput.style.backgroundColor = "";
});
passwordInput.addEventListener("focus", function () {
  passwordInput.value = "123357869";
});
passwordInput.addEventListener("blur", function () {
  passwordInput.value = "";
});
checkBox.addEventListener("click", function () {
  if (checkBox.checked) {
    labelcheck.style.visibility = "visible";
  } else {
    labelcheck.style.visibility = "hidden";
  }
});

radio.forEach((item) => {
    item.addEventListener("click",function(){
        this.style.accentColor="blue"
    })
});
radio.forEach((item) => {
    item.addEventListener("click",function(){
        alert("Thanks")
    })
});

>>>>>>> 678c2b64c3345d247bafab44621b57239ee38a8d

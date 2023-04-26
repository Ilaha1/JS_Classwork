const form = document.createElement("form");
const section = document.createElement("section");
const nameLabel = document.createElement("label");
const surnameLabel = document.createElement("label");
const checkbox = document.createElement("input");
const radio1 = document.createElement("input");
const radio2 = document.createElement("input");
const nameInput = document.createElement("input");
const surnameInput = document.createElement("input");
const submitBtn = document.createElement("button");
const startBtn = document.createElement("button");
const nextBtn = document.createElement("button");
const p = document.createElement("p");
let time = 15;

document.body.append(startBtn);
document.body.append(p);
document.body.append(section);
document.body.append(nextBtn);
section.append(form);
form.append(nameLabel);
form.append(nameInput);
form.append(surnameLabel);
form.append(surnameInput);
form.append(checkbox);
form.append(radio1);
form.append(radio2);
form.append(submitBtn);


nameLabel.innerHTML = "<strong>Name</strong>";
surnameLabel.innerHTML = "<strong>Surname</strong>";
submitBtn.append("Submit");
startBtn.append("Let's start");
p.innerHTML=`00:${time}`;
nextBtn.append("<Next Page>");

section.style.height="100vh"
section.style.display = "flex";
section.style.alignItems = "center";
section.style.justifyContent = "center";
section.style.border = "1px dashed";


form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.flexDirection = "column";
form.style.gap="20px";
checkbox.setAttribute("type", "checkbox");
radio1.setAttribute("type", "radio");
radio2.setAttribute("type", "radio");


nameInput.required = true;
surnameInput.required = true;
checkbox.required = true;
submitBtn.required = true;
nextBtn.required = true;


startBtn.addEventListener("click", function () {
    let interval;
    this.setAttribute("disabled", "true");
    interval = setInterval(() => {
        time -= 1;
        p.innerHTML = `00:${time}`;
   

    if (time > 10) {
        p.style.color = "blue";
        p.style.borderColor = "blue"
    }
    if (time <= 10) {
        p.style.color = "red";
        p.style.borderColor = "red"
    }
    if (time ==0) {
        p.innerHTML="You missed):"
        p.style.width="100px";
        clearInterval(interval);
    }

},1000);
});


nextBtn.addEventListener("click", function () {
    alert("Finished!");
});














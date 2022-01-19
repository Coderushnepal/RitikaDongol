//creating div
var divForPassword = document.createElement("div");
divForPassword.classList.add("center");
document.body.appendChild(divForPassword);

//creating label
var label = document.createElement("h3");
label.innerHTML="Enter Password";
divForPassword.appendChild(label);

// creating input
var passwordInput = document.createElement("input");
passwordInput.type = "password"
passwordInput.id= "passwordInput";

divForPassword.appendChild(passwordInput);


//creating button
var resetBtn = document.createElement("button");
resetBtn.innerHTML = "Reset";
divForPassword.appendChild(resetBtn);

//adding icon
var eyeIcon = document.createElement("i");
eyeIcon.className = "far fa-eye";
eyeIcon.addEventListener("click", function (event) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.className = "far fa-eye";
  } else {
    passwordInput.type = "password";
    eyeIcon.className = "fas fa-eye-slash";
  }
});
divForPassword.appendChild(eyeIcon);

//fuction for reset
resetBtn.addEventListener("click", function (event){
    passwordInput.value ="";
   // console.log("reset");
});
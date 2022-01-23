
//creating main div
var mainDiv = document.createElement("div");
mainDiv.classList.add("main-div");
mainDiv.style.width="400px";
mainDiv.style.boxShadow="0 2px 10px rgb(0 0 0 / 30%)";
mainDiv.style.margin="80px auto";
mainDiv.style.borderRadius="5px";
document.body.appendChild(mainDiv);

//creating form
var form = document.createElement("form");
form.setAttribute("id","form");
form.setAttribute("id","form");
form.style.padding="20px 54px 30px 40px";
mainDiv.appendChild(form);

//creating heading
var heading = document.createElement("h2");
heading.innerHTML="Register With Us";
heading.style.textAlign="center";
form.appendChild(heading);

//creating input fields
var divForForm = document.createElement("div");
divForForm.classList.add("fields");
form.appendChild(divForForm);

//for usernmae
var nameLabel = document.createElement("label");
nameLabel.setAttribute("for","username");
nameLabel.innerHTML="Username";
nameLabel.style.color="#777";
nameLabel.style.display="block";
nameLabel.style.marginBottom="5px";
nameLabel.style.marginTop="25px";

var nameInput = document.createElement("input");
nameInput.classList.add("username");
nameInput.setAttribute("type","text");
nameInput.setAttribute("id","username");
nameInput.setAttribute("placeholder","Enter Username");
nameInput.style.border="2px solid #f0f0f0";
nameInput.style.borderRadius="4px";
nameInput.style.display="block";
nameInput.style.width="100%";
nameInput.style.padding="10px";
nameInput.style.fontSize="14px";
divForForm.appendChild(nameLabel);
divForForm.appendChild(nameInput);

var errorMessage = document.createElement("span");
errorMessage.innerHTML="Username must be atleast 3 characters";
errorMessage.style.color="red";
errorMessage.style.fontSize="13px";
errorMessage.style.visibility="hidden";
divForForm.appendChild(errorMessage);

//for email
var emailLabel = document.createElement("label");
emailLabel .setAttribute("for","email");
emailLabel .innerHTML="Email";
emailLabel .style.color="#777";
emailLabel .style.display="block";
emailLabel .style.marginBottom="5px";
emailLabel.style.marginTop="15px";

var emailInput = document.createElement("input");
emailInput.classList.add("email");
emailInput.setAttribute("type","email");
emailInput.setAttribute("id","username");
emailInput.setAttribute("placeholder","Enter email");
emailInput.style.border="2px solid #f0f0f0";
emailInput.style.borderRadius="4px";
emailInput.style.display="block";
emailInput.style.width="100%";
emailInput.style.padding="10px";
emailInput.style.fontSize="14px";
divForForm.appendChild(emailLabel);
divForForm.appendChild(emailInput);

var errorMessage1 = document.createElement("span");
errorMessage1.innerHTML="Email is not valid";
errorMessage1.style.color="red";
errorMessage1.style.fontSize="13px";
errorMessage1.style.visibility="hidden";
divForForm.appendChild(errorMessage1);

//for pw
var pwLabel = document.createElement("label");
pwLabel.setAttribute("for","password");
pwLabel.innerHTML="Password";
pwLabel.style.color="#777";
pwLabel.style.display="block";
pwLabel.style.marginBottom="5px";
pwLabel.style.marginTop="15px";

var pwInput = document.createElement("input");
pwInput.classList.add("password");
pwInput.setAttribute("type","password");
pwInput.setAttribute("id","password");
pwInput.setAttribute("placeholder","Enter password");
pwInput.style.border="2px solid #f0f0f0";
pwInput.style.borderRadius="4px";
pwInput.style.display="block";
pwInput.style.width="100%";
pwInput.style.padding="10px";
pwInput.style.fontSize="14px";
divForForm.appendChild(pwLabel);
divForForm.appendChild(pwInput);

var errorMessage2 = document.createElement("span");
errorMessage2.innerHTML="Password must be atleast 6 characters";
errorMessage2.style.color="red";
errorMessage2.style.fontSize="13px";
errorMessage2.style.visibility="hidden";
divForForm.appendChild(errorMessage2);

//for confirm pw
var confirmPwLabel = document.createElement("label");
confirmPwLabel.setAttribute("for","confirm-password");
confirmPwLabel.innerHTML="Confirm Password";
confirmPwLabel.style.color="#777";
confirmPwLabel.style.display="block";
confirmPwLabel.style.marginBottom="5px";
confirmPwLabel.style.marginTop="15px";

var confirmPwInput = document.createElement("input");
confirmPwInput.classList.add("confirm-password");
confirmPwInput.setAttribute("type","password");
confirmPwInput.setAttribute("id","confirm-password");
confirmPwInput.setAttribute("placeholder","Enter password again");
confirmPwInput.style.border="2px solid #f0f0f0";
confirmPwInput.style.borderRadius="4px";
confirmPwInput.style.display="block";
confirmPwInput.style.width="100%";
confirmPwInput.style.padding="10px";
confirmPwInput.style.fontSize="14px";
divForForm.appendChild(confirmPwLabel);
divForForm.appendChild(confirmPwInput);

var errorMessage3 = document.createElement("span");
errorMessage3.innerHTML="Password2 is required";
errorMessage3.style.color="red";
errorMessage3.style.fontSize="13px";
errorMessage3.style.visibility="hidden";
divForForm.appendChild(errorMessage3);

//button
var button= document.createElement("button");
button.innerHTML="Submit";
button.setAttribute("type","submit");
button.style.cursor="pointer";
button.style.backgroundColor="#3498db";
button.style.border="2px solid #3498db";
button.style.borderRadius="4px";
button.style.color="#fff";
button.style.display="block";
button.style.fontSize="16px";
button.style.padding="10px";
button.style.marginTop="24px";
button.style.width="108%";

form.appendChild(button);



button.addEventListener("click", function(event) {
    if (nameInput.value.length<=3){
        nameInput.style.borderColor="red";
        errorMessage.style.visibility="visible";
    }
    if (emailInput.value == ""){
        emailInput.style.borderColor="red";
        errorMessage1.style.visibility="visible";
    }
    if (pwInput.value == "" || pwInput.value.length<=6){
        pwInput.style.borderColor="red";
        errorMessage2.style.visibility="visible";
    }
    if (confirmPwInput.value == ""){
        confirmPwInput.style.borderColor="red";
        errorMessage3.style.visibility="visible";
    }
    else if(confirmPwInput.value != pwInput.value){
        confirmPwInput.style.borderColor="red";
        errorMessage3.innerHTML="Password doesnot match";
        errorMessage3.style.visibility="visible";
    }

});

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


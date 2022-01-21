//creating button
var generateButton = document.createElement("button");
generateButton.innerHTML="Generate Balloons";
generateButton.style.backgroundColor="black";
generateButton.style.color="white";
generateButton.style.padding="10px";
generateButton.style.border="none";
generateButton.style.margin="15px 0";
document.body.appendChild(generateButton);

//creating main div
var mainDiv = document.createElement("div");
mainDiv.classList.add("maindiv");
mainDiv.style.border="1px solid black";
mainDiv.style.position="relative";
mainDiv.style.width="750px"
mainDiv.style.height="500px";
document.body.appendChild(mainDiv);


generateButton.addEventListener("click", function (event){
    var balloons = document.createElement("div");
    const positionX = Math.floor(Math.random()*700);
    const positionY = Math.floor(Math.random()*450);
    balloons.classList.add("balloons");
    balloons.style.width="20px";
    balloons.style.height="20px";
    balloons.style.borderRadius="50%";
    balloons.style.border="2px solid red"
    balloons.style.backgroundColor="red";
    balloons.style.position="absolute";
    balloons.style.left=positionX + 'px';
    balloons.style.top=positionY + 'px';
    
    mainDiv.appendChild(balloons);

});


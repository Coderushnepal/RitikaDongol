var wrapper = document.createElement("div");

wrapper.style=`
    width:800px;
    height:600px;
    border:1px solid #000;
    position:relative;
`;
document.body.appendChild(wrapper);

var ball = document.createElement("div");
ball.style.backgroundColor="red";
ball.style.width="50px";
ball.style.height="50px";
ball.style.borderRadius="50%";
ball.style.position="absolute";
ball.style.left="200px";
ball.style.top="100px";

wrapper.appendChild(ball);

var direction = 1;
ball.addEventListener("click", function (event){
    // event.target.style.top increase by 10
    //event.target.innerHTML = "clicked";
    //setTimeout(function (){
        //event.target.innerHTML="2secs completed";
    var interval = setInterval(function (){

    var newTop = parseInt(event.target.style.top) + 5 * direction + "px";
    event.target.style.top = newTop;

   // console.log(wrapper.clientHeight);

   if (parseInt(newTop) >= wrapper.clientHeight - ball.clientHeight){
   // console.log("we have crossed the bpundary");
    direction *= -1;
       
   }
   if (parseInt(newTop) <= 0){
        direction *= -1;
   }
},1000 / 60);
//},2000);
});
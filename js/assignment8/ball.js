function Ball(size, id) {
    this.width = size;
    this.height = size;
  
    this.id = id;
  
    this.create = function (container, position) {
    this.element = document.createElement("div");
    this.element.setAttribute("id", this.id);
  
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.borderRadius = "50%";
    this.element.style.background = "red";
  
    this.element.style.position = "absolute";
    this.element.style.top = position.top + "px";
    this.element.style.left = position.left + "px";

    var direction = 1;
    var directionLeft = 1;
    this.element.addEventListener("click", function (event) {
      console.log(this.id);
    
      var interval = setInterval(function() {
          var newTop = parseInt(event.target.style.top) + 7*direction + "px";
          event.target.style.top = newTop;

          if (parseInt(newTop) >= containerSize - defaultBallSize) {
              direction *= -1;
          }
          if (parseInt(newTop) <= 0){
            direction *= -1;
          }

          var newLeft = parseInt(event.target.style.left) + 3*directionLeft + "px";
          event.target.style.left = newLeft;

          if (parseInt(newLeft) >= containerSize - defaultBallSize) {
              directionLeft *= -1;
          }
          if (parseInt(newLeft) <= 0){
            directionLeft *= -1;
          }
      }, 1000/60);
  });  
  
  container.appendChild(this.element);
};
}
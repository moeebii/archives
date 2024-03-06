document.addEventListener("DOMContentLoaded", function () {
    let intervalId;
  
    document.addEventListener("mousemove", function (event) {
      clearInterval(intervalId);
  
      intervalId = setInterval(() => {
        const redCircle = document.createElement("div");
        redCircle.classList.add("red-circle");
        document.body.appendChild(redCircle);
  
        const mouseX = event.pageX;
        const mouseY = event.pageY;
  
        redCircle.style.left = mouseX + "px";
        redCircle.style.top = mouseY + "px";
  
        setTimeout(() => {
          redCircle.remove();
        }, 2000);
      }, 200); // Change this value to 500 for every 0.5 seconds
    });
  });
  
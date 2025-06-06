
let leftBoob = document.getElementById("Left");//coordenadas bubi isquierda
let rectLeft = leftBoob.getBoundingClientRect();
let leftBoobX = rectLeft.left;
let leftBoobY = rectLeft.top;
console.log(leftBoobX, leftBoobY);

let rightBoob = document.getElementById("Right");//coordenadas bubi derecha
let rectRight = rightBoob.getBoundingClientRect();
let rightBoobX = rectRight.left;
let rightBoobY = rectRight.top;
console.log(rightBoobX, rightBoobY);

document.addEventListener("mousemove", function(mouseCoor) {//coordenadas cursor
    let mouseX = mouseCoor.pageX;
    let mouseY = mouseCoor.pageY;
    let dx = mouseX - leftBoobX;
    let dy = mouseY - leftBoobY;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let radioMax = 15;
    
    if (distance > radioMax){
        dx = dx / distance * radioMax;
        dy = dy / distance * radioMax;
    }

    leftBoob.style.left = (leftBoobX + dx) + "px";
    leftBoob.style.top = (leftBoobY + dy) + "px";

    let rightDx = mouseX - rightBoobX;
    let rightDy = mouseY - rightBoobY;
    
    if (distance > radioMax){
        rightDx =  rightDy / distance * radioMax;
        rightDy = rightDy / distance * radioMax;
    }

    rightBoob.style.left = (rightBoobX + rightDx) + "px";
    rightBoob.style.top = (rightBoobY + rightDy) + "px";

    console.log(mouseX, mouseY)
    
}
);




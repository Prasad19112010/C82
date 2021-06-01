var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
radius = "5";
width_of_line = 50;
canvas.addEventListener("mouseDown", my_mouseDown);
function my_mouseDown(e) {
    color = document.getElementById("Color").value;
    width_of_line = document.getElementById("Width").value;
    radius = document.getElementById("Radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp(e) {
    color = document.getElementById("Color").value;
    width_of_line = document.getElementById("Width").value;
    radius = document.getElementById("Radius").value;
    mouseEvent = "mouseUp"
}
canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e) {
    color = document.getElementById("Color").value;
    width_of_line = document.getElementById("Width").value;
    radius = document.getElementById("Radius").value;
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mouseMove", my_mouseMove);
function my_mouseMove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetUp;
    if(mouseEvent == "mouseDown") {
        console.log("current positions of x and y coordinates =")
        console.log("x =" + current_position_of_mouse_x, "y =" + current_position_of_mouse_y)
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
var MouseEvent="empty";
var last_position_of_X,last_position_of_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value
    MouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(MouseEvent="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=width;
        ctx.radius=radius;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke(); 
    }
    last_position_of_X=current_position_of_mouse_x;
    last_position_of_Y=current_position_of_mouse_y; 
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    MouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    MouseEvent="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}



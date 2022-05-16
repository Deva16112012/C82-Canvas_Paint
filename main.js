var mouseevent="empty";
var ox,oy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",mymousedoown);
function mymousedoown(E){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(E){
    currentmouseX=E.clientX - canvas.offsetLeft;
    currentmouseY=E.clientY - canvas.offsetTop;
    if(mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last position of X and the Y cordinet=",ox+oy);
        ctx.moveTo(ox,oy);
        console.log("curent position of X and the Y cordinet=",currentmouseX+currentmouseY);
        ctx.lineTo(currentmouseX,currentmouseY);
        ctx.stroke();
    }
    ox=currentmouseX;
    oy=currentmouseY;
}
canvas.addEventListener("mouseup",up);
function up(E){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",leave);
function leave(E){
    mouseevent="mouseleave";
}
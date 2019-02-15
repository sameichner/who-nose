//to be done later
alert("javascript is connected successfully");
let canvas = document.getElementById("whiteboard");
var ctx = canvas.getContext("2d");
ctx.beginPath();

ctx.fillStyle = "#FF0000";
ctx.rect(10,100,200,50);
ctx.fill();
//all draw code here
console.log(1);
ctx.closePath();
console.log(2);
ctx.beginPath();
console.log(3);
ctx.fillStyle = "#00FFFF";
ctx.rect(100,10,50,200);
ctx.fill();
//all draw code here
ctx.closePath();
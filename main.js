var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

document.addEventListener("keydown",playerKeys,false);
document.addEventListener("keyup",function() {
	console.log("keyup")
	wPressed = false
	sPressed = false
	aPressed = false
	dPressed = false
},false);

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	playerMain()
	mainCamp()
}

setInterval(draw,10);
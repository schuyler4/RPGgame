function build(x,y,width,height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}
var borderWallColor = "black"

var topRightWall = new build(600,0,400,30);
var topLeftWall = new build(0,0,400,30);
var buttomRightWall = new build(600,570,400,30);
var buttomLeftWall = new build(0,570,400,30);
var rightWall = new build(970,0,30,1000)
var leftWall = new build(0,0,30,1000)

function drawWalls() {
	ctx.beginPath()
	ctx.rect(topRightWall.x,topRightWall.y,topRightWall.width,topRightWall.height)
	ctx.rect(topLeftWall.x,topLeftWall.y,topLeftWall.width,topLeftWall.height)
	ctx.rect(buttomRightWall.x,buttomRightWall.y,buttomRightWall.width,
	buttomRightWall.height);
	ctx.rect(buttomLeftWall.x,buttomLeftWall.y,buttomLeftWall.width,
	buttomLeftWall.height);
	ctx.rect(rightWall.x,rightWall.y,rightWall.width,rightWall.height);
	ctx.rect(leftWall.x,leftWall.y,leftWall.width,leftWall.height);
	ctx.fillStyle = borderWallColor;
	ctx.fill()
	ctx.closePath()
}
function playerCollitionsWithWalls() {
	if(playerX + 10 >= rightWall.x) {
		playerRightCollition = true;
	}
	else if(playerX - 10 <= leftWall.x + leftWall.width) {
		playerLeftCollition = true;
	}
	else if(playerY + 10 >= buttomLeftWall.y && playerX < buttomLeftWall.x + 
		buttomLeftWall.width) {
		playerDownCollition = true;
	}
	else if(playerY + 10 >= buttomRightWall.y && playerX > buttomRightWall.x) {
		playerDownCollition = true;
	}
	else if(playerY - 10 <= topLeftWall.y + topLeftWall.height && playerX >
	 topLeftWall.x + topLeftWall.width) {
		playerUpCollition = true
		console.log("collide");
	}
	else if(playerY - 10 <= topRightWall.y + topRightWall.height &&  
		playerX < topRightWall.x) {
		playerUpCollition = true
	}
	else {
		playerRightCollition = false;
		playerLeftCollition = false;
		playerUpCollition = false;
		playerDownCollition = false;
	}

}
var soopdoopHouse = new build(40,100,100,150);
function drawHouses() {
	ctx.beginPath();
	ctx.rect(soopdoopHouse.x,soopdoopHouse.y,soopdoopHouse.width,soopdoopHouse.height);
	ctx.fillStyle = "#6F4E37";
	ctx.fill();
	ctx.closePath();
}
function npc(size,x,y,color,name) {
	this.size = size;
	this.x = x;
	this.y = y;
	this.color = color;
	this.name = name;
}
var soopdoop = new npc(8,100,50,"white","Soopdoop")
var soopdoopTalking = false

function drawNpc() {
	ctx.beginPath()
	ctx.arc(soopdoop.x,soopdoop.y,soopdoop.size,0,2*Math.PI);
	ctx.fillStyle = soopdoop.color;
	ctx.fill();
	ctx.closePath()
}
var Xtimer = 0;
var XtimerStopingPoint = Math.floor(Math.random() * 200);
var Ytimer = 0;
var YtimerStopingPoint = Math.floor(Math.random() * 200);
function moveNpc() {
	if(soopdoopTalking == false) {
		Xtimer += 1
		//console.log(Xtimer);
		Ytimer += 1
		//console.log(Ytimer);
		if(Xtimer == XtimerStopingPoint) {
			Xtimer = 0
			XtimerStopingPoint = Math.floor(Math.random() * 200);
		}
		if(Xtimer < XtimerStopingPoint / 2) {
			soopdoop.x += 0.1
		}
		if(Xtimer > XtimerStopingPoint / 2) {
			soopdoop.x -= 0.1
		}

		if(Ytimer == YtimerStopingPoint) {
			Ytimer = 0
			YtimerStopingPoint = Math.floor(Math.random() * 200);
		}
		if(Ytimer < YtimerStopingPoint / 2){
			soopdoop.y += 0.1
		}
		if(Ytimer > YtimerStopingPoint / 2) {
			soopdoop.y -= 0.1
		}
	}
}
function playerTalkWithNpc() {
	if(playerX - 10 > soopdoop.x + soopdoop.size / 2 && soopdoop.x + 20 > playerX) {
		soopdoopTalking = true
	}
	else if(playerX + 10 < soopdoop.x && playerX + 20 > soopdoop.x && playerY - 10 < soopdoop.x && playerY + 10 > soopdoop.y) {
		soopdoopTalking = true
	}
	else if(playerY >= soopdoop.y && playerY - 20 <= soopdoop.y && playerX + 10 > soopdoop.x - soopdoop.size / 2) {
		soopdoopTalking = true
	}
	else {
		soopdoopTalking = false
	}
}
function mainCamp() {
	drawWalls()
	drawHouses()
	playerCollitionsWithWalls()
	drawNpc()
	moveNpc()
	playerTalkWithNpc()
	soopDoopTalking()
}
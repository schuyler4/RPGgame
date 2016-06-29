
//Everything that has to do with the player
var playerX = 500
var playerY = 500
var playerSize = 10
var playerColor = "red"
//keydowns
var wPressed = false
var sPressed = false
var aPressed = false
var dPressed = false
//player life varibls
var playerLife = 10;
var playerLifeBarWidth = 300;
var playerLifeBarHeight = 20;
var playerLifeBarX = canvas.width - 150
var playerLifeBarY = 50
//player xp varibles
var playerXp = 0;
var playerXpBarWidth = 300;
var playerXpBarHeight = 20;
var playerXpBarX = canvas.width - 150;
var playerXpBarY = 80;
//Player sword varibles
var playerSwordX = playerX - 5;
var playerSwordY = playerY + 10;
var playerSwordColor = "green"
var playerSwordWidth = 10;
var playerSwordHeight = 10;
var swordTimer = 0
var playerSwordDrawn = false;

var swordRight = false;
var swordLeft = false
var swordUp = false
var swordDown = false;
//player colitions
var playerRightCollition = false;
var playerLeftCollition = false;
var playerUpCollition = false;
var playerDownCollition = false;

function drawPlayer() {
	ctx.beginPath();
	ctx.arc(playerX,playerY,playerSize,0,2*Math.PI);
	ctx.fillStyle = playerColor;
	ctx.fill()
	ctx.closePath();
}
function drawSword() {
	if(swordUp == true) {
		playerSwordX = playerX - 5;
		playerSwordY = playerY - 20;
	}
	else if(swordDown == true) {
		playerSwordX = playerX - 5;
		playerSwordY = playerY + 10;
	}
	else if(swordRight == true) {
		playerSwordX = playerX + 10
		playerSwordY = playerY - 5;
	}
	else if(swordLeft == true) {
		playerSwordX = playerX - 20
		playerSwordY = playerY - 5
	}
	if(playerSwordDrawn == true) {
		swordTimer += 1
		ctx.beginPath()
		ctx.rect(playerSwordX,playerSwordY,playerSwordWidth,playerSwordHeight)
		ctx.fillStyle = "#B0C4DE";
		ctx.fill()
		ctx.closePath()
		if(swordTimer >= 25){
			playerSwordDrawn = false;
			swordTimer = 0
		} 
	}
}

function playerKeys(e) {
	if(e.keyCode == 87) {
		wPressed = true
		swordUp = true
		swordDown = false
		swordRight = false
		swordLeft = false
	}
	else if(e.keyCode == 83) {
		sPressed = true
		swordDown = true
		swordRight = false
		swordLeft = false
		swordUp = false
	}
	else if(e.keyCode == 65) {
		aPressed = true
		swordLeft = true
		swordDown = false
		swordRight = false
		swordUp = false
	}
	else if(e.keyCode == 68) {
		dPressed = true
		swordRight = true
		swordLeft = false
		swordUp = false
		swordDown = false
	}
	if(e.keyCode == 32) {
		playerSwordDrawn = true
		console.log("drawSword")	}
}
function playerMove() {
	if(wPressed && !playerUpCollition) {
		playerY -= 2
		playerSwordY -= 2
	} 
	else if(sPressed  && !playerDownCollition) {
		playerY += 2
		playerSwordY += 2
	}
	else if(dPressed && !playerRightCollition) {
		playerX += 2
		playerSwordX += 2
	}
	else if(aPressed && !playerLeftCollition) {
		playerX -= 2
		playerSwordX -= 2
	}
}


function playerMain() {
	drawPlayer();
	drawSword()
	playerMove();
}
var database;

var GS;
var playerCount=0;
var playerinfo
var distance=0;
function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
Game=new game();
  Game.getState();
  Game.start();
}

function draw(){
  background("white");
  if(playerCount==4){
    Game.update();
  }

  if(GS==1){
    clear ();
    Game.play();
  }
    
    drawSprites();
  
}


var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var bobImg,bobesponja;
var lulamolusco, lulamoluscoImg;
var aguavivaBobesponja, aguavivaBobesponjaImg, aguavivaBobesponjaGroup;
var fundoImg, fundo;
var spongeImg, sponge;
var score = 0
var gameOver, gameOverImg;
var restart , restartImg;

function preload(){
    fundoImg = loadImage("fundo.png");
    bobImg = loadImage("bobesponja.png");
    lulamoluscoImg = loadImage("lulamolusco.png");
    aguavivaBobesponjaImg = loadImage("aguavivabobesponja.png");
    spongeImg = loadImage ("sponge.jpg")
    spookySound = loadSound("spooky.wav");
  }


function setup() {
  createCanvas(600,600)
  fundo = createSprite(300,300);
  fundo.addImage("fundo",fundoImg);
  fundo.velocityY = 1;
}

function draw() {
  background(200);
  
  if(fundo.y > 400){
      fundo.y = 300
    }
}
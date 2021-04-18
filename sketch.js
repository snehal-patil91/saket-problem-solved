var gameState = "Start";
var gameLevel = 0;
var level1S = "stop";
var gameTitle, playButton;
var button1, button2, button3, button4, button5, button6;
var rocks, distance;

function preload()
{
  bg = loadImage("images/bg.jpg");
  rocketImg = loadImage("images/spaceShip.png");
  rockImg1 = loadImage("images/meteor.png");
  rockImg2 = loadImage("images/asteroids.png");
}
function setup() {
  canvas = createCanvas(800,400);
  gameTitle = createElement('h1');
  gameTitle.position(200, 20);
  gameTitle.html("A Look Into Another World");

  rocket = createSprite(400, 350, 40, 80);
  rocket.addImage("flying", rocketImg);
  rocket.scale = 0.2;
  rocket.visible =false;


  playButton = createButton("PLAY");
  playButton.position(400, 300);
  

  button1 = createButton("1");
  button1.position(200, 100);

  button2 = createButton("2");
  button2.position(400, 100);

  button3 = createButton("3");
  button3.position(600, 100);

  button4 = createButton("4");
  button4.position(200, 300);

  button5 = createButton("5");
  button5.position(400, 300);

  button6 = createButton("6");
  button6.position(600, 300);

  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  
  distance = 0;
}

function draw() {
  background(bg);

  playButton.mousePressed(() => {
    gameState = "levels";
  })

  button1.mousePressed(() => 
  {
    gameState = "level1";
   // gameLevel = 1;
   // level1S = "start";
    //level1start();
  });

  if(gameState === "level1")
  {
    level1start();
  }

  if (gameState === "levels")
  {
    gameTitle.hide();
    playButton.hide();

    button1.show();
    button2.show();
    button3.show();
    button4.show();
    button5.show();
    button6.show();
  }

  
  drawSprites();
}

function level1start()
{
    if (frameCount % 200 === 0)
    {
      distance++
    }

   bg = loadImage("images/stars.png");
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();

    rocket.visible =true;

    if (keyIsDown(RIGHT_ARROW))
    {
      rocket.x =rocket.x +10;
    }

    if (keyIsDown(LEFT_ARROW))
    {
      rocket.x =rocket.x -10;
    }

    spawnRocks();
}


function spawnRocks()
{
  if (frameCount % 50 === 0)
    {
      rocks = createSprite(random(0, 800), 200, 50, 50);
      rand = Math.round(random(1, 2));
      //rocks.addImage((rockImg2));
      //rocks.scale = random(0.05, 0.3);
      rocks.velocityY = 5;

    }
}
//declare the variables for the sprites.
var spaceship;
var ufo1, ufo2, ufo3, ufo4, ufo5, ufo6, ufo7;
var earth;
var bullet;
var bullet1;
var bullet2;
var edges;
var left_but;
var right_but;
var reset_but;
var start_but;
var next_but;
var boss_ufo;
var space;
var coin;

//declare the variables for the images.
var ufo_img;
var spaceship_img;
var earth_img;
var left_but_img;
var right_but_img;
var shoot_but_img;
var reset_but_img;
var boss_ani;
var coin_img;
var start_but_img;
var next_but_img;
var space_back;

//declare the variables for the text.
var title;
var win1;
var press;
var press_2;

//declare the variables for the groups.
var ufoGroup;
var bulletGroup1;
var bulletGroup;
var coinGroup;

//gamestate.
var gameState = "start";

//declare the variables for the sound effects.
var gunshot;
var ufo_def;
var back;
var game_end;
var but_pre;
var coin_col;

//score.
var score = 0;

//wave.
var wave = 1;

//timer for wave 3.
var timer = 15;

//level.
var level = 1;

//lives.
var lives = 2;

//coins.
var coins = 0;

// preload Function
function preload() {

  // load Images.
  spaceship_img = loadImage("Images/spaceship.png");
  ufo_img = loadImage("Images/ufo.png");
  earth_img = loadImage("Images/earth.png");
  left_but_img = loadImage("Images/left_but.png");
  right_but_img = loadImage("Images/right_but.png");
  shoot_but_img = loadImage("Images/shoot_but.png")
  reset_but_img = loadImage("Images/Reset_but.png");
  start_but_img = loadImage("Images/start_but.png");
  next_but_img = loadImage("Images/next.png");
  coin_img = loadImage("Images/coin.png");
  space_back = loadImage("Images/space.jpg");
  boss_ani = loadAnimation("Images/boss.png", "Images/boss1.png", "Images/boss2.png");

  //load Sound Effects.
  game_end = loadSound("Sound/GAMEOVER.wav");
  gunshot = loadSound("Sound/gunshot.mp3");
  ufo_def = loadSound("Sound/ufo_def.mp4");
  back = loadSound("Sound/space.ogg");
  but_pre = loadSound("Sound/whoosh(phaser).wav");
  coin_col = loadSound("Sound/Coin.wav");
}


// setup Function.
function setup() {
  // create Canvas for the full window.
  createCanvas(windowWidth, windowHeight);


  //create groups.
  //ufo group.
  ufoGroup = createGroup();
  //bulletGroup.
  bulletGroup = createGroup();
  //enemy bullet group.
  bulletGroup1 = createGroup();
  //coin group.
  coinGroup = createGroup();


  //create a space sprite with image.
  //set it as background.
  //move it upwards.
  space = createSprite(width - 450, height - 400, width, height);
  space.addImage(space_back);
  space.scale = 1;


  //create buttons.
  //create a left button sprite and set an image.
  left_but = createSprite(width - 240, height - 75, 20, 20);
  left_but.scale = 0.1;
  left_but.addImage(left_but_img)

  //create a right button sprite and set an image.
  right_but = createSprite(width - 50, height - 75, 20, 20);
  right_but.scale = 0.1;
  right_but.addImage(right_but_img)

  //create a shoot button sprite and set an image.
  shoot_but = createSprite(width - 100, height - 75, 30, 30);
  shoot_but.scale = 0.01;
  shoot_but.addImage(shoot_but_img)

  //create a start button sprite and set an image.
  //make it invisible.
  start_but = createSprite(width / 2, height - 150, 30, 30);
  start_but.scale = 0.1;
  start_but.addImage(start_but_img);
  start_but.visible = false;

  reset_but = createSprite(width - 263, height - 500, 20, 20);
  reset_but.addImage(reset_but_img);
  reset_but.scale = 0.1;

  next_but = createSprite(width / 2, height - 200, 30, 30);
  next_but.scale = 0.3;
  next_but.addImage(next_but_img);
  next_but.visible = false;

  //create the characters.
  //create the spaceship sprite [PC].
  spaceship = createSprite(width / 2, height - 125, 10, 10);
  spaceship.scale = 0.1;
  spaceship.setCollider("rectangle", 0, 0, 350, 300)
  spaceship.addImage(spaceship_img);

  //an earth sprite is created.
  earth = createSprite(windowWidth / 2, windowHeight - 100, 20, 20);
  earth.addImage(earth_img);
  earth.scale = 0.3;
  earth.visible = false;

  //create ufos.
  //ufos for wave 1.

  //first ufo.
  ufo1 = createSprite(random(width - 270, width), random(0, height - 250), 20, 20);
  ufo1.scale = 0.1;
  ufo1.setCollider("rectangle", 0, 0, 300, 200);
  ufoGroup.add(ufo1);
  ufo1.addImage(ufo_img);

  //second ufo.
  ufo2 = createSprite(random(width - 270, width), random(0, height - 250), 20, 20);
  ufo2.scale = 0.1;
  ufo2.setCollider("rectangle", 0, 0, 300, 200);
  ufoGroup.add(ufo2);
  ufo2.addImage(ufo_img);

  //third ufo.
  ufo3 = createSprite(random(width - 270, width), random(0, height - 250), 20, 20);
  ufo3.scale = 0.1;
  ufo3.setCollider("rectangle", 0, 0, 300, 200);
  ufoGroup.add(ufo3);
  ufo3.addImage(ufo_img);

  // ufos for wave 2.

  //fourth ufo.
  ufo4 = createSprite(random(width - 270, width), random(0, height - 250), 20, 20);
  ufo4.scale = 0.1;
  ufo4.setCollider("rectangle", 0, 0, 300, 200);
  ufoGroup.add(ufo4);
  ufo4.addImage(ufo_img);

  //fifth ufo.
  ufo5 = createSprite(random(width - 270, width), random(0, height - 250), 20, 20);
  ufo5.scale = 0.1;
  ufo5.setCollider("rectangle", 0, 0, 300, 200);
  ufoGroup.add(ufo5);
  ufo5.addImage(ufo_img);

  //sixth ufo.
  ufo6 = createSprite(random(width - 270, width), random(0, height - 250), 20, 20);
  ufo6.scale = 0.1;
  ufo6.setCollider("rectangle", 0, 0, 300, 200);
  ufoGroup.add(ufo6);
  ufo6.addImage(ufo_img);

  //seventh ufo.
  ufo7 = createSprite(random(width - 270, width), random(0, height - 250), 20, 20);
  ufo7.scale = 0.1;
  ufo7.setCollider("rectangle", 0, 0, 300, 200);
  ufoGroup.add(ufo7);
  ufo7.addImage(ufo_img);

  //UFO for wave 3.
  //boss ufo, set an animation.
  boss_ufo = createSprite(width / 2, height - 650, 20, 20);
  ufoGroup.add(boss_ufo);
  boss_ufo.scale = 0.3
  boss_ufo.addAnimation("animation", boss_ani);

  //create the text sprites.

  //title of the game.
  title = createDiv("BattleShip!!  👾");
  title.position(width - 250, height - 450);
  title.style('font-size', '50px');
  title.style('color', 'red');

  //instruction.
  press = createDiv("Press_start_to_play!");
  press.position(width - 250, height - 250);
  press.style('font-size', '20px');
  press.style('color', 'yellow');

  //congrats for winning the first level.
  win1 = createDiv("GOOD!! YOU DEFEATED THE BOSS. LET'S GO TO THE NEXT LEVEL!");
  win1.position(width - 1500, height - 600);
  win1.style('border', '5px solid red');
  win1.style('font-size', '75px');
  win1.style('color', 'green');

  //instruction.
  press_2 = createDiv("Press_next_to_go_to_the_next_level!");
  press_2.position(width - 1100, height - 400);
  press_2.style('font-size', '50px');
  press_2.style('color', 'yellow');
  press_2.hide();

  //play the background sound effects.
  back.play();
}



//draw Function.
function draw() {
  background(0);

  //things in general.

  //always hide the congrats text.
  win1.hide();
  space.velocityY = 5;
  //create the scrolling background.
  if (space.y > height) {
    space.y = 0;
  }
  console.log(lives);

  //move the spacship left if mouse is pressed over left button.
  if (mousePressedOver(left_but)) {
    spaceship.x = spaceship.x - 5;
  }

  //move the spacship right if mouse is pressed over right button.
  if (mousePressedOver(right_but)) {
    spaceship.x = spaceship.x + 5;
  }

  //create the edges and make the spaceship collide with them.
  edges = createEdgeSprites();
  spaceship.collide(edges);


  //  ----------------------------------------> start <---------------------------------------

  if (gameState === "start") {

    //in gameState start, all the sprites should be invisible except the instruction and the title texts.
    spaceship.visible = false;
    ufo1.visible = false;
    ufo2.visible = false;
    ufo3.visible = false;
    ufo4.visible = false;
    ufo5.visible = false;
    ufo6.visible = false;
    ufo7.visible = false;
    boss_ufo.visible = false;

    //start button should be visible.
    start_but.visible = true;
    title.show();
    press.show();

    //if start button is pressed, the game should start and the player can play.
    //play the button pressed sound.
    if (mousePressedOver(start_but)) {
      gameState = "play";
      but_pre.play();
    }

  }
  //  -----------------------------------------> level 1 <--------------------------------------------------------

  //  -----------------------------------------> wave 1 <---------------------------------------------------------
  if (gameState === "play") {

    //hide the instruction and title of the game.
    title.hide();
    press.hide();

    //the start button and the other ufos should be invisible.
    start_but.visible = false;
    ufo4.visible = false;
    ufo5.visible = false;
    ufo6.visible = false;
    ufo7.visible = false;
    boss_ufo.visible = false;

    //only three ufos and the spaceship should be visible.
    ufo1.visible = true;
    ufo2.visible = true;
    ufo3.visible = true;
    spaceship.visible = true;

    //spawnCoins.
    if (frameCount % 60 === 0) {
      spawnCoins();
    }
    //treasure should increase when spaceship touches the coins.
    if (coinGroup.isTouching(spaceship)) {
      coinGroup.destroyEach();
      coins++
      coin_col.play();
    }
    //if the shoot button is pressed, bullets should come.
    if (mousePressedOver(shoot_but)) {
      bullet_fun();
    }

    //moving the ufos.
    //move the first ufo in random direction.
    ufo1.x = random(width - 270, width - 180);
    ufo1.y = random(0, height / 2);

    //move the second ufo in random direction.
    ufo2.x = random(width - 180, width - 90);
    ufo2.y = random(0, height / 2);

    //move the third ufo in random direction.
    ufo3.x = random(width - 90, width - 10);
    ufo3.y = random(0, height / 2);

    if (bulletGroup1.isTouching(spaceship)) {
      bulletGroup1.destroyEach();
      lives--;
      gameState = 'pause';
    }

    // if the spaceship shoots the ufos, ufos should destroy and score should increase.
    if (bulletGroup.isTouching(ufo1)) {
      ufo1.destroy();
      score = score + 2;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo2)) {
      ufo2.destroy();
      score = score + 2;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo3)) {
      ufo3.destroy();
      score = score + 2;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    // setting a timer.
    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }
    // the timer ends,the game should end.
    if (timer === 0) {
      gameState = "end";
      game_end.play();
    }

    //if the score is 6, the next wave should come.
    if (score === 6) {
      wave++
      timer = 20;
      gameState = "wave2";
    }


    // ------------------------------------------------> wave 2 <-------------------------------------------------
  } if (gameState === 'pause') {
    console.log(lives)
    if (lives === 0) {
      gameState = 'end';
      game_end.play();
    }
    else {
      console.log('lost one life')
      // setInterval(alertfn, 1000);
      gameState = "play";
    }
    //if the shoot button is pressed, bullets should come.
    if (mousePressedOver(shoot_but)) {
      bullet_fun();
    }


  } else if (gameState === "wave2") {

    //the boss ufo should be invisible in wave 2.
    boss_ufo.visible = false;

    // the other ufos and the spacship should be visible.
    ufo4.visible = true;
    ufo5.visible = true;
    ufo6.visible = true;
    ufo7.visible = true;
    spaceship.visible = true;


    //moving and retirning the ufos back to a random position.
    //moving the ufos.
    // for the ufo4.
    ufo4.x = ufo4.x - random(0, 10);
    ufo4.y = ufo4.y + random(0, 10);

    //for the ufo5.
    ufo5.x = ufo5.x + random(0, 10);
    ufo5.y = ufo5.y - random(0, 10);

    //for the ufo6.
    ufo6.x = ufo6.x - random(0, 10);
    ufo6.y = ufo6.y + random(0, 10);

    //for the ufo7.
    ufo7.x = ufo7.x + random(0, 10);
    ufo7.y = ufo7.y + random(0, 10);


    //returning them back to a random position in the canvas if they go out of the screen.
    //for the ufo4.
    if (ufo4.x >= windowWidth || ufo4.x <= windowWidth - windowWidth) {
      ufo4.x = random(windowWidth - windowWidth, windowWidth)
    }
    if (ufo4.y >= windowHeight / 2 || ufo4.y <= windowHeight - windowHeight) {
      ufo4.y = random(windowHeight - windowHeight, windowHeight / 2);
    }

    //for the ufo5.
    if (ufo5.x >= windowWidth || ufo5.x <= windowWidth - windowWidth) {
      ufo5.x = random(windowWidth - windowWidth, windowWidth)
    }
    if (ufo5.y >= windowHeight / 2 || ufo5.y <= windowHeight - windowHeight) {
      ufo5.y = random(windowHeight - windowHeight, windowHeight / 2);
    }

    //for the ufo6.
    if (ufo6.x >= windowWidth || ufo6.x <= windowWidth - windowWidth) {
      ufo6.x = random(windowWidth - windowWidth, windowWidth)
    }
    if (ufo6.y >= windowHeight / 2 || ufo6.y <= windowHeight - windowHeight) {
      ufo6.y = random(windowHeight - windowHeight, windowHeight / 2);
    }

    //for the ufo7.
    if (ufo7.x >= windowWidth || ufo7.x <= windowWidth - windowWidth) {
      ufo7.x = random(windowWidth - windowWidth, windowWidth)
    }
    if (ufo7.y >= windowHeight / 2 || ufo7.y <= windowHeight - windowHeight) {
      ufo7.y = random(windowHeight - windowHeight, windowHeight / 2);
    }
    //spawnCoins.
    if (frameCount % 60 === 0) {
      spawnCoins();
    }
    //treasure should increase when spaceship touches the coins.
    if (coinGroup.isTouching(spaceship)) {
      coinGroup.destroyEach();
      coins++
      coin_col.play();
    }
    //if the shoot button is pressed, bullets should come.
    if (mousePressedOver(shoot_but)) {
      bullet_fun();
    }
    //if the bullets coming from the ufos touches spaceship, game should end.
    if (bulletGroup1.isTouching(spaceship)) {
      bulletGroup1.destroyEach();
      lives--;
      gameState = 'pause';
    }

    // if the spaceship shoots the ufos, ufos should destroy and score should increase.
    if (bulletGroup.isTouching(ufo4)) {
      ufo4.destroy();
      score = score + 3;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo5)) {
      ufo5.destroy();
      score = score + 3;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo6)) {
      ufo6.destroy();
      score = score + 3;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo7)) {
      ufo7.destroy();
      score = score + 3;
      bulletGroup.destroyEach();
      ufo_def.play();
    }

    // setting a timer.
    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }
    // the timer ends,the game should end.
    if (timer === 0) {
      gameState = "end";
      game_end.play();
    }

    //if the score is 18, the next wave should come.
    if (score === 18) {
      wave++
      timer = 25;
      gameState = "wave3";
    }



    // -------------------------------------------------> wave 3 <--------------------------------------------
  } else if (gameState === "wave3") {



    //making the boss ufo visible.
    boss_ufo.visible = true;

    //if the shoot button is pressed, bullets should come.
    if (mousePressedOver(shoot_but)) {
      bullet_boss_fun()
    }

    //moving the boss ufo.
    if (boss_ufo.x === windowWidth / 2) {
      boss_ufo.velocityX = random(5, 10);
    }
    if (boss_ufo.x < windowWidth - windowWidth) {
      boss_ufo.velocityY = random(5, 10);
      boss_ufo.velocityX = 0
    }
    if (boss_ufo.x > windowWidth) {
      boss_ufo.velocityX = random(-5, -10);
      boss_ufo.x = windowWidth / 2;
      boss_ufo.y = windowHeight - 650;
    }
    if (boss_ufo.y >= windowHeight - 450) {
      boss_ufo.velocityX = random(5, 10);
      boss_ufo.velocityY = 0
    }
    if (boss_ufo.y >= windowHeight - 450 && boss_ufo.x >= windowWidth) {
      boss_ufo.velocityY = random(-5, -10);
      boss_ufo.velocityX = 0;
    }

    // increasing the speed of the spaceship in left direction.
    if (mousePressedOver(left_but)) {
      spaceship.x = spaceship.x - 8;
    }
    // increasing the speed of the spaceship in right direction.
    if (mousePressedOver(right_but)) {
      spaceship.x = spaceship.x + 8;
    }
    //spawnCoins.
    if (frameCount % 60 === 0) {
      spawnCoins();
    }
    //treasure should increase when spaceship touches the coins.
    if (coinGroup.isTouching(spaceship)) {
      coinGroup.destroyEach();
      coins++
      coin_col.play();
    }
    //score should increase by 1 if the spaceship shoots the boss ufo.
    if (bulletGroup.isTouching(boss_ufo)) {
      score = score + 1;
      bulletGroup.destroyEach();
    }

    //every 20 frames the bullets should come.
    if (frameCount % 20 == 0) {
      bullet2 = createSprite(random(windowWidth - windowWidth, windowWidth), windowHeight - 790, 7, 12);
      bullet2.shapeColor = "red";
      bullet2.velocityY = 9;
      bullet2.lifetime = 100;
      bulletGroup1.add(bullet2);
    }

    //the game should end if the bullets from the ufo touches the spaceship.
    if (bulletGroup1.isTouching(spaceship)) {
      bulletGroup1.destroyEach();
      lives--;
      gameState = 'pause';
    }

    // setting a timer.
    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }
    // the timer ends,the game should end.
    if (timer === 0) {
      gameState = "end";
      game_end.play();
    }

    // if the score is 30, the gameState should change.
    if (score === 30) {
      gameState = "win level1";
    }


    // ---------------------------------------------> won level 1 <---------------------------------------------
  } else if (gameState === "win level1") {

    // the boss ufo is destroyed.
    boss_ufo.destroy();
    bulletGroup.destroyEach();

    //congrats text is shown.
    win1.show();

    //second instruction is shown.
    press_2.show();

    //next button should be visible.
    next_but.visible = true;

    if (mousePressedOver(next_but)) {

      gameState = "wave1_2";

      // level increases.
      level = level + 1;
    }

    // ------------------------------------------------> end <------------------------------------------------
  } else if (gameState === "wave1_2") {

    next_but.destroy();
    press_2.hide();


  } else if (gameState === "end") {

    //the ufos and the bullets are destroyed .
    ufoGroup.destroyEach();
    coinGroup.destroyEach();
    bulletGroup.destroyEach();

    //spaceship should get destroyed.
    spaceship.visible = false;

    earth.visible = true;

    // the framecount is a multiple of 60, bullets from the ufos should be created.
    if (frameCount % 60) {
      bullet1 = createSprite(random(windowWidth - windowWidth, windowWidth), windowHeight - 790, 3, 5);
      bullet1.shapeColor = "red";
      bullet1.velocityY = 6;
      bulletGroup1.add(bullet1);
    }

    //if the reset button is pressed, the game should get reset.
    if (mousePressedOver(reset_but)) {
      but_pre.play();
      reset();
    }
  }

  //draw the sprites.
  drawSprites();

  //display the text.
  fill(random(0, 255), random(0, 255), random(0, 255));
  textSize(30);
  //score.
  text("YOUR SCORE: " + score, windowWidth - 300, windowHeight - 740);
  //wave.
  text("WAVE: " + wave + "/3", windowWidth - 510, windowHeight - 740);
  //timer.
  text("Timer: " + timer, windowWidth - 710, windowHeight - 740);
  //level.
  text("LEVEL: " + level, windowWidth - 900, windowHeight - 740);
  //lives.
  text("LIVES: " + lives, windowWidth - 1100, windowHeight - 740);
  //coins.
  text("Treasure: " + coins, windowWidth - 1300, windowHeight - 740);
}



//bullet function
function bullet_fun() {
  //create a bullet sprite from the spacship.
  bullet = createSprite(spaceship.x, height - 135, 2, 4);
  bullet.shapeColor = random(0, 255), random(0, 255), random(0, 255);
  bullet.velocityY = -3;
  bullet.lifetime = 200;
  bulletGroup.add(bullet);

  //create a bullet sprite from the ufos. 
  bullet1 = createSprite(random(width - 450, width), windowHeight - 500, 3, 5);
  bullet1.shapeColor = "red";
  bullet1.velocityY = 6;
  bullet1.lifetime = 100;
  bulletGroup1.add(bullet1);

  //play the gunshot sound.
  gunshot.play();
}

function spawnCoins() {

  coin = createSprite(random(0, windowWidth), 0, 10, 10);
  coin.shapeColor = "yellow";
  coin.velocityY = 6;
  coin.scale = 0.01;
  coin.addImage(coin_img);
  coinGroup.add(coin);

}

//bullet function for the boss wave.
function bullet_boss_fun() {
  //create a bullet sprite from the spacship.
  bullet = createSprite(spaceship.x, spaceship.y, 5, 10);
  bullet.shapeColor = random(0, 255), random(0, 255);
  bullet.velocityY = -3;
  bullet.lifetime = 200;
  bulletGroup.add(bullet);

  //play the gunshot sound.
  gunshot.play();
}



//reset function.
function reset() {

  //gameState should be start.
  gameState = "start";
  score = 0;
  wave = 1;
  coins = 0;
  timer = 10;
  lives = 2;
  earth.visible = false;
  bulletGroup1.destroyEach();

}
function alertfn() {
  text('life lost. Press C to continue', windowWidth / 2, windowHeight / 2)
}
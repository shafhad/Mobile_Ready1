function ufo_1() {
    //create ufos.
    //ufos for wave 1.

    //first ufo.
    ufo1 = createSprite(random(0, windowWidth), random(0, windowHeight), 20, 20);
    ufo1.scale = 0.3;
    ufoGroup.add(ufo1);
    ufo1.addImage(ufo_img);

    //move the first ufo in random direction.
    ufo1.x = random(windowWidth - windowWidth, windowWidth - 1000);
    ufo1.y = random(windowHeight - windowHeight, windowHeight / 2);
}

function ufo_2() {
    //second ufo.
    ufo2 = createSprite(random(0, windowWidth), random(0, windowHeight - 500), 20, 20);
    ufo2.scale = 0.3;
    ufoGroup.add(ufo2);
    ufo2.addImage(ufo_img);

    //move the second ufo in random direction.
    ufo2.x = random(windowWidth - 1000, windowWidth - 500);
    ufo2.y = random(windowHeight - windowHeight, windowHeight / 2);

}
function ufo_3() {
    //third ufo.
    ufo3 = createSprite(random(0, windowWidth), random(0, windowHeight - 500), 20, 20);
    ufo3.scale = 0.3;
    ufoGroup.add(ufo3);
    ufo3.addImage(ufo_img);

    //move the third ufo in random direction.
    ufo3.x = random(windowWidth - 500, windowWidth);
    ufo3.y = random(windowHeight - windowHeight, windowHeight / 2);

}
// ufos for wave 2.
function ufo_4() {
    //fourth ufo.
    ufo4 = createSprite(random(0, windowWidth), random(0, windowHeight - 500), 20, 20);
    ufo4.scale = 0.3;
    ufoGroup.add(ufo4);
    ufo4.addImage(ufo_img);
}
function ufo_5() {
    //fifth ufo.
    ufo5 = createSprite(random(0, windowWidth), random(0, windowHeight - 500), 20, 20);
    ufo5.scale = 0.3;
    ufoGroup.add(ufo5);
    ufo5.addImage(ufo_img);
}

function ufo_6() {
    //sixth ufo.
    ufo6 = createSprite(random(0, windowWidth), random(0, windowHeight - 500), 20, 20);
    ufo6.scale = 0.3;
    ufoGroup.add(ufo6);
    ufo6.addImage(ufo_img);
}

function ufo_7() {
    //seventh ufo.
    ufo7 = createSprite(random(0, windowWidth), random(0, windowHeight - 500), 20, 20);
    ufo7.scale = 0.3;
    ufoGroup.add(ufo7);
    ufo7.addImage(ufo_img);
}

//UFO for wave 3.
function boss_1() {
    //boss ufo, set an animation.
    boss_ufo = createSprite(windowWidth / 2, windowHeight - 650, 20, 20);
    ufoGroup.add(boss_ufo);
    boss_ufo.scale = 0.5
    boss_ufo.addAnimation("animation", boss_ani);
}

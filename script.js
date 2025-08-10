kaboom();

var spriteSpeed = 8

// Load sprite sheet
loadSprite("warrior_red", "./assets/Factions/Knights/Troops/Warrior/Red/Warrior_Red.png", {
    sliceX: 6,
    sliceY: 8,
    anims: {
        idle:       { from: 0,  to: 5,  speed: spriteSpeed, loop: true },
        walk_down:  { from: 6,  to: 11, speed: spriteSpeed, loop: true },
        walk_left:  { from: 6,  to: 11, speed: spriteSpeed, loop: true },
        walk_right: { from: 6,  to: 11, speed: spriteSpeed, loop: true },
        walk_up:    { from: 6,  to: 11, speed: spriteSpeed, loop: true },
    }
});

const SPEED = 200;

// Player entity
const player = add([
    sprite("warrior_red"),
    pos(100, 100),
    area(),
    body(),
    { dir: vec2(0, 0), currentAnim: "idle" }
]);

player.play("idle");

// Movement + animation logic
onUpdate(() => {
    let dir = vec2(0, 0);
    let newAnim = "idle";

    if (isKeyDown("a")) {
        dir.x -= 1;
        newAnim = "walk_left";
        
    }
    if (isKeyDown("d")) {
        dir.x += 1;
        newAnim = "walk_right";
    }
    if (isKeyDown("w")) {
        dir.y -= 1;
        newAnim = "walk_up";
    }
    if (isKeyDown("s")) {
        dir.y += 1;
        newAnim = "walk_down";
    }

    // Only change animation if it's different
    if (newAnim !== player.currentAnim) {
        player.play(newAnim);
        player.currentAnim = newAnim;
    }

    // Move player
    player.move(dir.unit().scale(SPEED));
});

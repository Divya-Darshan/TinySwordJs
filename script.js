  kaboom();

    // Load sprites
    loadSprite("warrior_blue", "./assets/Factions/Knights/Troops/Warrior/Red/Warrior_Red.png");

    // Add player object
    const SPEED = 200;

    const player = add([
      sprite("warrior_blue"),
      pos(100, 100),
      area(),     // for collision
      body(),     // for gravity (optional)
      {
        dir: vec2(0, 0),
      }
    ]);

    // Movement logic
    onUpdate(() => {
      let dir = vec2(0, 0);
      if (isKeyDown("a")) dir.x -= 1;
      if (isKeyDown("d")) dir.x += 1;
      if (isKeyDown("w")) dir.y -= 1;
      if (isKeyDown("s")) dir.y += 1;

      dir = dir.unit(); // normalize direction
      player.move(dir.scale(SPEED));
    });
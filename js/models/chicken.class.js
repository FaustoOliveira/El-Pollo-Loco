class Chicken extends MovableObject {
  y = 360;
  height = 60;
  width = 80;
  energy = 100;
  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  IMAGE_DEAD = ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];
  CHICKEN_DEAD_AUDIO = new Audio("audio/chicken.mp3");
  offset = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImage(this.IMAGE_DEAD);
    this.x = 200 + Math.random() * 500; // Immer zahl zwischen 200 und 700
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
  }

  // Chicken Bewegt sich nach links
  animate() {
    setInterval(() => {
      this.moveLeft(); //60 fps pro sec aufgerufen wird
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }
}

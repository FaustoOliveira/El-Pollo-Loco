class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 80;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500; // Immer zahl zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

<<<<<<< HEAD
    // Chicken Bewegt sich nach links
    animate() {
        setInterval(() => {
            this.moveLeft(); //60 fps pro sec aufgerufen wird
        }, 1000 / 60);
       
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
=======
    animate() {
       this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6; => 1, Rest 1
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
>>>>>>> 9a7f1514f3956b203ebc5af175cbc72d2b4d3b19
        }, 200);
    }
}
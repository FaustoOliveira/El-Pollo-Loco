class Coin extends MovableObject {
    height = 120;
    width = 120;

    IMAGE_COIN = [
        "C:/Users/Fausto Oliveia/OneDrive/Developer Akademie/Modul 11/El Pollo Loco/img/8_coin/coin_1.png"
    ];

    constructor() {
        super().loadImage(this.IMAGE_COIN[0]);
        this.loadImages(this.IMAGE_COIN);
        this.x = 200 + Math.random() * 2000;
        this.y = 50 + Math.random() * 80;
        this.animate();

    }

    /**
             * Animate the coin
             */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGE_COIN);
        }, 200);
    }
}
class CoinBar extends DrawableObject {
    IMAGES = [
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES); // Implement this method if not already done
        this.x = 330;
        this.y = 0;
        this.height = 50;
        this.width = 160;
        this.collectCoins = 0; // Initialize the coins count
    }

    /**
     * Add new Coin to the coins count
     */
    collectCoin() {
        this.collectCoins++;
    }

    /**
     * Resolve the image index based on coins count
     * 
     * @returns Image index
     */
    resolveImageIndex() {
        if (this.coins == 0) {
            return 0;
        } else if (this.coins == 1) {
            return 1;
        } else if (this.coins == 2) {
            return 2;
        } else if (this.coins == 3) {
            return 3;
        } else if (this.coins == 4) {
            return 4;
        } else if (this.coins == 5) {
            return 5;
        } else {
            return 5;
        }
    }
}

class level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, clouds, coin, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.coin = coin;
        this.backgroundObjects = backgroundObjects;
    }
}
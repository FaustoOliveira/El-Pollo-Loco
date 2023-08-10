const level1 = new level(
    [ 
    new Chicken(), 
    new Chicken(), 
    new Chicken(),
    new Endboss(),

    ],
    [
        new Cloud()

    ],

    [
      new Coin(200, 100),
      new Coin(500, 100),
      new Coin(1000, 100),
      new Coin(1500, 100),
      new Coin(2000, 100),
      new Coin(2500, 100),
      new Coin(3000, 100),
      new Coin(3200, 100),
      new Coin(700, 100),
      new Coin(1200, 100)

  ],
    [
    new BackgroundObject("img/5_background/layers/air.png", -719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", -719),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", -719),

    new BackgroundObject("img/5_background/layers/air.png", 0),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 0),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 0),
    new BackgroundObject("img/5_background/layers/air.png", 719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719),

    new BackgroundObject("img/5_background/layers/air.png", 719*2),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png",719*2),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png",719*2),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png",719*2
    ),
    new BackgroundObject("img/5_background/layers/air.png", 719*3),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png",719*3),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png",719*3),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png",719*3),
  ],

  
);

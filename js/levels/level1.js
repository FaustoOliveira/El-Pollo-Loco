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

  [
    new Coins(200, 100),
    new Coins(500, 100),
    new Coins(1000, 100),
    new Coins(1500, 100),
    new Coins(2000, 100),
    new Coins(2500, 100),
    new Coins(3000, 100),
    new Coins(3200, 100),
    new Coins(700, 100),
    new Coins(1200, 100)
],

);

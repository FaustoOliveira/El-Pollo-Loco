let canvas;
let world;
let ctx;
let gameStared = true;
let keyboard = new Keyboard();
let startScreen = new Image();

startScreen.src = "img/9_intro_outro_screens/start/startscreen_2.png";

/**
 *  start screen an load
 */
function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.drawImage(startScreen, 0, 0, 720, 480);
  gameStared = true;
  world = new World(canvas, keyboard);
  document.getElementById("start").style.display = "none";
  
  console.log("My Character is", world.character);
}

function openFullscreen() {
  let fullscreen = document.getElementById("contentFullscreen");
  enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
gameControl();

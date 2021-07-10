let canvas = document.getElementById("c");
let ctx = canvas.getContext("2d");
const scale = 5500;  // 5500 seems realistic, as natural gravity for my PC with screen res- 1920x1080 and screen size- 34.5cm x 20cm
let CANVAS_WIDTH = window.innerWidth - 5;
let CANVAS_HEIGHT = window.innerHeight - 5;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
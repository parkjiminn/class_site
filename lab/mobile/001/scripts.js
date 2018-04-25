function $(el) {return document.getElementById(el.replace(/#/,''));};
var canvas = $('#canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var context = canvas.getContext('2d');
var start = function(coors) {
    context.beginPath();
    context.moveTo(coors.x, coors.y);
    this.isDrawing = true;

};
var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' + 
                 (85 + 10 * Math.random()) + '%)';

var move = function(coors) {
    if (this.isDrawing) {
        let hue = 0;
        context.strokeStyle = cssHSL;
        context.lineJoin = "round";
        context.lineWidth = 8;
        context.lineTo(coors.x, coors.y);
        context.stroke();
    }
};
var stop = function(coors) {
    if (this.isDrawing) {
        this.touchmove(coors);
        this.isDrawing = false;
    }
};
var drawer = {
    isDrawing: false,
    mousedown: start,
    mousemove: move,
    mouseup: stop,
    touchstart: start,
    touchmove: move,
    touchend: stop
};
var draw = function(e) {
    var coors = {
        x: e.clientX || e.targetTouches[0].pageX,
        y: e.clientY || e.targetTouches[0].pageY
    };
    drawer[e.type](coors);
}
canvas.addEventListener('mousedown', draw, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('mouseup', draw, false);
canvas.addEventListener('touchstart', draw, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('touchend', draw, false);

var go = function(e) {
    this.parentNode.removeChild(this);
    draw(e);
};

$('#go').addEventListener('mousedown', go, false);
$('#go').addEventListener('touchstart', go, false);

// prevent elastic scrolling
document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
// end body:touchmove
window.onresize = function(e) {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
};

function background(){
    var index = Math.round(Math.random() * 9);
    var ColorValue = "#739600"; // (index = 0)
    if(index == 1)
    ColorValue = "FFCCCC"; //peach
    if(index == 2)
    ColorValue = "CCAFFF"; //violet
    if(index == 3)
    ColorValue = "A6BEFF"; //lt blue
    if(index == 4)
    ColorValue = "ccebff"; //lt blue2
    if(index == 5)
    ColorValue = "D5CCBB"; //tan
    if(index == 6)
    ColorValue = "c2d6d6"; //lt green
    if(index == 7)
    ColorValue = "e6b3cc"; //
    if(index == 8)
    ColorValue = "FFCC99"; //lt orange
    if(index == 9)
    ColorValue = "CCCCCC"; //lt grey

    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
}

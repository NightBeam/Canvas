"use strict";

const gotCanvas = document.getElementById("canvas-tutorial");

gotCanvas.style.backgroundColor = "#E6E4DE"
gotCanvas.width = document.documentElement.clientWidth;
gotCanvas.height = document.documentElement.clientHeight;
//document.body.style.overflow = "hidden";
let ctx = gotCanvas.getContext("2d");


var f = new FontFace('Font name', 'url(VeraCrouz.ttf)');

f.load().then(function(font) {

  console.log(`font ${font.family} ready`);

  document.fonts.add(font);

  ctx.fillStyle = "black";
  CreateText("Disney",  (gotCanvas.width / 2) - 80, 60, "60px Font name");
  CreateText("Featured Work", (gotCanvas.width / 2) - 184, (gotCanvas.height - 150), "bold 80px Font name");
});


function CreateStripes(count, X, Y, Y2, len, dist, lineW, lineCapStyle){
    ctx.beginPath();
    let i = 0;
    while(i < count){
        if(i % 2 == 0){
            ctx.moveTo((gotCanvas.width - (X + dist * i)), Y);
            ctx.lineTo((gotCanvas.width - (X + dist * i)), Y + len);
        }
        else{
            ctx.moveTo((gotCanvas.width - (X + dist * i)), Y - Y2);
            ctx.lineTo((gotCanvas.width - (X + dist * i)), Y + len - Y2);
        }
        i++;
    }
    ctx.lineCap = lineCapStyle;
    ctx.lineWidth = lineW;
    ctx.stroke();
}
function CreateCenterEll(count, X, Y, width, height, dist, ...photo){
    let i = 0;
    let x1 = [60, 50, 200, 700]
    while(i < count){
        if(i + 1 == count){
            CreateImageEllCenter(`cartoons/${photo[i]}`, ...x1 , X + dist * i, Y, width, height);
        }
        else if(i % 2 == 0){
            CreateImageEllCenter(`cartoons/${photo[i]}`, ...x1 , X + dist * i, Y + 40, width, height);
        }
        else if(i % 3 == 0){
            CreateImageEllCenter(`cartoons/${photo[i]}`, ...x1 , X + dist * i, Y + 80, width, height);
        }
        else{
            CreateImageEllCenter(`cartoons/${photo[i]}`, ...x1 , X + dist * i, Y, width, height);
        }
        i++;
    }
}
function CreateImageEllCenter(path, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
    const image = new Image();
    image.onload = LoadImage;
    image.src = path;
    function LoadImage(){
        ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
}
function CreateImageEll(path, x, y, width, height){
    const image = new Image();
    image.onload = LoadImage;
    image.src = path;
    function LoadImage(){
        ctx.drawImage(image, x, y, width, height);
    }
}
function CreateCircle(x, y, radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#DDD9CF"
    ctx.fill();
}
function CreateText(text, x, y, style = "16px monospace"){
    ctx.font = style;
    ctx.fillText(text, x, y);
}

ctx.fillStyle = "black";
CreateText("SEE ALL WORKS", 120, (gotCanvas.height - 43), "15px monospace");
CreateText("Explore some of Alan's featured work", (gotCanvas.width / 2) - 140, (gotCanvas.height - 115), "14px monospace");
CreateStripes(3, 57, 40, 3, 23, 7, 3, "round");
CreateImageEll("call.svg", 47, 40, 20, 25);
CreateImageEll("dinamic.svg", 47, (gotCanvas.height - 57), 20, 20 );
CreateCircle((gotCanvas.width / 2) - 40, (gotCanvas.height - 55), 24);
CreateCircle((gotCanvas.width / 2) + 40, (gotCanvas.height - 55), 24);
ctx.beginPath();
ctx.moveTo((gotCanvas.width / 2) - 27, (gotCanvas.height - 55));
ctx.lineTo((gotCanvas.width / 2) - 53, (gotCanvas.height - 55));
ctx.lineWidth = 14;
ctx.lineCap = "butt";
ctx.stroke();
CreateStripes(4, (gotCanvas.width / 2) - 49, (gotCanvas.height - 59), 1.5, 12, 6.5, 5, "round");
CreateCenterEll(10, 240, 140, 120, 474, 140, "aladdin.png", "beauty.png", "enchanted.png", "hercules.png", "hunchback.png", "little-shop.png", "mermaid.png", "newsies.png", "pocahontas.png", "tangled.png");
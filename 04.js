let bodySegmentation;
let segmentation;
let imgBackground;
let video;
let faceMesh;
let faces = [];
let options = {maskType: "person", maxFaces: 1, refineLandmarks: false, flipHorizontal: false};
let canvasHeight, canvasWidth;

function preload() {
    bodySegmentation = ml5.bodySegmentation("SelfieSegmentation", options);
    faceMesh = ml5.faceMesh(options);
    appleImg = loadImage('apple.png');
    imgBackground = loadImage('background.png');
}
function setup() {
    const manImg = document.querySelector('.men')
    canvasWidth = manImg.offsetWidth * 2;
    canvasHeight = manImg.offsetHeight * 2;
    let cnv = createCanvas(canvasWidth, canvasHeight);
    let topPos = manImg.offsetHeight;
    let leftPos = manImg.offsetWidth;

    cnv.style("position", "absolute");
    cnv.style("top", `${topPos}px`);
    cnv.style("left", `${leftPos}px`);
    cnv.style("z-index", "10");
    cnv.style("pointer-events", "none");

    video = createCapture(VIDEO);
    video.size(canvasWidth, canvasHeight);
    video.hide();

    bodySegmentation.detectStart(video, gotResults);
    faceMesh.detectStart(video, gotFaces);
}
function draw() {
    background('#1a475c');
    if (segmentation) {
        video.mask(segmentation.mask);
        let newImg = createImage(canvasWidth,canvasHeight)
        newImg.copy(imgBackground, 0,0,484, 260, 0, 0, canvasWidth, canvasHeight);
        newImg.mask(segmentation.mask)
        image(newImg, 0, 0);
    }
    if (faces[0] && faces[0].faceOval) { 
        let faceX = faces[0].faceOval.centerX;
        let faceY = faces[0].faceOval.centerY;
        let imgSize = 80; 
        image(appleImg, faceX-80, faceY-50, imgSize, imgSize);
    }
}
function gotResults(result) {
    segmentation = result;
}
function gotFaces(results) {
    faces = results;
}
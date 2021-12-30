function preload() {
    status = ""
}

function setup() {
    canvas = createCanvas(380, 380)
    video =  createCapture(VIDEO)
    video.hide()
    video.size(380,380)
    canvas.center()
    objectdetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Status-Detecting Objects"
}

function modelLoaded() {
    console.log("modelLoaded")
    status="true"
}

function draw() {
    image(video, 0, 0, 380, 380)
}
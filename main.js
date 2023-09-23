function setup() {
    video=createCapture(VIDEO);
    video.size(550,415);
    video.position(0,100);
    
    
    canvas=createCanvas(550,450);
    canvas.position(610,100);


    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
    
    function modelLoaded() {
        console.log("Posenet is Initialized")
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw() {
    background('#32a852');
}
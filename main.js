leftWrist = 0;
rightWrist = 0;
difference = 0; 

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized!");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
    }
}
function draw(){
    background("#528560");
    textSize(difference);
    fill("#685285");
    stroke("#685285");
    text("ustat kaur", 50, 200);
}

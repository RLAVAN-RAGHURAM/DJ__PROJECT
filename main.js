song="";
function preload(){
song=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function  modelLoaded(){
    console.log("PoseNet is loaded");
}
function gotPoses(results){
    if (results.length>0){
    console.log(results);
    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
    console.log("leftwristX"+leftwristX+"leftwristY"+leftwristY);
    
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
    console.log("rightwristX"+rightwristX+"rightwristY"+rightwristY);
}
}
function draw(){
    image(video,0,0,600,450);   
}


function play_sound(){
song.play();
}


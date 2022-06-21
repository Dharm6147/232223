noseX=0;
 noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png'); 
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
   video = createCanvas(300, 300)
   video.size(300, 300);
   video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {

    console.log('PoseNet Is Initialised');
}

function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y= " + noseY);
    }
}

function draw(){
    Image(video, 0, 0, 300, 300);
    FileList(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20)
    Image(clown_nose, noseX, noseY, 30, 30);

}


function take_snapshot(){
    save('myFilterImage.png');

}
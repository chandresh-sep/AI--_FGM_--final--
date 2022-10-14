song = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function setup()
{
    video = createCapture(VIDEO);

    poseNet == ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes)
}

function gotposes()
{
    if(result.length > 0)
    {
        console.log(results);
        leftwristX = result[0].pose.leftwrist.X
        leftwristY = result[0].pose.leftwrist.Y
        console.log("leftwristX = " + leftwristX + "leftwristY = " + leftwristY)

        rightwristX = result[0].pose.rightwrist.X
        rightwristY = result[0].pose.rightwrist.Y
        console.log("rightwristX = " + rightwristX + "rightwristY = " + rightwristY)
    }
}

function modelLoaded()
{
    console.log('posenet is initialized!!!')
}

function play()
{
    song = loadSound("CD.mp3");
    song.play("CD.mp3");
    song.setVolume(1);
    song.rate(1);   
}
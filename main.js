noseX = 0;
noseY = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/sshfQbg3/m.png');

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, console.log('Loaded'));
    posenet.on('pose', gotPoses);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-30;
        noseY = results[0].pose.nose.y+5;
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose ,noseX,noseY, 60,30);
}
function take_snapshot() {
    name = window.prompt('File name:')
    save(name + '.png');
}
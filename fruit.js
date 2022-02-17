img = "";
objects="";
status="";


function preload() {
    img = loadImage("fruit_163436567.jpeg");
}

function setup() {
    canvas = createCanvas(600, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML="Status = Detecting Objects"
}

function modelloaded(){
    console.log("model is loaded")
    status=true
    objectDetector.detect(img,gotresult)
    }
    
    function gotresult(error,results){
        if(error){
            console.log(error)
        }
        else{
            console.log(results)
            objects=results
        }
    }

function draw() {
    image(img, 0, 0, 600, 420);

            fill("#FF0000");
            noFill();
            stroke("#FF0000");
            rect(50,40,500,260);
            text("💛Rσσɱ💛", 300 , 170)
}

function fruit_back() {
    window.location = "index.html";
}
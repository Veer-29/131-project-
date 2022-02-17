img = "";
objects="";
status="";

function preload() {
    img = loadImage("bedroom.jpg");
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

            fill("#dde322");
            noFill();
            stroke("#dde322");
            rect(300,150,350,400);   
            text("💛Rσσɱ💛", 300 , 170)
}

function bed_back() {
    window.location = "index.html";
}
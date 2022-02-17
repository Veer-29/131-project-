img = "";
objects="";
status="";


function preload() {
    img = loadImage("desk.jpg")
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
            rect(10,80,560,320); 
            text("🍭𝒟𝑒𝓈𝓀🍭", 30 , 100)
}

function desk_back() {
    window.location = "index.html";
}

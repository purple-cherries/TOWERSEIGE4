const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var score = 0


function preload() {
getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //layer1
    fill(58,109,206)
    Box1 = new Box(300,220,50,50)
    Box2 = new Box(350,220,50,50)
    Box3 = new Box(400,220,50,50)
    Box4 = new Box(450,220,50,50)
    Box5 = new Box(500,220,50,50)

    //layer2
    Box6 = new Box(325,170,50,50)
    Box7 = new Box(375,170,50,50)
    Box8 = new Box(425,170,50,50)
    Box9 = new Box(475,170,50,50)
    
    //layer3
    Box10 = new Box(350,120,50,50)
    Box11 = new Box(400,120,50,50)
    Box12 = new Box(450,120,50,50)

    //layer4
    Box13 = new Box(375,70,50,50)
    Box14 = new Box(425,70,50,50)

    //layer5
    Box15 = new Box(400,20,50,50)
    
    polygon = new shape(100,100)
    slingshot = new SlingShot(polygon.body,{x:150, y:150});
    base = new Ground(400,270,300,15)

    base1 = new Ground(600,390,1200,10)
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        }
    Engine.update(engine)
    textSize(34)
    text("SCORE:"+score,750,40)

    //layer1
    fill(58,109,206)
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box1.score();
    Box2.score();
    Box3.score();
    Box4.score();
    Box5.score();

    //layer2
    fill(180,79,208)
    Box6.display();
    Box7.display();
    Box8.display();
    Box9.display();
    Box6.score();
    Box7.score();
    Box8.score();
    Box9.score();

    //layer3
    fill(255,151,212)
    Box10.display();
    Box11.display();
    Box12.display();
    Box10.score();
    Box11.score();
    Box12.score();

    //layer4
    fill(250,167,68)
    Box13.display();
    Box14.display();
    Box13.score();
    Box14.score();

    //layer5
    fill(250,679,68)
    Box15.display();
    Box15.score();

    fill("brown")
    base.display();
    base1.display()
    polygon.display();
    slingshot.display();
    
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    slingshot.fly()
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    console.log(responseJSON.datetime)
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13)
    console.log(hour)

    if(hour>=06 && hour<18){
        bg = "bg2222.jpg"
    }
    else{
        bg = "bg1.jpg"
    }
    backgroundImg = loadImage(bg)
    console.log(backgroundImg)
}
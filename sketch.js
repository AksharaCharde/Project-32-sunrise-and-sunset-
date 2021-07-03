const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
//var time = 0;
var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(37);
    fill("blue");
    //text("Time "  + time, width-300, 50);
    Engine.update(engine);

    // write code to display time in correct format here
    if(hour >= 12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
      text("Time : 12 AM",100,100);
    }else{
     text("Time : "+ hour%12 + " AM", 50,100);
    
    }
}

async function getBackgroundImg(){

    // write code to fetch time from API
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJson = await response.json(); 
        console.log(responseJson);
    
    //change the data in JSON format
      var dateTime = responseJson.datetime;
      console.log(dateTime);

    // write code slice the datetime
       hour = dateTime.slice(11, 13);
       console.log(hour);

    // add conditions to change the background images from sunrise to sunset
       if(hour >=04 && hour <=06){
           bg = "sunrise1.png";
       }
       if(hour >=06 && hour <=07){
           bg = "sunrise2.png";
       }
       if(hour >=07 && hour <=08){
           bg = "sunrise3.png";
       }
       if(hour >=09 && hour <=11){
           bg = "sunrise4.png";
       }
       if(hour >=11 && hour <=13){
           bg = "sunrise5.png";
       }
       if(hour >=13 && hour <=15){
           bg = "sunrise6.png";
       }
       if(hour >=15 && hour <=17){
           bg = "sunset7.png";
       }
       if(hour >=17 && hour <=18){
           bg = "sunset8.png";
       }
       if(hour >=18 && hour <=19){
           bg = "sunset9.png";
       }
       if(hour >=19 && hour <=20){
           bg = "sunset10.png";
       }
       if(hour >=20 && hour <=22){
           bg = "sunset11.png";
       }
       if(hour >=22 && hour <=24){
           bg = "sunset12.png";
       }
    //load the image in backgroundImg variable here
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
}

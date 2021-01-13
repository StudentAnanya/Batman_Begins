const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder,thunder1,thunder2,thunder3,thunder4;
var engine,world;
var maxDrops = 100;
var drops = [];
var umbrella;
var rand;
var thunderCreatedFrame = 0;

function preload(){
   thunder1 = loadImage("thunderbolt/1.png");
   thunder2 = loadImage("thunderbolt/2.png");
   thunder3 = loadImage("thunderbolt/3.png");
   thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(700,530);
    
    umbrella = new Umbrella(200,200);

    if(frameCount%100===0){

    for(var i=0; i < maxDrops; i++){
        drops.push(new createDrop(random(0,700), random(0,700)));
    }

}

}

function draw(){
    background(0);

    Engine.update(engine);

    rand = Math.round(random(1,4));

    if(frameCount%50===0){
        thunderCreatedFrame = frameCount;
        
        thunder = createSprite(random(200,300),random(200,300),20,20);
        thunder.scale = random(0.5,1);

        switch(rand){
            case 1 : thunder.addImage("thunder1",thunder1);
            break;
            case 2 : thunder.addImage("thunder2",thunder2);
            break;
            case 3 : thunder.addImage("thunder3",thunder3);
            break;
            case 4 : thunder.addImage("thunder4",thunder4);
            break;
        }
    }

    for(var i = 0; i < maxDrops; i+=1){
        drops[i].updatePosition();
        drops[i].display();
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.remove();
    }

    umbrella.displayUmbrella();

    drawSprites();
}   


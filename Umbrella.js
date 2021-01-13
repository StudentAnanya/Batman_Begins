class Umbrella {
    constructor(x,y){
    
        var options={
            isStatic : true
        }

        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.umbrella);
    }

    displayUmbrella(){
        var position = this.umbrella.position;
        image(this.image, position.x, position.y+50, 300, 300);
        imageMode(CENTER);
    }
}
class createDrop{
    constructor(x,y){
        var options = {
            friction : 0.001,
            restitution : 0.1
        }

        this.drop = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.drop);
    }

    updatePosition(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop, {x : random(0,700), y : random(0,700)})
        }
    }

    display(){
        fill("blue");
        ellipseMode(CENTER)
        ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius);
    }
}
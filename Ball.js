class Ball{
    constructor(x,y,r){

        var options = {
       density: 4
        };

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        ellipse(this.body.position.x, this.body.position.y, this.r,this.r)
    }
}
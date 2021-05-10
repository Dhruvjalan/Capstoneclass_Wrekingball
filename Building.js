class Building{
    constructor(x,y,w,h){
        var options = {
            isStatic: false,
            density : 0.099,
        };

           this.body = Bodies.rectangle(x,y,w,h,options);
           this.width = w;
           this.height = h;

           World.add(world, this.body);
}

display(){
    push ();
    rectMode(CENTER);
     
     rect(this.body.position.x, this.body.position.y,this.width,this.height);
   pop ();
}
}
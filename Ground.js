class Ground{
    constructor(){
        var options = {
            isStatic: true
        };

           this.body = Bodies.rectangle(600,795,1200,10,options);
          

           World.add(world, this.body);
}

display(){
    push ();
    rectMode(CENTER);
     rect(600,795,1200,10);
   pop ();
}
}
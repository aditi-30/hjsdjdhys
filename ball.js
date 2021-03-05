class Ball{
constructor(){
    var options={
           restitution: 0.2,
            density:0.8, 
            friction:0.8
         }
         this.body = Bodies.circle(200,200,30,options);
         this.radius=30;
         this.image=loadImage("polygon.png")
      World.add(world, this.body);
      
    }
    display(){
        var position=this.body.position
        var angle=this.body.angle
        push();
        translate(position.x,position.y)
        rotate(angle)
        fill("purple")
        image(this.image,0,0,this.radius,this.radius)
        pop();
      
    
    }
}

class Ball{
constructor(){
    var options={
        isStatic:false,
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
class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility=255
    }
    display()
    {
      console.log(this.body.speed)
      var pos =this.body.position;
      if(this.body.speed<3){
      rectMode(CENTER);
      fill("yellow")
      rect(pos.x, pos.y, this.width, this.height);}

      else
      {
        
         World.remove(world,this.body)
         push()
         this.Visibility=this.Visibility-5
         tint(255,this.Visibility)
         rect(this.x, this.y, this.width, this.height)
         pop();
      }
    }
}
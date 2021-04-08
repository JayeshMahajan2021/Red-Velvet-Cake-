class Paper{
  constructor(x,y,r)
  {var options={
      restitution :0.3,
      density : 1.2,
      isStatic:false ,
      friction:0
    }
    this.x=x;
    this.y=y;
    this.r=r
    this.body=Bodies.circle(this.x, this.y, (this.r -20) /2, options);
     World.add(world, this.body);
    this.image = loadImage("paper.png");
}
display()
{
        
        var paperPos=this.body.position;		

        push()
        translate(paperPos.x, paperPos.y);
        rectMode(CENTER)
        
        fill(128,128,128)
        imageMode(CENTER);
        image(this.image , 0, 0,this.r , this.r );
        pop()
        
}

}


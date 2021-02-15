class ball
{
	constructor(x,y,r)
	{
		var options={
           
            frictionAir:0.005,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r=r;
                 
		this.body=Bodies.circle(x, y,r , options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill(128,128,128)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
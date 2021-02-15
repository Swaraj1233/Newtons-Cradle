class box
{
	constructor(x,y,w,h)
	{
		var options={
            
            restitution:0.8,
            friction:1,
            density:0.04		
			}
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

    }
    
	display()
	{        		
		fill("blue")
        var groundPos=this.body.position;		
        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        rect(0,0,this.w, this.h);
        pop()
                                        
						
	}

}
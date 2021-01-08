class Plinko {
    constructor(x,y,r){
     var options={
         isStatic: true,
         density: 1.2,
         friction: 0.04,
         restitution: 0
     }
     this.x=x;
     this.y=y;
     this.r=r;
     this.body=Bodies.circle(x,y,r,options);
     World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}
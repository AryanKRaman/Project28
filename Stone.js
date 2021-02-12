class Stone{
    constructor(x, y, width, height) {
        this.image = loadImage("images/stone.png");
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        ellipseMode(radius);
        ellipse(x,y,r,r);
        image(this.image,0,0)
        
        pop();
      }
    };

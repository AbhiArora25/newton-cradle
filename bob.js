class Bob {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':0.7,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.radius=200;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke('grey');
      fill('silver');
      circle(0, 0, this.radius);
      pop();
    }
  }
  
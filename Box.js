class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

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
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);

    if(this.body.speed > 3)
      World.remove(world, this.body)
      this.Visibolity = this.Visibolity - 5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x, this.body.position.y,this.body.width,this.body.height);
    }
    pop();

   score() {
      if(this.visibility < 0 && this.visibility >= 105) {
        score++;
   }
  }
};
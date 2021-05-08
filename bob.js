class Bob {
  constructor(x, y) {
    var options = {
      density: 1.5,
      radius: 2.5,
      daimeter: 5,
    };
    this.body = Bodies.rectangle(x, y, options);
    this.body.daimeter = 5;
    World.add(world, this.body);
  }
  display() {
    push();
    fill("pink");
    rectMode(CENTER);
    rect(0, 0, this.body, this.body.daimeter);
    pop();
  }
}

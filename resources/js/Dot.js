class Dot {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.oldpos = new Vector(x, y);
    this.pinned = false;

    this.velocity = new Vector(0, 0);

    this.resistance = 0.97;
    this.groundFriction = 0.7;

    this.gravity = new Vector(0, 1);
    this.acc = new Vector(0, 1);

    this.radius = 5;
    this.color = "#e62a4f";
    this.mass = 1;

    this.time = window.performance.now()
  }

  update() {
    // var currentTime = window.performance.now();
    // var timeDiff = currentTime - this.time;

    // if (this.pos.y >= CANVAS_HEIGHT - this.radius * scale) {
    //   this.pos.setXY(this.pos.x, CANVAS_HEIGHT - this.radius * scale);
    //   this.velocity.setXY(0, 0);
    // }
    // else {
    //   let kv_sqr = this.resistance * this.velocity.magSq();
    //   let resistance_acc = new Vector(this.velocity.x, this.velocity.y);
    //   if (resistance_acc.y != 0)
    //     resistance_acc.mult(kv_sqr / resistance_acc.mag());
    //   this.acc = Vector.sub(this.gravity, resistance_acc);
    //   if (this.acc.y < 0)
    //     this.acc = new Vector(this.acc.x, 0);

    //   var at = new Vector(this.acc.x, this.acc.y);
    //   at.mult(timeDiff);
    //   var newVel = Vector.add(this.velocity, at)
    //   this.velocity.setXY(newVel.x, newVel.y)

    //   let ut = new Vector(this.velocity.x, this.velocity.y);
    //   ut.mult(timeDiff);
    //   let half_at_sqr = new Vector(this.acc.x, this.acc.y);
    //   half_at_sqr.mult((1 / 2) * timeDiff * timeDiff);
    //   this.pos.add(ut);
    //   this.pos.add(half_at_sqr);
    // }

    // this.oldpos.setXY(this.pos.x, this.pos.y);



    let vel = Vector.sub(this.pos, this.oldpos);
    vel.mult(this.resistance);

    // if the point touches the ground set groundFriction
    if (this.pos.y >= CANVAS_HEIGHT - this.radius && vel.magSq() > 0.000001) {
      var m = vel.mag();
      vel.x /= m;
      vel.y /= m;
      vel.mult(m * this.groundFriction);
    }
    this.oldpos.setXY(this.pos.x, this.pos.y);
    this.pos.add(vel);
    this.pos.add(this.gravity);
  }

  constrain() {
    if (this.pos.x > CANVAS_WIDTH - this.radius) {
      this.pos.x = CANVAS_WIDTH - this.radius;
    }
    if (this.pos.x < this.radius) {
      this.pos.x = this.radius;
    }
    if (this.pos.y > CANVAS_HEIGHT - this.radius) {
      this.pos.y = CANVAS_HEIGHT - this.radius;
    }
    if (this.pos.y < this.radius) {
      this.pos.y = this.radius;
    }
  };

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}
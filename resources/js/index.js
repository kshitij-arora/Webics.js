let dots = [];
let sticks = [];

//dots
dots.push(new Dot(150, 50));
dots.push(new Dot(200, 100));
dots.push(new Dot(150, 150));
dots.push(new Dot(100, 100));

// sticks
sticks.push(new Stick(dots[0], dots[1]))
sticks.push(new Stick(dots[1], dots[2]))
sticks.push(new Stick(dots[2], dots[3]))
sticks.push(new Stick(dots[3], dots[0]))
sticks.push(new Stick(dots[3], dots[1]))

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  for (let d of dots) {
    d.update();
    d.constrain();
    d.render(ctx);
  }
  for (let s of sticks) {
    s.update();
    s.render(ctx);
  }

  requestAnimationFrame(animate);
}
animate();
const drops = [];

requestAnimationFrame(() => {
  for (let i = 0; i < 100; i++) {
    const drop = new EmoteDrop();
    drops.push(drop);
  }

  requestAnimationFrame(draw);
});

function draw(e) {
  for (let i = 0; i < drops.length; i++) {
    const drop = drops[i];
    if (drop.landedAt && drop.landedAt + 1000 < e) {
      drop.reset();
      drop.draw();
      continue;
    }
    drop.update().draw();
  }

  requestAnimationFrame(draw);
}

class EmoteDrop {
  constructor() {
    this.ele = document.createElement('div');
    this.ele.classList.add('emote');
    this.landedAt = null;
    this.size = 28;
    this.size_half = this.size * 0.5;
    this.pos = new Vector();
    this.vel = new Vector();
    this.reset();
    this.draw();
    document.body.append(this.ele);
  }
  reset() {
    this.landedAt = null;
    this.pos.set(window.innerWidth * (Math.random() * 0.8 + 0.1), -224);
    this.vel.set(0, 5).rotate((Math.random() * 0.8 - 0.4) * Math.PI);
    this.ele.classList.remove('good-landing');
  }
  update() {
    if (!this.landedAt && this.pos.y >= window.innerHeight - this.size_half) {
      this.pos.y = window.innerHeight - this.size_half;
      this.vel.set(0, 0);
      this.landedAt = performance.now();
      if (Math.abs(this.pos.x - window.innerWidth * 0.5) / window.innerWidth < 0.2) {
        this.ele.classList.add('good-landing');
      }
      return this;
    } else
    if (this.landedAt) {
      return this;
    }
    this.pos.add(this.vel);
    if (this.pos.x <= this.size_half) {
      this.vel.x = Math.abs(this.vel.x);
    } else
    if (this.pos.x >= window.innerWidth - this.size_half) {
      this.vel.x = -Math.abs(this.vel.x);
    }
    return this;
  }
  draw() {
    this.ele.style.setProperty('--x', this.pos.x - this.size_half + 'px');
    this.ele.style.setProperty('--y', this.pos.y - this.size_half + 'px');
    return this;
  }}


class Vector {
  constructor(x = 0, y = x) {
    this.x = x;
    this.y = y;
  }
  set(x = 0, y = x) {
    this.x = x;
    this.y = y;
    return this;
  }
  add(x, y) {
    if (x instanceof Vector) {
      ({ x, y } = x);
    }
    this.x += x;
    this.y += y;
    return this;
  }
  rotate(a = 0) {
    if (!a) {
      return this;
    }
    const c = Math.cos(a);
    const s = Math.sin(a);
    const { x, y } = this;
    this.x = x * c - y * s;
    this.y = x * s + y * c;
    return this;
  }}

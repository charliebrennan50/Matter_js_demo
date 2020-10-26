class M_Circle {

    constructor(x, y, r, opts) {
        this.x = x,
        this.y = y,
        this.r = r,
        this.options = opts
        this.body = Bodies.circle(this.x, this.y, this.r, this.options);
        World.add(engine.world, this.body);
        this.hue = (Math.floor(Math.random() * 360))
    }

    show() {
        ellipseMode(CENTER);
        push();
        colorMode(HSB);
        fill(this.hue, 100, 100);
        ellipse(this.body.position.x, this.body.position.y, 2 * this.r);
        pop();
    }

}
class M_Peg {

    constructor(x, y, r, opts) {
        this.x = x,
        this.y = y,
        this.r = r,
        this.options = {
            frictionStatic: 0,
            isStatic: true
        }
        this.body = Bodies.circle(this.x, this.y, this.r, this.options);
        World.add(engine.world, this.body);
    }

    show() {
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, 2 * this.r);
    }

}
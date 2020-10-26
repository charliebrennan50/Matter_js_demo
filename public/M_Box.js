class M_Box {

    constructor(x, y, w, h, opts) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.options = {
            friction: 0.5,
            restitution: 0.6,
        }
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
        console.log(this.body);
        World.add(engine.world, this.body);
    }

    show() {
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.body.w, this.body.h)
    }


}
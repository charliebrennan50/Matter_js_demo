class M_Boundary {

    constructor(x, y, w, h, opts) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.options = {
            frictionStatic: 0.05,
            restitution: 0.1,
            isStatic: true
        }
        //this.options ={...this.options, ...opts};
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
        World.add(engine.world, this.body);
    }

    show(){
        push();
        rectMode(CENTER);
        fill(0);
        rect(this.body.position.x, this.body.position.y, this.w, this.h)
        pop();
    }


}
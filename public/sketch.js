// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Sleeping = Matter.Sleeping;

// create an engine
var engine = Engine.create({
    enableSleeping: true
});
let bodies = [];
let pegs = [];
let ballCounter = 0;
let leftSide, rightSide, ground;
let frameCount = 0;
let bottomBoundaries = [];

function setup() {

    //createCanvas
    let renderer = createCanvas(800, 1000);
    //renderer.parent("game-canvas");

    // Bottom and Side Boundaries
    ground = new M_Boundary(400, 1000, 810, 60);
    rightSide = new M_Boundary(800, 500, 60, 1000);
    leftSide = new M_Boundary(0, 500, 60, 1000);

    // Bottom Bins
    for (let i = 1; i < 11; i++) {
        bottomBoundaries.push(new M_Boundary(i * width / 10, height - 100, 10, 200));
    }

    // Make Pegs
    let cols = 10;
    let rows = 18;
    for (let j = 2; j < rows - 1; j++) {
        for (let i = 0; i < cols; i++) {
            pegs.push(new M_Peg(
                j % 2 ? i * width / cols + width / (2 * cols) : i * width / cols,
                j * height / (1.25 * rows),
                10));
        }
    }
}

function draw() {

    background(255);

    frameCount++;
    if (frameCount % 10 == 0) {
        if (ballCounter < 100) {
            let x = Math.floor(Math.random() * (405 - 395)) + 395;
            bodies.push(new M_Circle(x, 30, 10, {
                friction: 0,
                restitution: 0.1
            }));
            ballCounter++;
        }
    }

    //console.log(frameRate());
    leftSide.show();
    rightSide.show();
    ground.show();

    for (b of bodies) {
        b.show();
        b.body.velocity.x == 0 && Sleeping.set.b: true;
    }

    for (p of pegs) {
        p.show();
    }

    for (b of bottomBoundaries) {
        b.show();
    }

    for (var i = 0; i < bodies.length; i++) {
        Matter.Events.on(bodies[i], 'sleepStart sleepEnd', function(event) {
            var body = this;
            console.log('body id', body.id, 'sleeping:', body.isSleeping);
        });
    }

    Engine.update(engine);
}
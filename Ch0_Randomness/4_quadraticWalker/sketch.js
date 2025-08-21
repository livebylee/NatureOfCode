let walker;

function setup() {
    createCanvas(640, 240);
    walker = new Walker();
    background(255);
}

function draw() {
    walker.step();
    walker.show();
}

function accept_reject(){
    while(true){
        let r1 = random(1);
        let p = r1*r1;
        let r2 = random(1);
        if(r2< p){
            return r1;
        }
    }
}
class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    show() {
        stroke(0);
        point(this.x, this.y);
    }

    step() {
        let step = 5;
        let stepx = accept_reject() * step;
        if(random([false,true])) stepx *= -1;
        let stepy = accept_reject() * step;
        if(random([false,true])) stepy *= -1;

        this.x += stepx;
        this.y += stepy;
    }
}



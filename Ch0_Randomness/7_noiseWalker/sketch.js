function setup() {
    createCanvas(640, 240);
    walker = new Walker();
    background(255);
}

function draw() {
    walker.step();
    walker.show();
}

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.oldx = this.x;
        this.oldy = this.y;
        this.tx = 0;
        this.ty = 10000;
    }

    step(){
        let stepx = map(noise(this.tx),0,1,-5,5);
        let stepy = map(noise(this.ty),0,1,-5,5);

        this.x += stepx;
        this.y += stepy;

        this.tx += 0.01;
        this.ty += 0.01;
    }

    show(){
        stroke(0);
        strokeWeight(2);
        line(this.oldx,this.oldy,this.x,this.y);
        this.oldx = this.x;
        this.oldy = this.y;
    }
}
class Walker{
    constructor(x, y,c){
        this.x = x;
        this.y = y;
        this.col = c;
    }
    show() {
        stroke(this.col);
        point(this.x, this.y);
    }

    step() {
        let xstep = random(-3, 3);
        let ystep = random(-3, 3);
        this.x += xstep;
        this.y += ystep;
    }
}

class GaussianWalker{
    constructor(x, y,c){
        this.x = x;
        this.y = y;
        this.col = c;
    }
    show() {
        stroke(this.col);
        point(this.x, this.y);
    }

    step() {
        let xstep = randomGaussian(0, 3);
        let ystep = randomGaussian(0, 3);
        this.x += xstep;
        this.y += ystep;
    }
}

let walker;
let walker2;

function setup() {
    createCanvas(640, 480);
    walker = new Walker(width/2, height/4,color(0));
    walker2 = new GaussianWalker(width/2, 3*height/4,color(255,0,0));
    background(255);
}

function draw() {
    walker.step();
    walker.show();
    walker2.step();
    walker2.show();
}
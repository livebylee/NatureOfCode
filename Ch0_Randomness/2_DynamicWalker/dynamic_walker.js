
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


class Walker{
    constructor(){
        this.x = width / 2;
        this.y = height / 2;
    }
    show() {
        stroke(0);
        point(this.x, this.y);
    }

    step() {
        const p = random(0,1);
        if(p < 0.5){
            if(mouseX < this.x){
                this.x--;
            }else{
                this.x++;
            }
            if(mouseY < this.y){
                this.y--;
            }else{
                this.y++;
            }
        }else{
            let xstep = int(random(-1,2));
            let ystep = int(random(-1,2));
            this.x += xstep;
            this.y += ystep;
        }
    }
}
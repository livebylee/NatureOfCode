// 상자안에서 튀기는 공 만들기 (3D)
// 예제 1-2 기반

let position;
let velocity;
let boxSize = 300;


function setup() {
  createCanvas(640, 640,WEBGL);
  //{!2 .bold} Note how createVector() has to be called inside of setup().
  position = createVector(0,0,0);
  velocity = createVector(3, 3.5,3);
}

function draw() {
  background(255);
  //{!1 .bold .no-comment}
  position.add(velocity);

  //{!6 .bold .code-wide} We still sometimes need to refer to the individual components of a p5.Vector and can do so using the dot syntax: position.x, velocity.y, etc.
  if (position.x > boxSize/2 || position.x < -boxSize/2) {
    velocity.x = velocity.x * -1;
  }
  if (position.y > boxSize/2 || position.y < -boxSize/2) {
    velocity.y = velocity.y * -1;
  }
  if (position.z > boxSize/2 || position.z < -boxSize/2) {
    velocity.z = velocity.z * -1;
  }

  push();              // 좌표계 저장
  translate(position.x, position.y, position.z);  
  fill(255, 0, 0);
  sphere(20);          // 반지름 50 구
  pop();               // 좌표계 복구
  
  
  // 경계 상자 그리기 (선으로만)
  noFill();
  stroke(0);
  box(boxSize);

}
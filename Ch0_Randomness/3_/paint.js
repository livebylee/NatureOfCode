
// 물감 튀는 효과 표현하기
// 1. 점들의 위치 정규분포로 
// 2. 색상 정규분포로
// 3. 표준편차 조절하는 슬라이더

function setup() {
    createCanvas(640, 640);
    background(255);

    // slider
    sigmaSlider = createSlider(5, 100, 30, 1);
    sigmaSlider.position(10, height + 10);
}

function draw() {
    //{!1} A normal distribution with mean 320 and standard deviation 60
    let x = randomGaussian(320,60);
    let y = randomGaussian(320,60);
    noStroke();

    const mu = 180;
    const sigma = sigmaSlider.value();
    let red = constrain(randomGaussian(mu,sigma),0,255);
    let green = constrain(randomGaussian(mu,sigma),0,255);
    let blue = constrain(randomGaussian(mu,sigma),0,255);
    fill(red,50,blue,125);
    circle(x, y, 16);
}
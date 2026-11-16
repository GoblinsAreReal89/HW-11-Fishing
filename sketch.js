let lesIMAGE


async function setup() {
    lesIMAGE = await loadImage('/assets/EvilLesDuf.png');
    createCanvas(800, 800);
    textSize(45);
    textAlign(CENTER,CENTER);
    fill(20,20,40);
    square(0,0,800);
    image(lesIMAGE, 0, 0,800,800);
}

function draw() {
}


 
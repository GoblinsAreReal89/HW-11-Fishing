let lesIMAGE;
let RandomText;
GlupShittoArray = Array;
troutWeightArray = Array;

troutWeightArray = ["Shrimpy","Microscopic","Small","Itty-Bitty","Average","Standard","Run-of-the-mill","Ginormous","Huuuuge","Massive",
    "Catch-of-the-era"];
troutHealthArray = ["On-Death's-Door", "Frail", "Feint", "Sickly", 
    "Malformed", "Healthy", "Fit", "Funny-looking", "Picture-of-Health"];




async function setup() {
    //lesIMAGE = await loadImage('/assets/EvilLesDuf.png');

    //Just getting some basics out of the way in setup
    createCanvas(800, 800);
    textAlign(CENTER,CENTER);

    //image(lesIMAGE, 0, 0,800,800);
    RandomTextWeight = (random(troutWeightArray));
    RandomTextHealth = (random(troutHealthArray));
}

function draw() {
    fill(220,200,140);
    square(0,0,800);
    fill(100,200,200);
    textSize(120);
    text(RandomTextWeight, 400, 400);
    text(RandomTextHealth,400,200)
}

function mousePressed(){
    //This randomizes the printed text in the draw function each time the mouse is pressed
    RandomTextWeight = (random(troutWeightArray));
    RandomTextHealth = (random(troutHealthArray));
}
 
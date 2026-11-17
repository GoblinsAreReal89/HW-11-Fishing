let troutIMAGE;
let RandomText;
GlupShittoArray = Array;
troutWeightArray = Array;

troutWeightArray = ["Shrimpy","Microscopic","Small","Itty-Bitty","Average","Standard",
    "Run-of-the-mill","Ginormous","Huuuuge","Massive","Catch-of-the-era"];
troutHealthArray = ["On-Death's-Door", "Frail", "Feint", "Sickly", "Jaundice-Ridden", "Mutated",  
    "Malformed", "Funny-looking", "Healthy", "Fit", "Athletic", "Lean", "Picture-of-Health"];




async function setup() {
    troutIMAGE = await loadImage('/assets/TROUT-PIC.png');

    //Just getting some basics out of the way in setup
    createCanvas(800, 800);
    textAlign(CENTER,CENTER);

    image(troutIMAGE, 0, 0,800,800);
    RandomTextWeight = (random(troutWeightArray));
    RandomTextHealth = (random(troutHealthArray));
}

function draw() {
    fill(100,220,250);
    square(0,0,800);
    textSize(80);
    fill(250,190,140);
    strokeWeight(4)
    stroke(20)
    text(RandomTextHealth,400,300);
    text(RandomTextWeight, 400, 400);
    text("Trout", 400,500);
    stroke(0,0)
}

function mousePressed(){
    //This randomizes the printed text in the draw function each time the mouse is pressed
    RandomTextWeight = (random(troutWeightArray));
    RandomTextHealth = (random(troutHealthArray));
    troutIMAGE = loadImage('/assets/TROUT-PIC.png');
    image(troutIMAGE, 0, 0,800,800);
}
 
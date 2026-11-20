let troutIMAGE;
let RandomText;
GlupShittoArray = Array;
troutWeightArray = Array;
troutWeightValue = 0.3

Sizing = 0.3
Discoloration = 0.8
RandomFavFilm = "Chinatown"
troutMeasureWeight = 0 //This is the trout's weight in pounds
troutAgeDescriptior = "plgo"
troutAgeNumber = 0

troutWeightArray = ["Microscopic","Shrimpy", "Small","Itty-Bitty","Run-of-the-mill", "Average","Standard",
    "Large", "Huuuuge","Massive","Ginormous","Catch-of-the-era"];
troutWeightValue = 10
troutHealthArray = ["On-Death's-Door",  "Jaundice-Ridden", "Mutated", "Feint","Malformed","Frail", "Sickly",  
     "Funny-looking", "Fair", "Healthy", "Lean", "Fit", "Athletic", "Picture-of-Health"];
troutHealthValue = 10
troutAgeArray = ["Larvae", "Fry", "Ongrower", "Rebel-Teen", "Sea-Grown", "Adult", "Arthritic", "Elder","Fossil"]
troutFavFilmArray = ["La-la-land","Battleship-Potemkin","Interstellar","Spirited-Away","Citizen-Kane","Psycho","Mulholland-drive","Sinners",
    "Heat","Casablanca","Gone-with-the-wind","Lonesome-dove","Once-upon-a-time-in-the-west","Pulp-fiction","The-godfather","Lawrence-of-Arabia",
    "The-shining","2001-A-space-odyssey","12-Angry-men","Bladerunner","The-Wizard-of-Oz",
]


async function setup() {
    rollDice();
    troutIMAGE = await loadImage('/assets/TROUT-PIC.png');
    backgroundIMAGE = await loadImage('/assets/fruitgerAero.jpg');


    //Just getting some basics out of the way in setup
    createCanvas(800, 800);
    textAlign(CENTER,CENTER);
    imageMode(CENTER,CENTER)
}

function draw() {
    fill(100,220,250); //Background Color
    square(0,0,800); //Background fill
    tint(255, 210, 230, 255) //Change  color
    image(backgroundIMAGE,400,400,1920, 1080)

    textSize(40); //Text size
    fill(250,190,140); //Text color
    strokeWeight(4) //Text outline
    stroke(10)

    text("Fish health: "+RandomTextHealth,400,125);
    text(troutMeasureWeight+" pounds, that's "+RandomTextWeight, 400, 200);
    text( 150, 200);
    text("This trout is "+troutAgeNumber+ " years old,", 400, 275);
    text("That age could be called "+troutAgeDescriptior+".", 400, 325);
    fill(255,255,255);
    text("'My favorite film is "+RandomFavFilm+ ".'",100,500,400);
    

    stroke(0,0) //Reset stroke
    tint(255 * Discoloration, 210 * Discoloration, 30, 255) //Change trout color
    image(troutIMAGE, 400, 650,600 * Sizing,200 * Sizing); //Place trout image
}

function mousePressed(){
    rollDice()
    print(troutWeightValue.length);
}
 

function rollDice(){
    //This randomizes the printed text in the draw function each time the mouse is pressed
    troutHealthValue = round((random(0,troutHealthArray.length -1))); //Randomizing Health term
        Discoloration = (troutHealthValue/(troutHealthArray.length -1)) + .2; //Adjusting trout color based on term
        RandomTextHealth = troutHealthArray[(troutHealthValue)]; //Moving the new health term to the text variable


    troutWeightValue = round((random(0,troutWeightArray.length -1))); // Randomizing weight term 
        Sizing = (troutWeightValue/(troutWeightArray.length -1)) + .22; // Changing trout size based on weight term
        RandomTextWeight = troutWeightArray[(troutWeightValue)]; // Moving the new weight term to the text variable 
        troutMeasureWeight = round((2,15 * Sizing),2);  // Giving a number in pounds based on the sizing

    
        troutAgeNumber = (round(random(0,troutAgeArray.length - 1)));
            troutAgeDescriptior = troutAgeArray[troutAgeNumber];
        troutAgeNumber = round(troutAgeNumber * 2.15,3);


        RandomFavFilm = random(troutFavFilmArray); //Randomizing the favorite film of the trout
}
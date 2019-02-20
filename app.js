//var balloon, zebra, cat, exlamation, cactus, horse, candle, dragon, stop, clover, flower, apple, bottle, ying_yang, dog, man, lighting, art, igloo, treble_clef, clock, fire, question, target, moon, heart, bomb, ice, anchor, skull, sun, ghost, web, leaf, key, hand, eye, dolphin, goo, snowflake, lock, lightbulb, lips, ladybug, carrot, scissors, sunglasses, snowman, water, dinosaur, spider, pencil, clown, ok, tree, car, cheese;


var all_card_images;
var card_deck;
var hud;
var game_over = false;


var matchedImage = function (player_card, match_card) {


};



function preload() {
    all_card_images = loadCardImages();
}

function newGame() {
    game_over = false;
    card_deck = new CardDeck();
    card_deck.redraw(0);
    card_deck.redraw(1);

    hud = new HUD();
    hud.show();
}

function setup() {


    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    stroke("rgb(255, 102, 102)");
    strokeWeight(4);
    background("rgb(255, 239, 204)");

    newGame();

}

function draw() {

}




function keyPressed() {

    if (keyCode === 13 && game_over) {

        newGame();

    } else if (event.code == "ShiftLeft" && !game_over) { //spacebar draws another
        console.log("player 1");
        card_deck.redraw(0);
        hud.p1_score++;
        //  var matched_id = matchedImage(card_deck.player_card, card_deck.match_card);
        //  console.log("matched_id", matched_id);

    } else if (event.code == "ShiftRight" && !game_over) {
        console.log("player 2");
        card_deck.redraw(1);
        hud.p2_score++;
    }

    hud.show();
}
function HUD() {

    this.p1_score = 0;
    this.p2_score = 0;

    this.show = function () {


        noStroke();
        textSize(36);
        fill("rgb(26, 117, 255)");
        text("Animal Spot-It: Hit your key when you see a match!", width / 2 - 410, 35);

        //show instructions
        textSize(28);
        fill("rgb(255, 102, 102)");
        text("Player 1: left shift", 20, height - 20);
        text("Player 2: right shift", width - 270, height - 20);






        //show scores
        textSize(32);
        text("P1 Score: " + this.p1_score, 20, 50);
        text("P2 Score: " + this.p2_score, width - 200, 50);

        if (this.p1_score + this.p2_score === 55) {
            game_over = true;
            background("rgb(255, 239, 204)");

            text("P1 Score: " + this.p1_score, 0, 50);
            text("P2 Score: " + this.p2_score, width - 200, 50);
            textSize(62);

            var winner = this.p1_score > this.p2_score ? "one" : "two";
            text("Player " + winner + " wins!", width / 2 - 200, height / 2 - 50);
            textSize(32);
            text("Hit 'return' to play another game!", width / 2 - 200, height / 2 + 20);
        }

    }

}
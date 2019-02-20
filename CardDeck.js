function CardDeck() {

    this.player_card = [];
    this.cards_drawn = [];

    this.cards = (function () {

        //set up 7x7 matrix with unique strings inside (used later for animal ids)
        var grid = [];
        for (var i = 0; i < 7; i++) {
            var row = [];
            for (var j = 0; j < 7; j++) {

                row.push(i + "_" + j);
            }
            grid.push(row);
        }
        var slope_row = ["7_0", "7_1", "7_2", "7_3", "7_4", "7_5", "7_6", "7_7"]; //bottom separate slope row


        //go through grid and slope row  (for 0-6 slopes, starting on each row) selecting 8 cells each time. should make 57 arrays where only one id matches

        var card_deck = []; //will be a matrix

        for (var slope = 0; slope < 8; slope++) {

            var row_count = 0;
            for (var row_start = grid.length - 1; row_start > -1; row_start--) {

                var card = [];

                for (var column_indx = 0; column_indx < grid[0].length; column_indx++) {

                    if (slope === 7) { // vertical selection of images
                        card.push(grid[column_indx][row_start]);

                    } else { //sloped selection of images

                        if (row_count > 6) {
                            row_count -= 7;
                        }

                        var image_id = grid[row_count][column_indx];

                        card.push(image_id);
                        row_count += slope;

                    }

                }

                //add extra image
                card.push(slope_row[slope]);
                card_deck.push(card);
                row_count++;

            } //end row_start_loop

        } //end slope loop
        //add slope row of cards to complete deck
        card_deck.push(slope_row);

        return card_deck;

    })();




    this.pickRandomCard = function () {

        var index = Math.floor(random(this.cards.length));

        console.log("cards drawn", this.cards_drawn.length);

        if (this.cards.length === this.cards_drawn.length) {
            //game over all cards drawn
            return false;
        }

        if (this.cards_drawn.includes(index)) {
            //repeat to draw a new card
            return this.pickRandomCard();
        } else {
            var random_card = this.cards[index];

            console.log("pushing: " + index);
            this.cards_drawn.push(index);
            return random_card;

        }

    }


    this.redraw = function (player) {

        stroke("rgb(255, 102, 102)");
        strokeWeight(4);
        background("rgb(255, 239, 204)");


        if (player === 0) {
            card_deck.player_card = card_deck.pickRandomCard();
            card_deck.showCard(card_deck.player_card, "left");

            if (card_deck.match_card) {
                card_deck.showCard(card_deck.match_card, "right", "no_shuffle");
            }

        } else {
            card_deck.match_card = card_deck.pickRandomCard();
            card_deck.showCard(card_deck.match_card, "right");
            card_deck.showCard(card_deck.player_card, "left", "no_shuffle");

        }

    }


    this.showCard = function (card, side, no_shuffle) {

        if (!no_shuffle) {
            card = shuffle(card);
        }

        imageMode(CENTER);

        //draw card circle
        fill(255);

        var card_d = width / 2;
        var card_x = side == "left" ? card_d / 2 : width - (card_d / 2);
        var card_y = height / 2;

        ellipse(card_x, card_y, card_d);

        var last_multiple = 1;
        var angle = 0;


        for (var i = 0; i < card.length; i++) {

            var img_x_index = card[i].slice(0, 1);
            var img_y_index = card[i].slice(2, 3);
            var img_id = 'img' + img_x_index + '_' + img_y_index;
            var img = all_card_images[img_id];
            
            var multiple = i % 2 == 0 ? random(0.4, 1) : random(0.2, .6);
            var w = 230 * multiple;
            var h = 207 * multiple;
            var source_width = w * -multiple;
            var source_height = h * -multiple;

            var x = card_x + (((card_d - w - 60) / 2) * Math.sin(radians(angle)));
            var y = card_y + (((card_d - h - 60) / 2) * Math.cos(radians(angle)));

            push();
            
           
            
            if (i == 0) { //put first image in the center

                image(img, card_x, card_y, w, h, 0, 0, source_width, source_height);

            } else {

                
                translate(x, y);
                rotate(-angle);

                image(img, 0, 0, w, h, 0, 0, source_width, source_height);

            }
            pop();

            last_multiple = multiple;
            angle += 360 / (card.length - 1);
        }


    }





}
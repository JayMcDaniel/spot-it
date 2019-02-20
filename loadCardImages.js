 function loadCardImages() {

     var all_card_images = {};

     for (var i = 0; i < 8; i++) {

         for (var j = 0; j < 7; j++) {

             all_card_images['img' + i + '_' + j] = loadImage('images/img' + i + '_' + j + '.png');

         }

     }
     
     //add last card 
     all_card_images["img7_7"] = loadImage('images/img7_7.png');

     return all_card_images;
 }
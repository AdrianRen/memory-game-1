let click1 = {};
let click2 = {};

function makeCardArray(data) {
  let array = [];
  //create array
  data.forEach(function(card) {
    array.push(new Card(card, 1));
    array.push(new Card(card, 2));
  });
  return array;
}

/* Shuffle array randomly */
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    // Choose an element randomly
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Switch current element and random element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function displayCards(cardArray) {
  cardArray.forEach(function(card) {
    //    console.log(card.id)
    //    let cardID = '#' + card.id;
    $('#game-board').append(card.html);
    //    console.log(card.id)
    $(card.id).click(function() {
      console.log("click")
      // TODO: check number of clicks
      checkCard(card);
    });
  });
}

function checkCard(card) {
  if (card.flipped) {
    return;
  }
  if (!click1.name) {
    click1.name = card.name;
    click1.id = card.id;
    $(card.id).addClass('flipped');
    return;
  } else if (!click2.name) {
    click2.name = card.name;
    click2.id = card.id;
    $(card.id).addClass('flipped');
  } else return;

  if (click1.name === click2.name) {
    // TODO  change background-color
    // TODO increase score
    // TODO add function to prevent flipping back (add class and remove class?)
    console.log("win!", click1.id, click2.id)
    $(click1.id).unbind('click');
    $(click2.id).unbind('click');
    // reset clicks
    click1.name = null;
    click2.name = null;
  } else {
    //hide cards
    setTimeout(function() {
      $(click1.id).removeClass('flipped');
      $(click2.id).removeClass('flipped');
      // reset clicks
      click1.name = null;
      click2.name = null;
    }, 600);
  }

}

var Card = function(card, num) {
  let cardID = card.id + '-' + num;
  this.id = '#' + card.id + '-' + num;
  this.image = card.image;
  this.name = card.name;
  this.flipped = false;
  this.html = `<article class="card" id="${cardID}">
      <div class="card-back">
        <img src="images/${this.image}" class="card-image" >
      </div>
      <div class="card-front">
        <img src="images/pokeball.png" class="card-image" >
      </div>
    </article>`;
};

let cardArray = makeCardArray(cardData);
shuffle(cardArray);
displayCards(cardArray);


//TODO: create click listener to toggle visilbity of image and name.  Must store
// name of clicked items and trigger match if win and flip (use setTimeout) if no match
//TODO: create move counter




function clickListener() {

}

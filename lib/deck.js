exports.Deck = function(){

  function constructor(){};

  var cards = [];
  var dealt = [];

  for(var i = 0; i<13; i++){
    cards[i] = new Card("clubs", i+1);
    cards[i] = {suite: cards[i].getSuite(), rank: cards[i].getRank()};
  }for(var i = 13; i<26; i++){
    cards[i] = new Card("diamonds", i-12);
    cards[i] = {suite: cards[i].getSuite(), rank: cards[i].getRank()};
  }for(var i = 26; i<39; i++){
    cards[i] = new Card("hearts", i-25);
    cards[i] = {suite: cards[i].getSuite(), rank: cards[i].getRank()};
  }for(var i = 39; i<52; i++){
    cards[i] = new Card("spades", i-38);
    cards[i] = {suite: cards[i].getSuite(), rank: cards[i].getRank()};
  }

  constructor.prototype.getCards = function(){
    return cards;
  }

  constructor.prototype.dealCard = function(){

    if(cards.length>0){
      var randomCard = Math.floor(Math.random()*cards.length);
      dealt.push(cards[randomCard]);
      cards.splice(randomCard, 1);
      return cards[randomCard];
    }

  }

  constructor.prototype.dealtCards = function(){
    return dealt;
  }

  return new constructor();

}


var myDeck = new Deck();
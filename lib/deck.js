module.exports = function(Card){

  function Constructor(){}

  var cards = [];
  var dealt = [];


  function _initialize(){
    var i = 0;

    for(i = 0; i<13; i++){
      cards[i] = new Card("clubs", i+1);
      cards[i] = {suite: cards[i].getSuite(), rank: cards[i].getRank()};
    }

    for(i = 13; i<26; i++){
      cards[i] = new Card("diamonds", i-12);
      cards[i] = {suite: cards[i].getSuite(), rank: cards[i].getRank()};
    }

    for(i = 26; i<39; i++){
      cards[i] = new Card("hearts", i-25);
      cards[i] = {suite: cards[i].getSuite(), rank: cards[i].getRank()};
    }

    for(i = 39; i<52; i++){
      cards[i] = new Card("spades", i-38);
      cards[i] = {suite: cards[i].getSuite(), rank: cards[i].getRank()};
    }
  }

  _initialize();

  Constructor.prototype.resetDeck = function(){
    _initialize();
  };

  Constructor.prototype.getCards = function(){
    return cards;
  };

  Constructor.prototype.dealCard = function(){

    if(cards.length>0){
      var card_ID = Math.floor(Math.random()*cards.length);
      var randomCard = cards[card_ID];
      dealt.push(randomCard);
      cards.splice(card_ID, 1);
      return randomCard;
    }
  };

  Constructor.prototype.dealtCards = function(){
    return dealt;
  };

  Constructor.prototype.countDeck = function(){
    return cards.length;
  };

  Constructor.prototype.countDealt = function(){
    return dealt.length;
  };

  return new Constructor();

};

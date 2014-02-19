//As a user, I want to receive a card from the deck
//As a dealer, I want to know how many cards have been dealt from the deck.


//1. As a user, receive Card from deck

//  a) The card exists

//  b) Any card I receive has a suite

//  c) Any card I receive has a rank

//2. As a dealer, determine how many cards have been dealt from the deck.

//  a) How many cards are left in the deck

//  b) How many cards are dealt from the deck

//  c) How many cards in total is the same as dealt cards + cards in deck

var chai = require('chai');
var Card = require('../lib/card').Card;
var Deck = require('../lib/deck').Deck;
var expect = chai.expect;

describe('As a user, I receive the card from the deck and expect that', function(){

  var card;

  beforeEach(function(){
    card = new Card("spades", 5);
  });

  it('the card exists,', function(){
    expect(card).to.be.an('object');
  });

  it('any card I receive has a suite,', function(){
    expect(card.getSuite());
  });

  it('any card I receive has a rank,', function(){
    expect(card.getRank());
  });

});

function _Fn(val){

    describe('As a dealer, I determine how many cards have been dealt from the deck based on', function(){

      beforeEach(function(){
        deck = new Deck();
        deck.dealCard();
      });

      it('the number of cards are left in the deck', function(){
        expect(deck.countDeck()).to.equal(51);
      });

      it('the number of cards dealt from the deck', function(){
        expect(deck.countDealt()).to.equal(1);
      });

      it('the sum of the cards dealt and the cards left in the deck', function(){
        expect(deck.countDeck() + deck.countDealt()).to.equal(52);
      });

    });

}

for(var i = 1; i<=52; i++){
  var val = i;
  _Fn(val);
}

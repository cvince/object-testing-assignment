//As a user, I want to receive a card from the deck
//As a dealer, I want to know how many cards have been dealt from the deck.


//1. As a user, receive Card from deck

//  a) The card exists

//  b) Any card I receive has a suite

//  c) Any card I receive has a value

//2. As a dealer, determine how many cards have been dealt from the deck.

//  a) How many cards are left in the deck

//  b) How many cards are dealt from the deck

//  c) How many cards in total is the same as dealt cards + cards in deck

var chai = require('chai');
var Card = require('../lib/card').Card;
var Deck = require('../lib/deck').Deck;
var expect = chai.expect;

describe('As a user, receive the card from the deck', function(){

  var card;

  beforeEach(function(){
    card = new Card("spades", 5);
  })

  it('Expect that the card exists', function(){
    expect(card.getSuite()).to.be.ok;
  });

})

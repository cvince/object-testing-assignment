exports.Card = function(suite, rank){

  var Card = require('../lib/card').Card;
  var Deck = require('../lib/deck').Deck;

  function constructor(){}

  constructor.prototype.getSuite = function(){
    return suite;
  };

  constructor.prototype.getRank = function(){
    return rank;
  };

  return new constructor();

};

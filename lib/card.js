module.exports = function(suite, rank){

  function constructor(){}

  constructor.prototype.getSuite = function(){
    return suite;
  };

  constructor.prototype.getRank = function(){
    return rank;
  };

  return new constructor();

};

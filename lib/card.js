module.exports = function(suite, rank){

  function Constructor(){}

  Constructor.prototype.getSuite = function(){
    return suite;
  };

  Constructor.prototype.getRank = function(){
    return rank;
  };

  return new Constructor();

};

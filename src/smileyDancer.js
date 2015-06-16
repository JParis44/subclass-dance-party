var SmileyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('smileyface');
  window.smileys.push(this);

  //this loop finds every BlinkyDancer object created and then
  //calculates every SmileyDancer's distance from it,
  //then adjusts the BlinkyDancer's size based on SmileyDancer
  //proximity
  for (var i = 0; i < window.dancers.length; i++){
    if (window.dancers[i] instanceof BlinkyDancer) {
      var blinkyPos = window.dancers[i].pos;
      var distances = [];
      for (var j = 0; j < window.smileys.length; j++){
        var smileyPos = window.smileys[j].pos;
        var distSquared = Math.pow((-(blinkyPos.top - smileyPos.top)), 2) + Math.pow((-(blinkyPos.left - smileyPos.left)), 2);
        if (Math.sqrt(distSquared) < 300) {
          distances.push(Math.sqrt(distSquared));
        }
      }
      var totalProximity = distances.reduce(function(acc, item){
        return acc + (300 - item);
      }, 0);
      var scale = (totalProximity/500)*(30);
      window.dancers[i].$node.css({height: scale, width: scale});
    }
  }

};

SmileyDancer.prototype = Object.create(Dancer.prototype);

SmileyDancer.prototype.constructor = SmileyDancer;



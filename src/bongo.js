var BongoDancer = function(top, left, timeBetweenSteps){
  PoPoDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  window.bongos.push(this.$node);

};

BongoDancer.prototype = Object.create(PoPoDancer.prototype);
BongoDancer.prototype.constructor = BongoDancer;

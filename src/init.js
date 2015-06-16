$(document).ready(function(){
  window.dancers = [];
  window.bongos = [];
  window.smileys = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
  });

//Bongo mover
  $('body').on("mousemove", function (event){
    for (var i = 0; i < bongos.length; i++){
      var current = bongos[i].position();
      var deltaTop = -((current.top - event.pageY)/20);
      var deltaLeft = -((current.left - event.pageX)/20);
      var newTop = current.top + deltaTop;
      var newLeft = current.left + deltaLeft;
      bongos[i].css({top: newTop, left: newLeft});
    }
  });

  $('.leftButton').on('click',function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition($("body").height() * Math.random(), 10);
    }
  });

});


/*stack-collapse.js*/

  var hamburgerButton = $('#navbar-button');
  var hamburgerBars = [$('.stack-collapse-icon-bar-1'),$('.stack-collapse-icon-bar-2'),$('.stack-collapse-icon-bar-3')];
  for(var i = 0; i < hamburgerBars.length; i++)
  {
    hamburgerBars[i] = $(hamburgerBars[i]);
  }

  var animateCollapse = function(){
    hamburgerBars[0].addClass('collapse-1');
    hamburgerBars[1].addClass('collapse-2');
  };
  var animateX = function(){
    hamburgerBars[0].addClass('stack-collapse-rotate-2');
    hamburgerBars[1].addClass('stack-collapse-rotate-2');
    hamburgerBars[2].addClass('stack-collapse-rotate-3'); 
  };
  var reverseAnimateX = function(){
    hamburgerBars[0].removeClass('stack-collapse-rotate-2');
    hamburgerBars[1].removeClass('stack-collapse-rotate-2');
    hamburgerBars[2].removeClass('stack-collapse-rotate-3');
   // setTimeout(function(){hamburgerBars[0].removeClass('stack-collapse-hide-1');},600);
  };
  var reverseAnimateCollapse = function(){
    hamburgerBars[0].removeClass('collapse-1');
    hamburgerBars[1].removeClass('collapse-2');
  };

hamburgerButton.on('click', function(){
  var buttonState = hamburgerButton.attr('data-button-state');
  if(buttonState === 'closed'){
      hamburgerButton.attr('data-button-state', 'open');
    animateCollapse();
    setTimeout(function(){animateX();}, 400);
  }
  else{
      hamburgerButton.attr('data-button-state', 'closed');
    reverseAnimateX();
    setTimeout(function(){reverseAnimateCollapse();},400);
  }
});

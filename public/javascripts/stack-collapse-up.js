  var hamburgerButton = $('#navbar-button');
  var hamburgerBars = $('.default-icon-bar');
  console.log(hamburgerBars);
  for(var i = 0;i<hamburgerBars.length; i++)
  {
    hamburgerBars[i] = $(hamburgerBars[i]);
  }
  console.log("hamburgerBars: ", hamburgerBars);

  var animateStackCollapseUp = function(){
    console.log("animateStackCollapseUp");
    hamburgerBars[1].addClass("collapsed-bar-position");
    hamburgerBars[2].addClass("collapsed-bar-position"); 
    setTimeout( function(){
      hamburgerBars[0].addClass("x-bar-1");
    }, 400);
  }

  var animateXStackCollapseUp = function()
  {
    console.log("animateXStackCollapseUp()");
    hamburgerBars[1].addClass('x-bar-2');
    hamburgerBars[2].addClass('x-bar-3'); 
  };

  var reverseAnimateXStackCollapseUp = function(){
    console.log("animateXStackCollapseUp()");
    hamburgerBars[1].removeClass('x-bar-2');
    hamburgerBars[2].removeClass('x-bar-3');
  };

  var reverseAnimateStackCollapseUp = function()
  {
    console.log("reverseStackCollapseUp()");
    hamburgerBars[0].removeClass('x-bar-1');
    hamburgerBars[1].removeClass('collapsed-bar-position');
    hamburgerBars[2].removeClass('collapsed-bar-position');
  }

  hamburgerButton.on('click', function(){
    if(hamburgerButton.attr('data-button-state') === "closed" && hamburgerButton.attr('data-click-state') === "active")
    {
      console.log("open");
      hamburgerButton.attr('data-click-state', "inactive");
      animateStackCollapseUp();
      setTimeout( function(){animateXStackCollapseUp();}, 400);
      setTimeout(function(){hamburgerButton.attr('data-button-state', 'open');},400);
      setTimeout(function(){hamburgerButton.attr('data-click-state', "active");},400);
    }
    else if( hamburgerButton.attr('data-click-state') === "active"){
      console.log("closed");
      hamburgerButton.attr('data-click-state', "inactive");
      hamburgerButton.attr('data-button-state', 'closed');
      reverseAnimateXStackCollapseUp();
      setTimeout(function(){reverseAnimateStackCollapseUp();}, 400);
      setTimeout(function(){hamburgerButton.attr('data-button-state', 'closed');},400);
      setTimeout(function(){hamburgerButton.attr('data-click-state', "active");},400);
    }
  });

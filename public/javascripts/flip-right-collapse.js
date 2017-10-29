
  var hamburgerButton = $("#navbar-button-collapse-mid-x");
  var hamburgerBars = $('.default-icon-bar');
  
  for(var i =0; i < hamburgerBars.length; i++)
  {
    hamburgerBars[i] = $(hamburgerBars[i]);
  }

  var animateCollapseShiftRight = function(){
    console.log("animateX");
    hamburgerButton.addClass('rotate-menu-right');
    hamburgerBars[1].addClass('collapse-top');
    hamburgerBars[2].addClass('collapse-top');
  }
  var animateXRight = function(){
    console.log("animateXRight");
    hamburgerBars[1].addClass('mid-collapse-x');
    hamburgerBars[0].addClass('top-x-rotate-1');
    hamburgerBars[2].addClass('top-x-rotate-2');
  }
  var reverseAnimateXRight = function()
  {
    hamburgerBars[1].removeClass('mid-collapse-x');
    hamburgerBars[0].removeClass('top-x-rotate-1');
    hamburgerBars[2].removeClass('top-x-rotate-2');
  }

  var reverseCollapseShiftRight = function(){
    hamburgerButton.removeClass('rotate-menu-right');
    hamburgerBars[1].removeClass('collapse-top');
    hamburgerBars[2].removeClass('collapse-top'); 
  };
  

  hamburgerButton.on('click', function(){
    if(hamburgerButton.attr('data-button-state') === "closed" && hamburgerButton.attr('data-click-state') === "active")
    {
      console.log("open");

      hamburgerButton.attr('data-click-state', "inactive");
      animateCollapseShiftRight();
      setTimeout(function(){animateXRight();},400);
      setTimeout(function(){hamburgerButton.attr('data-button-state', 'open');},400);
      setTimeout(function(){hamburgerButton.attr('data-click-state', "active");},400);
    }
    else if(hamburgerButton.attr('data-click-state') === "active")
    {
      console.log("closed");
      hamburgerButton.removeClass('rotate-menu-right');
      hamburgerButton.attr('data-click-state', "inactive");
      reverseAnimateXRight();
      setTimeout(function(){reverseCollapseShiftRight();}, 400);
      setTimeout(function(){hamburgerButton.attr('data-button-state', 'closed');},400);
      setTimeout(function(){hamburgerButton.attr('data-click-state', "active");},400);
    }
  });

  

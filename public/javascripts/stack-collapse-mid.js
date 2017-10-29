
  var hamburgerButton = $("#navbar-button-collapse-mid-x");
  var hamburgerBars = $('.default-icon-bar');
  
  for(var i =0; i < hamburgerBars.length; i++)
  {
    hamburgerBars[i] = $(hamburgerBars[i]);
  }

  var animateCollapseMid = function(){
    hamburgerBars[0].addClass('collapsed-bar-mid');
    hamburgerBars[2].addClass('collapsed-bar-mid');
  }

  var animateX = function(){
    hamburgerBars[0].addClass('rotate-45-1');
    hamburgerBars[2].addClass('rotate-45-2');
    hamburgerBars[1].addClass('collapsed-bar-mid-x');
  }
  var reverseAnimateX = function()
  {
    hamburgerBars[0].removeClass('rotate-45-1');
    hamburgerBars[2].removeClass('rotate-45-2');
    hamburgerBars[1].removeClass('collapsed-bar-mid-x');
  }
  var reverseAnimateCollapseMid = function()
  {
    hamburgerBars[0].removeClass('collapsed-bar-mid');
    hamburgerBars[2].removeClass('collapsed-bar-mid');
  }
  


  hamburgerButton.on('click', function(){
    if(hamburgerButton.attr('data-button-state') === "closed" && hamburgerButton.attr('data-click-state') === "active")
    {
      console.log("open");
      hamburgerButton.attr('data-click-state', "inactive");
      animateCollapseMid();
      setTimeout(function(){animateX();}, 400);
      setTimeout(function(){hamburgerButton.attr('data-button-state', 'open');},400);
      setTimeout(function(){hamburgerButton.attr('data-click-state', "active");},400);
    }
    else if(hamburgerButton.attr('data-click-state') === "active")
    {
      hamburgerButton.attr('data-click-state', "inactive");
      reverseAnimateX();
      setTimeout(function(){reverseAnimateCollapseMid();}, 400);
      setTimeout(function(){hamburgerButton.attr('data-button-state', 'closed');},400);
      setTimeout(function(){hamburgerButton.attr('data-click-state', "active");},400);
    }
  });

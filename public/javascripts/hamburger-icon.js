/*COLLAPSED MID X WITH CIRCLE*/
  var hamburgerButton = document.getElementById('navbar-mid-collapse-x-circle-button');
  var hamburgerBars = document.getElementsByClassName('default-icon-bar-mid-collapse-x-circle');
  console.log(hamburgerButton);
  var animateFirstState = function(){
    hamburgerBars[0].className += ' mid-x-circle-icon-top-bar-open';

    hamburgerBars[2].className += ' mid-x-circle-icon-bottom-bar-open';
    setTimeout(function(){    hamburgerBars[1].className += ' mid-x-circle-icon-bar-middle-transition';},600);
    console.log("first");
  };
  var onCompleteAnimateFirstState = function(){
    console.log("second");
    hamburgerBars[1].className += ' mid-x-circle-icon-bar-middle-open';
    hamburgerBars[0].className += ' deg-45-right';
    hamburgerBars[2].className += ' deg-45-left';
  }
  var animatePriorState = function(){
    hamburgerBars[1].classList.remove('mid-x-circle-icon-bar-middle-open');
    hamburgerBars[0].classList.remove('deg-45-right');
    hamburgerBars[2].classList.remove('deg-45-left');
  }
  var onCompleteAnimatePriorState = function(){
    hamburgerBars[0].classList.remove('mid-x-circle-icon-top-bar-open');
    hamburgerBars[1].classList.remove('mid-x-circle-icon-bar-middle-transition');
    hamburgerBars[2].classList.remove('mid-x-circle-icon-bottom-bar-open');
  };

  hamburgerButton.onclick = function(){
    var buttonState = hamburgerButton.dataset.buttonState;
    if(buttonState === 'closed' && hamburgerButton.dataset.clickState === 'active')
    {
      hamburgerButton.dataset.buttonState = 'open';
      hamburgerButton.dataset.clickState='inactive';
      animateFirstState();
      setTimeout(function(){onCompleteAnimateFirstState();}, 400);
      setTimeout(function(){hamburgerButton.dataset.clickState='active';},1000);
    }
    else{
      hamburgerButton.dataset.buttonState = 'closed';
      hamburgerButton.dataset.clickState='inactive';
      animatePriorState();
      setTimeout(function(){onCompleteAnimatePriorState();},400);
      setTimeout(function(){hamburgerButton.dataset.clickState='active';},1000);
    }
  };
/*COLLAPSE MID X*/
  var hamburgerButtonMidCollapse = document.getElementById('navbar-button-mid-collapse');
  var hamburgerBarsMidCollapse = document.getElementsByClassName('default-icon-bar-mid-collapse');
  var animateCollapseMid = function(){
    hamburgerBarsMidCollapse[0].className += ' collapsed-bar-mid';
    hamburgerBarsMidCollapse[2].className += ' collapsed-bar-mid';
  }

  var animateX = function(){
    hamburgerBarsMidCollapse[0].className += ' mid-x-rotate-45-1';
    hamburgerBarsMidCollapse[2].className += ' mid-x-rotate-45-2';
    hamburgerBarsMidCollapse[1].className += ' collapsed-bar-mid-x';
  }

  var reverseAnimateX = function()
  {
    hamburgerBarsMidCollapse[0].classList.remove('mid-x-rotate-45-1');
    hamburgerBarsMidCollapse[2].classList.remove('mid-x-rotate-45-2');
    hamburgerBarsMidCollapse[1].classList.remove('collapsed-bar-mid-x');
  }
  var reverseAnimateCollapseMid = function()
  {
    hamburgerBarsMidCollapse[0].classList.remove('collapsed-bar-mid');
    hamburgerBarsMidCollapse[2].classList.remove('collapsed-bar-mid');
  }

  hamburgerButtonMidCollapse.onclick = function(){
    var buttonState = hamburgerButtonMidCollapse.dataset.buttonState;
    if(buttonState === 'closed')
    {
      hamburgerButtonMidCollapse.dataset.clickState = 'inactive';
      hamburgerButtonMidCollapse.dataset.buttonState = 'open';
      animateCollapseMid();
      setTimeout(function(){animateX();}, 400);
      setTimeout(function(){hamburgerButtonMidCollapse.dataset.clickState = "active"}, 1000)
    }
    else
    {
      hamburgerButtonMidCollapse.dataset.clickState = 'inactive';
      hamburgerButtonMidCollapse.dataset.buttonState = 'closed';
      reverseAnimateX();
      setTimeout(function(){reverseAnimateCollapseMid();},400);
      setTimeout(function(){hamburgerButtonMidCollapse.dataset.clickState = "active"}, 1000);
    }
  };
/*COLLAPSE UP X*/

  var hamburgerButtonTopCollapse = document.getElementById('navbar-button-top-collapse');
  var hamburgerBarsTopCollapse = document.getElementsByClassName('default-icon-bar-top-collapse');

  var animateStackCollapseUp = function(){
    console.log("animateStackCollapseUp");
    hamburgerBarsTopCollapse[1].className += " collapsed-bar-position";
    hamburgerBarsTopCollapse[2].className += " collapsed-bar-position"; 
    setTimeout( function(){
      hamburgerBarsTopCollapse[0].className += " collapsed-up-x-bar-1";
    }, 400);
  }

  var animateXStackCollapseUp = function()
  {
    console.log("animateXStackCollapseUp()");
    hamburgerBarsTopCollapse[1].className += ' collapsed-up-x-bar-2';
    hamburgerBarsTopCollapse[2].className += ' collapsed-up-x-bar-3'; 
    hamburgerBarsTopCollapse[1].classList.remove('collapsed-bar-position');
    hamburgerBarsTopCollapse[2].classList.remove('collapsed-bar-position');
  };

  var reverseAnimateXStackCollapseUp = function(){
    console.log("animateXStackCollapseUp()");
    hamburgerBarsTopCollapse[1].className += " collapsed-bar-position";
    hamburgerBarsTopCollapse[2].className += " collapsed-bar-position"; 
    hamburgerBarsTopCollapse[1].classList.remove('collapsed-up-x-bar-2');
    hamburgerBarsTopCollapse[2].classList.remove('collapsed-up-x-bar-3');
  };

  var reverseAnimateStackCollapseUp = function()
  {
    console.log("reverseStackCollapseUp()");
    hamburgerBarsTopCollapse[0].classList.remove('collapsed-up-x-bar-1');
    hamburgerBarsTopCollapse[1].classList.remove('collapsed-bar-position');
    hamburgerBarsTopCollapse[2].classList.remove('collapsed-bar-position');
  }

  hamburgerButtonTopCollapse.onclick = function(){
    console.log("hamburgerButtonTopCollapse");
    if(hamburgerButtonTopCollapse.dataset.buttonState === "closed" && hamburgerButtonTopCollapse.dataset.clickState === "active")
    {
      console.log("open");
      hamburgerButtonTopCollapse.dataset.clickState = "inactive";
      hamburgerButtonTopCollapse.dataset.buttonState = 'open';
      animateStackCollapseUp();
      setTimeout( function(){animateXStackCollapseUp();}, 400);
      setTimeout(function(){hamburgerButtonTopCollapse.dataset.buttonState = 'open';},400);
      setTimeout(function(){hamburgerButtonTopCollapse.dataset.clickState = "active";},800);
    }
    else if( hamburgerButtonTopCollapse.dataset.clickState === "active"){
      console.log("closed");
      hamburgerButtonTopCollapse.dataset.clickState = "inactive";
      hamburgerButtonTopCollapse.dataset.buttonState = 'closed';
      reverseAnimateXStackCollapseUp();
      setTimeout(function(){reverseAnimateStackCollapseUp();}, 400);
      setTimeout(function(){hamburgerButtonTopCollapse.dataset.buttonState = 'closed';}, 400);
      setTimeout(function(){hamburgerButtonTopCollapse.dataset.clickState = "active";},800);
    }
  };
/*STACK COLLAPSE DOWN*/

  var hamburgerButtonBottomCollapse = document.getElementById('navbar-button-bottom-collapse');
  var hamburgerBarsCollapseDownX = document.getElementsByClassName('default-icon-bar-collapse-down-x');

  var animateCollapseDown = function(){
    console.log("animatedCollapseDown");
    hamburgerBarsCollapseDownX[0].className += ' collapse-1';
    hamburgerBarsCollapseDownX[1].className += ' collapse-2';
  };
  var animateXCollapseDown = function(){
    console.log("animatedXCollapseDown");
    hamburgerBarsCollapseDownX[0].className += ' stack-collapse-hide-1';
    hamburgerBarsCollapseDownX[1].className += ' stack-collapse-rotate-2';
    hamburgerBarsCollapseDownX[2].className += ' stack-collapse-rotate-3'; 
  };
  var reverseAnimateXCollapseDown = function(){
    console.log("reverseAnimateXCollapseDown");
    hamburgerBarsCollapseDownX[0].classList.remove('stack-collapse-hide-1');
    hamburgerBarsCollapseDownX[1].classList.remove('stack-collapse-rotate-2');
    hamburgerBarsCollapseDownX[2].classList.remove('stack-collapse-rotate-3');
   // setTimeout(function(){hamburgerBars[0].removeClass('stack-collapse-hide-1');},600);
  };
  var reverseAnimateXCollapseDownClosed = function(){
    console.log("reverseAnimateXCollapseDown");
    hamburgerBarsCollapseDownX[0].classList.remove('collapse-1');
    hamburgerBarsCollapseDownX[1].classList.remove('collapse-2');
  };

hamburgerButtonBottomCollapse.onclick = function(){
  var buttonState = hamburgerButtonBottomCollapse.dataset.buttonState;
  console.log("hamburgerButtonBottomCollapse");
  if(buttonState === 'closed' && hamburgerButtonBottomCollapse.dataset.clickState === "active"){
    console.log("open");
    hamburgerButtonBottomCollapse.dataset.buttonState = 'open';
    hamburgerButtonBottomCollapse.dataset.clickState = "inactive";
    animateCollapseDown();
    setTimeout(function(){animateXCollapseDown();}, 400);
    setTimeout(function(){hamburgerButtonBottomCollapse.dataset.clickState = "active";},800);
  }
  else{
    console.log("closed");
    hamburgerButtonBottomCollapse.dataset.buttonState = "closed";
    hamburgerButtonBottomCollapse.dataset.clickState = "inactive";
    reverseAnimateXCollapseDown();
    setTimeout(function(){reverseAnimateXCollapseDownClosed();}, 400);
    setTimeout(function(){hamburgerButtonBottomCollapse.dataset.clickState = "active";},800);
  }
};
// STACK FLIP RIGHT
var hamburgerButtonFlipRight = document.getElementById('navbar-button-top-collapse-flip-right');
var hamburgerBarsFlipRight = document.getElementsByClassName('default-icon-bar-top-collapse-flip-right');

  var animateCollapseFlipRight = function(){
    console.log("animateX");

    hamburgerBarsFlipRight[1].className += ' collapse-top';
    hamburgerBarsFlipRight[2].className += ' collapse-top';
    setTimeout(function(){
      hamburgerButtonFlipRight.className += ' rotate-menu-flip-right';
    }, 400)
  }
  var animateXFlipRight = function(){
    console.log("animateXRight");
    hamburgerBarsFlipRight[1].className += ' mid-collapse-x';
    setTimeout(function(){hamburgerBarsFlipRight[0].className += ' top-x-rotate-1';
    hamburgerBarsFlipRight[2].className += ' top-x-rotate-2';},200);
  }
  var reverseAnimateXFlipRight = function()
  {
    hamburgerBarsFlipRight[1].className += ' disable-transition';
    hamburgerBarsFlipRight[0].classList.remove('top-x-rotate-1');
    hamburgerBarsFlipRight[2].classList.remove('top-x-rotate-2');
  }

  var reverseCollapseFlipRight = function(){
    setTimeout(function(){
      hamburgerBarsFlipRight[1].classList.remove('disable-transition');
    }, 200);
      hamburgerBarsFlipRight[1].classList.remove('mid-collapse-x');
    hamburgerButtonFlipRight.classList.remove('rotate-menu-flip-right');
    setTimeout(function(){

      hamburgerBarsFlipRight[1].classList.remove('collapse-top');
      hamburgerBarsFlipRight[2].classList.remove('collapse-top');
    }, 400);
  };

  hamburgerButtonFlipRight.onclick = function(){
    if(hamburgerButtonFlipRight.dataset.buttonState === 'closed' && hamburgerButtonFlipRight.dataset.clickState === 'active')
    {
      hamburgerButtonFlipRight.dataset.clickState = 'inactive';
      hamburgerButtonFlipRight.dataset.buttonState = 'open';
      animateCollapseFlipRight();
      setTimeout(function(){animateXFlipRight();},600);
      setTimeout(function(){hamburgerButtonFlipRight.dataset.clickState = "active";}, 800);
    }
    else{
      hamburgerButtonFlipRight.dataset.clickState = 'inactive';
      hamburgerButtonFlipRight.dataset.buttonState='closed';
      reverseAnimateXFlipRight();
      setTimeout(function(){reverseCollapseFlipRight();},300);
      setTimeout(function(){hamburgerButtonFlipRight.dataset.clickState = "active";}, 800);
    }
  };

var hamburgerButtonFlipLeft = document.getElementById('navbar-button-top-collapse-flip-left');
var hamburgerBarsFlipLeft = document.getElementsByClassName('default-icon-bar-top-collapse-flip-left');

var flipLeftCollapseTop = function(){
  hamburgerBarsFlipLeft[1].className += ' collapse-top-flip-left';
  hamburgerBarsFlipLeft[2].className += ' collapse-top-flip-left';
}
var flipLeftRotateX = function(){
  hamburgerButtonFlipLeft.className += ' hamburger-flip-left';
  setTimeout(function(){
    hamburgerBarsFlipLeft[0].className += ' disable-hide-bar';
    hamburgerBarsFlipLeft[1].className += ' top-x-rotate-2-flip-left';
    hamburgerBarsFlipLeft[2].className += ' top-x-rotate-1-flip-left';
  }, 400);
}
var flipLeftReverseRotateX = function(){

    hamburgerBarsFlipLeft[1].classList.remove('top-x-rotate-2-flip-left');
    hamburgerBarsFlipLeft[2].classList.remove('top-x-rotate-1-flip-left');
    setTimeout(function(){
      hamburgerButtonFlipLeft.classList.remove('hamburger-flip-left');
      hamburgerBarsFlipLeft[0].classList.remove('disable-hide-bar');
  hamburgerBarsFlipLeft[0].classList.remove('disable-transition');
    }, 400);
}
var flipLeftReverseCollapseTop = function(){

  hamburgerBarsFlipLeft[1].classList.remove('collapse-top-flip-left');
  hamburgerBarsFlipLeft[2].classList.remove('collapse-top-flip-left');
}

hamburgerButtonFlipLeft.onclick = function(){
  if(hamburgerButtonFlipLeft.dataset.buttonState === 'closed' && hamburgerButtonFlipLeft.dataset.clickState === 'active')
  {
    console.log('open')
    hamburgerButtonFlipLeft.dataset.buttonState = 'open';
    hamburgerButtonFlipLeft.dataset.clickState = 'inactive';
    flipLeftCollapseTop();
    
    setTimeout(function(){flipLeftRotateX();}, 400);
    setTimeout(function(){hamburgerButtonFlipLeft.dataset.clickState = 'active';},800);
  }
  else if (hamburgerButtonFlipLeft.dataset.clickState === 'active')
  {
    console.log("closed");
    hamburgerButtonFlipLeft.dataset.buttonState = 'closed';
    hamburgerButtonFlipLeft.dataset.clickState = 'inactive';
    flipLeftReverseRotateX();
    setTimeout(function(){flipLeftReverseCollapseTop()},800);
    setTimeout(function(){hamburgerButtonFlipLeft.dataset.clickState = 'active';},800);
  } 
};

//STACK BOTTOM FLIP LEFT
var hamburgerButtonCollapseBottomFlipLeft = document.getElementById('navbar-button-bottom-collapse-flip-left');
var hamburgerBarsCollapseBottomFlipLeft = document.getElementsByClassName('default-icon-bar-bottom-collapse-flip-left');

  var collapseBottomFlipLeft = function()
  {
    hamburgerBarsCollapseBottomFlipLeft[0].className += ' collapse-bottom-flip-left';
    hamburgerBarsCollapseBottomFlipLeft[1].className += ' collapse-bottom-flip-left';
    setTimeout(function(){hamburgerButtonCollapseBottomFlipLeft.className += ' button-collapse-bottom-flip-left';  hamburgerBarsCollapseBottomFlipLeft[2].className += ' disable-hide-bar';},400);
  }
  var collapseBottomFlipLeftExpandX = function(){
    hamburgerBarsCollapseBottomFlipLeft[0].className += ' bottom-x-rotate-1-flip-left';
    hamburgerBarsCollapseBottomFlipLeft[1].className += ' bottom-x-rotate-2-flip-left';
    
  }

  var reverseBottomFlipLeftExpandX = function(){
    hamburgerBarsCollapseBottomFlipLeft[0].classList.remove('bottom-x-rotate-1-flip-left');
    hamburgerBarsCollapseBottomFlipLeft[1].classList.remove('bottom-x-rotate-2-flip-left');
    
  }

  var reverseCollapseBottomFlipLeft = function(){

    hamburgerBarsCollapseBottomFlipLeft[2].classList.remove('disable-hide-bar');
    hamburgerButtonCollapseBottomFlipLeft.classList.remove('button-collapse-bottom-flip-left')
    setTimeout(function(){
    hamburgerBarsCollapseBottomFlipLeft[0].classList.remove('collapse-bottom-flip-left');
    hamburgerBarsCollapseBottomFlipLeft[1].classList.remove('collapse-bottom-flip-left');
    },400);
  }

hamburgerButtonCollapseBottomFlipLeft.onclick = function(){
  var buttonState = hamburgerButtonCollapseBottomFlipLeft.dataset.buttonState;
  var clickState = hamburgerButtonCollapseBottomFlipLeft.dataset.clickState;
  if(buttonState === 'closed' && clickState ==='active')
  {
    console.log('opened');
    hamburgerButtonCollapseBottomFlipLeft.dataset.buttonState = 'open';
    hamburgerButtonCollapseBottomFlipLeft.dataset.clickState = 'inactive';
    collapseBottomFlipLeft();
    setTimeout(function(){collapseBottomFlipLeftExpandX();},800);
    setTimeout(function(){hamburgerButtonCollapseBottomFlipLeft.dataset.clickState = 'active';},800);
    
  }
  else if(clickState === 'active')
  {
    console.log("closed");
    hamburgerButtonCollapseBottomFlipLeft.dataset.clickState = 'inactive';
    reverseBottomFlipLeftExpandX();
    setTimeout(function(){reverseCollapseBottomFlipLeft();}, 400);
    hamburgerButtonCollapseBottomFlipLeft.dataset.buttonState = 'closed';
    setTimeout(function(){    hamburgerButtonCollapseBottomFlipLeft.dataset.clickState = 'active';},800);
  }
}

var hamburgerButtonCollapseBottomFlipRight = document.getElementById('navbar-button-bottom-collapse-flip-right');
var hamburgerBarsCollapseBottomFlipRight = document.getElementsByClassName('default-icon-bar-bottom-collapse-flip-right');

var collapseBottomFlipRight = function(){
  hamburgerBarsCollapseBottomFlipRight[0].className += ' collapse-button-flip-right';
  hamburgerBarsCollapseBottomFlipRight[1].className += ' collapse-button-flip-right';
  setTimeout(function(){hamburgerButtonCollapseBottomFlipRight.className += ' button-collapse-bottom-flip-right'; hamburgerBarsCollapseBottomFlipRight[2].className += ' disable-hide-bar';}, 400);
}
var collapseBottomFlipRightExpandX = function(){
  hamburgerBarsCollapseBottomFlipRight[0].className += ' bottom-x-rotate-1-flip-right';
  hamburgerBarsCollapseBottomFlipRight[1].className += ' bottom-x-rotate-2-flip-right';
}

var reverseCollapseBottomFlipRightExpandX = function(){
  hamburgerBarsCollapseBottomFlipRight[0].classList.remove('bottom-x-rotate-1-flip-right');
  hamburgerBarsCollapseBottomFlipRight[1].classList.remove('bottom-x-rotate-2-flip-right'); 
}
var reverseCollapseBottomFlipRight = function(){
  hamburgerBarsCollapseBottomFlipRight[2].classList.remove('disable-hide-bar');
  hamburgerButtonCollapseBottomFlipRight.classList.remove('button-collapse-bottom-flip-right');
  setTimeout(function(){
    hamburgerBarsCollapseBottomFlipRight[0].classList.remove('collapse-button-flip-right');
    hamburgerBarsCollapseBottomFlipRight[1].classList.remove('collapse-button-flip-right'); 
  }, 400);

  
}

hamburgerButtonCollapseBottomFlipRight.onclick = function(){
  var buttonState = hamburgerButtonCollapseBottomFlipRight.dataset.buttonState;
  var clickState = hamburgerButtonCollapseBottomFlipRight.dataset.clickState;
  if(buttonState === 'closed' && clickState ==='active')
  {
    console.log("open");
    hamburgerButtonCollapseBottomFlipRight.dataset.clickState = 'inactive';
    hamburgerButtonCollapseBottomFlipRight.dataset.buttonState = 'open';
    collapseBottomFlipRight();
    setTimeout(function(){collapseBottomFlipRightExpandX();}, 800);
    setTimeout(function(){hamburgerButtonCollapseBottomFlipRight.dataset.clickState = 'active'},800);
    
  }
  else if(clickState === 'active' ){
    console.log('closed');
    hamburgerButtonCollapseBottomFlipRight.dataset.clickState = 'inactive';
    hamburgerButtonCollapseBottomFlipRight.dataset.buttonState = 'closed';
    reverseCollapseBottomFlipRightExpandX();
    setTimeout(function(){reverseCollapseBottomFlipRight();},400);
    setTimeout(function(){hamburgerButtonCollapseBottomFlipRight.dataset.clickState = 'active'},800);
    
  }
}

var hamburgerButtonCollapseTopXCircle = document.getElementById('navbar-button-top-collapse-x-circle');
var hamburgerBarsCollapseTopXCircle = document.getElementsByClassName('default-icon-bar-top-collapse-x-circle');

  var collapseTopXCircle = function(){
    hamburgerBarsCollapseTopXCircle[1].className += ' collapse-top-x-circle';
    hamburgerBarsCollapseTopXCircle[2].className += ' collapse-top-x-circle';
  }
  var collapseTopXCircleExpand = function(){
    hamburgerBarsCollapseTopXCircle[1].className += ' collapse-top-x-circle-rotate-1';
    hamburgerBarsCollapseTopXCircle[2].className += ' collapse-top-x-circle-rotate-2';
    hamburgerBarsCollapseTopXCircle[0].className += ' collapse-top-x-circle-expand';
  }
  var reverseCollapseTopXCircleExpand = function(){
    hamburgerBarsCollapseTopXCircle[1].classList.remove('collapse-top-x-circle-rotate-1');
    hamburgerBarsCollapseTopXCircle[2].classList.remove('collapse-top-x-circle-rotate-2');
    hamburgerBarsCollapseTopXCircle[0].classList.remove('collapse-top-x-circle-expand');
  };
  var reverseCollapseTopXCircle = function(){
    hamburgerBarsCollapseTopXCircle[1].classList.remove('collapse-top-x-circle');
    hamburgerBarsCollapseTopXCircle[2].classList.remove('collapse-top-x-circle');
  }

hamburgerButtonCollapseTopXCircle.onclick = function(){
  var buttonState = hamburgerButtonCollapseTopXCircle.dataset.buttonState;
  var clickState = hamburgerButtonCollapseTopXCircle.dataset.clickState;
  if(buttonState === 'closed' && clickState ==='active')
  {
    hamburgerButtonCollapseTopXCircle.dataset.buttonState='open';
    hamburgerButtonCollapseTopXCircle.dataset.clickState='inactive';
    collapseTopXCircle();
    setTimeout(function(){
      collapseTopXCircleExpand();
    }, 400);
    setTimeout(function(){hamburgerButtonCollapseTopXCircle.dataset.clickState='active'},800);
  }
  else if(clickState==="active")
  {
    hamburgerButtonCollapseTopXCircle.dataset.buttonState='closed';
    hamburgerButtonCollapseTopXCircle.dataset.clickState='inactive';
    reverseCollapseTopXCircleExpand();
    setTimeout(function(){reverseCollapseTopXCircle();}, 400);
    setTimeout(function(){hamburgerButtonCollapseTopXCircle.dataset.clickState='active'},800);
  }
}

var hamburgerButtonCollapseBottomXCircle = document.getElementById('navbar-button-bottom-collapse-x-circle');
var hamburgerBarsCollapseBottomXCircle = document.getElementsByClassName('default-icon-bar-bottom-collapse-x-circle');

var collapseBottomXCircle = function(){
  hamburgerBarsCollapseBottomXCircle[1].className += ' collapse-bottom-x-circle';
  hamburgerBarsCollapseBottomXCircle[0].className += ' collapse-bottom-x-circle';
}
var collapseBottomXCircleExpand = function(){
  hamburgerBarsCollapseBottomXCircle[1].className += ' collapse-bottom-x-circle-rotate-2';
  hamburgerBarsCollapseBottomXCircle[0].className += ' collapse-bottom-x-circle-rotate-1';
  hamburgerBarsCollapseBottomXCircle[2].className += ' collapse-bottom-x-circle-expand';
}
var reverseCollapseBottomXCircle = function(){
  hamburgerBarsCollapseBottomXCircle[1].classList.remove('collapse-bottom-x-circle-rotate-2');
  hamburgerBarsCollapseBottomXCircle[0].classList.remove('collapse-bottom-x-circle-rotate-1');
  hamburgerBarsCollapseBottomXCircle[2].classList.remove('collapse-bottom-x-circle-expand');
}
var reverseCollapseBottomXCircleExpand = function(){

  hamburgerBarsCollapseBottomXCircle[1].classList.remove('collapse-bottom-x-circle');
  hamburgerBarsCollapseBottomXCircle[0].classList.remove('collapse-bottom-x-circle');

}

hamburgerButtonCollapseBottomXCircle.onclick = function(){
  var buttonState = hamburgerButtonCollapseBottomXCircle.dataset.buttonState;
  var clickState = hamburgerButtonCollapseBottomXCircle.dataset.clickState;
  if(buttonState === 'closed' && clickState ==='active')
  {
    hamburgerButtonCollapseBottomXCircle.dataset.buttonState = 'open';
    hamburgerButtonCollapseBottomXCircle.dataset.clickState = 'inactive';
    collapseBottomXCircle();
    setTimeout(function(){collapseBottomXCircleExpand();}, 400);
    setTimeout(function(){hamburgerButtonCollapseBottomXCircle.dataset.clickState = 'active';},800);
  }
  else if(clickState==="active")
  {
    hamburgerButtonCollapseBottomXCircle.dataset.buttonState = 'closed';
    hamburgerButtonCollapseBottomXCircle.dataset.clickState = 'inactive';
    reverseCollapseBottomXCircle();
    setTimeout(function(){reverseCollapseBottomXCircleExpand();}, 400);
    setTimeout(function(){hamburgerButtonCollapseBottomXCircle.dataset.clickState = 'active';},800);
  }
}

var hamburgerButtonCollapseTopFlipRightXCircle = document.getElementById('navbar-button-top-collapse-flip-right-x-circle');
var hamburgerBarsCollapseTopFlipRightXCircle = document.getElementsByClassName('default-icon-bar-top-collapse-flip-right-x-circle');

var collapseTopFlipRightCircle = function(){
  hamburgerBarsCollapseTopFlipRightXCircle[1].className += ' collapse-top-flip-right-x-circle';
  hamburgerBarsCollapseTopFlipRightXCircle[2].className += ' collapse-top-flip-right-x-circle';
  setTimeout(function(){hamburgerButtonCollapseTopFlipRightXCircle.className += ' collapse-top-flip-right-x-circle-flip-right'}, 400);
}
var collapseTopFlipRightCircleExpand = function(){
  hamburgerBarsCollapseTopFlipRightXCircle[1].className += ' collapse-top-flip-right-x-circle-rotate-1';
  hamburgerBarsCollapseTopFlipRightXCircle[2].className += ' collapse-top-flip-right-x-circle-rotate-2';
  hamburgerBarsCollapseTopFlipRightXCircle[0].className += ' collapse-top-flip-right-x-circle-expand'
}
var reverseCollapseTopFlipRightCircleExpand = function(){
  hamburgerBarsCollapseTopFlipRightXCircle[1].classList.remove('collapse-top-flip-right-x-circle-rotate-1');
  hamburgerBarsCollapseTopFlipRightXCircle[2].classList.remove('collapse-top-flip-right-x-circle-rotate-2');
  hamburgerBarsCollapseTopFlipRightXCircle[0].classList.remove('collapse-top-flip-right-x-circle-expand');
}
var reverseCollapseTopFlipRightCircle = function(){
  hamburgerButtonCollapseTopFlipRightXCircle.classList.remove('collapse-top-flip-right-x-circle-flip-right');

  setTimeout(function(){
    hamburgerBarsCollapseTopFlipRightXCircle[1].classList.remove('collapse-top-flip-right-x-circle');
    hamburgerBarsCollapseTopFlipRightXCircle[2].classList.remove('collapse-top-flip-right-x-circle');
  }, 400);
}

hamburgerButtonCollapseTopFlipRightXCircle.onclick = function(){
  var buttonState = hamburgerButtonCollapseTopFlipRightXCircle.dataset.buttonState;
  var clickState = hamburgerButtonCollapseTopFlipRightXCircle.dataset.clickState;
  if(buttonState === 'closed' && clickState ==='active')
  {
    hamburgerButtonCollapseTopFlipRightXCircle.dataset.buttonState = 'open';
    hamburgerButtonCollapseTopFlipRightXCircle.dataset.clickState = 'inactive';
    collapseTopFlipRightCircle();
    setTimeout(function(){hamburgerButtonCollapseTopFlipRightXCircle.dataset.clickState = 'active';},800);
    setTimeout(function(){collapseTopFlipRightCircleExpand();}, 800);
  }
  else if(clickState === 'active')
  {
    hamburgerButtonCollapseTopFlipRightXCircle.dataset.buttonState = 'closed';
    hamburgerButtonCollapseTopFlipRightXCircle.dataset.clickState = 'inactive';
    reverseCollapseTopFlipRightCircleExpand();
    setTimeout(function(){reverseCollapseTopFlipRightCircle();},400)
    setTimeout(function(){hamburgerButtonCollapseTopFlipRightXCircle.dataset.clickState = 'active';},800);
  }
}

hamburgerButtonCollapseTopFlipLeftXCircle = document.getElementById('navbar-button-top-collapse-flip-left-x-circle');
hamburgerBarsCollapseTopFlipLeftXCircle = document.getElementsByClassName('default-icon-bar-top-collapse-flip-left-x-circle');

  var collapseTopFlipLeftXCircle = function(){
    hamburgerBarsCollapseTopFlipLeftXCircle[1].className += ' collapse-top-flip-left-x-circle';
    hamburgerBarsCollapseTopFlipLeftXCircle[2].className += ' collapse-top-flip-left-x-circle';
    setTimeout(function(){ hamburgerButtonCollapseTopFlipLeftXCircle.className += ' collapse-top-flip-left-x-circle-flip-left';
}, 400);
  };
  var collapseTopFlipLeftXCircleExpand = function(){
    hamburgerBarsCollapseTopFlipLeftXCircle[1].className += ' collapse-top-flip-left-x-circle-rotate-1';
    hamburgerBarsCollapseTopFlipLeftXCircle[2].className += ' collapse-top-flip-left-x-circle-rotate-2';
    hamburgerBarsCollapseTopFlipLeftXCircle[0].className += ' collapse-top-flip-left-x-circle-expand';
  }

  var reverseCollapseTopFlipLeftXCircleExpand = function(){
    hamburgerBarsCollapseTopFlipLeftXCircle[1].classList.remove('collapse-top-flip-left-x-circle-rotate-1');
    hamburgerBarsCollapseTopFlipLeftXCircle[2].classList.remove('collapse-top-flip-left-x-circle-rotate-2');
    hamburgerBarsCollapseTopFlipLeftXCircle[0].classList.remove('collapse-top-flip-left-x-circle-expand');
  }
  var reverseCollapseTopFlipLeftXCircle = function(){
    hamburgerButtonCollapseTopFlipLeftXCircle.classList.remove('collapse-top-flip-left-x-circle-flip-left');
    setTimeout(function(){ 
      hamburgerBarsCollapseTopFlipLeftXCircle[1].classList.remove('collapse-top-flip-left-x-circle');
      hamburgerBarsCollapseTopFlipLeftXCircle[2].classList.remove('collapse-top-flip-left-x-circle');
    }, 400);
  };

hamburgerButtonCollapseTopFlipLeftXCircle.onclick = function(){
  var clickState = hamburgerButtonCollapseTopFlipLeftXCircle.dataset.clickState;
  var buttonState = hamburgerButtonCollapseTopFlipLeftXCircle.dataset.buttonState;
  if(buttonState === 'closed' && clickState ==='active')
  {
    hamburgerButtonCollapseTopFlipLeftXCircle.dataset.buttonState = 'open';
    hamburgerButtonCollapseTopFlipLeftXCircle.dataset.clickState = 'inactive';
    collapseTopFlipLeftXCircle();
    setTimeout(function(){collapseTopFlipLeftXCircleExpand();},800);
    setTimeout(function(){hamburgerButtonCollapseTopFlipLeftXCircle.dataset.clickState = 'active';}, 800);
  }
  else if(clickState === 'active')
  {
    hamburgerButtonCollapseTopFlipLeftXCircle.dataset.buttonState = 'closed';
    hamburgerButtonCollapseTopFlipLeftXCircle.dataset.clickState = 'inactive';
    reverseCollapseTopFlipLeftXCircleExpand();
    setTimeout(function(){reverseCollapseTopFlipLeftXCircle();},400)
    setTimeout(function(){hamburgerButtonCollapseTopFlipLeftXCircle.dataset.clickState = 'active';}, 800);
  }
}

var hamburgerButtonCollapseBottomFlipRightXCircle = document.getElementById('navbar-button-bottom-collapse-flip-right-x-circle');
var hamburgerBarsCollapseBottomFlipRightXCircle = document.getElementsByClassName('default-icon-bar-bottom-collapse-flip-right-x-circle');

var collapseBottomFlipRightXCircle = function(){
  hamburgerBarsCollapseBottomFlipRightXCircle[0].className += ' collapse-bottom-flip-right-x-circle';
  hamburgerBarsCollapseBottomFlipRightXCircle[1].className += ' collapse-bottom-flip-right-x-circle';
    setTimeout(function(){ 
      hamburgerButtonCollapseBottomFlipRightXCircle.className += ' collapse-bottom-flip-right-x-circle-flip-right';
    },400);
}
var collapseBottomFlipRightXCircleExpand = function(){
  hamburgerBarsCollapseBottomFlipRightXCircle[0].className += ' collapse-bottom-flip-right-x-circle-rotate-1';
  hamburgerBarsCollapseBottomFlipRightXCircle[1].className += ' collapse-bottom-flip-right-x-circle-rotate-2';
  hamburgerBarsCollapseBottomFlipRightXCircle[2].className += ' collapse-bottom-flip-right-x-circle-expand';
}
var reverseCollapseBottomFlipRightXCircleExpand = function(){
  hamburgerBarsCollapseBottomFlipRightXCircle[0].classList.remove('collapse-bottom-flip-right-x-circle-rotate-1');
  hamburgerBarsCollapseBottomFlipRightXCircle[1].classList.remove('collapse-bottom-flip-right-x-circle-rotate-2');
  hamburgerBarsCollapseBottomFlipRightXCircle[2].classList.remove('collapse-bottom-flip-right-x-circle-expand');  
}
var reverseCollapseBottomFlipRightXCircle = function(){
      hamburgerButtonCollapseBottomFlipRightXCircle.classList.remove('collapse-bottom-flip-right-x-circle-flip-right');

    setTimeout(function(){ 
      hamburgerBarsCollapseBottomFlipRightXCircle[0].classList.remove('collapse-bottom-flip-right-x-circle');
      hamburgerBarsCollapseBottomFlipRightXCircle[1].classList.remove('collapse-bottom-flip-right-x-circle');
    },400);
}

hamburgerButtonCollapseBottomFlipRightXCircle.onclick = function(){
  var buttonState = hamburgerButtonCollapseBottomFlipRightXCircle.dataset.buttonState;
  var clickState = hamburgerButtonCollapseBottomFlipRightXCircle.dataset.clickState;
  if(buttonState === 'closed' && clickState ==='active')
  {
    hamburgerButtonCollapseBottomFlipRightXCircle.dataset.buttonState = 'open';
    hamburgerButtonCollapseBottomFlipRightXCircle.dataset.clickState = 'inactive';
    collapseBottomFlipRightXCircle();
    setTimeout(function(){
      collapseBottomFlipRightXCircleExpand();
  },800);
    setTimeout(function(){hamburgerButtonCollapseBottomFlipRightXCircle.dataset.clickState = 'active';}, 800);
  }
  else if(clickState === 'active')
  {
    hamburgerButtonCollapseBottomFlipRightXCircle.dataset.clickState = 'inactive';
    hamburgerButtonCollapseBottomFlipRightXCircle.dataset.buttonState = 'closed';
    reverseCollapseBottomFlipRightXCircleExpand();
    setTimeout(function(){
      reverseCollapseBottomFlipRightXCircle();
  },400);
    setTimeout(function(){    hamburgerButtonCollapseBottomFlipRightXCircle.dataset.clickState = 'active';}, 800);
  }
}

var hamburgerButtonCollapseBottomFlipLeftXCircle = document.getElementById('navbar-button-bottom-collapse-flip-left-x-circle');
var hamburgerBarsCollapseBottomFlipLeftXCircle = document.getElementsByClassName('default-icon-bar-bottom-collapse-flip-left-x-circle');

var collapseBottomFlipLeftXCircle = function(){
  hamburgerBarsCollapseBottomFlipLeftXCircle[0].className += ' collapse-bottom-flip-left-x-circle'
  hamburgerBarsCollapseBottomFlipLeftXCircle[1].className += ' collapse-bottom-flip-left-x-circle'
  setTimeout(function(){  hamburgerButtonCollapseBottomFlipLeftXCircle.className += ' collapse-bottom-flip-left-x-circle-flip-left';}, 400);
}
var collapseBottomFlipLeftXCircleExpand = function(){
  hamburgerBarsCollapseBottomFlipLeftXCircle[0].className += ' collapse-bottom-flip-left-x-circle-rotate-1'
  hamburgerBarsCollapseBottomFlipLeftXCircle[1].className += ' collapse-bottom-flip-left-x-circle-rotate-2'
  hamburgerBarsCollapseBottomFlipLeftXCircle[2].className += ' collapse-bottom-flip-left-x-circle-expand'
}
var reverseCollapseBottomFlipLeftXCircleExpand = function(){
  hamburgerBarsCollapseBottomFlipLeftXCircle[0].classList.remove('collapse-bottom-flip-left-x-circle-rotate-1')
  hamburgerBarsCollapseBottomFlipLeftXCircle[1].classList.remove('collapse-bottom-flip-left-x-circle-rotate-2');
  hamburgerBarsCollapseBottomFlipLeftXCircle[2].classList.remove('collapse-bottom-flip-left-x-circle-expand');
}
var reversecollapseBottomFlipLeftXCircle = function(){
  hamburgerButtonCollapseBottomFlipLeftXCircle.classList.remove('collapse-bottom-flip-left-x-circle-flip-left');

  setTimeout(function(){
    hamburgerBarsCollapseBottomFlipLeftXCircle[0].classList.remove('collapse-bottom-flip-left-x-circle');
    hamburgerBarsCollapseBottomFlipLeftXCircle[1].classList.remove('collapse-bottom-flip-left-x-circle');
  }, 400);
}
 hamburgerButtonCollapseBottomFlipLeftXCircle.onclick = function(){
  var buttonState = hamburgerButtonCollapseBottomFlipRightXCircle.dataset.buttonState;
  var clickState = hamburgerButtonCollapseBottomFlipRightXCircle.dataset.clickState;
  if(buttonState === 'closed' && clickState ==='active')
  {
    hamburgerButtonCollapseBottomFlipRightXCircle.dataset.clickState = 'inactive';
    hamburgerButtonCollapseBottomFlipRightXCircle.dataset.buttonState = 'open';
    collapseBottomFlipLeftXCircle();
    setTimeout(function(){collapseBottomFlipLeftXCircleExpand();},800);
    setTimeout(function(){hamburgerButtonCollapseBottomFlipRightXCircle.dataset.clickState = 'active'},800);
  }
  else if(clickState === 'active')
  {
    hamburgerButtonCollapseBottomFlipRightXCircle.dataset.clickState = 'inactive';
    hamburgerButtonCollapseBottomFlipRightXCircle.dataset.buttonState = 'closed';
    reverseCollapseBottomFlipLeftXCircleExpand();
    setTimeout(function(){reversecollapseBottomFlipLeftXCircle();}, 400);
    setTimeout(function(){hamburgerButtonCollapseBottomFlipRightXCircle.dataset.clickState = 'active'},800);
  }
};








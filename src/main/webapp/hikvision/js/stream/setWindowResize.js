function windowResizer() {
	console.log("windowResizer,This is the 3rd Call");// This is the 3rd Call
	//console.trace();
	
	var ht =window.innerHeight;
	  var wt =window.innerWidth;  // width taken middlware bythemself. It is working in One Sample and Not working in MyApp
	  console.log(wt, ht);
	  console.log("Current Height And Width");
	  
  if (oWebControl != null) {
    oWebControl.JS_Resize(wt, ht);
    //setWndCover(ht,wt); //try  without this
    //k
  }
  
}



// set window cover
function setWndCover(ht,wt) {
  var iWidth = $(window).width();
  var iHeight = $(window).height();
  
  
 // var ht =window.innerHeight;
//  var wt =window.innerWidth;
  
  
  var oDivRect = $("#playWnd").get(0).getBoundingClientRect();

  var iCoverLeft = (oDivRect.left < 0) ? Math.abs(oDivRect.left) : 0;
  var iCoverTop = (oDivRect.top < 0) ? Math.abs(oDivRect.top) : 0;
  var iCoverRight = (oDivRect.right - iWidth > 0) ? Math.round(oDivRect.right - iWidth) : 0;
  var iCoverBottom = (oDivRect.bottom - iHeight > 0) ? Math.round(oDivRect.bottom - iHeight) : 0;

  iCoverLeft = (iCoverLeft > wt) ? wt : iCoverLeft;
  iCoverTop = (iCoverTop > ht) ? ht : iCoverTop;
  iCoverRight = (iCoverRight > wt) ? wt : iCoverRight;
  iCoverBottom = (iCoverBottom > ht) ? ht : iCoverBottom;

  if (iLastCoverLeft != iCoverLeft) {
    console.log("iCoverLeft: " + iCoverLeft);
    iLastCoverLeft = iCoverLeft;
    oWebControl.JS_SetWndCover("left", iCoverLeft);
  }
  if (iLastCoverTop != iCoverTop) {
    console.log("iCoverTop: " + iCoverTop);
    iLastCoverTop = iCoverTop;
    oWebControl.JS_SetWndCover("top", iCoverTop);
  }
  if (iLastCoverRight != iCoverRight) {
    console.log("iCoverRight: " + iCoverRight);
    iLastCoverRight = iCoverRight;
    oWebControl.JS_SetWndCover("right", iCoverRight);
  }
  if (iLastCoverBottom != iCoverBottom) {
    console.log("iCoverBottom: " + iCoverBottom);
    iLastCoverBottom = iCoverBottom;
    oWebControl.JS_SetWndCover("bottom", iCoverBottom);
  }
}




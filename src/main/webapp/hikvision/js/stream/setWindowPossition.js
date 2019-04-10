function setLivestreanWindowPossition()

{

// This is the 2nd Call
    oWebControl.JS_SetWindowAttr({
      outerWidth: window.saveWindowAttr ? window.saveWindowAttr.outerWidth : 0,
      innerWidth: window.saveWindowAttr ? window.saveWindowAttr.innerWidth : 0,
      outerHeight: window.saveWindowAttr ? window.saveWindowAttr.outerHeight : 0,
      innerHeight: window.saveWindowAttr ? window.saveWindowAttr.innerHeight : 0
    });
    console.log('--------JS_SetWindowAtt  ------------------');
	  
    
    
}
// PlanA
//var parentDomain= ( (parent.window.location) && (typeof parent.window.location.href == 'string') ) ?  parent.window.location.href.replace(parent.window.location.pathname,'/') :"";  
// PlanB
var ParentDomainFromRefererr =new URL(document.referrer.toString());
var parentDomain= ( (ParentDomainFromRefererr) && (typeof ParentDomainFromRefererr.href == 'string') ) ?  ParentDomainFromRefererr.href.replace(ParentDomainFromRefererr.pathname,'/') :"";
 

// Only 1 at a time
//new URL(document.referrer.toString())

function InitialiseReverseMessenger()
{
	// parentDomain= ( (parent.window.location) && (typeof parent.window.location.href == 'string') ) ?  parent.window.location.href.replace(parent.window.location.pathname,'/') :"";

	  window.addEventListener('message', function(e) {
	  
	  		  var winleft=  document.getElementById("playWnd").style.left; 
			   var wintop=  document.getElementById("playWnd").style.top; 
			   
			   var iWidth = $(window).width();
				var iHeight = $(window).height();
		
		
	    console.log(e.data.msg);
	    //save originaltitle
	    if(e && e.data){
	      switch (e.data.action){
	        case 'saveTitle':
	        	console.log(" message saveTitle ");
	          window.saveTitle = e.data.info;
	          break;
	        case 'setPosition':
	        	console.log(" message setPosition ");
	          window.savePos = e.data.info;
	          break; 
	        case 'resizeWindow':
	        	console.log(" message resizeWindow ");
	        	//windowResizer();
	        	// oWebControl.JS_Resize(300, 200);
	        	resetStreamWindow();
	        	// This is function will trigger after setting setPosition,setWindowAttr to fit and resize
	        	/*
	        	 * 
	        	 resizeWindow resizeWindow  // i created for test
Object {  }
 undefined
already shown this in console
	        	 */
		          break;
	        case 'setWindowAttr':
	        	console.log(" setWindowAttr ");
	          window.saveWindowAttr = e.data.info;


			
			// pushed from parent
	      //  window.savePos = e.data.info;
			 
			 // It should load in position 0 . It will load Full window Width ( $(window).width )and Window Heght ( $(window).height)
			  //  window.savePos.left =$(window).offsetLeft();//0;
			   // window.savePos.top =$(window).offsetTop(); //0;

			   
			             break;
	      }
	    }
	  });

	  
	  
}




function changeTitle(a,b)
{
	
	console.log(" parent.window-> ",parentDomain);
	
	 if(window.parent){
         window.parent.postMessage({
           action:'changeTitle',
           msg:b,
           info:a
         }, parentDomain);
       }
}
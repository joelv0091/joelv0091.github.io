function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}


function resizeLivestreamElement(ele) {
	//loadLivestreamElement(ele);
	console.log('resizeLivestreamElement OF ',ele.id);
	var iframeElem = document.getElementById(ele.id);
	var ChildObject ={};
	ChildObject.location = new URL(ele.src.toString());
	ChildObject.domain =
		
						((ChildObject.location) && (typeof ChildObject.location.href == 'string')) ? ChildObject.location.href
				.replace(ChildObject.location.pathname, '/')
				: "";
				
				InitialiseCommunicateToIframe(iframeElem,ChildObject) ;
				 resizeMessengerToIframe(iframeElem,ChildObject) ;

}


function loadLivestreamElement(ele) {

	var iframeElem = document.getElementById(ele.id);
	var ChildObject ={};
	ChildObject.location = new URL(ele.src.toString());
	ChildObject.domain =
		
						((ChildObject.location) && (typeof ChildObject.location.href == 'string')) ? ChildObject.location.href
				.replace(ChildObject.location.pathname, '/')
				: "";

				InitialiseCommunicateToIframe(iframeElem,ChildObject) ;
	

}


function resizeMessengerToIframe(iframeElem,ChildObject) 
{

	postMessageBroker(iframeElem,ChildObject.domain, 'resizeWindow', 'resizeWindow', {
		//href : window.location.href,
		//path : window.location.path
	});
}

function InitialiseCommunicateToIframe(iframeElem,ChildObject) {

//	console.log('onLoadActionLivestreamElemnt -> ', ele);
	//var iframeElem = document.getElementById(ele.id);
	
	
	
	// PlanE  It should be postMessageBroker it will processing Problem
	/*
	 * var ChildObject ={};
	ChildObject.location = new URL(ele.src.toString());
	ChildObject.domain =
		
						((ChildObject.location) && (typeof ChildObject.location.href == 'string')) ? ChildObject.location.href
				.replace(ChildObject.location.pathname, '/')
				: "";
	
	*/

	/*
	 * 
	 * iframeElem.contentWindow.postMessage({ action:'saveTitle',
	 * msg:'将主页面的title传给iframe', info:document.title }, childDomain);
	 */
	postMessageBroker(iframeElem,ChildObject.domain, 'saveTitle', 'iframe', document.title);

	/*
	 * iframeElem.contentWindow.postMessage({ action:'setPosition',
	 * msg:'将iframe的相对document的位置传给iframe内部，用于控件定位位置的重新校准', info:{
	 * left:iframeElem.offsetLeft, top:iframeElem.offsetTop } }, childDomain);
	 * 
	 * 
	 * 
	 * 
	 * 	postMessageBroker(iframeElem,ChildObject.domain, 'setPosition', 'setPosition', {
		left : iframeElem.offsetLeft,
		top : iframeElem.offsetTop
	});
	 */
	
	// PlanE02
	var derivedOffset= getOffset(iframeElem );
	// PlanE03
	//var derivedOffset=  iframeElem.getBoundingClientRect();
	
	console.log("real Offset-->",iframeElem.offsetLeft,iframeElem.offsetTop);
	console.log("derivedOffset-->",derivedOffset);
	console.log("getBoundingClientRect-->",iframeElem.getBoundingClientRect());
	postMessageBroker(iframeElem,ChildObject.domain, 'setPosition', 'setPosition', {
		left :  derivedOffset.left ,
		top :  derivedOffset.top
	});

	/*
	 * iframeElem.contentWindow.postMessage({ action:'setWindowAttr',
	 * msg:'setWindowAttr', info:{ outerWidth: window.outerWidth, innerWidth:
	 * window.innerWidth, outerHeight: window.outerHeight, innerHeight:
	 * window.innerHeight } }, childDomain);
	 */

	postMessageBroker(iframeElem,ChildObject.domain, 'setWindowAttr', 'setWindowAttr', {
		outerWidth : window.outerWidth,
		innerWidth : window.innerWidth,
		outerHeight : window.outerHeight,
		innerHeight : window.innerHeight
	});

	


	
	
	
}




function InitisaliseLivestreamElemnt(ele) {
	console.log('InitisaliseLivestreamElemnt called');
	var iframeElem = document.getElementById(ele);

	// 给子页面传title信息和iframe相对位置
	iframeElem.onload = function() {
		onLoadActionLivestreamElemnt(ele);

	};

}


var livestreamActionsOnResizeParentWindow = function(e) {
	   //note i need to pass the event as an argument to the function
//	   width = e.target.outerWidth;
//	   height = e.target.outerHeight;

	console.log('-------window resized----------');
	
	//metrixLiveIframe
var slides = document.getElementsByClassName("metrixLiveIframe");
for(var i = 0; i < slides.length; i++)
{
resizeLivestreamElement(slides[i]);
}


	}


function InitialiseOnResize()
{
	
	//window.onresize = livestreamActionsOnResizeParentWindow;
	
	if(window.attachEvent) {
	    window.attachEvent('onresize', function() {
	    	console.log('attachEvent - resize');
	    });
	}
	else if(window.addEventListener) {
	    window.addEventListener('resize', function() {
	        console.log('addEventListener - resize');
	        livestreamActionsOnResizeParentWindow()
	    }, true);
	}
	else {
	    //The browser does not support Javascript event binding
	}
}



function InitialiseLivestreamPanels()
{
	InitialiseForwardMessenger(); // call one time in the main application
	InitialiseOnResize();
}
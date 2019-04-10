window.addEventListener('load', function() {
		 LiveStreamObject.camera.mode =0;// savedvideo
		 OnloadFunction();		
		 	});

window.onbeforeunload = function(){

	//LiveStreamObject.camera.element =document.getElementById('SingleStream') 
//	ImagElemnt= document.getElementById('SingleStream'); 
	
	
	
// $('#SingleStream').unbind().die(); 
// $('#SingleStream').unbind();
// $('#SingleStream').remove();
 //   $(document).unbind().die();    //remove listeners on document
 //   $(document).find('*').unbind().die(); //remove listeners on all nodes

    //clean up cookies
    //remove items from localStorage
}
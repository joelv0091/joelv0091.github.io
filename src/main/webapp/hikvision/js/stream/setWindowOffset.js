/**
 * 
 */


function setLivestreamWindowOffset()
{
// This is the First Call 
	console.log("windowResizer,This is the 1st Call");// This is the 3rd Call
	  oWebControl.JS_SetDocOffset({
          left:window.savePos ? window.savePos.left : 0,
         top:window.savePos ? window.savePos.top : 0
			
			//Try1
		    //left:100,
			//top:100
			
			//Try2
		    //left:winleft,
			//top:wintop
			
						
			//Try3
		    //left:5,
			//top:5
			
				//Try4
		    //left:winleft+10,
			//top:wintop+10
			
			//try5
			 //left: 0,
          //top: 0
			
			
			// No changes happend in View, While i changed here 
			
        });
	  
	  
}
function createLivestreamWindow()

{
	var ht =window.innerHeight;
	var wt =window.innerWidth;
	 oWebControl.JS_CreateWnd("playWnd",  wt,ht
			  , {
	            //add:solve get and modify of title under cross orgin iframe
	            cbSetDocTitle: function (uuid) {
	              //push message，to modify title of parent window 
	          //    var parentDomain = 'http://trinityicccdemo-operator.azurewebsites.net/';//ip of parent window
				  	 // href-pathname
				//  parentDomain= ( (parent.window.location) && (typeof parent.window.location.href == 'string') ) ?  parent.window.location.href.replace(parent.window.location.pathname,'/') :"";
				/*
	             console.log( parent.window.location);
	             console.log( parent.window.location.href);
	             console.log(  parent.window.location.pathname);
	             console.log(  parent.window.location.hash );
	             */
	             /*
	              if(window.parent){
	                window.parent.postMessage({
	                  action:'changeTitle',
	                  msg:'notification',
	                  info:uuid
	                }, parentDomain);
	              }
	              */
	             changeTitle(uuid,'notification');
	            }
	          }
			  
			  
			  
			  ).then(function () {
			  
			  
			  
	            console.log("JS_CreateWnd success");

	            oWebControl.JS_SetNumberOfWindows(1); 
	            
	            
	            console.log("JS_SetNumberOfWindows-1");

	    console.log("JS_CreateWnd success");
	            //add:solve getting and modify of title under cross orgin
	            
	            /*
	            
	            var parentDomain = 'http://trinityicccdemo-operator.azurewebsites.net/';//ip of parent window
	            if(window.parent){
	              window.parent.postMessage({
	                action:'changeTitle',
	                msg:'notification',
	                info:window.saveTitle
	              }, parentDomain);
	              
	            }
	*/
	            changeTitle(window.saveTitle,'notification');










	            getPubKey(InitisaliseHikStreamer);












	  console.log('cbSetDocTitle function on JS_CreateWnd ');





	  console.log('Finished Action on JS_CreateWnd ');
	            
	          });
	  

}
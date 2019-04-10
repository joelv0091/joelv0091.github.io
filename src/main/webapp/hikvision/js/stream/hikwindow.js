function startWindowServices()

{
	 oWebControl.JS_StartService("window").then(function () {
         //add:solve the position correcting after iframe embedded
       setLivestreamWindowOffset();
         setLivestreanWindowPossition();
        
         createLivestreamWindow();
		  
		  //JS_CreateWnd

         //get snap dir path
  LivestreamConfigHandler();

       }, function () {
       });

}
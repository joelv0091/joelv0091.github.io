function playPlayback()
{
}

 // $("#startPreview").click(function () {
 function playLiveStream(){
	 console.log('inside  playLiveStream ',cameraid);
	    var cameraIndexCode = cameraid;
	   // var cameraIndexCode = '87E99E1002D049F38EFEE86F8C09348E';
	    var streamMode = '0';
	    var transMode = '1';
	    var gpuMode = '0';

	    if (!cameraIndexCode) {
	      showCBInfo("Camera NO. can not empty！", 'error');
	      return
	      
	    }
	    //playMode

	    oWebControl.JS_RequestInterface({  // playingAPI
	      funcName: "startPreview",
	      argument: JSON.stringify({
	        cameraIndexCode: cameraIndexCode,
	        streamMode: streamMode,
	        transMode: transMode,
	        gpuMode: gpuMode,
	        layout: "1x1",
	      })
	    }).then(function (oData) {
	      showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''));
	      console.log("Playig Live Stream Success---",oData);
	    });
	//  })
 }

 
 
 
 function setplayWndCallbacks() {
	  console.log('inside setplayWndCallbacks');
	    oWebControl.JS_SetWindowControlCallback({
	      cbIntegrationCallBack: cbIntegrationCallBack
	    });
	    console.log('Exit setplayWndCallbacks');
	  }
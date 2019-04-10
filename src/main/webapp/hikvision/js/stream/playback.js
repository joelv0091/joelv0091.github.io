function playLiveStream(){

}

 // $("#startPreview").click(function () {
var recordLocation = "D:\ReCyclBin\Hik";
 function playPlayback(){
	 

	 
	 
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

	    oWebControl.JS_RequestInterface({  // playingAPI
	      funcName: "startPlayback",
	      argument: JSON.stringify({
              cameraIndexCode: cameraIndexCode,
              startTimeStamp: Math.floor(startTimeStamp / 1000),
              endTimeStamp: Math.floor(endTimeStamp / 1000),
              recordLocation: recordLocation,
              transMode: transMode,
              gpuMode: gpuMode
          })
	    }).then(function (oData) {
	      showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''));
	      console.log("Playig Live Stream Success---",oData);
	    });
	// })
 }

 
 
 
 function setplayWndCallbacks() {
	  console.log('inside setplayWndCallbacks');
	    oWebControl.JS_SetWindowControlCallback({
	      cbIntegrationCallBack: cbIntegrationCallBack
	    });
	    console.log('Exit setplayWndCallbacks');
	  }
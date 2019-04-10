//var PlayBackVideoAPI={};

/**
 * Called when the user clicks on the Play a random camera link. Sends a RequestStream command to the Mobile Server and begins to request and parse frames over the video channel.
 *
 * @param cameraId: optional, if provided, requests stream for the specified camera. Otherwise plays a random one. 
 */
PlayBackVideoAPI.requestStream = function(cameraId, img,type) {
	
	// Before opening a new stream, we should always close the previous one via the CloseStream command if we are not going to process any frames anymore
	// we do not do this here for simplicity
	
	if (cameraId == null || cameraId == undefined) {
		alert('There are no cameras associated with the current user, you are not logged in, the LogIn command is still being processed, or you have not retrieved the list of all cameras.');
		return;
	}
	
var streamType= (typeof type !== 'undefined' && type == false) ?'Playback':'Live';
	console.log("streamType-->",streamType);
	var width = window.innerWidth < 800?window.innerWidth:800,
			height =window.innerHeight < 600?window.innerHeight:600
			,methodType = window.CommunicationType == 'AjaxRequest' ? 'Pull' : 'Push';
	//window.CommunicationType = 'AjaxRequest' ? 'Pull' : 'Push';
	console.log("DEBUGG--",cameraId,width,height,window.CommunicationType,streamType);
	
	
	//var epochend= 	 LiveStreamObject.connect.continous.date.tid ;// new Date("Thu Mar 22 2018 15:43:43 GMT+0530 ").getTime();
	var epochend= 	 parseInt(LiveStreamObject.connect.continous.date.tid )+ 60000;
	var epochstart=  parseInt(LiveStreamObject.connect.continous.date.tid) ;// -1200000;
	LiveStreamObject.connect.continous.date.start = epochstart;
	LiveStreamObject.connect.continous.date.end   = epochend;
	
	//  LiveStreamObject.connect.continous.date = converterEpochToDate(1521699203);
	
                // Before opening a new stream, we should always close the previous one via the CloseStream command if we are not going to process any frames anymore
                // we do not do this here for simplicity
                
           
                var requestStreamXMLMessage = generateXMLMessage({
                                sequenceId: 1, // just a random number, we are not going to track the sequenceId
                                connectionId: connect.connectionId,
                                command: 'RequestStream',
                                inputParams: {
                                                CameraId: cameraId,
                                                DestWidth: 800,
                                                DestHeight: 600,
                                                MethodType: window.CommunicationType == 'AjaxRequest' ? 'Pull' : 'Push',
                                                SignalType: 'Playback',
                                                Fps: 10,
                                                ComprLevel: 70,
                                                KeyFramesOnly: 'No',
                                          //     SeekType : 'DbStart'
                                                SeekType : 'Time',
                                                Time: epochstart
                                }
                });
                
                sendCommandRequest(requestStreamXMLMessage, function(response) {
                                
                                // save the videoId, so we can use it from now on to request frames
                                var videoId = getVideoId(response);
                                LiveStreamObject.camera.videoId= videoId;
                                setSpeed(videoId,1);
                                
                                // begin to request frames
                                requestFrames(videoId, img);
                                
                                success(response);
                });
    
                function getVideoId(response) {
                                return response.querySelector('OutputParams Param[Name="VideoId"]').getAttribute('Value');
                };
                
};



function setSpeed(videoId,speedval) {
    var changeStreamXMLMessage = generateXMLMessage({
        sequenceId: 1, // just a random number, we are not going to track the sequenceId
        connectionId: connect.connectionId,
        command: 'ChangeStream',
        inputParams: {
            VideoId: videoId,
            Speed : speedval
        }  
    });
            
    sendCommandRequest(changeStreamXMLMessage, function(response) {});
}
         

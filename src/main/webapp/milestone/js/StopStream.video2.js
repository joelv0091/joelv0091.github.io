/**
 * Called when the user clicks on the Play a random camera link. Sends a RequestStream command to the Mobile Server and begins to request and parse frames over the video channel.
 *
 * @param cameraId: optional, if provided, requests stream for the specified camera. Otherwise plays a random one. 
 */



 PlayBackVideoAPI.stopStream = function() {
	
     var stopStreamXMLMessage = generateXMLMessage({
         sequenceId: 1, // just a random number, we are not going to track the sequenceId
         connectionId: connect.connectionId,
         command: 'ChangeStream',
         inputParams: {
             VideoId: LiveStreamObject.camera.videoId,
             Speed: 0,
			 abc:a
         }
     });
         
     sendCommandRequest(stopStreamXMLMessage, function(){});

};

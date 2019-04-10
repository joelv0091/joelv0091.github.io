/**
 * Called when the user clicks on the Play a random camera link. Sends a RequestStream command to the Mobile Server and begins to request and parse frames over the video channel.
 *
 * @param cameraId: optional, if provided, requests stream for the specified camera. Otherwise plays a random one. 
 */



 PlayBackVideoAPI.CloseStream = function() {
	
	// Before opening a new stream, we should always close the previous one via the CloseStream command if we are not going to process any frames anymore
	// we do not do this here for simplicity
	//  LiveStreamObject.camera.All= getCameraMeta(cameraId);
	 
	if (!LiveStreamObject.camera.All || LiveStreamObject.camera.All.length == 0) {
		alert('There are no cameras associated with the current user, you are not logged in, the LogIn command is still being processed, or you have not retrieved the list of all cameras.');
		return;
	}
	
/*	if (!requestStream.index || requestStream.index >= getAllCameras.cameras.length) {
		requestStream.index = 0;  time
	}
	*/
	//var cameraId = cameraId || getAllCameras.cameras[requestStream.index++].id;
	var cameraId = LiveStreamObject.camera.Id;
	var requestStreamXMLMessage = PlayBackVideoAPI.generateXMLMessage({
		sequenceId: 8000, // just a random number, we are not going to track the sequenceId
		connectionId: connect.connectionId,
		command: 'CloseStream',
		inputParams: {
			VideoId: LiveStreamObject.camera.VideoId
			}
	});
	
	sendCommandRequest(requestStreamXMLMessage, function(response) {
		
		// save the videoId, so we can use it from now on to request frames
	console.log("CloseStream-----------------------------------------");
	LiveStreamObject.camera.play =false;
	PlayBackVideoAPI.disconnect();
	

	},5);


};

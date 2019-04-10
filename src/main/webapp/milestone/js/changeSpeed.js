/**
 * Called when the user clicks on the Speed +1 link. Sends a ChangeStream command to the Mobile Server and continues to request and parse frames over the video channel.
 */
speed = 0

var changeSpeed = function() {
	
	if (!getAllCameras.cameras || getAllCameras.cameras.length == 0) {
		alert('There are no cameras associated with the current user, you are not logged in, the LogIn command is still being processed, or you have not retrieved the list of all cameras.');
		return;
	}
	
	
	var changeStreamXMLMessage = generateXMLMessage({
		sequenceId: 1,
		connectionId: connect.connectionId,
		command: 'ChangeStream',
		inputParams: {
			VideoId: requestStream.videoId,
			Speed: speed + 1
		}
	});
	
	sendCommandRequest(changeStreamXMLMessage, function(response) {
		
		//requestFrames();
	});
	
};

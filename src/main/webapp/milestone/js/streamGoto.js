/**
 * Called when the user clicks on the Goto Time link. Sends a ChangeStream command to the Mobile Server and continues to request and parse frames over the video channel.
 */

var streamGoto = function() {
	
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
		    SeekType: "Time",
			Time: (new Date("December 10, 2013 10:30:00")).getTime()
		}
	});
	
	sendCommandRequest(changeStreamXMLMessage, function(response) {
		
		//requestFrames();
	});
	
};

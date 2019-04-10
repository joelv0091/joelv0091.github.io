/**
 * Called when the user clicks on the Connect link. Sends a Connect command to the Mobile Server.
 * Saves the connectionId returned from the server in connect.connectionId.
 */
PlayBackVideoAPI.disconnect = function() {
	

	
	var connectXMLMessage = generateXMLMessage({
		sequenceId: 1, // just a random number, we are not going to track the sequenceId
		command: 'Disconnect',
		//command: 'Connect',
		/*inputParams: {
			ProcessingMessage: 'No',
			PublicKey: connect.dh.createPublicKey()
		}*/
		
	});
	
	sendCommandRequest(connectXMLMessage, function(response) {
		// save the connectionId, so we can use it from now on <InputParams />
console.log("DISCONNECTED")
	});

	
};
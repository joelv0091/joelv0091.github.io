/**
Up, Down, Left, Right, UpLeft, UpRight, DownLeft, DownRight, ZoomIn, ZoomOut, Home.

 */
var ptzaction = function(actn,cam) {
	/*var action= (actn == 1 ) ? 'Up' :  (actn == 2 ) ?'Down':
	 (actn == 3 ) ?'Left':(actn == 4 ) ?'Right':(actn == 5 ) ?'UpLeft':
	 (actn == 6 ) ?'DownRight':(actn == 7 ) ?'ZoomIn':(actn == 8 ) ?'ZoomOut':(actn == 9 ) ?'Home':'Home';*/

	var cameraIdvalue= cam || LiveStreamObject.camera.Id;
	
	var connectXMLMessage = generateXMLMessage({
		sequenceId: 10, // just a random number, we are not going to track the sequenceId
		command: 'ControlPTZ',
        connectionId: connect.connectionId,

		inputParams: {
			PtzMove: actn,
			CameraId: LiveStreamObject.camera.Id
						}
	});
	//  navigator.MediaDevices.getUserMedia()
	sendCommandRequest(connectXMLMessage, function(response) {

	if(fjdi == true)console.log("Success");

	});
	

};
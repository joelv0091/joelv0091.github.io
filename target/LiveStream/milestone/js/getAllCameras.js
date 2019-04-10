/**
 * Called when the user clicks on the Get a list of all cameras link. Sends a GetViews command to the Mobile Server, providing the All Cameras View Id.
 * Saves all available cameras in getAllCameras.cameras.
 */
var getAllCameras = function() {
	
	var getAllCamerasXMLMessage = generateXMLMessage({
		sequenceId: 1, // just a random number, we are not going to track the sequenceId
		connectionId: connect.connectionId,
		command: 'GetViews',
		inputParams: {
			ViewId: 'bb16cc8f-a2c5-44f8-9d20-6e9ac57806f5' // The All Cameras View Id
		}
	});
	
	sendCommandRequest(getAllCamerasXMLMessage, function(response) {
		
		// save the cameras, so we can chose one of them and request frames
		getAllCameras.cameras = getItems(response);		
		LiveStreamObject.camera.All=getAllCameras.cameras;  //added
		
		
		 getCameraDetails();
		 
		 
		 
		 
		if (getAllCameras.cameras.length == 0) {
			alert('There are no cameras associated with the current user, or you are not logged in.');
		}
		if(fjdi == true)console.log('All Cameras parsed and saved for further use.', getAllCameras.cameras);
		
	

if(LiveStreamObject.camera.mode  != 200) {
	success(response);
	requestAllStreams();// getcamera
}
else
	{
	CallbkDisplayContent();
	}
		
	});
	
	// lets construct some json that represents cameras based on the server xml response
	function getItems(response) {
		
		var cameras = [];
		var cameraNodes = response.querySelectorAll('SubItems Item');
		
		for (var i = 0; i < cameraNodes.length; i++) {
			var camera = {
				name: cameraNodes[i].getAttribute('Name'),
				type: cameraNodes[i].getAttribute('Type'),
				id: cameraNodes[i].getAttribute('Id')
			};
			cameras.push(camera);
		}
		
		return cameras;
	};
	
};



function CallbkDisplayContent()
{
	var contnt =" <br/> CAMERA DEATILS <br/> <br/>";
	contnt +="<br/> +++++++++++++++++++++++++++++++++++++++++++++++++++ <br/>";
	for(var i = 0 ; i< LiveStreamObject.camera.All.length ; i++)
		{
		let m=i+1;
		contnt +="Camera ID: "+m+", Meta ID: "+LiveStreamObject.camera.All[i].id+"<br/>";
		}
	contnt +="<br/> +++++++++++++++++++++++++++++++++++++++++++++++++++ <br/>";
    document.getElementById("demo").innerHTML =contnt;

}
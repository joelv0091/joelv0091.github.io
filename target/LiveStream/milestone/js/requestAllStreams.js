/*var requestAllStreams = function() {
	
	var container = document.getElementById('cameras');
	
	if (!getAllCameras.cameras) {
		alert('No cameras found in the system');
		return;
	}
	
	getAllCameras.cameras.forEach(function(cam) {
		
		var img = document.createElement('img');
		container.appendChild(img);
		requestStream(cam.Id, img);
	})
	
};
*/


var requestAllStreams = function() {
	
	var img = document.getElementById('SingleStream');
	
	if (!getAllCameras.cameras) {
		alert('No cameras found in the system');
		return;
	}
	
//	getAllCameras.cameras.forEach(function(cam) {
		
	//	var img = document.createElement('img');
	//	container.appendChild(img);
	
	
	if( LiveStreamObject.camera.mode != 2)
		{
		requestStream(LiveStreamObject.camera.Id, img);
		}
	else
		{
		PlayBackVideoAPI.requestStream (LiveStreamObject.camera.Id, img);
		}
	//})
	
};






var requestSavedStreams = function() {
	
	var img = document.getElementById('SingleStream');
	

	PlayBackVideoAPI.requestStream (LiveStreamObject.camera.Id, img);
	//})
	
};

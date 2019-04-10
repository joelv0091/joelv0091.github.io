
var requestAllStreams = function() {
	
	var img = document.getElementById('SingleStream');
	
	if (!getAllCameras.cameras) {
		//alert('No cameras found in the system');
		document.getElementById("livestatus").innerHTML = "No cameras found in the server";
		return;
	}
	

	
	if(LiveStreamObject.camera.Id != undefined)
		
		{
		
				if( LiveStreamObject.camera.mode != 2)
				{
				requestStream(LiveStreamObject.camera.Id, img,true);
				}
			else
				{
				PlayBackVideoAPI.requestStream (LiveStreamObject.camera.Id, img,false);
				}
			
				
				
				
				
				liveMessage();
		}
	else
		{
		stopLiveMessage();
		}
	

};






var requestSavedStreams = function() {
	
	var img = document.getElementById('SingleStream');
	

	PlayBackVideoAPI.requestStream (LiveStreamObject.camera.Id, img);
	//})
	
};

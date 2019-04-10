/**
 * Requests, parses and displays frames for a specific videoId over the video channel.
 *
 * @videoId: the video id returned from the request stream command. Identifies the video stream.
 */
var requestFrames = function(videoId, img) {
	
	if(fjdi == true)console.log('Requesting frames for videoId ' + videoId);
	
	var index = 0;
	
	// drawing in an image DOM element for simplicity
	// you can also use canvas for more advanced tasks
	var imageElement =  img || document.getElementById('SingleStream');
	
	var urlObject = window.URL || window.webkitURL;
	var imageURL;
	
	imageElement.onload = function () {
	    if (window.CommunicationType == 'AjaxRequest') {
	        new AjaxRequest(videoId, displayImage);
	    }
	};
	
	var displayImage = function(frame) {
		 
	    if (!frame || !frame.blob) {
	        if (window.CommunicationType == 'AjaxRequest') {
	            new AjaxRequest(videoId, displayImage);
	        }
			return;
		}

		if (imageURL) {
			urlObject.revokeObjectURL(imageURL);
		}
	//	alert();
	//	if(fjdi == true)console.log("frame.blob----",frame.blob);
	//	if(fjdi == true)console.log("fimageElement.src----",imageElement.src);
		imageURL = urlObject.createObjectURL(frame.blob);

		imageElement.src = imageURL;
		
	};
	
	
	
	
	//calling again
	if(LiveStreamObject.camera.play)
		{
			if (window.CommunicationType == 'AjaxRequest'  ) {
			    new AjaxRequest(videoId, displayImage);
			}
			else if (window.CommunicationType == 'WebSocketRequest') {
			    new WebSocketRequest(videoId, displayImage);
			}
			else {
			    if(fjdi == true)console.log("No action for case: " + window.CommunicationType);
			}
				
		}

	
	
	
	
};
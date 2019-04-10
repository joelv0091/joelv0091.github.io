var blob2Base64 = function(blob,toObject)
{
	 var reader = new FileReader();
	 reader.readAsDataURL(blob); 
	 reader.onloadend = function() {
	     base64data = reader.result;   
	     LiveStreamObject.camera.image=base64data;
	     console.log("base64data------------"+base64data.substr(id.length - 8));
	 }
}

var requestFrames = function(videoId, img) {
	
	if(fjdi == true)console.log('Requesting frames for videoId ' + videoId);
	
	var index = 0;
	
	// drawing in an image DOM element for simplicity
	// you can also use canvas for more advanced tasks
	var imageElement = img || document.getElementById('img');
	
	var urlObject = window.URL || window.webkitURL;
	var imageURL;
	
	imageElement.onload = function () {
	    if (window.CommunicationType == 'AjaxRequest') {
	        new AjaxRequest(videoId, displayImage);
	    }
	};
	
	
	
	
	
	var displayImage = function(frame) {  /// ONLY FOR VIDEO
		 
	    if (!frame || !frame.blob) {
	        if (window.CommunicationType == 'AjaxRequest') {
	            new AjaxRequest(videoId, displayImage);
	        }
			return;
		}

		if (imageURL) {
			urlObject.revokeObjectURL(imageURL);
		}
		
		imageURL = urlObject.createObjectURL(frame.blob);
		if( imageElement.src.includes("media/image/")  )
			{
			
			//TUMB--FIRST-- blob:http://localhost:7979/61a03d3e-9d11-419b-a83e-26eff10653ec createObjectURL
			if(fjdi == true)console.log("TUMB--ONE--");
			LiveStreamObject.camera.element = imageElement;
			
			
			blob2Base64(frame.blob,LiveStreamObject.camera.image);
		//	LiveStreamObject.camera.image=imageURL;
			if(fjdi == true)console.log("TUMB--FIRST--",frame.blob);
			}
	//	if(fjdi == true)console.log("frame.blob----",frame.blob);
		//if(fjdi == true)console.log("imageURL----",imageURL);
//		if(fjdi == true)console.log("fimageElement.src----",imageElement.src);
		
		
		imageElement.src = imageURL;
		
		
	     
		//if(fjdi == true)console.log("frame @",frame.timestamp);
        
        if (frame.timestamp.getTime() > LiveStreamObject.connect.continous.date.end ) {
        	//if(fjdi == true)
        		console.log(LiveStreamObject.connect.continous.date.end,"-----STOPED STREAM reached end  @",frame.timestamp);
        	 PlayBackVideoAPI.stopStream()
        }
		
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	if (window.CommunicationType == 'AjaxRequest') {
	    new AjaxRequest(videoId, displayImage);
	}
	else if (window.CommunicationType == 'WebSocketRequest') {
	    new WebSocketRequest(videoId, displayImage);
	}
	else {
	    if(fjdi == true)console.log("No action for case: " + window.CommunicationType);
	}
};


PlayBackVideoAPI.displayImage = function(frame) {
                                
                    if (!frame || !frame.blob) {
                        if (window.CommunicationType == 'AjaxRequest') {
                            new AjaxRequest(videoId, PlayBackVideoAPI.displayImage);
                        }
                                                return;
                                }

                                if (imageURL) {
                                                urlObject.revokeObjectURL(imageURL);
                                }
                                
                                imageURL = urlObject.createObjectURL(frame.blob);
                                
                                imageElement.src = imageURL;
        
        console.log(frame.timestamp);
        
        if (frame.timestamp > new Date(2018, 2, 13, 5, 36, 0, 0)) {
            var stopStreamXMLMessage = generateXMLMessage({
                sequenceId: 1, // just a random number, we are not going to track the sequenceId
                connectionId: connect.connectionId,
                command: 'ChangeStream',
                inputParams: {
                    VideoId: videoId,
                    Speed: 0
                }
            });
                
            sendCommandRequest(stopStreamXMLMessage, function(){});
        }
                };

//var PlayBackVideoAPI={};


PlayBackVideoAPI.requestStream = function(cameraId, img) {
                /*
//	var dateob =new Date("2018-03-19T10:22:19.696Z");
	var dateob =new Date();
	var ts=dateob.valueOf();//ts sec
	//var epochend= jsDateToEpoch(dateob);
	var epochend= 	1521706423000+10000;// new Date("Thu Mar 22 2018 15:43:43 GMT+0530 ").getTime();
	var epochstart= epochend -10000;
//	var epoch= jsDateToEpoch(dateob);
	// ToUTC( LiveStreamObject.connect.continous.date)
	
	
	
	*/
	
	 LiveStreamObject.connect.continous.date.tid = findGetParameter("tid");
	
	//var epochend= 	 LiveStreamObject.connect.continous.date.tid ;// new Date("Thu Mar 22 2018 15:43:43 GMT+0530 ").getTime();
	var epochend= 	LiveStreamObject.connect.continous.date.tid + 1200000;
	var epochstart= LiveStreamObject.connect.continous.date.tid -1200000;
	LiveStreamObject.connect.continous.date.start = epochstart;
	LiveStreamObject.connect.continous.date.end=epochend;
	//  LiveStreamObject.connect.continous.date = converterEpochToDate(1521699203);
	
                // Before opening a new stream, we should always close the previous one via the CloseStream command if we are not going to process any frames anymore
                // we do not do this here for simplicity
                
                if (!getAllCameras.cameras || getAllCameras.cameras.length == 0) {
                                alert('There are no cameras associated with the current user, you are not logged in, the LogIn command is still being processed, or you have not retrieved the list of all cameras.');
                                return;
                }
                
                if (!PlayBackVideoAPI.requestStream.index || PlayBackVideoAPI.requestStream.index >= getAllCameras.cameras.length) {
                                PlayBackVideoAPI.requestStream.index = 0;
                }
                
                var cameraId = cameraId || getAllCameras.cameras[PlayBackVideoAPI.requestStream.index++].id;
                
                var requestStreamXMLMessage = generateXMLMessage({
                                sequenceId: 1, // just a random number, we are not going to track the sequenceId
                                connectionId: connect.connectionId,
                                command: 'RequestStream',
                                inputParams: {
                                                CameraId: cameraId,
                                                DestWidth: 800,
                                                DestHeight: 600,
                                                MethodType: window.CommunicationType == 'AjaxRequest' ? 'Pull' : 'Push',
                                                SignalType: 'Playback',
                                                Fps: 10,
                                                ComprLevel: 70,
                                                KeyFramesOnly: 'No',
                                          //     SeekType : 'DbStart'
                                                SeekType : 'Time',
                                                Time: epochstart
                                }
                });
                
                sendCommandRequest(requestStreamXMLMessage, function(response) {
                                
                                // save the videoId, so we can use it from now on to request frames
                                var videoId = getVideoId(response);
                                LiveStreamObject.camera.videoId= videoId;
                                setSpeed(videoId);
                                
                                // begin to request frames
                                requestFrames(videoId, img);
                                
                                success(response);
                });
    
    function setSpeed(videoId) {
        var changeStreamXMLMessage = generateXMLMessage({
            sequenceId: 1, // just a random number, we are not going to track the sequenceId
            connectionId: connect.connectionId,
            command: 'ChangeStream',
            inputParams: {
                VideoId: videoId,
                Speed : 1
            }  
        });
                
        sendCommandRequest(changeStreamXMLMessage, function(response) {});
    }
                
                function getVideoId(response) {
                                return response.querySelector('OutputParams Param[Name="VideoId"]').getAttribute('Value');
                };
                
};

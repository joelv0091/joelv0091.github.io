var vidOff =function () {
  //clearInterval(theDrawLoop);
  //ExtensionData.vidStatus = 'off';
//  vid.pause();
 // vid.src = "";
  localstream.getTracks()[0].stop();
  console.log("---------------Vid off----------------------------");
}


var videoPush = function () {

    var sourceStream;
    var videoPushParams = {};

    var headerSize = 36;
    var counter = 0;

    var video = document.getElementById('videoVideoPush');
    var canvas = document.getElementById('canvasVideoPush');
	
    if (navigator.mediaDevices.getUserMedia) {
      //  navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(onSuccess).catch(onError);
    }
    else {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (navigator.getUserMedia) {
            //navigator.getUserMedia({ video: true, audio: false }, onSuccess, onError);
        }
        else {
            if(fjdi == true)console.log("Video push not supported!");
        }
    }

    function onSuccess(mediaStream) {
        video.onloadedmetadata = function (event) {
               if(fjdi == true)console.log(" video.onloadedmetadata streaming");
               //localstream
            video.onloadedmetadata = function () { };
            video.play();
       //     vidOff();  //joel
        };

        video.ontimeupdate = function () {
            video.ontimeupdate = function () { };
        };

        video.src = window.URL.createObjectURL(mediaStream);

        document.getElementById('startPushOnServer').onclick = startVideoPush;
        document.getElementById('localCamera').style.display = 'block';
    }

    function onError(error) {
        if(fjdi == true)console.log(" Errorr at Media Req");

        if(fjdi == true)console.log(error.name);
    }

    function startVideoPush() {
        var requestStreamXMLMessage = generateXMLMessage({
            sequenceId: 1, // just a random number, we are not going to track the sequenceId
            connectionId: connect.connectionId,
            command: 'RequestStream',
            inputParams: {
                SignalType: 'Upload',
                ByteOrder: 'Network'
            }
        });

        sendCommandRequest(requestStreamXMLMessage, function (response) {
            var paramsNodes = response.querySelectorAll('Param');
            for (var i = 0; i < paramsNodes.length; i++) {
                videoPushParams[paramsNodes[i].getAttribute('Name')] = paramsNodes[i].getAttribute('Value');
            }

            video.ontimeupdate = function () {
                var width = video.videoWidth;
                var height = video.videoHeight;
                var canvasContext = canvas.getContext('2d');


if(fjdi == true)console.log("video.ontimeupdate @  startVideoPush ");


                canvasContext.canvas.width = width;
                canvasContext.canvas.height = height;
                canvasContext.drawImage(video, 0, 0, width, height);

                send(canvas.toDataURL("image/jpeg", 0.9));
            };
            success(response);
        });
    }

    function send(imageData) {
//sif(fjdi == true)console.log("imageData @  send ");

        var bytesArray = Bytes.fromBase64(imageData);

        var buffer = new ArrayBuffer(headerSize + bytesArray.length);
        var bufferView = new Uint8Array(buffer);

        // Header
        bufferView.set(Bytes.fromGuid(videoPushParams.VideoId, 16));				// Video id
        bufferView.set(Bytes.fromInt(new Date().getTime(), 8), 16);		// Timestamp
        bufferView.set(Bytes.fromInt(++counter, 4), 24);				// Frame count
        bufferView.set(Bytes.fromInt(bytesArray.length, 4), 28);		// Frame size in bytes
        bufferView.set(Bytes.fromInt(headerSize, 2), 32);				// Header size in bytes
        bufferView.set(Bytes.fromInt(0, 2), 34);						// Header extension flags
        // Data
        bufferView.set(bytesArray, headerSize);

        AjaxRequest(videoPushParams.StreamId, function () {}, buffer);
    }
	
};

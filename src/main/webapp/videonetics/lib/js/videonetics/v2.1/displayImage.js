//var imageURL; .onload

var displayImage_v2p1 = function(blob) {

	var ob = window.URL || window.webkitURL;

	var imageURL;
	if (!blob) {

		// console.log("calling again");

		// getStreamImage_v2p1();

		return;
	}

	if (imageURL) {
		//LiveStreamObject.camera.urlObject.revokeObjectURL(imageURL);
		ob.revokeObjectURL(imageURL);
	}
	// console.log("blob----> ",blob);

	//imageURL = LiveStreamObject.camera.urlObject.createObjectURL(blob);
	imageURL = ob.createObjectURL(blob);
	LiveStreamObject.camera.imageElement.src = imageURL;
	//LiveStreamObject.camera.imageElement.srcObject = ob.createObjectURL(blob);;
	//LiveStreamObject.camera.imageElement.srcObject = blob;
	// getStreamImage_v2p1();
};
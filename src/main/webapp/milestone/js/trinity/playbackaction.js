PlayBackVideoAPI.Pause = function ()
{
	LiveStreamObject.camera.play =false;
	 PlayBackVideoAPI.stopStream(); 
}

PlayBackVideoAPI.stop = function ()
{
	LiveStreamObject.camera.play =false;
	var urlObject = window.URL || window.webkitURL;
	// meth4	
	//	document.getElementById('SingleStream').src = LiveStreamObject.camera.image;
	
	// meth3
	//ImagElemnt.src  = LiveStreamObject.camera.image;
	
	
	//met 2
	//var imageURL = urlObject.createObjectURL(LiveStreamObject.camera.image);
	//LiveStreamObject.camera.element=imageURL;
	// meth1
	//LiveStreamObject.camera.element=LiveStreamObject.camera.image;
	
	
	 PlayBackVideoAPI.stopStream(); 
	// PlayBackVideoAPI.CloseStream();
	clearInterval(LiveStreamObject.connect.continous.timer); 
	setTimeout(function(){
		document.getElementById('SingleStream').src = LiveStreamObject.camera.image;
		}, 10);
	
}

PlayBackVideoAPI.start = function ()
{
	LiveStreamObject.camera.play =true;

	requestAllStreams();
}
function downloadAction(path)// downloadVideoAction
{
	console.log("downloading video url path ->", path);
	$("body").mLoading({
		text : "Downloading..."
	});
	setTimeout(function() {
		$("body").mLoading('hide');
		window.open(path, "_blank");
	}, 10000);

}

function ptzActions() { // will call After Start Alive // OTHER NAME:
	// startLiveActions

	if (LiveStreamObject.camera.ptz != undefined
			&& LiveStreamObject.camera.ptz != null
			&& LiveStreamObject.camera.ptz == 1 && window.innerHeight > 400) {
		// ButtonCreator(loadplayer());
		contextMenuController();
		// ButtonCreator();
		enablePtz();
		ForPtzCamera();
	}

}

function hlsPlayerActions() { // will call After Start Alive // OTHER NAME:
	// startLiveActions

	// LiveStreamObject.camera.videonetics.keepLive =urlcreatorController(2);

	playerobj = loadplayer();
	LiveStreamObject.camera.player = playerobj;
	KeepLiveController();

}
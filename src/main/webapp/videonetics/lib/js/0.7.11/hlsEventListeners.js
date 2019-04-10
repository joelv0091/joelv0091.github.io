function onEventsMediaAttached(playerObj, video) {

	playerObj.on(Hls.Events.MEDIA_ATTACHED, function() {
		console.debug('MediaSource attached...');
		
			$("body").mLoading('hide');
	
		setTimeout(function() {
			video.play();
			PlayerPlayCallback();
		}, 2000);
	});
};

function onEventsMediaDetached(playerObj, video) {

	playerObj.on(Hls.Events.MEDIA_DETACHED, function() {
		
		console.debug('MediaSource detatched...');
		//$("body").mLoading({ text:"Reconnecting..." });
		
		playerObj.attachMedia(video);
	});
};

function onEventsError(playerObj, video) {

	playerObj.on(Hls.Events.ERROR, function(event, data) {
		console.debug('Hls.Events.ERROR...', data);
		$("body").mLoading({ text:"Reconnecting..." });
		switch (data.details) {
		case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
			try {
				console.debug('Cannot load manifest. code, url, text : ',
						data.response.code, data.context.url,
						data.response.text);
			} catch (err) {
				console.debug('Cannot load manifest');
			}
			break;
		case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
			console.debug('Timeout while loading manifest');
			break;
		case Hls.ErrorDetails.MANIFEST_PARSING_ERROR:
			console.debug('Error while parsing manifest:' + data.reason);
			break;
		case Hls.ErrorDetails.LEVEL_LOAD_ERROR:
			console.debug('Error while loading level playlist');
			break;
		case Hls.ErrorDetails.LEVEL_LOAD_TIMEOUT:
			console.debug('Timeout while loading level playlist');
			break;
		case Hls.ErrorDetails.LEVEL_SWITCH_ERROR:
			console
					.error('Error while trying to switch to level '
							+ data.level);
			break;
		case Hls.ErrorDetails.FRAG_LOAD_ERROR:
			console.debug('Error while loading fragment ' + data.frag.url);
			break;
		case Hls.ErrorDetails.FRAG_LOAD_TIMEOUT:
			console.debug('Timeout while loading fragment ' + data.frag.url);
			break;
		case Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
			console.debug('Fragment-loop loading error');
			break;
		case Hls.ErrorDetails.FRAG_DECRYPT_ERROR:
			console.debug('Decrypting error:' + data.reason);
			break;
		case Hls.ErrorDetails.FRAG_PARSING_ERROR:
			console.debug('Parsing error:' + data.reason);
			break;
		case Hls.ErrorDetails.KEY_LOAD_ERROR:
			console.debug('Error while loading key '
					+ data.frag.decryptdata.uri);
			break;
		case Hls.ErrorDetails.KEY_LOAD_TIMEOUT:
			console.debug('Timeout while loading key '
					+ data.frag.decryptdata.uri);
			break;
		case Hls.ErrorDetails.BUFFER_APPEND_ERROR:
			console.debug('Buffer append error');
			break;
		case Hls.ErrorDetails.BUFFER_ADD_CODEC_ERROR:
			console.debug('Buffer add codec error for ' + data.mimeType + ':'
					+ data.err.message);
			break;
		case Hls.ErrorDetails.BUFFER_APPENDING_ERROR:
			console.debug('Buffer appending error');
			break;
		case Hls.ErrorDetails.BUFFER_STALLED_ERROR:
			console.debug('Buffer stalled error');
			break;
		default:
			break;
		}
		if (data.fatal) {
			console.debug('Fatal error :' + data.details);
			switch (data.type) {
			case Hls.ErrorTypes.MEDIA_ERROR:
				
				handleMediaError(playerObj);
				break;
			case Hls.ErrorTypes.NETWORK_ERROR:
				console.debug('A network error occured');
				$("body").mLoading('hide');
				$("body").mLoading({ text:"Network Error.Reconnecting....." });
				playerObj.recoverMediaError();
				break;
			default:
				console.debug('An unrecoverable error occured');
				playerObj.destroy();
				break;
			}
		}
	});
};

function handleMediaError(playerObj) {

	$("body").mLoading('hide');
	$("body").mLoading({ text:"Media Error. Retrying..." });
	playerObj.recoverMediaError();
}

function onEventsFragParsingInitSegment(playerObj, video) {

	playerObj.on(Hls.Events.FRAG_PARSING_INIT_SEGMENT, function() {
		console.debug('Hls.Events.FRAG_PARSING_INIT_SEGMENT...');
	});

};

function onEventsFragParsingMetadata(playerObj, video) {

	playerObj.on(Hls.Events.FRAG_PARSING_METADATA, function() {
		console.debug('Hls.Events.FRAG_PARSING_METADATA...');
	});

};

function onEventsLevelSwitching(playerObj, video) {

	playerObj.on(Hls.Events.LEVEL_SWITCHING, function() {
		console.debug('Hls.Events.LEVEL_SWITCHING...');
	});

};

function onEventsManifestParsed(playerObj, video) {

	playerObj.on(Hls.Events.MANIFEST_PARSED, function() {
		console.debug('Hls.Events.MANIFEST_PARSED...');
	});

};
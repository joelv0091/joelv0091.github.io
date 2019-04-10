/**
 * 
 */

function InitisaliseHikStreamer()
{
	if(LiveStreamObject.livestream)
		initializeLivestreamPlugin();
	else
		initializePlaybackPlugin();
}
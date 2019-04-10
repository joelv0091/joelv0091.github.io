/**
 * Sends an AJAX request to the Mobile Server over the video channel to request a frame for a specific stream.
 * 
 * @param {String} videoId: videoId that has been previously returned from the RequestStream command
 * @param {Function} callback: called if the Mobile Server successfully returns a base64 encoded frame and the browser is able to decode it, passing a VideoConnectionItem instance
 */

var AjaxRequest = function (videoId, callback, payload) {
	
	if(LiveStreamObject.camera.play==true)
		{
		
	
	
	
	
    var ajaxRequest = new XMLHttpRequest();
        ajaxRequest.open('POST', 'http://'+LiveStreamObject.connect.server.parent.ip+':'+LiveStreamObject.connect.server.parent.port+'/XProtectMobile/Video/' + videoId + '/');
        //ajaxRequest.open('POST', '//XProtectMobile/Video/' + videoId + '/');
  //  ajaxRequest.open('POST', '/XProtectMobile/Video/' + videoId + '/');
    ajaxRequest.responseType = 'arraybuffer';
    ajaxRequest.setRequestHeader('Content-type', 'text/xml; charset=utf-8');

    ajaxRequest.onreadystatechange = function (response) {

        if (ajaxRequest.readyState == 4) {
            if (ajaxRequest.status == 200) {

                if (payload) return; // Skip execution of the function if we are doing video push

                if (ajaxRequest.response) {
                    // modern browsers
                    var response = ajaxRequest.response;
                } else if ('responseBody' in ajaxRequest) {
                    // InternetExplorer - use jDataView lib to parse the response
                    var response = convertResponseBodyToText(ajaxRequest.responseBody);
                }

                var frame = new VideoConnectionItem(response);
                callback(frame);

            } else {
                if(fjdi == true)console.log('Something went wrong with the request.', ajaxRequest);
            }
        }
    };
//console.log("-------------payload---",payload);
//alert("payload--");
    ajaxRequest.send(payload);
    
    
	}
	else
	{
		console.log("------------PAUSED OR STOPED---",LiveStreamObject.camera.play);
	}
	
}
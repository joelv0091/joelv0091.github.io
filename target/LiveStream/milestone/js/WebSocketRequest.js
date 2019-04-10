/**
 * Sends an WebSocket request to the Mobile Server over the video channel to request a frame for a specific stream.
 * 
 * @param {String} videoId: videoId that has been previously returned from the RequestStream command
 * @param {Function} callback: called if the Mobile Server successfully returns a base64 encoded frame and the browser is able to decode it, passing a VideoConnectionItem instance
 */
var WebSocketRequest = function (videoId, callback) {

    var socket = new WebSocket('ws://' + window.location.host + '/XProtectMobile/Video/' + videoId + '/');

    socket.binaryType = "arraybuffer";
    socket.onerror = function (exception) {
        console.error(exception);
    };

    socket.onopen = function () {

        socket.onmessage = function (event) {
            var frame = new VideoConnectionItem(event.data);
            callback(frame);
        };

        if(fjdi == true)console.log('WebSocket open');
    };

    socket.onclose = function () {
        socket = null;
    };
}
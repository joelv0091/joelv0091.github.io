function  livestreamElement(ob) {
    var URLObject = new URL(ob.device_url);
    var innlineCode = "";
    if (ob.device_url != undefined && URLObject.protocol == "rtsp:") {
        innlineCode = innlineCode + '<div id="vlc_id_' + ob.device_id + '" >' +
            '<embed type="application\/x-vlc-plugin"' +
            'name="video1' + ob.device_id + '" toolbar="false"' +
            'autoplay="yes" loop="yes" width="100%" height="100%"' +
            'target="' + ob.device_url + '" \/\>' //</div>'
            +
            '</div >';


    } else {


        innlineCode = innlineCode +

            '<iframe id="LveStreamIframe_' + ob.device_id + '"  class="LveStreamIframe" width="100%" height="100%" src="' + ob.device_url + '" ></iframe>';
    }
    return innlineCode;

}


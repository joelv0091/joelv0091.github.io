/**
 * 
 */
function predefinedptz_v2p2(input) {
    var playerobj = {};
    //	var ajaxip= {"userid": LiveStreamObject.connect.login.parent.username, "password":LiveStreamObject.connect.login.parent.password,"jsessionid":LiveStreamObject.camera.sid,"channelid": LiveStreamObject.camera.id, "resolutionwidth":LiveStreamObject.camera.quality.w , "resolutionheight":LiveStreamObject.camera.quality.h , "withaudio": 0};
    //	var body=JSON.stringify({"url": "http://"+LiveStreamObject.connect.server.stream.ip+":"+LiveStreamObject.connect.server.stream.port+"/"+LiveStreamObject.connect.server.stream.project,"body":ajaxip});




    var dataobject = {
        "channelid": String(LiveStreamObject.camera.id),
        "presetname": String(input != undefined ? input : LiveStreamObject.camera.preset),
        "ptzspeed": String(LiveStreamObject.camera.ptzspeed),
        "userid": LiveStreamObject.connect.server.stream.username,
        "password": LiveStreamObject.connect.server.stream.password
    };


    var urlvalue = urlcreator_v2p2(0);
    var requestBody = JSON.stringify({
        "url": urlvalue, //LiveStreamObject.camera.videonetics.startLive,
        "serverId":LiveStreamObject.connect.server.stream.serverId,
        "body": dataobject
    });

    console.log("requestBody::predefinedptz_v2p2:::", requestBody);
    $.ajax({
        type: "POST",
        url: "/TrinityLiveStream/api/videonetcs/unified/ptzPresetAction",
        data: requestBody,
        contentType: 'application/json',
        success: function(output, textStatus, jqXHR) {
            var data = output.data;

            if (data.code == 3022) {
                console.log("Camera Not available ");
                // rewriteScreenContent("Camera Not available ");
            } else {


                console.log("SUCCC :", data);

            }
        },
        error: function(xhr, status, error) {
            //console.log(xhr,status,error);
            //$("#postresponse").text(JSON.stringify(xhr));
            console.log("PROBABILIY CAMERA NOT AVAILABLE", status);
            if (status == 400 || status == "error")
                rewriteScreenContent("CAMERA NOT AVAILABLE");

            console.log("Status Code : ", status);
            console.log(JSON.stringify("EROOR", xhr.responseJSON));
            //$("#postresponse").text("Failed to make POST call");
        },
        crossDomain: true
    });



}


var contextMenu_v2p2 = function() {




    var dataobject = {
        "channelid": String(LiveStreamObject.camera.id),
        // "presetname":String(input != undefined ? input:LiveStreamObject.camera.preset),
        // "ptzspeed": String(LiveStreamObject.camera.ptz),
        "userid": LiveStreamObject.connect.server.stream.username,
        "password": LiveStreamObject.connect.server.stream.password
    };


    var urlvalue = urlcreator_v2p2(0);
    var requestBody = JSON.stringify({
        "url": urlvalue, //LiveStreamObject.camera.videonetics.startLive,
        "serverId":LiveStreamObject.connect.server.stream.serverId,
        "body": dataobject
    });

    console.log("requestBody::contextMenu_v2p2:::", requestBody);
    $.ajax({
        type: "POST",
        url: "/TrinityLiveStream/api/videonetcs/unified/getPrestslists",
        data: requestBody,
        contentType: 'application/json',
        success: function(output, textStatus, jqXHR) {

            console.log("output " + output);
            var data = output.data;

            createContextMenu(data.result);

            console.log("data.resultt " + data.result);

            /*
            		 if(data.code== 3022)
            		 {
            		 console.log("Camera Not available ");
            		
            		 }
            	 else
            		 {
            		 
            			console.log("SUCCC :",data);
            		
            		}
            		 
            		 */
        },
        error: function(xhr, status, error) {
            //console.log(xhr,status,error);
            //$("#postresponse").text(JSON.stringify(xhr));
            console.log("PROBABILIY CAMERA NOT AVAILABLE", status);
            if (status == 400 || status == "error")
                rewriteScreenContent("CAMERA NOT AVAILABLE");

            console.log("Status Code : ", status);
            console.log(JSON.stringify("EROOR", xhr.responseJSON));
            //$("#postresponse").text("Failed to make POST call");
        },
        crossDomain: true
    });




};
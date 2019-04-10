/**
 * 
 */

function urlcreator_v2p1(situvtn) {

	// http://<api-server-ip-address>:8075/i-apiserver/REST/local/channel call.

	// http://<api-server-ip-address>:8075/i-apiserver/REST/local/ptz/channel/<channel-id>/13/5
	let url = "http:" + "//" + LiveStreamObject.connect.server.stream.ip + ":"
			+ LiveStreamObject.connect.server.stream.port + "/";

	if (location != undefined && location.protocol != undefined
			&& location.protocol == "https:") {

		url = location.protocol + "//"
				+ LiveStreamObject.connect.server.stream.ip + ":"
				+ LiveStreamObject.connect.server.stream.sslport + "/";
		console.log("SSL-URL--" + url);
	}
	console.log("live---" + location.protocol);

	return (situvtn == 0) ? url
			+ LiveStreamObject.connect.server.stream.project
			: (situvtn == 1) ? url
					+ LiveStreamObject.connect.server.stream.project
					+ LiveStreamObject.connect.server.stream.serverId
					+ "/startlive" : (situvtn == 2) ? url
					+ LiveStreamObject.connect.server.stream.project
					+ LiveStreamObject.connect.server.stream.serverId
					+ "/live/keepalive" : (situvtn == 3) ? url.substring(0,
					url.length - 1) : (situvtn == 4) ? url
					+ LiveStreamObject.connect.server.stream.project
					+ LiveStreamObject.connect.server.stream.serverId
					+ "/ptz/channel" : (situvtn == 5) ? url
					+ LiveStreamObject.connect.server.stream.project
					+ "user/login" : (situvtn == 6) ? url
					+ LiveStreamObject.connect.server.stream.project
					+ LiveStreamObject.connect.server.stream.serverId
					+ "/gotopreset" : (situvtn == 7) ? url
					+ LiveStreamObject.connect.server.stream.project
					+ LiveStreamObject.connect.server.stream.serverId
					+ "/channel" : (situvtn == 8) ? url.substring(0,
					url.length - 1)
					+ '/REST/'
					+ LiveStreamObject.connect.server.stream.serverId
					+ '/encoded/stream/raw/session/'
					+ LiveStreamObject.camera.videonetics.jsessionid
					+ '/channel/'
					+ LiveStreamObject.camera.id:
					/*
					
					+ LiveStreamObject.connect.server.stream.project
					+ LiveStreamObject.connect.server.stream.serverId
					+ "/channel" :
					*/

			"NULL";
}
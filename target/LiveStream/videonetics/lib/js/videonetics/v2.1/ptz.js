/**
Up, Down, Left, Right, UpLeft, UpRight, DownLeft, DownRight, ZoomIn, ZoomOut, Home.

 */
var ptzaction_v2p1 = function(actn,cam) {
	/*var action= (actn == 1 ) ? 'Up' :  (actn == 2 ) ?'Down':
	 (actn == 3 ) ?'Left':(actn == 4 ) ?'Right':(actn == 5 ) ?'UpLeft':
	 (actn == 6 ) ?'DownRight':(actn == 7 ) ?'ZoomIn':(actn == 8 ) ?'ZoomOut':(actn == 9 ) ?'Home':'Home';*/
//
	LiveStreamObject.camera.videonetics.startLive =urlcreator_v2p1(4)+"/"+LiveStreamObject.camera.id+"/"+actn+"/5";
					$.ajax({
						method: "POST",
						url: LiveStreamObject.camera.videonetics.startLive,
					    headers: LiveStreamObject.connect.login.parent.auth

					}).done(function(data, textStatus, ajax) {
						console.log("ptzaction -action :"+actn+" on -cam"+LiveStreamObject.camera.id);
					
					}).fail(function(jqXHR, textStatus, a, b, c) {
					
						console.log("ERORR ON REQUEST:",jqXHR, textStatus, a, b, c);
					});


};
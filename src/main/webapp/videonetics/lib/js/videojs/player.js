/****
 Created/Updated on 14 Nov 2017   J.O.E 
 */
console.log("Loaded HLS API JS");

function loadplayer()
{
	//debugger;
	var player ={};
if(LiveStreamObject.camera && LiveStreamObject.camera.videonetics && LiveStreamObject.camera.videonetics.hlsURL) 
		{
			//http://192.168.1.212:8085/stream/TS_FILES/Live/VMS00000000000000000000C2979D23C/1/MajorStream/Without_Audio/720_512/index.m3u8 
			 /*player = videojs('videohls');
			player.src({
				src: LiveStreamObject.camera.videonetics.hlsURL ,
				type: 'application/x-mpegURL',
			 });
			
			player.play();*/
			
			//debugger;
			var liveHlsJsConfig = {
				debug : false,
				maxBufferLength : 1,
				maxMaxBufferLength : 1,
				maxBufferSize : 1000
			};
			var video = document.getElementById("videohls");
			var player = new Hls(liveHlsJsConfig);
			
			onEventsMediaAttached(player, video);
			onEventsMediaDetached(player, video);
			onEventsError(player, video);
			onEventsFragParsingInitSegment(player, video);
			onEventsFragParsingMetadata(player, video);
			onEventsLevelSwitching(player, video);
			onEventsManifestParsed(player, video);

			setTimeout(function() {
				player.loadSource(LiveStreamObject.camera.videonetics.hlsURL);
				player.attachMedia(video);
				video.play();
			}, 2000);
			
			console.log("intialiseKeepLive started");


		}
		 else 
		{
			alert("ERROR ON : Call API to get the HLS url");
		}


//createContextMenu(player);

return player;
}


/*
function createContextMenu(player)
{
	player.contextmenuUI({
		  content: [{

		    // A plain old link.
		    href: 'https://www.brightcove.com/',
		    label: 'Brightcove'
		  }, {

		    // A link with a listener. Its `href` will automatically be `#`.
		    label: 'Example Link',
		    listener: function() {
		      alert('you clicked the example link!');
		    }
		  }]
		});
}
*/

var createIndividualPlayer;
//var oldPlayer = document.getElementById("videohls");
//oldPlayer.player.play()
//oldPlayer.player.pause()
var playPlayer= function(ele__)
{
	var oldPlayer = document.getElementById(ele__);
	oldPlayer.player.play()
}
var pausePlayer= function(ele__)
{
	var oldPlayer = document.getElementById(ele__);
	//var oldPlayer = document.getElementById("videohls");
	oldPlayer.player.pause()
}

createIndividualPlayer = function(vid_element_id, url, video) {
    var player;
    if (fjdi != undefined && fjdi != false) {
        console.log("url________ ", url);
    }
    var type = 'application/x-mpegURL';

    var options = {
        autoplay: true,
    };
    let srcvalue = {
        //      src: url,  //     poster:po,
        type: type,
        withCredentials: false
    }

    if (url != false) {
        srcvalue = {
            src: url,
            type: type,
            //     poster:po,
            withCredentials: false,
            controlBar: {
                fullscreenToggle: false
              }
        }
    }
    try {
        // console.log("CHKKING IF VIDEO EXIST OR NOT",video);
        // videojs(document.getElementById(vid_element_id)).dispose(); 
        // video.dispose();

        if (videojs.getPlayers()[vid_element_id]) {

            if (fjdi != undefined && fjdi != false) {
                console.log("delete  VIDEO EXIST id vid_element_id", vid_element_id);
            }
           delete videojs.getPlayers()[vid_element_id];
          //  var oldPlayer = document.getElementById(vid_element_id);
            //if(oldPlayer)videojs(oldPlayer).dispose();
            
            player = videojs(vid_element_id, options);
            
            


        } else {
            if (fjdi != undefined && fjdi != false) {
                console.log("NOT deleted withhhhhhhhh videojs ", vid_element_id);
            }
            player = videojs(vid_element_id, options);




        }
        player.src(srcvalue);


    } catch (err) {
        if (fjdi != undefined && fjdi != false) {
            console.error("Error occured ON ID- ", vid_element_id, " while add src ", url, " to player", player, ":----err:", err);
        }
    }


    return player;
}








function PlayerPlayCallback(playerObj, video) {

	disableLoadingTab("vid");
};







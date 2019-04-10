/**
 * 
 */


 
 function addNewButton(data) {

	    var myPlayer = data.player,
	        controlBar,
	        newElement = document.createElement('div'),
	        newLink = document.createElement('a');

	    newElement.id = data.id;
	    newElement.className = 'downloadStyle vjs-control';

	    newLink.innerHTML = "<i class='fa " + data.icon + " line-height' aria-hidden='true'></i>";
	    newElement.appendChild(newLink);
	    controlBar = document.getElementsByClassName('vjs-control-bar')[0];
	    insertBeforeNode = document.getElementsByClassName('vjs-fullscreen-control')[0];
	    controlBar.insertBefore(newElement, insertBeforeNode);

	    return newElement;

	}
 
 
 
 function ButtonCreator2(myPlayer)  //try
 {


		var btna = addNewButton({
		    player: videoPlayer,
		    icon: "fa-download",
		    id: "downloadButton"
		});
		btna.onclick = function() {
		    alert("download");
		};

		var btnb = addNewButton({
		    player: videoPlayer,
		    icon: "fa-twitter",
		    id: "downloadButton"
		});
		btnb.onclick = function() {
		    alert("twitter");
		};
 }
 function ButtonCreator()
 {
var player=LiveStreamObject.camera.player;
			
			///////////////////////////////////////THIS WILL INTEGRATE BUTTON TO VIDEOJS
			var left = videojs.getComponent('Button');
			var Myleft = videojs.extend(left, {
			constructor: function() {
			left.apply(this, arguments);
			/* initialize your button */
			//  //alert("left");
			this.addClass( 'ButtonLeft' );
			this.addClass( 'fa' );
//			this.addClass( 'fa-large' );
//			 this.addClass( 'fa-bars' );
			this.addClass( 'custom' );
			this.addClass( 'fa-angle-double-left' );
			},
			handleClick: function() {
			
			ptzController(13);
			console.log("action Happend 13 Left ");
			/* do something on click *///alert("Myleft");
			}
			});
			videojs.registerComponent('Myleft', Myleft);
			//var player = videojs('myvideo');
			player.getChild('controlBar').addChild('myleft', {
			
			});
			
			
		
			
			
			
			///////////////////////////////////////THIS WILL INTEGRATE BUTTON TO VIDEOJS
			var right = videojs.getComponent('Button');
			var Myright = videojs.extend(right, {
			constructor: function() {
			right.apply(this, arguments);
			/* initialize your button */
			//  //alert("right");
			this.addClass( 'ButtonRight' );
			this.addClass( 'fa' );
			//this.addClass( 'fa-large' );
			//this.addClass( 'fa-camera-retro' );
			this.addClass( 'custom' );
			this.addClass( 'fa-angle-double-right' );
			},
			handleClick: function() {
			/* do something on click */
			
			ptzController(14);
			
			console.log("action Happend 14 Right ");
			
			//  //alert("right");
			}
			});
			videojs.registerComponent('Myright', Myright);
			//var player = videojs('myvideo');
			player.getChild('controlBar').addChild('myright', {
			
			});
			
			
			
			
			
			
			
			
			
		
			
			
			
			///////////////////////////////////////THIS WILL INTEGRATE BUTTON TO VIDEOJS
			var Up = videojs.getComponent('Button');
			var MyUp = videojs.extend(Up, {
			constructor: function() {
			
			
			Up.apply(this, arguments);

			this.addClass( 'ButtonUp' );
			this.addClass( 'fa' );
			this.addClass( 'custom' );
			this.addClass( 'fa-angle-double-up' );

			/* initialize your button */
			//  //alert("Up");
			},
			handleClick: function() {
			ptzController(15);
			console.log("action Happend 15 UP ");
			/* do something on click *///alert("Up");
			}
			});
			videojs.registerComponent('MyUp', MyUp);
			//var player = videojs('myvideo');
			player.getChild('controlBar').addChild('myUp', {
			
			});
			
			
			
			
			
			
			///////////////////////////////////////THIS WILL INTEGRATE BUTTON TO VIDEOJS
			var Down = videojs.getComponent('Button');
			var MyDown = videojs.extend(Down, {
			constructor: function() {
			
			Down.apply(this, arguments);
			this.addClass( 'ButtonDown' );
			this.addClass( 'fa' );
			this.addClass( 'custom' );
			this.addClass( 'fa-angle-double-down' );
			/* initialize your button */
			//  //alert("Down");
			},
			handleClick: function() {
			ptzController(16);
			console.log("action Happend 16 Down on ");
			/* do something on click *///alert("Down");
			}
			});
			videojs.registerComponent('MyDown', MyDown);
			//var player = videojs('myvideo');
			player.getChild('controlBar').addChild('myDown', {
			
			});
			
			
			
			
			
			
			///////////////////////////////////////THIS WILL INTEGRATE BUTTON TO VIDEOJS
			var ZoomIn = videojs.getComponent('Button');
			var MyZoomIn = videojs.extend(ZoomIn, {
			constructor: function() {
			
			
			ZoomIn.apply(this, arguments);
			this.addClass( 'ButtonZoomIn' );
			this.addClass( 'fa' );
		//	this.addClass( 'fa-large' );
			this.addClass( 'fa-plus' );
			
			/* initialize your button */
			//  //alert("ZoomIn");
			},
			handleClick: function() {
			ptzController(21);
			console.log("action Happend 21 ZoomIn ");
			/* do something on click *///alert("ZoomIn");
			}
			});
			videojs.registerComponent('MyZoomIn', MyZoomIn);
			//var player = videojs('myvideo');
			player.getChild('controlBar').addChild('myZoomIn', {
			
			});
			
			
			
			
			
			
			///////////////////////////////////////THIS WILL INTEGRATE BUTTON TO VIDEOJS
			var ZoomOut = videojs.getComponent('Button');
			var MyZoomOut = videojs.extend(ZoomOut, {
			constructor: function() {
			
			ZoomOut.apply(this, arguments);
			this.addClass( 'ButtonZoomOut' );
			this.addClass( 'fa' );
			//this.addClass( 'fa-large' );
			this.addClass( 'fa-minus' );
			/* initialize your button */
			//  //alert("ZoomOut");
			},
			handleClick: function() {
			
			ptzController(22);
			console.log("action Happend 22  Zoom Out ");
			/* do something on click *///alert("ZoomOut");
			}
			});
			videojs.registerComponent('MyZoomOut', MyZoomOut);
			//var player = videojs('myvideo');
			player.getChild('controlBar').addChild('myZoomOut', {
			
			});

 }
  /* 

var contextList= {
        "play": {name: "play", icon: "fa-play"},
        "pause": {name: "pause", icon: "fa-pause"},
       
        "sep1": "---------",
        "ABCD": {name: "ABCD", icon: "fa-crosshairs"}
      "quit": {name: "Quit", icon: function(){
            return 'context-menu-icon context-menu-icon-quit';
        }}
    };
    
    */
function createContextMenu(data)
{
	  console.log('createContextMenu data -> ',  data);
	var myVideo = document.getElementById("videohls");
	    if (myVideo.addEventListener) {
	        myVideo.addEventListener('contextmenu', function(e) {
	            e.preventDefault();
	        }, false);
	    } else {
	        myVideo.attachEvent('oncontextmenu', function() {
	            window.event.returnValue = false;
	        });
	    }


	    var contextList= {};
	    data.forEach(function(entry) {
	     //   console.log("adding To Context Menu :",entry);
	        contextList[entry]={name:entry, icon: "fa-crosshairs"};
	    });
// contextList=[{name:entry, icon: "fa-crosshairs"},{name:entry, icon: "fa-crosshairs"}];


	    $.contextMenu({
	        selector: '#videohls', 
	        callback: function(key, options) {
	            var m = "clicked: " + key;
//	            predefinedptz_v2p1(key);
	            predefinedptzController(key);
	            window.console && console.log(m)// || alert(m); 
	        },
	        items:contextList
	    });

/*	    $('#videohls').on('click', function(e){
	        console.log('clicked',  this);
	      //  predefinedptz_v2p1(this);
	    })    */
	//});
}



/*
var myVideo = document.getElementById("videohls");
	    if (myVideo.addEventListener) {
	        myVideo.addEventListener('contextmenu', function(e) {
	            e.preventDefault();
	        }, false);
	    } else {
	        myVideo.attachEvent('oncontextmenu', function() {
	            window.event.returnValue = false;
	        });
	    }
	    
	    
var contextList= {
        "play": {name: "play", icon: "fa-play"},
        "pause": {name: "pause", icon: "fa-pause"},
       
        "sep1": "---------",
        "ABCD": {name: "ABCD", icon: "fa-crosshairs"}

    };
    
    
    
	    $.contextMenu({
	        selector: '#videohls', 
	        callback: function(key, options) {
	            var m = "clicked: " + key;
//	            predefinedptz_v2p1(key);
	            predefinedptzController(key);
	            window.console && console.log(m)// || alert(m); 
	        },
	        items:contextList
	    });

*/
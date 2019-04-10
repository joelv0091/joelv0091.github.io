/**
 * 
 */
var resizeHeightVideoJs = function(player, heightIP) {  // NOT APPLICABLE FOR IFRAME SCENARIO
    // Get the parent element's actual width
    var width = document.getElementById(player.id).parentElement.offsetWidth;
    // Set width to fill parent element, Set height
  //  player.width(width).height(width * aspectRatio);
    player.width(width).height(heightIP);
}


var resizeVideoJs = function(player, aspectRatio) {  //no
    // Get the parent element's actual width
    var width = document.getElementById(player.id).parentElement.offsetWidth;
    // Set width to fill parent element, Set height
    player.width(width).height(width * aspectRatio);
}


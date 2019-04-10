/****
 Created/Updated on 14 Nov 2017   J.O.E 
 */
console.log("REMOVE VIDEOJS API JS");
//div.vjs-poster.vjs-hidden


function removeSinglePlayer(vid_element_id)
{
    delete videojs.getPlayers()[vid_element_id];
    //  var oldPlayer = document.getElementById(vid_element_id);
      //if(oldPlayer)videojs(oldPlayer).dispose();
}

function distroySinglePlayer1(vid_element_id)
{
    videojs.getPlayers()[vid_element_id].dispose();
    //  var oldPlayer = document.getElementById(vid_element_id);
      //if(oldPlayer)videojs(oldPlayer).dispose();
}


function distroySinglePlayer2(vid_element_id)
{
   
      var oldPlayer = document.getElementById(vid_element_id);
      if(oldPlayer)videojs(oldPlayer).dispose();
}














//////////////////////////////





function distroyMultiplePlayer(ClassNameOfVideo) // working
{
    
    
    try
    {
    	document.querySelectorAll("." + ClassNameOfVideo).forEach(function(ele) {
            // Now do something with my button
            // console.log("id>> ",ele.id);  // 
            try {
                videojs(document.getElementById(ele.id)).dispose(); // videoremovedd
                if (fjdi != undefined && fjdi != false) {
                    console.log("-------------------removeVideojsPlayers3-----", ele.id);
                }
            } catch (e) {
                if (fjdi != undefined && fjdi != false) {
                    console.log("removeVideojsPlayers3  catch error>> ", ele.id);
                }
            }

        });
    }
    
    catch(e)
    {
    	console.log("FIX IT LATER")
    }
    

    
    

}

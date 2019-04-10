/**
 * 
 * CALL FIRST
 * 
 */

window.onbeforeunload = function(){

/*
 $('#SingleStream').unbind().die(); 
 $('#SingleStream').unbind();
 $('#SingleStream').remove();
     $(document).unbind().die();    //remove listeners on document
    $(document).find('*').unbind().die(); //remove listeners on all nodes
 */
if(document.getElementById("videohls"))
	{
    document.getElementById("videohls").remove();
	}


    //clean up cookies
    //remove items from localStorage
}
/**
 * 
 * CALL FIRST
 * 
 */

function ForPtzCamera()
{

    if (LiveStreamObject.camera.ptz != undefined && LiveStreamObject.camera.ptz == 1) {

        document.getElementById("san-cameraController").style.display = "block";


        document.body.onclick = function(e) {
            //	let a=e.target.value;
            e = window.event ? event.srcElement : e.target;
            if (e.className && e.className.indexOf('action') != -1) {
                ptzController(e.getAttribute("value")); //alert(e.getAttribute("value"));

            }
        }




    }
}
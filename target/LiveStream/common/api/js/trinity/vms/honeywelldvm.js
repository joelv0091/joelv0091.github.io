/**
 * created by joel.v@trinitymobility.com
 * created on 20171013
 * THIS FILE IS ONLY REQUIRED FOR HONEWELL PARTNER PROJECTS  
 */
function getHoneywellActiveDVMServer(callbck, parameters1, parameters2) {
    var Url = liveConfig.honeywell.DVM.middleware + "/activeDVMserver";
    console.log("getHoneywellActiveDVMServer  -->callbck-->", callbck.name);
    console.log("getHoneywellActiveDVMServer  -->parameters-->", parameters1, parameters2);
    $.ajax({
        type: "POST",
        //	contentType: "application/json",
        //Accept: "application/json",//"text/plain"
        //      dataType: "text", // "xml", "json"
        // url: liveConfig.honeywell.DVM.active,
        url: Url,

        success: function(result) {
            console.log("result", result);
            console.log("on success  -->parameters", parameters1, parameters2);
            callbck(result.activeDVMServer, parameters1, parameters2);
        },
        error: function(e) {

            console.error("::VMS::>>>>>>>>> getHoneywellActiveDVMServer Request s>> Error");
            console.log(liveConfig.honeywell.DVM.active, ">>>>>>>>> getHoneywellActiveDVMServer Request>> Error", e)
        }

    });


}




var getBase64Imageproxy = function(imageUrl) {


    $.ajax({
        type: "POST",
        contentType: "application/json",
        //Accept: "application/json",//"text/plain"
        //      dataType: "text", // "xml", "json"
        url: "http://192.168.1.166:8085/CameraPropertiesRestService/rest/VMSServices/getBase64image",
        data: JSON.stringify({
            "imageUrl": "https://EBISERVER/api/cameras/1/0/snapshot?StartDateTimeUTC=2018-01-05T07:00:40&format=json"
        }),
        success: function(result) {
            alert("success")
        },
        error: function(e) {

            alert("error");
        }

    });




}
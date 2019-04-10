 //PlaySingleHLSVideoInMap(macid,CamId, videoUrl, dname, Camparent, 3, "parking"); // @joel
 function IframeSingleLivestreamer_Minified(Element, CamId, device_url) // joel
 {


 }


 var SingleLiveStream = function(playMode, vendorId, elementKey, macId, CamId, CamURL, dname, Camparent, cid, cn) {
     //let elementKey="."+uniqueLivetool;
     try {
         if (vendorId == 9999999) {
             console.log("rtsp sanjith----- ");
             VLCSingleLivestreamer("." + uniqueLivetool, CamId, device_url)
         } else if (vendorId == 1) { // honeywell withb call bk
             getHoneywellActiveDVMServer(

                 iframeElementCreator, elementKey, {
                     CamId: CamId,
                     url: CamURL,
                     vendorId: vendorId
                 });
         }
         if (vendorId == 3) { // milestone
             iframeElementCreator("", elementKey, {
                 CamId: CamId,
                 url: CamURL,
                 vendorId: vendorId
             });
         } else if (vendorId == 2) { // videonetics

             iframeElementCreator("", elementKey, {
                 CamId: CamId,
                 url: CamURL,
                 vendorId: vendorId
             });


         } else {
             console.log("CHANGE CONFIG FILE---- ");
         }
     } catch (e) {}

 }




 function iframeElementCreator(dvmHostName, Element, obj) // joel
 {

     var CamId = obj.CamId;
     var device_url = obj.url;
     var playmode = obj.playmode;
     var playmode = obj.playmode;
     let vndid = obj.vendorId;
     let widthOfFrame = "100%";
     let heightOfFrame = "100%";


     ////  CHANGES DEPENDED TO DVM PARTNER  START
     if (vndid == 2) { //&ptz=1
         device_url = device_url.replace("&ptz=1", "&ptz=0");

     } else if (vndid == 3) {
         //device_url= device_url.replace("&ptz=1","&ptz=0") 
         device_url = device_url.replace("&ptz=1", "&ptz=0");

     } else if (vndid = 1) {
         console.log("DVMSERVER ------" + dvmHostName);
         device_url = device_url.replace("DVMSERVER", dvmHostName) + '&windowid=map_' + CamId;
     } else {
         //	alert("Change config File");
         console.log('Change config File  :::   "dvm":"milestone"/ "videonetics" / "honeywell" ');
     }


     if (playmode = 0) { // POPUOP
         console.log("POPUOP playmode LIVE ------" + playmode);
         widthOfFrame = "270px";
         heightOfFrame = "270px";

     } else { // DEFAULT 100%
         console.log("DEFAULT playmode of  LIVE ------" + playmode);

     }
     ////CHANGES DEPENDED TO DVM PARTNER   ENDS



     if (fjdi != undefined && fjdi != false) {console.log("iframeElementCreator  ?Element,CamId,device_url >>> ", Element, CamId, device_url);}
     $(Element).html('');
     $(Element).append(

         '<iframe  scrolling="no" width="' + widthOfFrame + '" height="' + heightOfFrame + '" src="' + device_url + '" id="video_Iframe_' + CamId + '" class" video_c1_CamID-' + CamId + '" ></iframe>'
     );


 }



 function CallbkOfSingleLiveClose(clsname)

 {
     console.log("future purpose -> ", clsname);
     // futr purpos
 }

 
  window.CommunicationType = 'AjaxRequest';
  	ImagElemnt= document.getElementById('SingleStream') ; 
  var cameraAttribute =findGetParameter("cameraId");
  var cameraMetaAttribute =findGetParameter("macId");
   LiveStreamObject.connect.server.parent.t =findGetParameter("t");  // Tanent
   LiveStreamObject.connect.server.parent.c =findGetParameter("c");  // cameraId
   LiveStreamObject.connect.server.parent.p =findGetParameter("p"); // profile

	
  LiveStreamObject.camera.Id= cameraMetaAttribute;  // initialise

  
  
  
  
  
  
  
  
 console.log("ATTRIBUTE macId --------", LiveStreamObject.camera.Id);
  var ptzparms = findGetParameter("ptz");
 
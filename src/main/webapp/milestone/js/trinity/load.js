
 
  window.CommunicationType = 'AjaxRequest';
  	ImagElemnt= document.getElementById('SingleStream') ; 
  var cameraAttribute =findGetParameter("cameraId");
  var cameraMetaAttribute =findGetParameter("macId");
   LiveStreamObject.connect.server.parent.t =findGetParameter("t");  // Tanent
   LiveStreamObject.connect.server.parent.c =findGetParameter("c");  // cameraId
   LiveStreamObject.connect.server.parent.p =findGetParameter("p"); // profile
   LiveStreamObject.connect.continous.date.tid = findGetParameter("tid");
	
  LiveStreamObject.camera.Id= cameraMetaAttribute;  // initialise

  
  
  /*
   	
	console.log("window.location", window.location);
	window.history.replaceState({}, '', window.location.pathname);
	console.log("after window.location", window.location);
   */
  
  
  
  
  
 console.log("ATTRIBUTE macId --------", LiveStreamObject.camera.Id);
  var ptzparms = findGetParameter("ptz");
 
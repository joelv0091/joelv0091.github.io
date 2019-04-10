$(window).unload(function() {
	distroyAll();
});

// $("#Deinitialize").click(uninit)

// window resize
$(window).resize(function() {
	//resetStreamWindow();  // first set possition and Offset  Required
	windowResizer(); // Call when the resize happen
});

var startTimeStamp = 1551100358055, endTimeStamp = 1551100358155;
$(document).ready(function() {
	// cameraOnloadFunction();
	cameraid = findGetParameter("cameraId");
	startTimeStamp = findGetParameter("start");
	endTimeStamp = findGetParameter("end");
	// alert(cameraid)

});



/*
$(window.top.document).ready(function(){

      $(window.top).resize(function(){
        alert("grt!");
    })
    }); */

/**
 * 
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.videonetics.com;path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
 

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}



function setCookieInRequests(head,value)
{
	/*
	$.ajaxSetup({
	    beforeSend: function(xhr) {
	        xhr.setRequestHeader(head, value);
	    }
	});
	
	*/
}



 
			function login_v2p0()
			{
				
				
				var ajaxip = JSON.stringify({ "userid":LiveStreamObject.connect.login.parent.username, "password":LiveStreamObject.connect.login.parent.password });
				$.ajax({
					type: "POST",
					url: LiveStreamObject.camera.videonetics.loginUrl,
					data:ajaxip,
					contentType: "application/json",
					xhrFields: { withCredentials: true },
					success: function(data, textStatus, jqXHR) {

					      if(data.result[0] && data.result[0].VSESSIONID)
					    	  {
					    	//  console.log("VSESSIONID",data.result[0].VSESSIONID );
					    	  //console.log("SUCESS", JSON.stringify(data) );

					    	  LiveStreamObject.camera.sid=data.result[0].VSESSIONID;
					    	  LiveStreamObject.connect.login.parent.auth =  "VSESSIONID="+data.result[0].VSESSIONID;
					   // 	  document.cookie ="";
					    //	document.cookie =   LiveStreamObject.connect.login.parent.auth+";"+
					    	// + "domain=apiservice.videonetics.com;path=/";
					    	                  //   "path=/";
					    	//setCookieInRequests("Cookie",LiveStreamObject.connect.login.parent.auth);
					    	  
					    //	  setCookie("USERID",LiveStreamObject.connect.login.parent.username,1);
					    //	  setCookie("VSESSIONID",data.result[0].VSESSIONID,1);
					    	  console.log("document.cookie:::", document.cookie );
					    	  
					    	 startalive_v2p0();
					    	  }
					      else
					    	  {
					    	  //ToDo
					    	  // retry livestream png image and timer
			                    console.log(JSON.stringify("EROOR NO DATA -LOGIN FAILED---", data) );

					    	  }
					    	  
					},
					error: function(xhr,status,error) {
						console.log(xhr,status,error);
						//$("#loginresponse").text(JSON.stringify(xhr));
						alert("ERRROR");
						$("#loginresponse").text("Failed to login");
					},
					crossDomain: true
				});
				
				



			}




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

/*
 * https://stackoverflow.com/questions/18264334/cross-origin-resource-sharing-with-spring-security
 * 
 public class CorsAwareAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    static final String ORIGIN = 'Origin'

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response){
        if (request.getHeader(ORIGIN)) {
            String origin = request.getHeader(ORIGIN)
            response.addHeader('Access-Control-Allow-Origin', origin)
            response.addHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            response.addHeader('Access-Control-Allow-Credentials', 'true')
            response.addHeader('Access-Control-Allow-Headers',
                    request.getHeader('Access-Control-Request-Headers'))
        }
        if (request.method == 'OPTIONS') {
            response.writer.print('OK')
            response.writer.flush()
            return
        }
        return super.attemptAuthentication(request, response)
    }
}
 */

 
			function login_v2p2()
			{
				//login_v2p2_test('http://apiservice.videonetics.com:7080/REST/user/login','{"userid":"joel","password":"joel"}')

				
				var ajaxip = JSON.stringify({ "userid":LiveStreamObject.connect.server.stream.username, "password":LiveStreamObject.connect.server.stream.password });
				console.log("Body for Login----"+ ajaxip);
				$.ajax({
					type: "POST",
					url: LiveStreamObject.camera.videonetics.loginUrl,
					data:ajaxip,
					contentType: "application/json",
					xhrFields: { withCredentials: true },
					success: function(data, textStatus, jqXHR) {

					      if(data.result[0] && data.result[0].VSESSIONID)
					    	  {
		
					    	  LiveStreamObject.camera.sid=data.result[0].VSESSIONID;
					    	  LiveStreamObject.connect.login.parent.auth =  "VSESSIONID="+data.result[0].VSESSIONID;
					  
					    	  console.log("document.cookie:::", document.cookie );
					    	  
					    	 startalive_v2p2();
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
						alert("ERRROR"+status.toString());
						$("#loginresponse").text("Failed to login");
					}
					,
					crossDomain: true
				});
				
				



			}

			function login_v2p2_test(url,ajaxip)
			{
				
				
				console.log("Body for Login----"+ ajaxip);
				$.ajax({
					type: "POST",
					url: url,
					data:ajaxip,
					contentType: "application/json",
					xhrFields: { withCredentials: true },
					success: function(data, textStatus, jqXHR) {

					      if(data.result[0] && data.result[0].VSESSIONID)
					    	  {
		
					    	  LiveStreamObject.camera.sid=data.result[0].VSESSIONID;
					    	  LiveStreamObject.connect.login.parent.auth =  "VSESSIONID="+data.result[0].VSESSIONID;
					  
					    	  console.log("document.cookie:::", document.cookie );
					    	  
					    	 startalive_v2p2();
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
						alert("ERRROR"+status.toString());
						$("#loginresponse").text("Failed to login");
					}
					,
					crossDomain: true
				});
				
				



			}


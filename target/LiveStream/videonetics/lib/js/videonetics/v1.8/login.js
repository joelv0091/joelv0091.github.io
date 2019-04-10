/**
 * 
 */



 
			function login_v1p8()
			{
var ajaxip = JSON.stringify({ "loginid":LiveStreamObject.connect.login.parent.username, "pass":LiveStreamObject.connect.login.parent.password, "deviceimei": "BGRPSIM" });
//var ajaxip ={ "loginid": LiveStreamObject.connect.login.username, "pass": LiveStreamObject.connect.login.password, "deviceimei": "TNPOC" }//;


		$.ajax({
						method: "POST",
						url:LiveStreamObject.camera.videonetics.loginUrl,
						//url:"http://10.10.50.216:7085/itms-apiserver/user/login ",
						  contentType: 'application/json',
						  data : ajaxip,
						// data : JSON.stringify({"loginid": "itms", "pass": "itms", "deviceimei": "deviceimei2"} ),
						  success: function(data, textStatus, jqXHR){
						      console.log("SUCESS",data.result[0].jsessionid, JSON.stringify(data) );
	                    
	                   LiveStreamObject.camera.sid=data.result[0].jsessionid;
	                    
	                    startalive_v1p8();
			                },
			                error: function(jqXHR, textStatus) {
			                    console.log(JSON.stringify("EROOR", jqXHR.responseJSON ) );

			                }
			            });



//test_login_v1p8();
			}


	function test_login_v1p8()
			{

 console.log("test_login_v1p8");
$.ajax({
						method: "POST",
						url:"http://10.10.50.216:7085/itms-apiserver/user/login ",
						  contentType: 'application/json',
						  data : JSON.stringify({"loginid": "itms", "pass": "itms", "deviceimei": "deviceimei2"} ),
						  success: function(data, textStatus, jqXHR){
						      console.log("SUCESS",data.result[0].jsessionid, JSON.stringify(data) );
	                    
	                   // LiveStreamObject.camera.sid=data.result[0].jsessionid;
	                    
	                  // startalive_v1p8();
			                },
			                error: function(jqXHR, textStatus) {
			                    console.log(JSON.stringify("EROOR", jqXHR) );

			                }
			            });
} //test_login_v1p8();



 var fjdi =false;
 var ImagElemnt={};
  
 var PlayBackVideoAPI={};
 
var LiveStreamObject=
  {
  	connect:
	{
  		server:
  		{
  			parent:
  				{
	  			vms:
	  			{
	  				ip:"192.168.1.74",
	  				port:8081
	  			}
  				}

  		},
		continous:
		{
			timer:{},
			image:"",
			element:{},
			date:
				{
				start: 2,
				end:	1,
				tid:3
				}
			
		},
		login:
		{
			username :'joel',
			password :'trinity@123'
		}
	},
  	camera : 
  	{
  		All:[],
  		playing:[],
  		Id:"",
  		videoId:0,
  		mode:0,
  		play:true,
  		image:"",
  		element:{}
  	}		
  }


/*

LiveStreamObject.connect.continous.timer

LiveStreamObject.camera.playing
*/
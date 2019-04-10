var LiveStreamObject=
  {
  	connect:
	{
		continous:
		{
			timer:{}
		},
		login:
		{
			parent:
			{
				username :'joel',
				password :'trinity@123'
				
			},
			child:
			{
				'hpe':{password:'hpe'}
				
			},
		},
		profiles:
			{
			
			},
		server:
		{
			stream:
				{
				ip:"192.168.1.212",
				port:8085,
				project:"i-apiserver",
				version:1,
				company:5265
				},
			parent:
				{
				vms:
						{
						ip:"192.168.1.212",
						port:8085,
						project:"i-apiserver",
						version:1,
						company:5265
						},
				itms:
						{
						ip:"192.168.1.212",
						port:8085,
						project:"i-apiserver",
						version:1,
						company:5265
						},
						
						1:{},2:{}
						
						
				},
			child:
				{
				
						5265:
						{
						vms:
						{
							ip:"192.168.1.212",
							port:8085,
							version:1,
							project:"i-apiserver",
							company:5265
								
						}
				},
						5266:
						{
							ip:"192.168.1.212",
							port:8085,
							version:1,
							project:"i-apiserver",
							company:5266
						}
				}
				


		}
	},
	timer:
	{
		interval :1,
		object:{}

	},
  	camera : 
  	{
  		all:[],
  		playing:[],
  		id:0,
  		sid:false,
  		type:"vms",
  		ptz:0,
  		player:{},
  		videonetics: 
  		 				{
  		 					hlsURL:"",
  		 					startLive:"",
  		 					keepLive:"",
							sessionId:0 


  		 				},

		quality: 
		{
/*			"w":1024,// 256,
			"h":712//180
*/
			"w":256,
			"h":180	
		}  		 				
  	},
  	error:  // console.log
  		{
  		log:[]
  		}
  };


/*

LiveStreamObject.connect.continous.timer

LiveStreamObject.camera.Id
*/
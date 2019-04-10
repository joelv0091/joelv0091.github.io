
function initHik() {

    oWebControl = new WebControl({
      szPluginContainer: "playWnd",
      iServicePortStart: 16960,
      iServicePortEnd: 16969,
      szClassId:'55A7329E-FAAD-439A-87BC-75BAB3332E7C',//add classid保证ie下正确执行
      cbConnectSuccess: function () {
          console.log('inside cbConnectSuccess');
        setplayWndCallbacks();
        console.log('startWindowServices');
        startWindowServices()
      },
      cbConnectError: function () {
        console.log("cbConnectError");
        oWebControl = null;
        $("#playWnd").html("Plugin not started, trying to start, please wait...");
        WebControl.JS_WakeUp("VideoWebPlugin://");
        initCount++;
        
        
        
        
        
        if (initCount < 3) {
          setTimeout(function () {
        	  initHik();
          }, 3000)
        } 
        
        
        
        else {
          $("#playWnd").html("The plugin failed to start. Please check whether the plugin is installed！");
        }
      },
      cbConnectClose: function () {
        console.log("cbConnectClose");
        oWebControl = null;
      }
    });
  }
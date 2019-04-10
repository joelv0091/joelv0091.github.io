function LivestreamConfigHandler()

{
    oWebControl.JS_GetLocalConfig(true).then(
            function(resp){
              //$('#snapDir').val(resp.capturePath||'');










                
            },function(){
              console.log('get snap dir failed.')
            });
    
}
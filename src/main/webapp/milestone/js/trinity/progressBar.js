var progressBarwidth = 1;
var prograssbarElem;// = document.getElementById("myBar");   


function onloadProgressBar()
{
	prograssbarElem = document.getElementById("myBar");   
}
  
  function moveProgressBar(width) {
    if (width >= 100) {
    //  clearInterval(id);
    	prograssbarElem.style.width =  '100%'; 
    } else {
    //  width++; 
    	prograssbarElem.style.width = width + '%'; 
    }
  }
  
function updateInProgressBar(inputWidth,from,to)
{
	if(fjdi == true)console.log("updateInProgressBar @",(inputWidth-from),"---OutOft-- ",(to -from));
	
	let time =(inputWidth-from);
	let timeOn =(to-from) ;
	
  progressBarwidth=(time/timeOn ) *100;
  document.getElementById("CurrentTime").innerHTML = " "+time +"Sec / "+ timeOn/60000 +"Min";
  
  
  if(fjdi == true)console.log("progressBarwidth @",progressBarwidth);
  moveProgressBar(progressBarwidth);
 // var id = setInterval(frame, 10);

}
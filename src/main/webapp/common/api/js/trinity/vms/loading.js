var rewriteContent = function (d,c)
{

		if( document.getElementById(d) )document.getElementById(d).textContent=c;
}


var rewriteScreenContent = function (c)
{

	rewriteContent("loading",c);
}
/*
 #loading
{
font-size:5vh;
}

 */


var disableLoadingTab = function (div)
{

	document.getElementById("loading").style.display = "none"; 
	document.getElementById(div).style.display='block';
}




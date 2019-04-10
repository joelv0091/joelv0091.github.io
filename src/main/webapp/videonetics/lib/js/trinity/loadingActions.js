

		var disableEnableDiv = function (disablediv,enaablediv) // divAction
		{

			if(disablediv != null)document.getElementById(disablediv).style.display = "none"; 
			if(enaablediv != null)document.getElementById(enaablediv).style.display='block';
		}

		
		var disableDiv = function (div)
		{

			document.getElementById("loading").style.display = "none"; 
			document.getElementById(div).style.display='block';
		}
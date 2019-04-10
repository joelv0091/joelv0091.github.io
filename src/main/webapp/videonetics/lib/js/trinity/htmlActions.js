		function enablePtz()
		{
			var myClasses = document.querySelectorAll('.container > .player-buttons'),
		    i = 0,
		    l = myClasses.length;

		for (i; i < l; i++) {
		    myClasses[i].style.display = 'block';
		}
		}
